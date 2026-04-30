"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import About from "@/components/landing/About";
import Preview from "@/components/landing/Preview";
import Pricing from "@/components/landing/Pricing";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (status === "authenticated") router.push("/chat");
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex h-dvh items-center justify-center bg-zinc-50 dark:bg-zinc-950">
        <div className="h-9 w-9 animate-spin rounded-full border-[3px] border-primary-400 border-t-transparent" />
      </div>
    );
  }

  if (status === "authenticated") return null;

  const handleStart = () => signIn("google", { callbackUrl: "/chat" });

  return (
    <div className="min-h-dvh bg-zinc-50 dark:bg-zinc-950 overflow-x-hidden">
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 via-pink-500 to-primary-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar onSignIn={handleStart} />
      <Hero onStart={handleStart} />
      <Features />
      <About />
      <Preview />
      <Pricing onStart={handleStart} />
      <CtaSection onStart={handleStart} />
      <Footer />
    </div>
  );
}
