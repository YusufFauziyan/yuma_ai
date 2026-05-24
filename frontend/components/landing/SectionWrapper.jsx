"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({ children, id, className = "", noPadding = false }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${noPadding ? "" : "px-6 py-24 md:py-32"} ${className}`}
    >
      {children}
    </motion.section>
  );
}
