"use client";

import { useEffect, useState } from "react";

/** Persistent, bouncing shortcut to the article's summary/CTA, for readers
 * who want the takeaway without scrolling through the whole piece. Hides
 * itself once that summary is already on screen. */
export default function ScrollToBottomButton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function onScroll() {
      const target = document.getElementById("article-summary");
      const nearBottom = target
        ? target.getBoundingClientRect().top < window.innerHeight
        : window.innerHeight + window.scrollY >= document.body.scrollHeight - 200;
      setVisible(!nearBottom);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    const target = document.getElementById("article-summary");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Jump to the summary at the end of this article"
      className="fixed bottom-24 right-5 z-40 grid h-12 w-12 animate-bounce place-items-center rounded-full bg-gold text-ink shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:bg-paper sm:right-8"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 5v14M6 13l6 6 6-6" />
      </svg>
    </button>
  );
}
