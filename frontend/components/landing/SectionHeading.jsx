"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ badge, title, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase ${
            light
              ? "bg-white/10 text-white/80"
              : "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
          }`}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] leading-[1.15] ${
          light ? "text-white" : "text-neutral-900 dark:text-white"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            center ? "mx-auto max-w-2xl" : ""
          } ${light ? "text-white/60" : "text-neutral-500 dark:text-neutral-400"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
