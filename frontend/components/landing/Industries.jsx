"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const INDUSTRIES = [
  {
    name: "E-commerce & Retail",
    desc: "Handle order inquiries, returns, and product questions at scale during peak seasons.",
  },
  {
    name: "SaaS & Technology",
    desc: "Reduce churn and accelerate onboarding with instant AI-powered technical support.",
  },
  {
    name: "Education",
    desc: "Provide 24/7 student support for enrollment, course info, and administrative queries.",
  },
  {
    name: "Healthcare",
    desc: "Streamline patient scheduling, FAQs, and pre-visit communication securely.",
  },
  {
    name: "Finance & Banking",
    desc: "Automate account inquiries and compliance-aware customer interactions.",
  },
  {
    name: "Travel & Hospitality",
    desc: "Manage booking inquiries, cancellations, and travel support around the clock.",
  },
];

export default function Industries() {
  return (
    <SectionWrapper id="industries" className="bg-neutral-50/50 dark:bg-neutral-950/50 border-y border-neutral-100 dark:border-neutral-800/60">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left — Heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary-50 dark:bg-primary-900/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
              Industries
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl leading-[1.15]">
              Industries Embracing{" "}
              <span className="text-primary-500">Yuma AI</span>
            </h2>
            <p className="mb-8 text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md">
              From e-commerce to SaaS, help businesses of all sizes deliver faster, smarter support.
            </p>

            <button className="inline-flex items-center gap-2 rounded-xl bg-primary-500 hover:bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 active:scale-[0.97] shadow-sm cursor-pointer">
              Explore Use Cases
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </motion.div>

          {/* Right — Industry list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-4">
              {INDUSTRIES.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group flex items-start gap-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/60 p-4 transition-all duration-200 hover:border-primary-200 dark:hover:border-primary-800/40 hover:shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-500 transition-colors group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
