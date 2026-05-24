"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const PLANS = [
  {
    name: "Free",
    monthly: "$0",
    yearly: "$0",
    period: "forever",
    desc: "Perfect for getting started",
    features: [
      "50 messages/day",
      "1 conversation thread",
      "Basic AI model",
      "Community support",
      "Email notifications",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    monthly: "$19",
    yearly: "$15",
    period: "/month",
    desc: "For power users and growing teams",
    features: [
      "Unlimited messages",
      "Unlimited conversations",
      "Advanced AI model",
      "Priority support",
      "Chat export & history",
      "Custom AI prompts",
      "Analytics dashboard",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    monthly: "$99",
    yearly: "$79",
    period: "/month",
    desc: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team workspace",
      "Admin dashboard",
      "REST API access",
      "SSO integration",
      "Dedicated support",
      "Custom SLA",
      "Data residency",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Pricing({ onStart }) {
  const [annual, setAnnual] = useState(false);

  return (
    <SectionWrapper id="pricing" className="bg-neutral-50/50 dark:bg-neutral-950/50 border-y border-neutral-100 dark:border-neutral-800/60">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Pricing"
          title="Simple, transparent pricing"
          subtitle="Choose the plan that fits your needs. Upgrade or downgrade anytime."
        />

        {/* Toggle */}
        <div className="mb-12 flex items-center justify-center gap-3">
          <span className={`text-sm font-medium transition-colors ${!annual ? "text-neutral-900 dark:text-white" : "text-neutral-400 dark:text-neutral-500"}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative h-7 w-12 rounded-full transition-colors duration-300 cursor-pointer ${
              annual ? "bg-primary-500" : "bg-neutral-300 dark:bg-neutral-700"
            }`}
            aria-label="Toggle annual pricing"
          >
            <motion.div
              className="absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow-sm"
              animate={{ x: annual ? 20 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${annual ? "text-neutral-900 dark:text-white" : "text-neutral-400 dark:text-neutral-500"}`}>
            Annual
          </span>
          {annual && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400"
            >
              Save 20%
            </motion.span>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "border-primary-400/60 dark:border-primary-600/40 bg-white dark:bg-neutral-900 shadow-xl shadow-primary-500/8 ring-1 ring-primary-400/20 dark:ring-primary-600/20"
                  : "border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/60 hover:shadow-lg"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-xs font-bold text-white shadow-sm">
                  Most Popular
                </div>
              )}

              <h3 className="mb-1 text-lg font-bold text-neutral-900 dark:text-white">
                {plan.name}
              </h3>
              <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
                {plan.desc}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-extrabold text-neutral-900 dark:text-white tabular-nums">
                  {annual ? plan.yearly : plan.monthly}
                </span>
                <span className="text-sm text-neutral-400 dark:text-neutral-500 ml-1">
                  {plan.period}
                </span>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-neutral-600 dark:text-neutral-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-500 shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={onStart}
                className={`w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.97] cursor-pointer ${
                  plan.highlight
                    ? "bg-primary-500 hover:bg-primary-600 text-white shadow-md shadow-primary-500/15"
                    : "border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
