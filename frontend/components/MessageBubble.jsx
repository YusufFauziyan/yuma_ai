"use client";

import MarkdownRenderer from "./MarkdownRenderer";

function UserAvatar() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white text-xs font-bold shadow-sm">
      U
    </div>
  );
}

function AiAvatar() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-white shadow-sm">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-1 py-2">
      <div className="h-2 w-2 rounded-full bg-primary-400 animate-pulse-dot" style={{ animationDelay: "0s" }} />
      <div className="h-2 w-2 rounded-full bg-primary-400 animate-pulse-dot" style={{ animationDelay: "0.2s" }} />
      <div className="h-2 w-2 rounded-full bg-primary-400 animate-pulse-dot" style={{ animationDelay: "0.4s" }} />
    </div>
  );
}

export default function MessageBubble({ message, isStreaming, streamingContent }) {
  const isUser = message.role === "user";
  const isAiStreaming = isStreaming && message.role === "streaming";
  const content = isAiStreaming ? streamingContent : message.content;

  return (
    <div className={`flex gap-3 animate-fade-in ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      <div className="mt-0.5 shrink-0">
        {isUser ? <UserAvatar /> : <AiAvatar />}
      </div>

      <div
        className={`relative max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-primary-500 text-white rounded-tr-md"
            : "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-200 border border-zinc-200/60 dark:border-zinc-700/60 rounded-tl-md"
        }`}
      >
        {isUser ? (
          <p className="text-[0.9375rem] leading-relaxed whitespace-pre-wrap">{content}</p>
        ) : isAiStreaming && !streamingContent ? (
          <TypingIndicator />
        ) : (
          <div className={isAiStreaming ? "typing-cursor" : ""}>
            <MarkdownRenderer content={content || ""} />
          </div>
        )}
      </div>
    </div>
  );
}
