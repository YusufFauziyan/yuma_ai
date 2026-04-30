"use client";

import { motion } from "framer-motion";

const MESSAGES = [
  { role: "ai", text: "Hello! I'm Yuma, your AI assistant. ✨ How can I help you today?", delay: 0.3 },
  { role: "user", text: "Write a Python function to calculate fibonacci numbers", delay: 1.0 },
  { role: "ai", text: null, code: true, delay: 1.8 },
];

function TypingDots() {
  return (
    <div className="flex items-center gap-1.5 py-1">
      {[0, 0.2, 0.4].map((d, i) => (
        <motion.div key={i} className="h-2 w-2 rounded-full bg-primary-400"
          animate={{ scale: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: d }} />
      ))}
    </div>
  );
}

export default function Preview() {
  return (
    <section id="preview" className="border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-3 text-center text-2xl font-bold tracking-tight sm:text-3xl text-zinc-800 dark:text-white">
          See Yuma AI in Action
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-14 max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
          A sleek chat experience designed for productivity and joy.
        </motion.p>

        {/* Chat mockup */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900 shadow-2xl shadow-zinc-900/5 dark:shadow-black/20">
          {/* Chrome */}
          <div className="flex items-center gap-2 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 px-5 py-3.5">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-300 dark:bg-red-400/60" />
              <div className="h-3 w-3 rounded-full bg-amber-300 dark:bg-amber-400/60" />
              <div className="h-3 w-3 rounded-full bg-green-300 dark:bg-green-400/60" />
            </div>
            <div className="flex-1 text-center text-xs font-medium text-zinc-400 dark:text-zinc-600">Yuma AI</div>
          </div>

          {/* Messages */}
          <div className="space-y-5 p-6 sm:p-8">
            {MESSAGES.map((msg, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: msg.delay }}
                className={`flex gap-3.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className={`h-9 w-9 rounded-full shrink-0 shadow-sm ${
                  msg.role === "user"
                    ? "bg-gradient-to-br from-primary-500 to-primary-700"
                    : "bg-gradient-to-br from-primary-400 to-primary-600"
                }`} />
                <div className={`rounded-2xl px-5 py-3.5 max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-primary-500 text-white rounded-tr-md"
                    : "bg-white dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/60 rounded-tl-md"
                }`}>
                  {msg.code ? (
                    <div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-3">Here&apos;s an elegant solution:</p>
                      <div className="rounded-xl bg-zinc-900 dark:bg-zinc-950 p-4 text-[13px] font-mono leading-relaxed">
                        <div><span className="text-purple-400">def</span> <span className="text-blue-400">fibonacci</span><span className="text-zinc-400">(n):</span></div>
                        <div className="ml-4"><span className="text-purple-400">if</span> <span className="text-zinc-300">n &lt;= 1:</span> <span className="text-purple-400">return</span> <span className="text-orange-400">n</span></div>
                        <div className="ml-4"><span className="text-zinc-300">a, b =</span> <span className="text-orange-400">0</span><span className="text-zinc-400">,</span> <span className="text-orange-400">1</span></div>
                        <div className="ml-4"><span className="text-purple-400">for</span> <span className="text-zinc-300">_ </span><span className="text-purple-400">in</span> <span className="text-blue-400">range</span><span className="text-zinc-400">(2, n+1):</span></div>
                        <div className="ml-8"><span className="text-zinc-300">a, b = b, a + b</span></div>
                        <div className="ml-4"><span className="text-purple-400">return</span> <span className="text-zinc-300">b</span></div>
                      </div>
                    </div>
                  ) : (
                    <p className={`text-sm leading-relaxed ${msg.role === "user" ? "" : "text-zinc-600 dark:text-zinc-300"}`}>{msg.text}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Typing indicator */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2.6 }}
              className="flex gap-3.5">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 shrink-0 shadow-sm" />
              <div className="rounded-2xl rounded-tl-md bg-white dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/60 px-5 py-3.5">
                <TypingDots />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
