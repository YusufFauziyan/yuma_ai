import { create } from "zustand";
import { streamMessage } from "@/lib/api";

const useChatStore = create((set, get) => ({
  messages: [],
  isStreaming: false,
  streamingContent: "",
  abortController: null,

  loadMessages: (msgs) => {
    set({ messages: msgs || [], streamingContent: "", isStreaming: false });
  },

  clearMessages: () => {
    set({ messages: [], streamingContent: "", isStreaming: false });
  },

  sendMessage: async (content, conversationId, onConversationCreated) => {
    const { isStreaming } = get();
    if (!content.trim() || isStreaming) return;

    // Add user message immediately
    const userMessage = {
      id: `temp-${Date.now()}`,
      role: "user",
      content: content.trim(),
      createdAt: new Date().toISOString(),
    };
    set((s) => ({ messages: [...s.messages, userMessage] }));

    set({ isStreaming: true, streamingContent: "" });

    const abortController = new AbortController();
    set({ abortController });

    let resolvedConvId = null;

    try {
      const reader = await streamMessage(
        conversationId,
        content.trim(),
        abortController.signal
      );
      const decoder = new TextDecoder();
      let fullText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const jsonStr = line.slice(6).trim();
            if (!jsonStr) continue;

            try {
              const data = JSON.parse(jsonStr);

              if (data.error) {
                set({ streamingContent: `⚠️ ${data.error}` });
                continue;
              }

              if (data.done) {
                if (data.conversationId && onConversationCreated) {
                  resolvedConvId = data.conversationId;
                  onConversationCreated(data.conversationId);
                }
                continue;
              }

              if (data.text) {
                fullText += data.text;
                set({ streamingContent: fullText });

                if (data.conversationId && !resolvedConvId && onConversationCreated) {
                  resolvedConvId = data.conversationId;
                  onConversationCreated(data.conversationId);
                }
              }
            } catch {
              // skip
            }
          }
        }
      }

      if (fullText) {
        const aiMessage = {
          id: `ai-${Date.now()}`,
          role: "assistant",
          content: fullText,
          createdAt: new Date().toISOString(),
        };
        set((s) => ({ messages: [...s.messages, aiMessage] }));
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        const errorMessage = {
          id: `error-${Date.now()}`,
          role: "assistant",
          content: "⚠️ Sorry, something went wrong. Please try again.",
          createdAt: new Date().toISOString(),
        };
        set((s) => ({ messages: [...s.messages, errorMessage] }));
      }
    } finally {
      set({ isStreaming: false, streamingContent: "", abortController: null });
    }
  },

  stopStreaming: () => {
    const { abortController } = get();
    if (abortController) abortController.abort();
  },
}));

export default useChatStore;
