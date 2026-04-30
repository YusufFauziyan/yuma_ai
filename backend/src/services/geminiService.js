const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_INSTRUCTION = `You are Yuma, a helpful, friendly, and knowledgeable AI assistant. 
You provide clear, accurate, and well-structured responses. 
When writing code, always use proper markdown code blocks with language specification.
Be concise but thorough. Use markdown formatting for better readability.`;

/**
 * Stream a chat response from Gemini
 * @param {string} message - The user's message
 * @param {Array} history - Previous messages in Gemini format
 * @returns {AsyncGenerator} - Yields text chunks
 */
async function* streamChat(message, history = []) {
  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-3.1-flash-lite-preview',
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const chat = model.startChat({
      history: history,
    });

    const result = await chat.sendMessageStream(message);

    for await (const chunk of result.stream) {
      const text = chunk.text();
      if (text) {
        yield text;
      }
    }
  } catch (error) {
    // Parse specific error types for better user feedback
    const errorMessage = error.message || 'Unknown error';
    
    if (error.status === 429 || errorMessage.includes('429') || errorMessage.includes('quota')) {
      throw new Error('API quota exceeded. Please wait a moment and try again, or check your billing at https://ai.google.dev/gemini-api/docs/rate-limits');
    }
    
    if (error.status === 401 || error.status === 403 || errorMessage.includes('API key')) {
      throw new Error('Invalid API key. Please check your GEMINI_API_KEY in the .env file.');
    }

    if (errorMessage.includes('fetch') || errorMessage.includes('network') || errorMessage.includes('ENOTFOUND')) {
      throw new Error('Network error. Please check your internet connection.');
    }

    throw new Error(`Gemini API error: ${errorMessage}`);
  }
}

module.exports = {
  streamChat,
};
