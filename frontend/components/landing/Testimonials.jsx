"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const TESTIMONIALS = [
  {
    name: "Sarah L.",
    role: "Support Manager",
    company: "TechFlow",
    avatar: "/avatar-sarah.png",
    quote: "Yuma AI has transformed how we handle support. Our response time dropped by 85% and customer satisfaction scores are at an all-time high. The AI understands context beautifully.",
    rating: 5,
  },
  {
    name: "Michael R.",
    role: "Head of CX",
    company: "Cloudwise",
    avatar: "/avatar-michael.png",
    quote: "We went from 200+ unresolved tickets daily to nearly zero. The AI handles routine queries perfectly, and our team can finally focus on strategic customer relationships.",
    rating: 5,
  },
  {
    name: "Emily K.",
    role: "CEO",
    company: "Nextera",
    avatar: "/avatar-emily.png",
    quote: "Setting up Yuma took less than 30 minutes. Within a week, it was handling 70% of our support volume autonomously. The ROI was immediate and significant.",
    rating: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
  }),
};

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Testimonials"
          title="Loved by support teams everywhere"
          subtitle="See what our customers have to say about transforming their support with Yuma AI."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              className="relative rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/60 p-7 transition-all duration-300 hover:shadow-md"
            >
              {/* Quote mark */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="mb-4 text-primary-200 dark:text-primary-800/40">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <StarRating count={t.rating} />

              <p className="mt-4 mb-6 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 border-t border-neutral-100 dark:border-neutral-800 pt-5">
                {/* Avatar */}
                <div className="h-11 w-11 rounded-full overflow-hidden border-2 border-neutral-100 dark:border-neutral-700">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
