const prisma = require('../prisma/client');

/**
 * Truncate text to create a chat title
 */
function createTitle(text, maxLength = 40) {
  if (!text) return 'New Chat';
  const cleaned = text.replace(/\n/g, ' ').trim();
  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.substring(0, maxLength).trim() + '...';
}

/**
 * Create a new conversation for a user
 */
async function createConversation(userId, title) {
  const conversation = await prisma.conversation.create({
    data: {
      userId,
      title: title || 'New Chat',
    },
  });

  return {
    id: conversation.id,
    userId: conversation.userId,
    title: conversation.title,
    createdAt: conversation.createdAt,
    updatedAt: conversation.updatedAt,
  };
}

/**
 * Get all conversations for a user (most recent first)
 */
async function getAllConversations(userId) {
  const conversations = await prisma.conversation.findMany({
    where: { userId },
    orderBy: { updatedAt: 'desc' },
    select: {
      id: true,
      title: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return conversations;
}

/**
 * Get a single conversation by ID (only if owned by user)
 */
async function getConversation(userId, conversationId) {
  const conversation = await prisma.conversation.findFirst({
    where: {
      id: conversationId,
      userId,
    },
    include: {
      messages: {
        orderBy: { createdAt: 'asc' },
        select: {
          id: true,
          role: true,
          content: true,
          createdAt: true,
        },
      },
    },
  });

  if (!conversation) return null;

  return {
    id: conversation.id,
    title: conversation.title,
    createdAt: conversation.createdAt,
    updatedAt: conversation.updatedAt,
    messages: conversation.messages,
  };
}

/**
 * Add a message to a conversation
 */
async function addMessage(userId, conversationId, role, content) {
  // Verify ownership
  const conv = await prisma.conversation.findFirst({
    where: {
      id: conversationId,
      userId,
    },
  });

  if (!conv) return null;

  // Create the message
  const message = await prisma.message.create({
    data: {
      conversationId,
      role,
      content,
    },
  });

  // Update conversation timestamp (Prisma @updatedAt handles this automatically,
  // but we touch it explicitly to ensure it updates)
  await prisma.conversation.update({
    where: { id: conversationId },
    data: { updatedAt: new Date() },
  });

  // Auto-title from first user message
  if (role === 'user') {
    const userMsgCount = await prisma.message.count({
      where: {
        conversationId,
        role: 'user',
      },
    });

    if (userMsgCount === 1) {
      const newTitle = createTitle(content);
      await prisma.conversation.update({
        where: { id: conversationId },
        data: { title: newTitle },
      });
    }
  }

  return {
    id: message.id,
    role: message.role,
    content: message.content,
    createdAt: message.createdAt,
  };
}

/**
 * Delete a conversation (only if owned by user)
 */
async function deleteConversation(userId, conversationId) {
  const conv = await prisma.conversation.findFirst({
    where: {
      id: conversationId,
      userId,
    },
  });

  if (!conv) return false;

  // Messages are cascade-deleted via Prisma relation onDelete: Cascade
  await prisma.conversation.delete({
    where: { id: conversationId },
  });

  return true;
}

/**
 * Get messages formatted for Gemini API context
 */
async function getGeminiHistory(userId, conversationId) {
  const conv = await prisma.conversation.findFirst({
    where: {
      id: conversationId,
      userId,
    },
  });

  if (!conv) return [];

  const messages = await prisma.message.findMany({
    where: { conversationId },
    orderBy: { createdAt: 'asc' },
    select: {
      role: true,
      content: true,
    },
  });

  return messages.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));
}

module.exports = {
  createConversation,
  getAllConversations,
  getConversation,
  addMessage,
  deleteConversation,
  getGeminiHistory,
};
