const conversationService = require('../services/conversationService');
const geminiService = require('../services/geminiService');

/**
 * POST /api/chat — Stream AI response
 */
async function streamChat(req, res) {
  const { conversationId, message } = req.body;
  const userId = req.user.id;

  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required' });
  }

  let convId = conversationId;

  // Create a new conversation if none provided
  if (!convId) {
    const conversation = await conversationService.createConversation(userId);
    convId = conversation.id;
  }

  // Verify conversation exists and belongs to user
  const conversation = await conversationService.getConversation(userId, convId);
  if (!conversation) {
    return res.status(404).json({ error: 'Conversation not found' });
  }

  // Get history BEFORE adding the new message
  const history = await conversationService.getGeminiHistory(userId, convId);

  // Add user message
  await conversationService.addMessage(userId, convId, 'user', message.trim());

  // SSE headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Conversation-Id', convId);
  res.flushHeaders();

  let fullResponse = '';

  try {
    const stream = geminiService.streamChat(message.trim(), history);

    for await (const chunk of stream) {
      fullResponse += chunk;
      res.write(`data: ${JSON.stringify({ text: chunk, conversationId: convId })}\n\n`);
    }

    // Save AI response after stream ends
    await conversationService.addMessage(userId, convId, 'assistant', fullResponse);

    res.write(`data: ${JSON.stringify({ done: true, conversationId: convId })}\n\n`);
  } catch (error) {
    console.error('Stream error:', error);
    const errorMsg = error.message || 'Failed to generate response. Please try again.';
    res.write(`data: ${JSON.stringify({ error: errorMsg })}\n\n`);
  } finally {
    res.end();
  }
}

/**
 * GET /api/conversations
 */
async function getConversations(req, res) {
  const conversations = await conversationService.getAllConversations(req.user.id);
  res.json({ conversations });
}

/**
 * POST /api/conversations
 */
async function createConversation(req, res) {
  const { title } = req.body || {};
  const conversation = await conversationService.createConversation(req.user.id, title);
  res.status(201).json({ conversation });
}

/**
 * GET /api/conversations/:id
 */
async function getConversation(req, res) {
  const conversation = await conversationService.getConversation(req.user.id, req.params.id);
  if (!conversation) {
    return res.status(404).json({ error: 'Conversation not found' });
  }
  res.json({ conversation });
}

/**
 * DELETE /api/conversations/:id
 */
async function deleteConversation(req, res) {
  const deleted = await conversationService.deleteConversation(req.user.id, req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: 'Conversation not found' });
  }
  res.json({ success: true });
}

module.exports = {
  streamChat,
  getConversations,
  createConversation,
  getConversation,
  deleteConversation,
};
