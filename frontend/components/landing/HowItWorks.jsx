"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const STEPS = [
  {
    step: "1",
    title: "Connect your platform",
    desc: "Integrate with your existing helpdesk, CRM, or messaging tools in just a few clicks.",
  },
  {
    step: "2",
    title: "Train your AI assistant",
    desc: "Upload your knowledge base, FAQs, and past conversations so Yuma learns your product.",
  },
  {
    step: "3",
    title: "Automate conversations",
    desc: "Let AI handle routine queries 24/7 while your team focuses on high-value interactions.",
  },
  {
    step: "4",
    title: "Monitor and improve",
    desc: "Track performance, review AI responses, and continuously fine-tune for better outcomes.",
  },
];

function MockupContent({ step }) {
  switch (step) {
    case 0:
      return (
        <div className="p-6 md:p-8 flex flex-col items-center justify-center h-full min-h-[300px]">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 shadow-sm">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                className="text-[#4A154B] dark:text-neutral-300"
              >
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.166 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.166 24a2.527 2.527 0 0 1-2.52-2.522v-2.521h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
              </svg>
            </div>
            <div className="h-1 w-16 bg-neutral-100 dark:bg-neutral-800 rounded-full relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-primary-500 w-1/3 rounded-full"
                animate={{ left: ["-33%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </div>
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            Syncing workspace...
          </p>
        </div>
      );
    case 1:
      return (
        <div className="p-6 md:p-8 min-h-[300px] flex flex-col justify-center h-full">
          <div className="mb-5">
            <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1.5">
              Step 2 of 4
            </p>
            <h4 className="text-base font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
              Train Your AI Assistant
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Upload your knowledge base to get started
            </p>
          </div>

          <div className="mb-5 h-1.5 w-full rounded-full bg-neutral-100 dark:bg-neutral-800">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "50%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full rounded-full bg-primary-500"
            />
          </div>

          <div className="rounded-xl border-2 border-dashed border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50 p-5 text-center mb-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="mx-auto mb-2 text-neutral-400"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <motion.g
                animate={{ y: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </motion.g>
            </svg>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Drag and drop your files here
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2">
            <div className="h-7 w-7 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center shrink-0">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary-500"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <span className="flex-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 truncate">
              FAQ_document.pdf
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-emerald-500 shrink-0"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="p-6 md:p-8 flex flex-col justify-end min-h-[300px] bg-neutral-50/50 dark:bg-neutral-900/30 h-full">
          <div className="space-y-4 w-full">
            <div className="flex items-end gap-2">
              <div className="h-7 w-7 rounded-full bg-neutral-200 dark:bg-neutral-700 shrink-0" />
              <div className="rounded-2xl rounded-bl-none bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 px-4 py-2.5 text-xs text-neutral-700 dark:text-neutral-300 shadow-sm max-w-[85%] leading-relaxed">
                How do I reset my password?
              </div>
            </div>
            <div className="flex items-end gap-2 flex-row-reverse">
              <div className="h-7 w-7 rounded-full bg-primary-500 shrink-0 flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                </svg>
              </div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  transformOrigin: "bottom right",
                }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl rounded-br-none bg-primary-500 px-4 py-2.5 text-xs text-white shadow-sm max-w-[85%] leading-relaxed"
              >
                You can reset your password by visiting your Account Settings
                and clicking &quot;Security&quot;. Let me know if you need a
                direct link!
              </motion.div>
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="p-6 md:p-8 min-h-[300px] flex flex-col justify-center h-full">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                Resolution Rate
              </p>
              <p className="text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                92.4%
              </p>
            </div>
            <div className="rounded-full bg-emerald-50 dark:bg-emerald-900/20 px-2.5 py-1 flex items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-emerald-500"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                +5.2%
              </span>
            </div>
          </div>
          <div className="flex items-end gap-2 h-32 pt-4 border-b border-neutral-100 dark:border-neutral-800">
            {[40, 65, 45, 80, 55, 95, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-primary-500/10 dark:bg-primary-500/5 rounded-t-md relative group h-full"
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: "easeOut",
                  }}
                  className="absolute bottom-0 inset-x-0 bg-primary-500 rounded-t-md"
                />
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SectionWrapper id="how-it-works">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-end">
          {/* Left — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary-50 dark:bg-primary-900/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
              How It Works
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl leading-[1.15]">
              Up and Running <span className="text-primary-500">Smoothly</span>{" "}
              in Minutes
            </h2>
            <p className="mb-10 text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md">
              Getting started with Yuma AI is simple. Follow these four steps
              and transform your customer support in minutes.
            </p>

            {/* Steps */}
            <div className="space-y-8 relative">
              <div className="absolute left-5 top-5 bottom-5 w-px bg-neutral-200 dark:bg-neutral-800 -z-10" />

              {STEPS.map((s, i) => {
                const isActive = i === activeStep;
                return (
                  <div
                    key={s.step}
                    onClick={() => setActiveStep(i)}
                    className={`flex items-start gap-4 cursor-pointer transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold shadow-sm transition-colors duration-300 ${
                        isActive
                          ? "bg-primary-500 text-white"
                          : "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      {s.step}
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-semibold transition-colors duration-300 ${isActive ? "text-neutral-900 dark:text-white" : "text-neutral-600 dark:text-neutral-400"}`}
                      >
                        {s.title}
                      </h4>
                      <p
                        className={`mt-1 text-sm leading-relaxed transition-colors duration-300 ${isActive ? "text-neutral-500 dark:text-neutral-400" : "text-neutral-400 dark:text-neutral-500"}`}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Product Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden min-h-[360px] flex flex-col">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/80 px-4 py-3 shrink-0">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  <div className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  <div className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-3 py-0.5 text-[10px] text-neutral-400 dark:text-neutral-500 transition-all">
                    app.yuma-ai.com/setup
                    {activeStep === 2
                      ? "-chat"
                      : activeStep === 3
                        ? "-analytics"
                        : ""}
                  </div>
                </div>
              </div>

              {/* Dynamic Mockup Content */}
              <div className="relative flex-1 bg-white dark:bg-neutral-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <MockupContent step={activeStep} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
