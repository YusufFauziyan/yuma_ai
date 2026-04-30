"use client";

import { useCallback, useEffect } from "react";
import { useSession } from "next-auth/react";
import Sidebar from "@/components/Sidebar";
import ChatArea from "@/components/ChatArea";
import useChatStore from "@/store/useChatStore";
import useConversationStore from "@/store/useConversationStore";
import useSidebarStore from "@/store/useSidebarStore";

export default function ChatPage() {
  const { data: session } = useSession();

  const {
    conversations, activeId, isListLoading,
    fetchConversations, selectConversation, startNewChat, setActive, deleteConversation: deleteConv,
  } = useConversationStore();

  const {
    messages, isStreaming, streamingContent,
    sendMessage, stopStreaming, loadMessages, clearMessages,
  } = useChatStore();

  const { isOpen, isCollapsed, setOpen, toggleCollapsed } = useSidebarStore();

  // Fetch conversations on mount
  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  const handleSelectConversation = useCallback(
    async (id) => {
      const msgs = await selectConversation(id);
      loadMessages(msgs);
    },
    [selectConversation, loadMessages]
  );

  const handleNewChat = useCallback(() => {
    startNewChat();
    clearMessages();
  }, [startNewChat, clearMessages]);

  const handleSend = useCallback(
    (content) => {
      sendMessage(content, activeId, (newConvId) => {
        setActive(newConvId);
        fetchConversations();
      });
    },
    [sendMessage, activeId, setActive, fetchConversations]
  );

  const handleDelete = useCallback(
    async (id) => {
      const wasActive = await deleteConv(id);
      if (wasActive) clearMessages();
    },
    [deleteConv, clearMessages]
  );

  // Keyboard shortcut: Cmd/Ctrl + K → New Chat
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        handleNewChat();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleNewChat]);

  return (
    <div className="flex h-dvh overflow-hidden bg-gray-50 dark:bg-[#0a0a0a]">
      {/* Sidebar */}
      <Sidebar
        conversations={conversations}
        activeId={activeId}
        isListLoading={isListLoading}
        onSelect={handleSelectConversation}
        onNewChat={handleNewChat}
        onDelete={handleDelete}
        isOpen={isOpen}
        isCollapsed={isCollapsed}
        onClose={() => setOpen(false)}
        onToggleCollapse={toggleCollapsed}
        user={session?.user}
      />

      {/* Main */}
      <main className="flex flex-1 flex-col min-w-0">
        {/* Header */}
        <header className="flex items-center gap-3 border-b border-gray-200 dark:border-[#1f1f1f] bg-white/80 dark:bg-[#0f0f0f]/80 backdrop-blur-xl px-4 py-2.5 shrink-0">
          <button
            id="sidebar-toggle"
            onClick={() => setOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors cursor-pointer md:hidden"
            title="Toggle sidebar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary-400 to-primary-600">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">Yuma AI</span>
          </div>
          <div className="flex-1" />
          <span className="text-xs text-gray-400 dark:text-gray-600 hidden sm:block">
            ⌘K New Chat
          </span>
        </header>

        {/* Chat Area */}
        <ChatArea
          messages={messages}
          isStreaming={isStreaming}
          streamingContent={streamingContent}
          onSend={handleSend}
          onStop={stopStreaming}
          userName={session?.user?.name}
        />
      </main>
    </div>
  );
}
