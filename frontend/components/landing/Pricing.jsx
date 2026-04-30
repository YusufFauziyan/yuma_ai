"use client";

import { motion } from "framer-motion";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Perfect for getting started",
    features: ["50 messages/day", "1 conversation thread", "Basic AI model", "Community support"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    desc: "For power users and professionals",
    features: ["Unlimited messages", "Unlimited conversations", "Advanced AI model", "Priority support", "Chat export", "Custom prompts"],
    cta: "Upgrade to Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    desc: "For teams and organizations",
    features: ["Everything in Pro", "Team workspace", "Admin dashboard", "API access", "SSO integration", "Dedicated support"],
    cta: "Contact Sales",
    highlight: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Pricing({ onStart }) {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-3 text-center text-2xl font-bold tracking-tight sm:text-3xl text-zinc-800 dark:text-white">
          Simple, transparent pricing
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-16 max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
          Choose the plan that fits your needs. Upgrade anytime.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-2xl border p-7 transition-shadow ${
                plan.highlight
                  ? "border-primary-400 dark:border-primary-600 bg-gradient-to-b from-primary-50 to-white dark:from-primary-950/30 dark:to-zinc-900 shadow-xl shadow-primary-500/10"
                  : "border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 hover:shadow-lg"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-1 text-xs font-bold text-white shadow-md">
                  Most Popular
                </div>
              )}

              <h3 className="mb-1 text-lg font-bold text-zinc-800 dark:text-white">{plan.name}</h3>
              <p className="mb-5 text-xs text-zinc-500 dark:text-zinc-400">{plan.desc}</p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-zinc-800 dark:text-white">{plan.price}</span>
                <span className="text-sm text-zinc-400 dark:text-zinc-500 ml-1">{plan.period}</span>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary-500 shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={onStart}
                className={`w-full rounded-xl py-3 text-sm font-semibold transition-all active:scale-[0.97] cursor-pointer ${
                  plan.highlight
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/20"
                    : "border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
