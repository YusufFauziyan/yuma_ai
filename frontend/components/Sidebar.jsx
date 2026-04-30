"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";
import DeleteModal from "./DeleteModal";
import LoadingSkeleton from "./LoadingSkeleton";

export default function Sidebar({
  conversations,
  activeId,
  isListLoading,
  onSelect,
  onNewChat,
  onDelete,
  isOpen,
  isCollapsed,
  onClose,
  onToggleCollapse,
  user,
}) {
  const [deleteTarget, setDeleteTarget] = useState(null);

  const handleDelete = () => {
    if (deleteTarget) {
      onDelete(deleteTarget.id);
      setDeleteTarget(null);
    }
  };

  const sidebarWidth = isCollapsed ? "w-16" : "w-72";

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-full flex-col
          border-r border-zinc-200/60 dark:border-zinc-800/60
          bg-white dark:bg-zinc-900
          transition-all duration-300 ease-in-out
          md:relative md:z-auto
          ${sidebarWidth}
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200/60 dark:border-zinc-800/60 px-3 py-3 shrink-0">
          {!isCollapsed && (
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-md shadow-primary-500/15 shrink-0">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-sm font-bold text-zinc-700 dark:text-zinc-200 tracking-tight">
                Yuma AI
              </span>
            </div>
          )}

          <button
            onClick={() => {
              if (window.innerWidth < 768) onClose();
              else onToggleCollapse();
            }}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 dark:text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0 mx-auto md:mx-0"
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
            )}
          </button>
        </div>

        {/* New Chat */}
        <div className="px-2 py-2 shrink-0">
          <button
            id="new-chat-button"
            onClick={() => { onNewChat(); onClose(); }}
            className={`flex w-full items-center gap-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 text-sm font-medium text-zinc-600 dark:text-zinc-300 transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-[0.98] cursor-pointer ${
              isCollapsed ? "justify-center px-2 py-2.5" : "px-3.5 py-2.5"
            }`}
            title="New Chat (⌘K)"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            {!isCollapsed && <span>New Chat</span>}
          </button>
        </div>

        {/* Conversations */}
        <nav className="flex-1 overflow-y-auto px-2 pb-2">
          {isListLoading ? (
            !isCollapsed && <LoadingSkeleton count={4} />
          ) : conversations.length === 0 ? (
            !isCollapsed && (
              <div className="px-2 py-10 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-zinc-400 dark:text-zinc-600">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <p className="text-xs text-zinc-400 dark:text-zinc-600">No conversations yet</p>
              </div>
            )
          ) : (
            <div className="flex flex-col gap-0.5">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`group relative flex items-center rounded-xl transition-all duration-150 ${
                    activeId === conv.id
                      ? "bg-primary-50 dark:bg-primary-900/20"
                      : "hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
                  }`}
                >
                  <button
                    id={`conv-${conv.id}`}
                    onClick={() => { onSelect(conv.id); onClose(); }}
                    className={`flex flex-1 items-center gap-2.5 text-left text-[13px] cursor-pointer min-w-0 ${
                      isCollapsed ? "justify-center px-2 py-2.5" : "px-3 py-2.5"
                    } ${
                      activeId === conv.id
                        ? "text-primary-600 dark:text-primary-400 font-semibold"
                        : "text-zinc-500 dark:text-zinc-400"
                    }`}
                    title={conv.title}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 opacity-50">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    {!isCollapsed && <span className="truncate">{conv.title}</span>}
                  </button>

                  {!isCollapsed && (
                    <button
                      onClick={(e) => { e.stopPropagation(); setDeleteTarget(conv); }}
                      className="mr-2 hidden h-6 w-6 items-center justify-center rounded-md text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors cursor-pointer group-hover:flex shrink-0"
                      title="Delete"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </nav>

        {/* Footer */}
        <div className="border-t border-zinc-200/60 dark:border-zinc-800/60 shrink-0">
          {!isCollapsed && (
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-xs font-medium text-zinc-400 dark:text-zinc-600">Theme</span>
              <ThemeToggle />
            </div>
          )}
          <div className={`border-t border-zinc-200/60 dark:border-zinc-800/60 ${isCollapsed ? "px-2 py-2" : "px-3 py-3"}`}>
            {isCollapsed ? (
              <div className="flex justify-center">
                {user?.image ? (
                  <img src={user.image} alt="" className="h-8 w-8 rounded-full border border-zinc-200 dark:border-zinc-700" referrerPolicy="no-referrer" />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white text-xs font-bold">
                    {(user?.name || "U").charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
            ) : (
              <UserMenu user={user} />
            )}
          </div>
        </div>
      </aside>

      {deleteTarget && (
        <DeleteModal title={deleteTarget.title} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
      )}
    </>
  );
}
