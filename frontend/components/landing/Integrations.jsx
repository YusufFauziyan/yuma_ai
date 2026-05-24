"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const INTEGRATIONS = [
  {
    name: "Slack",
    desc: "Respond to customers directly from Slack channels.",
    color: "bg-[#4A154B]/10 dark:bg-[#4A154B]/20",
    iconColor: "text-[#4A154B] dark:text-[#E01E5A]",
    logo: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.166 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.166 24a2.527 2.527 0 0 1-2.52-2.522v-2.521h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    desc: "Automate community support in Discord servers.",
    color: "bg-[#5865F2]/10 dark:bg-[#5865F2]/20",
    iconColor: "text-[#5865F2] dark:text-[#7983F5]",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 256 256"
      >
        <path d="M0 0h256v256H0z" fill="none" />
        <g fill="none">
          <rect width="256" height="256" fill="#5865f2" rx="60" />
          <g clip-path="url(#SVGKXSAsd8x)">
            <path
              fill="#fff"
              d="M197.308 64.797a165 165 0 0 0-40.709-12.627a.62.62 0 0 0-.654.31c-1.758 3.126-3.706 7.206-5.069 10.412c-15.373-2.302-30.666-2.302-45.723 0c-1.364-3.278-3.382-7.286-5.148-10.412a.64.64 0 0 0-.655-.31a164.5 164.5 0 0 0-40.709 12.627a.6.6 0 0 0-.268.23c-25.928 38.736-33.03 76.52-29.546 113.836a.7.7 0 0 0 .26.468c17.106 12.563 33.677 20.19 49.94 25.245a.65.65 0 0 0 .702-.23c3.847-5.254 7.276-10.793 10.217-16.618a.633.633 0 0 0-.347-.881c-5.44-2.064-10.619-4.579-15.601-7.436a.642.642 0 0 1-.063-1.064a86 86 0 0 0 3.098-2.428a.62.62 0 0 1 .646-.088c32.732 14.944 68.167 14.944 100.512 0a.62.62 0 0 1 .655.08a80 80 0 0 0 3.106 2.436a.642.642 0 0 1-.055 1.064a102.6 102.6 0 0 1-15.609 7.428a.64.64 0 0 0-.339.889a133 133 0 0 0 10.208 16.61a.64.64 0 0 0 .702.238c16.342-5.055 32.913-12.682 50.02-25.245a.65.65 0 0 0 .26-.46c4.17-43.141-6.985-80.616-29.571-113.836a.5.5 0 0 0-.26-.238M94.834 156.142c-9.855 0-17.975-9.047-17.975-20.158s7.963-20.158 17.975-20.158c10.09 0 18.131 9.127 17.973 20.158c0 11.111-7.962 20.158-17.973 20.158m66.456 0c-9.855 0-17.974-9.047-17.974-20.158s7.962-20.158 17.974-20.158c10.09 0 18.131 9.127 17.974 20.158c0 11.111-7.884 20.158-17.974 20.158"
            />
          </g>
          <defs>
            <clipPath id="SVGKXSAsd8x">
              <path fill="#fff" d="M28 51h200v154.93H28z" />
            </clipPath>
          </defs>
        </g>
      </svg>
    ),
  },
  {
    name: "Notion",
    desc: "Sync knowledge base and documentation seamlessly.",
    color: "bg-neutral-200 dark:bg-neutral-800",
    iconColor: "text-neutral-900 dark:text-white",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 256 256"
      >
        <path d="M0 0h256v256H0z" fill="none" />
        <g fill="none">
          <g clip-path="url(#SVGv3WPqdcU)">
            <path
              fill="#f4f2ed"
              d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"
            />
            <g clip-path="url(#SVG5qy9KbCN)">
              <path
                fill="#fff"
                d="m50.53 47.548l96.832-7.152c11.895-1.02 14.951-.333 22.43 5.105l30.91 21.775c5.098 3.745 6.796 4.765 6.796 8.843v119.425c0 7.485-2.718 11.912-12.233 12.588l-112.448 6.811c-7.14.337-10.54-.683-14.28-5.448l-22.762-29.6C41.692 174.448 40 170.37 40 165.603V59.448c0-6.12 2.718-11.223 10.53-11.9"
              />
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M147.362 40.398L50.53 47.55C42.718 48.225 40 53.33 40 59.448v106.155c0 4.765 1.692 8.843 5.775 14.292l22.762 29.598c3.74 4.765 7.14 5.787 14.28 5.448l112.45-6.808c9.508-.677 12.232-5.104 12.232-12.587V76.12c0-3.867-1.527-4.982-6.025-8.282L169.792 45.5c-7.478-5.438-10.535-6.125-22.43-5.105zM85.36 74.165c-9.182.618-11.265.758-16.48-3.482L55.622 60.137c-1.347-1.364-.67-3.067 2.725-3.407l93.088-6.802c7.817-.682 11.888 2.042 14.945 4.422l15.965 11.568c.682.344 2.38 2.38.338 2.38L86.55 74.085zm-10.705 120.36V93.142c0-4.427 1.36-6.47 5.43-6.812L190.5 79.865c3.745-.337 5.437 2.043 5.437 6.463v100.707c0 4.428-.682 8.173-6.795 8.511l-105.66 6.125c-6.112.337-8.825-1.698-8.825-7.146zm104.3-95.947c.678 3.063 0 6.125-3.062 6.475l-5.093 1.01v74.853c-4.422 2.38-8.493 3.739-11.894 3.739c-5.438 0-6.796-1.703-10.868-6.802l-33.302-52.395v50.692l10.535 2.386s0 6.125-8.5 6.125l-23.433 1.359c-.682-1.365 0-4.765 2.375-5.442l6.12-1.698v-67.025l-8.493-.687c-.683-3.063 1.015-7.485 5.775-7.828l25.142-1.692l34.65 53.072v-46.953l-8.832-1.015c-.682-3.75 2.035-6.475 5.43-6.807z"
                clip-rule="evenodd"
              />
            </g>
          </g>
          <defs>
            <clipPath id="SVGv3WPqdcU">
              <path fill="#fff" d="M0 0h256v256H0z" />
            </clipPath>
            <clipPath id="SVG5qy9KbCN">
              <path fill="#fff" d="M40 40h175v175H40z" />
            </clipPath>
          </defs>
        </g>
      </svg>
    ),
  },
  {
    name: "Gmail",
    desc: "Handle email support with AI-powered responses.",
    color: "bg-red-500/10 dark:bg-red-500/20",
    iconColor: "text-red-500 dark:text-red-400",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.33em"
        height="24px"
        viewBox="0 0 256 193"
      >
        <path d="M0 0h256v193H0z" fill="none" />
        <path
          fill="#4285f4"
          d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"
        />
        <path
          fill="#34a853"
          d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"
        />
        <path
          fill="#ea4335"
          d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"
        />
        <path
          fill="#fbbc04"
          d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"
        />
        <path
          fill="#c5221f"
          d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    desc: "Engage customers on WhatsApp Business directly.",
    color: "bg-green-500/10 dark:bg-green-500/20",
    iconColor: "text-green-600 dark:text-green-400",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 256 258"
      >
        <path d="M0 0h256v258H0z" fill="none" />
        <defs>
          <linearGradient id="SVGK3KZq49U" x1="50%" x2="50%" y1="100%" y2="0%">
            <stop offset="0%" stopColor="#1faf38" />
            <stop offset="100%" stopColor="#60d669" />
          </linearGradient>
          <linearGradient id="SVGefMkoEOd" x1="50%" x2="50%" y1="100%" y2="0%">
            <stop offset="0%" stopColor="#f9f9f9" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>
        <path
          fill="url(#SVGK3KZq49U)"
          d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
        />
        <path
          fill="url(#SVGefMkoEOd)"
          d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
        />
        <path
          fill="#fff"
          d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
        />
      </svg>
    ),
  },
  {
    name: "API Access",
    desc: "Build custom integrations with our REST API.",
    color: "bg-primary-500/10 dark:bg-primary-500/20",
    iconColor: "text-primary-600 dark:text-primary-400",
    logo: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.07, ease: "easeOut" },
  }),
};

export default function Integrations() {
  return (
    <SectionWrapper
      id="integrations"
      className="bg-neutral-50/50 dark:bg-neutral-950/50 border-y border-neutral-100 dark:border-neutral-800/60"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Integrations"
          title="Connect with the Tools You Already Use"
          subtitle="Works with 100+ tools you already use every day. Seamlessly integrate and start automating."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INTEGRATIONS.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              className="group flex items-center gap-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/60 p-5 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md hover:-translate-y-0.5 cursor-default"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color} transition-transform duration-300 group-hover:scale-105`}
              >
                <div className={`${item.iconColor}`}>{item.logo}</div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
