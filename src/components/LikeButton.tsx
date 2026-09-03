"use client";

import { useEffect, useState } from "react";

/** One like per browser, tracked in localStorage since the site has no
 * accounts. Not tamper-proof, but keeps a casual visitor from inflating the
 * count by mashing the button. */
function likedKey(slug: string) {
  return `liked:${slug}`;
}

export default function LikeButton({ slug }: { slug: string }) {
  const [count, setCount] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [pending, setPending] = useState(false);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    fetch(`/api/likes?slug=${encodeURIComponent(slug)}`)
      .then((res) => res.json())
      .then((data) => setCount(typeof data.count === "number" ? data.count : 0))
      .catch(() => setCount(0));

    // Read after the SSR-matching first paint, in a callback rather than the
    // effect body itself, so the initial render never diverges from the server.
    Promise.resolve().then(() => {
      try {
        setLiked(localStorage.getItem(likedKey(slug)) === "1");
      } catch {
        // Storage isn't available, keep the SSR default of "not liked".
      }
    });
  }, [slug]);

  async function handleClick() {
    if (liked || pending) return;
    setPending(true);
    setLiked(true);
    setCount((c) => (c ?? 0) + 1);
    setPop(true);
    window.setTimeout(() => setPop(false), 300);

    try {
      localStorage.setItem(likedKey(slug), "1");
    } catch {
      // Nothing to persist to if storage isn't available, the click still counts server-side.
    }

    const response = await fetch("/api/likes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    }).catch(() => null);

    if (response?.ok) {
      const data = await response.json();
      if (typeof data.count === "number") setCount(data.count);
    }
    setPending(false);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={liked}
      aria-pressed={liked}
      aria-label={liked ? "You liked this article" : "Like this article"}
      className="inline-flex items-center gap-2 border border-ink/15 bg-white px-4 py-2 text-xs font-bold tracking-wide text-ink/70 uppercase transition hover:border-ink/30 disabled:cursor-default disabled:hover:border-ink/15"
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-4 w-4 shrink-0 transition-transform duration-300 ${pop ? "scale-125" : "scale-100"} ${
          liked ? "text-magenta" : "text-ink/50"
        }`}
        fill={liked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 20.5s-7-4.35-9.5-8.8C.9 8.4 2.4 5 5.8 5c1.9 0 3.4 1 4.2 2.5.8-1.5 2.3-2.5 4.2-2.5 3.4 0 4.9 3.4 3.3 6.7-2.5 4.45-9.5 8.8-9.5 8.8Z" />
      </svg>
      {count === null ? "..." : count}
    </button>
  );
}
