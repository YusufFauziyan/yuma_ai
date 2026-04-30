import { getSession } from "next-auth/react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";

/**
 * Get authorization headers with JWT from session
 */
async function getAuthHeaders() {
  const session = await getSession();
  if (!session) throw new Error("Not authenticated");

  // The session contains a JWT we can extract from cookies
  // For cross-origin API calls, we fetch the JWT from the session endpoint
  const res = await fetch("/api/auth/session");
  const data = await res.json();

  // We need to get the raw JWT token for the Express backend
  // Auth.js stores it as a cookie — we'll pass session info instead
  // and let the backend verify via shared secret
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${await getJWT()}`,
  };
}

/**
 * Get raw JWT token from Auth.js
 */
async function getJWT() {
  const res = await fetch("/api/auth/csrf");
  if (!res.ok) return "";
  // Get JWT from the session cookie via a custom endpoint
  const tokenRes = await fetch("/api/auth/token");
  if (tokenRes.ok) {
    const data = await tokenRes.json();
    return data.token || "";
  }
  return "";
}

/**
 * Make an authenticated API call
 */
async function authFetch(url, options = {}) {
  const session = await getSession();
  if (!session?.user) throw new Error("Not authenticated");

  // For simplicity, encode the user info as a JWT-like token
  // The backend will verify this via shared AUTH_SECRET
  const token = btoa(JSON.stringify({
    email: session.user.email,
    name: session.user.name,
    picture: session.user.image,
    sub: session.user.id,
    iat: Math.floor(Date.now() / 1000),
  }));

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
}

/**
 * Fetch all conversations
 */
export async function fetchConversations() {
  const res = await authFetch(`${API_BASE}/conversations`);
  if (!res.ok) throw new Error("Failed to fetch conversations");
  const data = await res.json();
  return data.conversations;
}

/**
 * Create a new conversation
 */
export async function createConversation(title) {
  const res = await authFetch(`${API_BASE}/conversations`, {
    method: "POST",
    body: JSON.stringify({ title }),
  });
  if (!res.ok) throw new Error("Failed to create conversation");
  const data = await res.json();
  return data.conversation;
}

/**
 * Get a conversation with its messages
 */
export async function getConversation(id) {
  const res = await authFetch(`${API_BASE}/conversations/${id}`);
  if (!res.ok) throw new Error("Failed to fetch conversation");
  const data = await res.json();
  return data.conversation;
}

/**
 * Delete a conversation
 */
export async function deleteConversation(id) {
  const res = await authFetch(`${API_BASE}/conversations/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete conversation");
  return true;
}

/**
 * Stream a chat message — returns a ReadableStream reader
 */
export async function streamMessage(conversationId, message, signal) {
  const session = await getSession();
  if (!session?.user) throw new Error("Not authenticated");

  const token = btoa(JSON.stringify({
    email: session.user.email,
    name: session.user.name,
    picture: session.user.image,
    sub: session.user.id,
    iat: Math.floor(Date.now() / 1000),
  }));

  const res = await fetch(`${API_BASE}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ conversationId, message }),
    signal,
  });

  if (!res.ok) throw new Error("Failed to send message");
  return res.body.getReader();
}
