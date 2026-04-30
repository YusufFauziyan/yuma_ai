"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-2 items-center">
        {/* Text — slides from left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full bg-primary-50 dark:bg-primary-900/20 px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-400">
            About Yuma AI
          </span>
          <h2 className="mb-5 text-2xl font-bold tracking-tight sm:text-3xl text-zinc-800 dark:text-white">
            Simplicity meets intelligence
          </h2>
          <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Yuma AI is built with one goal — making AI conversations effortless. No complexity, no clutter. Just you and a brilliant AI assistant ready to help with anything.
          </p>
          <div className="space-y-3">
            {["Blazing fast streaming responses", "Clean, distraction-free interface", "Built for everyday productivity"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary-500"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Illustration — slides from right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-primary-100 via-primary-50 to-pink-50 dark:from-primary-900/20 dark:via-zinc-900 dark:to-pink-900/10 p-8 flex items-center justify-center">
            {/* Floating elements */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-zinc-800 shadow-xl border border-zinc-200/60 dark:border-zinc-700/60 text-2xl">⚡</motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-zinc-800 shadow-xl border border-zinc-200/60 dark:border-zinc-700/60 text-2xl">🧠</motion.div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -right-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-zinc-800 shadow-lg border border-zinc-200/60 dark:border-zinc-700/60 text-xl">💬</motion.div>

            {/* Center logo */}
            <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-2xl shadow-primary-500/20">
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
