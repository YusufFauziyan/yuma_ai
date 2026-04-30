"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatInput({ onSend, isStreaming, onStop }) {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => { textareaRef.current?.focus(); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isStreaming) return;
    onSend(input);
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="shrink-0 border-t border-zinc-200/60 dark:border-zinc-800/60 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl">
      <form onSubmit={handleSubmit} className="mx-auto flex max-w-3xl items-center justify-center gap-3 px-4 py-3">
        <div className="relative flex-1">
          <textarea
            ref={textareaRef}
            id="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message Yuma AI..."
            rows={1}
            className="w-full resize-none rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 bg-zinc-50 dark:bg-zinc-800/60 px-4 py-3 text-[0.9375rem] text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 outline-none transition-all duration-200 focus:border-primary-400 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-400/15 dark:focus:ring-primary-500/15 max-h-40"
            disabled={isStreaming}
          />
        </div>

        {isStreaming ? (
          <button
            type="button"
            id="stop-button"
            onClick={onStop}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white transition-all hover:bg-red-600 active:scale-95 cursor-pointer shadow-sm"
            title="Stop generating"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="6" width="12" height="12" rx="2" />
            </svg>
          </button>
        ) : (
          <button
            type="submit"
            id="send-button"
            disabled={!input.trim()}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-500 text-white transition-all hover:bg-primary-600 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-sm"
            title="Send message"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        )}
      </form>

      <p className="pb-2.5 text-center text-[0.6875rem] text-zinc-400 dark:text-zinc-600">
        Yuma AI can make mistakes. Consider checking important information.
      </p>
    </div>
  );
}
