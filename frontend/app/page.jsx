"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
import Integrations from "@/components/landing/Integrations";
import HowItWorks from "@/components/landing/HowItWorks";
import Industries from "@/components/landing/Industries";
import Stats from "@/components/landing/Stats";
import Security from "@/components/landing/Security";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") router.push("/chat");
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex h-dvh items-center justify-center bg-white dark:bg-[#0a0a0f]">
        <div className="h-9 w-9 animate-spin rounded-full border-[3px] border-primary-400 border-t-transparent" />
      </div>
    );
  }

  if (status === "authenticated") return null;

  const handleStart = () => signIn("google", { callbackUrl: "/chat" });

  return (
    <div className="min-h-dvh bg-white dark:bg-[#0a0a0f] overflow-x-hidden">
      <Navbar onSignIn={handleStart} />
      <Hero onStart={handleStart} />
      <TrustedBy />
      <Features />
      <Integrations />
      <HowItWorks />
      <Industries />
      <Stats />
      <Security />
      <Testimonials />
      <Pricing onStart={handleStart} />
      <CtaSection onStart={handleStart} />
      <Footer />
    </div>
  );
}
