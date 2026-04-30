import { create } from "zustand";
import {
  fetchConversations,
  getConversation,
  deleteConversation as apiDeleteConversation,
} from "@/lib/api";

const useConversationStore = create((set, get) => ({
  conversations: [],
  activeId: null,
  isLoading: false,
  isListLoading: false,

  fetchConversations: async () => {
    set({ isListLoading: true });
    try {
      const data = await fetchConversations();
      set({ conversations: data });
    } catch {
      console.warn("Could not fetch conversations");
    } finally {
      set({ isListLoading: false });
    }
  },

  selectConversation: async (id) => {
    set({ activeId: id, isLoading: true });
    try {
      const data = await getConversation(id);
      return data.messages || [];
    } catch {
      console.error("Failed to load conversation");
      return [];
    } finally {
      set({ isLoading: false });
    }
  },

  deleteConversation: async (id) => {
    try {
      await apiDeleteConversation(id);
      const { activeId, conversations } = get();

      // Remove from list
      set({
        conversations: conversations.filter((c) => c.id !== id),
        activeId: activeId === id ? null : activeId,
      });

      return activeId === id; // true if we need to clear chat
    } catch {
      console.error("Failed to delete conversation");
      return false;
    }
  },

  startNewChat: () => {
    set({ activeId: null });
  },

  setActive: (id) => {
    set({ activeId: id });
    get().fetchConversations();
  },
}));

export default useConversationStore;
