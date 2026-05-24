"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ onStart }) {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Subtle gradient blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[600px] rounded-full bg-primary-100/30 dark:bg-primary-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[400px] rounded-full bg-accent-100/20 dark:bg-accent-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Text Content */}
          <div>
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Trusted by 5,000+ teams worldwide
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-[3.25rem] leading-[1.1]"
            >
              Automate Conversations.{" "}
              <span className="text-primary-500">Delight Customers.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-8 max-w-lg text-base sm:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed"
            >
              Yuma AI helps teams automate support, conversations, and productivity
              using fast and intelligent AI assistance — so your team can focus on
              what matters.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <button
                onClick={onStart}
                className="group inline-flex items-center gap-2 rounded-xl bg-primary-500 hover:bg-primary-600 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 active:scale-[0.97] shadow-lg shadow-primary-500/20 cursor-pointer"
              >
                Start Free Trial
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <button
                onClick={onStart}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200 active:scale-[0.97] cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Book a Demo
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-5 text-xs text-neutral-400 dark:text-neutral-600"
            >
              No credit card required · Free 14-day trial · Cancel anytime
            </motion.p>
          </div>

          {/* Right — Image + Floating UI */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Person image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-neutral-900/10 dark:shadow-black/30">
                <Image
                  src="/hero-person.png"
                  alt="Customer support professional using Yuma AI"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Soft gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 dark:from-[#0a0a0f]/80 to-transparent" />
              </div>

              {/* Floating chat card — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -top-3 -right-4 md:-right-8"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-2xl bg-white dark:bg-neutral-800 shadow-xl border border-neutral-200/60 dark:border-neutral-700/60 px-4 py-3 max-w-[200px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-semibold text-neutral-800 dark:text-neutral-200">Yuma AI</span>
                  </div>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    Password reset link sent! Check your email 📧
                  </p>
                  <div className="mt-2 flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[9px] text-emerald-500 font-medium">Resolved in 5s</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating stats card — bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 md:-left-8"
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="rounded-2xl bg-white dark:bg-neutral-800 shadow-xl border border-neutral-200/60 dark:border-neutral-700/60 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-500">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">98% Satisfaction</p>
                      <p className="text-[10px] text-neutral-400">+12% this month</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating notification — mid right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="absolute top-1/2 -right-2 md:-right-6"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="rounded-xl bg-white dark:bg-neutral-800 shadow-lg border border-neutral-200/60 dark:border-neutral-700/60 px-3 py-2 flex items-center gap-2"
                >
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">
                    S
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-neutral-800 dark:text-neutral-200">New conversation</p>
                    <p className="text-[9px] text-neutral-400">Sarah needs help...</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
