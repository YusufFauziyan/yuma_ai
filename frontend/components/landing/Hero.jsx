"use client";

import { motion } from "framer-motion";

export default function Hero({ onStart }) {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-24 pb-32 text-center overflow-hidden">
      {/* Gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary-400/10 blur-[120px] dark:bg-primary-600/10" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-pink-400/10 blur-[120px] dark:bg-pink-600/10" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-violet-400/5 blur-[150px] dark:bg-violet-500/5" />

      <div className="relative z-10 max-w-3xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 dark:border-primary-800/40 bg-primary-50 dark:bg-primary-900/20 px-4 py-1.5 text-xs font-medium text-primary-600 dark:text-primary-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
          </span>
          Powered by Google Gemini
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 150 }}
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-primary-400 via-primary-500 to-primary-700 shadow-2xl shadow-primary-500/25 animate-float"
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
          </svg>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="bg-gradient-to-r from-primary-500 via-pink-500 to-primary-600 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
            Yuma AI
          </span>
          <br />
          <span className="text-zinc-800 dark:text-white">Your Intelligent Chat Assistant</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mb-10 max-w-lg text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed"
        >
          Smart conversations powered by AI, built for productivity. Fast streaming, smart context, and a beautiful interface.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onStart}
            className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-xl hover:shadow-primary-500/20 active:scale-[0.97] cursor-pointer"
          >
            Start Chatting
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <a
            href="#preview"
            className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 dark:border-zinc-700 px-7 py-3.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-[0.97] cursor-pointer"
          >
            Try Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-5 text-xs text-zinc-400 dark:text-zinc-600"
        >
          Free to use · Sign in with Google · No credit card required
        </motion.p>
      </div>
    </section>
  );
}
