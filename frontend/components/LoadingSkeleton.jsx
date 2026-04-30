"use client";

export default function LoadingSkeleton({ count = 5 }) {
  return (
    <div className="flex flex-col gap-1 px-1">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 animate-pulse"
        >
          <div className="h-3.5 w-3.5 rounded bg-gray-200 dark:bg-[#2a2a2a] shrink-0" />
          <div
            className="h-3.5 rounded bg-gray-200 dark:bg-[#2a2a2a]"
            style={{ width: `${50 + Math.random() * 40}%` }}
          />
        </div>
      ))}
    </div>
  );
}
