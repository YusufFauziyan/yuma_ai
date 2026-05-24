"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

export default function CtaSection({ onStart }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef(null);
  const targetPos = useRef({ x: 50, y: 50 });
  const currentPos = useRef({ x: 50, y: 50 });

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

  const gradientStyle = {
    background: `
      radial-gradient(
        ellipse 65% 55% at ${mousePos.x}% ${mousePos.y}%,
        rgba(99, 102, 241, ${isHovered ? 0.35 : 0.18}) 0%,
        rgba(168, 85, 247, ${isHovered ? 0.22 : 0.1}) 35%,
        transparent 70%
      ),
      radial-gradient(
        ellipse 50% 50% at ${100 - mousePos.x}% ${100 - mousePos.y}%,
        rgba(20, 184, 166, ${isHovered ? 0.2 : 0.1}) 0%,
        transparent 60%
      ),
      linear-gradient(135deg, #0f0f13 0%, #141420 40%, #0f0f13 100%)
    `,
    transition: isHovered ? "none" : "background 0.8s ease",
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={gradientStyle}
          className="relative rounded-3xl px-8 py-16 md:px-16 md:py-20 shadow-2xl shadow-black/40 border border-neutral-800/80 overflow-hidden cursor-default"
        >
          {/* Noise texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03] rounded-3xl"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px",
            }}
          />

          {/* Cursor shimmer */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(
                circle 200px at ${mousePos.x}% ${mousePos.y}%,
                rgba(255,255,255,0.04) 0%,
                transparent 100%
              )`,
            }}
          />

          {/* Corner glows */}
          <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-[90px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-teal-500/8 blur-[70px]" />

          {/* Border glow on hover */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              boxShadow: "inset 0 0 0 1px rgba(99,102,241,0.25)",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 shadow-lg shadow-indigo-500/20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl leading-[1.15]">
              Start your AI support journey
              <br className="hidden sm:block" /> right now
            </h2>

            <p className="mx-auto mb-10 max-w-lg text-base text-neutral-400 leading-relaxed">
              Join thousands of teams who have already transformed their
              customer support with Yuma AI. Get started in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                onClick={onStart}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-neutral-900 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                Start Free Trial
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.button>
              <button
                onClick={onStart}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-600 px-7 py-3.5 text-sm font-semibold text-neutral-300 hover:bg-neutral-800 transition-all duration-200 active:scale-[0.97] cursor-pointer"
              >
                Book a Demo
              </button>
            </div>

            <p className="mt-6 text-xs text-neutral-500">
              No credit card required · Free 14-day trial
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
