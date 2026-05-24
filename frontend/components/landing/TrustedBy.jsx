"use client";

import { motion } from "framer-motion";

const COMPANIES = [
  {
    name: "Vercel",
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L24 22H0L12 2Z" />
      </svg>
    ),
  },
  {
    name: "Notion",
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.459 4.208c-.742.062-1.396.657-1.365 1.579v12.015c-.015.823.518 1.488 1.35 1.548.862.061 1.708.14 2.54.201.785.061 1.185-.183 1.185-.975V7.482l8.805 10.963c.693.853 1.739.73 2.555.67.662-.046 1.447-.137 1.447-.974V6.141c.015-.838-.477-1.474-1.293-1.55-1.077-.091-2.139-.182-3.232-.243-.615-.03-1-.243-1-.837V3.5h-.03v.015c0 .762.385.945 1 .975 1.093.061 2.155.152 3.232.243.816.076 1.308.712 1.293 1.55v11.986c0 .837-.785.928-1.447.974-.816.061-1.862.183-2.555-.67L8.168 7.604v10.978c0 .792-.4 1.036-1.185.975-.831-.061-1.678-.14-2.539-.201-.831-.06-1.365-.725-1.35-1.548V5.787c-.031-.922.623-1.517 1.365-1.579 1.124-.076 2.294-.137 3.448-.183.677-.03 1.062-.228 1.062-.914V3.1h-.031v.015c0 .686-.385.884-1.062.914-1.154.046-2.324.107-3.448.183H4.46z"/>
      </svg>
    ),
  },
  {
    name: "Linear",
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM6.5 12C6.5 11.1716 7.17157 10.5 8 10.5H16C16.8284 10.5 17.5 11.1716 17.5 12C17.5 12.8284 16.8284 13.5 16 13.5H8C7.17157 13.5 6.5 12.8284 6.5 12Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ), // We'll just use a generic nice mark for Stripe since its logo is just text, but we'll show "stripe" wordmark style in the component
    isStripe: true,
  },
  {
    name: "Discord",
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M15 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M7.5 7.5c3-1 6.5-1 9 0" />
        <path d="M7 16.5c3.5 1 7 1 10 0" />
        <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2" />
        <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2" />
      </svg>
    ),
  },
];

function LogoItem({ company }) {
  return (
    <div className="flex items-center gap-2 px-8 text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors select-none">
      {company.isStripe ? (
        <span className="font-bold text-xl tracking-tighter lowercase">stripe</span>
      ) : (
        <>
          <div className="h-6 w-6 flex items-center justify-center opacity-80">
            {company.logo}
          </div>
          <span className="text-base font-semibold tracking-tight">{company.name}</span>
        </>
      )}
    </div>
  );
}

export default function TrustedBy() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-y border-neutral-100 dark:border-neutral-800/60 bg-neutral-50/50 dark:bg-neutral-950/50 py-10 overflow-hidden"
    >
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
        Trusted by leading companies
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-neutral-50 dark:from-neutral-950 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-neutral-50 dark:from-neutral-950 to-transparent" />

        {/* Scrolling container */}
        <div className="flex animate-marquee items-center">
          {[...COMPANIES, ...COMPANIES, ...COMPANIES, ...COMPANIES].map((company, i) => (
            <LogoItem key={`${company.name}-${i}`} company={company} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
