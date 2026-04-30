# Yuma AI — Frontend

Next.js application for Yuma AI chatbot featuring Google SSO authentication, real-time streaming chat, and a modern SaaS interface.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4
- **Auth**: Auth.js v5 (NextAuth) with Google Provider
- **State**: Zustand (with persist middleware)
- **Theme**: next-themes (Light / Dark / System)
- **Markdown**: react-markdown + react-syntax-highlighter

## Project Structure

```
frontend/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.js         # Auth.js API handler
│   ├── chat/
│   │   ├── layout.jsx               # Chat layout wrapper
│   │   └── page.jsx                 # Protected chat dashboard
│   ├── globals.css                  # Tailwind v4 + design tokens
│   ├── layout.jsx                   # Root layout (fonts, providers)
│   ├── page.jsx                     # Landing page (public)
│   └── providers.jsx                # SessionProvider + ThemeProvider
├── components/
│   ├── ChatArea.jsx                 # Messages area + welcome screen
│   ├── ChatInput.jsx                # Message input with send/stop
│   ├── DeleteModal.jsx              # Confirmation dialog for delete
│   ├── LoadingSkeleton.jsx          # Animated skeleton placeholder
│   ├── MarkdownRenderer.jsx         # Markdown with syntax highlighting
│   ├── MessageBubble.jsx            # User & AI message bubbles
│   ├── Sidebar.jsx                  # Collapsible sidebar with nav
│   ├── ThemeToggle.jsx              # Light / Dark / System toggle
│   └── UserMenu.jsx                 # User avatar, name & logout
├── lib/
│   └── api.js                       # Authenticated API client
├── store/
│   ├── useChatStore.js              # Chat messages & streaming state
│   ├── useConversationStore.js      # Conversations CRUD & active state
│   └── useSidebarStore.js           # Sidebar open/collapsed state
├── auth.js                          # Auth.js configuration
├── middleware.js                     # Route protection middleware
├── .env.local                       # Auth secrets (not committed)
└── package.json
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Google OAuth

1. Go to [Google Cloud Console → Credentials](https://console.cloud.google.com/apis/credentials)
2. Create a new project (or select existing)
3. Create **OAuth 2.0 Client ID** → Web application
4. Add authorized redirect URI:
   ```
   http://localhost:3000/api/auth/callback/google
   ```
5. Copy the **Client ID** and **Client Secret**

### 3. Configure Environment

Edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5001/api
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
AUTH_SECRET=your_random_secret
```

Generate `AUTH_SECRET` automatically:

```bash
npx auth secret
```

### 4. Run Development Server

```bash
npm run dev
```

The app starts at `http://localhost:3000`.

> **Note**: Make sure the backend is also running at `http://localhost:5001`.

## Pages & Routes

| Route         | Auth      | Description                                        |
| ------------- | --------- | -------------------------------------------------- |
| `/`           | Public    | Landing page with hero, features, preview          |
| `/chat`       | Protected | Chat dashboard (redirects to `/` if not logged in) |
| `/api/auth/*` | —         | Auth.js endpoints (login, callback, session)       |

## Features

### 🔐 Authentication

- Google SSO via Auth.js v5
- JWT session strategy
- Middleware-based route protection
- User avatar and profile display

### 💬 Chat

- Real-time streaming responses (SSE)
- Typing indicator with animated dots
- Streaming cursor animation
- Stop generation button
- Auto-scroll to latest message

### 📝 Markdown Rendering

- Full GitHub Flavored Markdown support
- Syntax-highlighted code blocks (One Dark theme)
- Copy-to-clipboard for code blocks
- Tables, blockquotes, lists, links

### 📁 Sidebar

- **Collapsible**: Full width (280px) ↔ Icons only (64px)
- Collapse state persisted in localStorage
- Conversation list with active highlight
- Delete button with confirmation modal
- User menu with logout
- Theme toggle
- Mobile: overlay drawer

### 🎨 Theme

- Light / Dark / System modes
- Powered by `next-themes` + Tailwind v4 `@custom-variant`
- Smooth transitions between themes
- Theme-aware scrollbar styling

### ⌨️ Keyboard Shortcuts

| Shortcut        | Action            |
| --------------- | ----------------- |
| `⌘K` / `Ctrl+K` | Create new chat   |
| `Enter`         | Send message      |
| `Shift+Enter`   | New line in input |

## State Management

Zustand stores replace traditional React hooks for cleaner state management:

| Store                  | State                                  | Persistence  |
| ---------------------- | -------------------------------------- | ------------ |
| `useChatStore`         | Messages, streaming, abort controller  | Memory       |
| `useConversationStore` | Conversations list, active ID, loading | Memory       |
| `useSidebarStore`      | Open (mobile), collapsed (desktop)     | localStorage |

## API Integration

All API calls go through `lib/api.js` which automatically:

- Fetches the Auth.js session
- Encodes user data as a Bearer token
- Sends authenticated requests to the Express backend

### Available Functions

```js
import {
  fetchConversations,
  createConversation,
  getConversation,
  deleteConversation,
  streamMessage,
} from "@/lib/api";
```

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start dev server (Turbopack) |
| `npm run build` | Production build             |
| `npm start`     | Start production server      |
| `npm run lint`  | Run ESLint                   |

## Environment Variables

| Variable              | Required | Description                                            |
| --------------------- | -------- | ------------------------------------------------------ |
| `AUTH_GOOGLE_ID`      | Yes      | Google OAuth Client ID                                 |
| `AUTH_GOOGLE_SECRET`  | Yes      | Google OAuth Client Secret                             |
| `AUTH_SECRET`         | Yes      | Random string for session encryption                   |
| `NEXT_PUBLIC_API_URL` | No       | Backend API URL (default: `http://localhost:5001/api`) |
