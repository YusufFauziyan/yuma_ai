"use client";

import { useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

const SUGGESTED_PROMPTS = [
  { icon: "💡", title: "Explain a concept", prompt: "Explain quantum computing in simple terms" },
  { icon: "✍️", title: "Help me write", prompt: "Write a professional email to request a meeting" },
  { icon: "🧑‍💻", title: "Write code", prompt: "Write a Python function to sort a list using merge sort" },
  { icon: "🧠", title: "Brainstorm ideas", prompt: "Give me 5 creative startup ideas in the AI space" },
];

function WelcomeScreen({ onPromptClick, userName }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 animate-fade-in h-full">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-600 shadow-xl shadow-primary-500/20 animate-float">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </div>

      <h1 className="mb-3 text-3xl font-bold text-zinc-800 dark:text-white tracking-tight">
        {userName ? `Hi, ${userName.split(" ")[0]}! 👋` : "Welcome to Yuma AI"}
      </h1>
      <p className="mb-12 max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
        Your intelligent assistant powered by Google Gemini.
        <br />
        Ask me anything — I&apos;m here to help.
      </p>

      <div className="grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
        {SUGGESTED_PROMPTS.map((item) => (
          <button
            key={item.title}
            onClick={() => onPromptClick(item.prompt)}
            className="group flex items-start gap-3.5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 text-left transition-all duration-200 hover:border-primary-300 dark:hover:border-primary-700/50 hover:shadow-lg hover:shadow-primary-500/5 hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer"
          >
            <span className="mt-0.5 text-xl">{item.icon}</span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {item.title}
              </p>
              <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed line-clamp-2">
                {item.prompt}
              </p>
            </div>
          </button>
        ))}
      </div>

      <p className="mt-8 text-xs text-zinc-400 dark:text-zinc-600">
        Press <kbd className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-[10px] font-mono">⌘K</kbd> to start a new chat
      </p>
    </div>
  );
}

export default function ChatArea({
  messages,
  isStreaming,
  streamingContent,
  onSend,
  onStop,
  userName,
}) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, streamingContent]);

  const hasMessages = messages.length > 0;

  return (
    <div className="flex flex-1 flex-col min-h-0">
      <div className="flex-1 overflow-y-auto">
        {!hasMessages && !isStreaming ? (
          <WelcomeScreen onPromptClick={onSend} userName={userName} />
        ) : (
          <div className="mx-auto max-w-3xl px-4 py-6">
            <div className="flex flex-col gap-6">
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}
              {isStreaming && (
                <MessageBubble
                  message={{ role: "streaming", id: "streaming" }}
                  isStreaming={true}
                  streamingContent={streamingContent}
                />
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        )}
      </div>
      <ChatInput onSend={onSend} isStreaming={isStreaming} onStop={onStop} />
    </div>
  );
}
