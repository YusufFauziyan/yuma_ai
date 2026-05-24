"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const BENEFITS = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "End-to-End Encryption",
    desc: "All conversations are encrypted in transit and at rest using AES-256.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "SOC 2 Compliant",
    desc: "We meet the highest standards for data security, availability, and confidentiality.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "99.9% Uptime SLA",
    desc: "Built on reliable infrastructure to ensure your support never goes offline.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Fast Infrastructure",
    desc: "Edge-deployed globally for sub-100ms response times wherever your users are.",
  },
];

export default function Security() {
  return (
    <SectionWrapper
      id="security"
      className="bg-neutral-50/50 dark:bg-neutral-950/50 border-y border-neutral-100 dark:border-neutral-800/60"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 items-end">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary-50 dark:bg-primary-900/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
              Security & Trust
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl leading-[1.15]">
              Your customers&apos; trust is our top priority
            </h2>
            <p className="mb-8 text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
              We take data privacy seriously. Yuma AI is built with
              enterprise-grade security at every layer — so you can focus on
              delivering exceptional support.
            </p>

            <div className="space-y-5">
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-500">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {b.title}
                    </h4>
                    <p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm mx-auto aspect-square rounded-3xl bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-primary-900/10 dark:via-neutral-900 dark:to-accent-900/10 border border-neutral-200/60 dark:border-neutral-800/60 p-8 flex items-center justify-center">
              {/* Shield */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white dark:bg-neutral-800 shadow-xl border border-neutral-200/60 dark:border-neutral-700/60"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-500"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" className="stroke-2" />
                </svg>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -top-3 -right-3 flex items-center gap-1.5 rounded-xl bg-white dark:bg-neutral-800 shadow-lg border border-neutral-200/60 dark:border-neutral-700/60 px-3 py-2 text-xs font-medium text-emerald-600 dark:text-emerald-400"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                SOC 2
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-3 -left-3 flex items-center gap-1.5 rounded-xl bg-white dark:bg-neutral-800 shadow-lg border border-neutral-200/60 dark:border-neutral-700/60 px-3 py-2 text-xs font-medium text-primary-600 dark:text-primary-400"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Encrypted
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
