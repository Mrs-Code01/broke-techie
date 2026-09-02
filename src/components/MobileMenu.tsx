"use client";

import { useEffect, useRef, useState } from "react";

type NavLink = { label: string; href: string };

export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={rootRef} className="relative min-[960px]:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="grid h-10 w-10 place-items-center text-paper transition hover:text-gold"
      >
        <span className="relative block h-4 w-[22px]" aria-hidden>
          <span
            className={`absolute left-0 top-0 h-0.5 w-[22px] bg-current transition-transform duration-300 ease-out ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] h-0.5 w-[22px] bg-current transition-opacity duration-200 ease-out ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-[14px] h-0.5 w-[22px] bg-current transition-transform duration-300 ease-out ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`absolute right-0 top-full z-30 mt-3 w-56 origin-top-right border border-glow/20 bg-void shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition duration-200 ease-out ${
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="block border-b border-glow/10 px-5 py-3.5 text-sm font-medium text-paper/80 transition last:border-b-0 hover:bg-glow/10 hover:text-gold"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
