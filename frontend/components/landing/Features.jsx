"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const FEATURES = [
  {
    id: "ai-responses",
    tab: "AI-Powered Responses",
    title: "Instant, intelligent replies powered by AI",
    desc: "Yuma AI generates human-like responses in real-time, learning your tone, product knowledge, and brand voice to craft perfect answers every time. No more canned responses — every reply feels personal and thoughtful.",
    bullets: [
      "Learns from your existing knowledge base",
      "Matches your brand's tone and style",
      "Handles complex multi-turn conversations",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: "smart-memory",
    tab: "Smart Memory",
    title: "Context-aware conversations that remember",
    desc: "Your AI assistant remembers previous interactions, customer history, and conversation context. No more asking customers to repeat themselves — Yuma picks up right where you left off.",
    bullets: [
      "Full conversation history retention",
      "Cross-channel context awareness",
      "Customer preference tracking",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    id: "multi-channel",
    tab: "Multi-Channel",
    title: "One inbox for every channel",
    desc: "Handle customer conversations from email, chat, social media, and messaging apps — all from a single unified inbox. Scale effortlessly without switching between tools.",
    bullets: [
      "Unified inbox across all channels",
      "Automatic routing and prioritization",
      "Seamless handoff to human agents",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="15" y2="10" />
      </svg>
    ),
  },
  {
    id: "analytics",
    tab: "Analytics",
    title: "Data-driven insights at your fingertips",
    desc: "Track resolution rates, response times, customer satisfaction scores, and AI performance metrics. Make informed decisions to continuously improve your support quality.",
    bullets: [
      "Real-time performance dashboards",
      "Customer satisfaction tracking",
      "AI accuracy and confidence metrics",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const feature = FEATURES[active];

  return (
    <SectionWrapper id="features">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading — Left aligned */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-4 inline-block rounded-full bg-primary-50 dark:bg-primary-900/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400"
            >
              Features
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl leading-[1.15]"
            >
              Build the Perfect AI Support Agent
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md"
            >
              Powerful AI capabilities designed to transform how your team handles customer conversations.
            </motion.p>

            {/* Feature tabs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 flex flex-col gap-1.5"
            >
              {FEATURES.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 cursor-pointer ${
                    active === i
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 shadow-sm"
                      : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 hover:text-neutral-700 dark:hover:text-neutral-300"
                  }`}
                >
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                    active === i
                      ? "bg-primary-500 text-white"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500"
                  }`}>
                    {f.icon}
                  </div>
                  {f.tab}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Right — Feature detail */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/60 p-8 lg:p-10"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-500">
                  {feature.icon}
                </div>

                <h3 className="mb-3 text-xl font-bold text-neutral-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {feature.desc}
                </p>

                <ul className="space-y-3">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary-500">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
