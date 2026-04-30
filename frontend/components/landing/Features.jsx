"use client";

import { motion } from "framer-motion";

const FEATURES = [
  { icon: "⚡", title: "Real-time AI Responses", desc: "Instant streaming answers powered by Google Gemini — no waiting." },
  { icon: "💬", title: "Multi-Conversation", desc: "Organize multiple chats. Switch seamlessly between topics." },
  { icon: "🧠", title: "Smart Memory", desc: "Context-aware AI that remembers your conversation history." },
  { icon: "🎨", title: "Clean UI", desc: "A beautiful, minimal interface designed for focus and clarity." },
  { icon: "🚀", title: "Fast Performance", desc: "Optimized for speed with real-time SSE streaming." },
  { icon: "🔒", title: "Secure & Private", desc: "Google SSO authentication with user-isolated data." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Features() {
  return (
    <section id="features" className="border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-center text-2xl font-bold tracking-tight sm:text-3xl text-zinc-800 dark:text-white"
        >
          Why Yuma AI?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-16 max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400"
        >
          Everything you need for intelligent conversations.
        </motion.p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(139,92,246,0.08)" }}
              className="group rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/60 p-7 transition-colors hover:border-primary-300 dark:hover:border-primary-700/50 cursor-default"
            >
              <div className="mb-4 text-3xl">{f.icon}</div>
              <h3 className="mb-2 text-base font-semibold text-zinc-800 dark:text-white">{f.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
