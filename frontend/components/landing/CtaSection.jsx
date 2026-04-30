"use client";

import { motion } from "framer-motion";

export default function CtaSection({ onStart }) {
  return (
    <section className="border-t border-zinc-200/50 dark:border-zinc-800/50 bg-gradient-to-b from-primary-50 via-white to-zinc-50 dark:from-primary-950/20 dark:via-zinc-950 dark:to-zinc-950 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-xl text-center"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-xl shadow-primary-500/20">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl text-zinc-800 dark:text-white">
          Start using Yuma AI today
        </h2>
        <p className="mb-8 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          Join thousands of users who are already boosting their productivity with AI-powered conversations.
        </p>
        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/20 cursor-pointer overflow-hidden"
        >
          {/* Glow pulse */}
          <motion.span
            className="absolute inset-0 rounded-2xl bg-white/20"
            animate={{ opacity: [0, 0.15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="relative z-10 flex items-center gap-2.5">
            Get Started
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}
