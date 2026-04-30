"use client";

import { signOut } from "next-auth/react";

export default function UserMenu({ user }) {
  if (!user) return null;

  return (
    <div className="flex items-center gap-3">
      {user.image ? (
        <img
          src={user.image}
          alt={user.name || "User"}
          className="h-8 w-8 rounded-full border border-gray-200 dark:border-[#2a2a2a]"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white text-xs font-bold">
          {(user.name || user.email || "U").charAt(0).toUpperCase()}
        </div>
      )}

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-800 dark:text-gray-200">
          {user.name || "User"}
        </p>
        <p className="truncate text-[11px] text-gray-400 dark:text-gray-600">
          {user.email}
        </p>
      </div>

      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 dark:text-gray-600 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] hover:text-red-500 transition-colors cursor-pointer"
        title="Sign out"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      </button>
    </div>
  );
}
