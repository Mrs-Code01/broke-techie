"use client";

import type { ReactNode } from "react";

export const inputClass =
  "w-full border border-glow/30 bg-void/70 px-4 py-3 text-sm text-paper placeholder:text-paper/30 outline-none transition focus:border-gold focus:ring-1 focus:ring-gold/40";

export function Label({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[0.7rem] font-semibold tracking-[0.12em] text-paper/75 uppercase"
    >
      {children}
    </label>
  );
}

export function Err({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="mt-1.5 text-xs text-magenta">{children}</p>;
}
