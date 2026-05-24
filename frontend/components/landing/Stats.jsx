"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const STATS = [
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 24, suffix: "/7", label: "AI Support Available" },
  { value: 5, suffix: "k+", label: "Active Users" },
  { value: 10, suffix: "M+", label: "Conversations Handled" },
];

function AnimatedCounter({ value, suffix, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const end = value;
    const step = end / (duration * 60);

    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef(null);
  const targetPos = useRef({ x: 50, y: 50 });
  const currentPos = useRef({ x: 50, y: 50 });

  // Smooth lerp animation loop
  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      currentPos.current.x = lerp(
        currentPos.current.x,
        targetPos.current.x,
        0.06,
      );
      currentPos.current.y = lerp(
        currentPos.current.y,
        targetPos.current.y,
        0.06,
      );

      const dx = Math.abs(currentPos.current.x - targetPos.current.x);
      const dy = Math.abs(currentPos.current.y - targetPos.current.y);

      if (dx > 0.01 || dy > 0.01) {
        setMousePos({ x: currentPos.current.x, y: currentPos.current.y });
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    targetPos.current = { x, y };
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    targetPos.current = { x: 50, y: 50 };
  }, []);

  // Dynamic gradient based on cursor position
  const gradientStyle = {
    background: `
      radial-gradient(
        ellipse 70% 60% at ${mousePos.x}% ${mousePos.y}%,
        rgba(99, 102, 241, ${isHovered ? 0.35 : 0.18}) 0%,
        rgba(168, 85, 247, ${isHovered ? 0.22 : 0.1}) 35%,
        transparent 70%
      ),
      radial-gradient(
        ellipse 50% 50% at ${100 - mousePos.x}% ${100 - mousePos.y}%,
        rgba(20, 184, 166, ${isHovered ? 0.2 : 0.1}) 0%,
        transparent 60%
      ),
      linear-gradient(
        135deg,
        #0f0f13 0%,
        #141420 40%,
        #0f0f13 100%
      )
    `,
    transition: isHovered ? "none" : "background 0.8s ease",
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={gradientStyle}
          className="relative rounded-3xl px-8 py-14 md:px-16 md:py-16 shadow-xl border border-neutral-800/80 overflow-hidden cursor-default"
        >
          {/* Ambient noise texture overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03] rounded-3xl"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px",
            }}
          />

          {/* Cursor-following highlight shimmer */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(
                circle 180px at ${mousePos.x}% ${mousePos.y}%,
                rgba(255,255,255,0.04) 0%,
                transparent 100%
              )`,
            }}
          />

          {/* Static corner glows */}
          <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[90px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-teal-500/8 blur-[70px]" />

          {/* Border glow on hover */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              boxShadow: `inset 0 0 0 1px rgba(99,102,241,0.25)`,
            }}
          />

          <div className="relative z-10">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl tracking-tight mb-3">
                Fueling tons of smart conversations
                <br className="hidden sm:block" /> with customers every day
              </h2>
              <p className="text-sm text-neutral-400 max-w-lg mx-auto">
                Join thousands of teams already transforming their customer
                support with Yuma AI.
              </p>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-neutral-400 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating UI elements */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block absolute top-6 right-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[10px] text-white/70 font-medium">
                Live: 847 conversations
              </span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="hidden md:block absolute bottom-6 left-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-indigo-400"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              </svg>
              <span className="text-[10px] text-white/70 font-medium">
                CSAT up 12% this month
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
