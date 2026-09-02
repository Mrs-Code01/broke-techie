"use client";

import { useEffect, useRef, useState } from "react";

/** Resolves a site-relative path to a full, shareable URL at click time. */
function resolveUrl(path: string) {
  if (typeof window === "undefined") return path;
  return `${window.location.origin}${path}`;
}

export default function ShareButton({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [shortening, setShortening] = useState(false);
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

  async function copy(text: string, message: string) {
    try {
      await navigator.clipboard.writeText(text);
      setStatus(message);
    } catch {
      setStatus("Could not copy — copy it manually");
    }
    window.setTimeout(() => setStatus(null), 2200);
  }

  async function handleCopyLink(event: React.MouseEvent) {
    event.stopPropagation();
    await copy(resolveUrl(path), "Link copied");
  }

  async function handleShorten(event: React.MouseEvent) {
    event.stopPropagation();
    if (shortUrl) {
      await copy(shortUrl, "Short link copied");
      return;
    }
    setShortening(true);
    try {
      const response = await fetch(`/api/shorten?url=${encodeURIComponent(resolveUrl(path))}`);
      const data = await response.json();
      if (response.ok && data.shortUrl) {
        setShortUrl(data.shortUrl);
        await copy(data.shortUrl, "Short link copied");
      } else {
        setStatus("Could not shorten that link");
        window.setTimeout(() => setStatus(null), 2200);
      }
    } catch {
      setStatus("Could not shorten that link");
      window.setTimeout(() => setStatus(null), 2200);
    } finally {
      setShortening(false);
    }
  }

  return (
    <div ref={rootRef} className="relative z-10 inline-block">
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          setOpen((v) => !v);
        }}
        aria-label="Share this article"
        aria-expanded={open}
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-glow/30 bg-void/70 text-paper/70 transition hover:border-gold/60 hover:text-gold"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4.5 w-4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="18" cy="5" r="2.6" />
          <circle cx="6" cy="12" r="2.6" />
          <circle cx="18" cy="19" r="2.6" />
          <path d="M8.3 10.7 15.7 6.6M8.3 13.3l7.4 4.1" />
        </svg>
      </button>

      {open && (
        <div
          onClick={(event) => event.stopPropagation()}
          className="absolute right-0 top-full z-20 mt-3 w-56 border border-glow/25 bg-void shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <button
            type="button"
            onClick={handleCopyLink}
            className="block w-full px-4 py-3 text-left text-sm text-paper/85 transition hover:bg-glow/10 hover:text-gold"
          >
            Copy link
          </button>
          <button
            type="button"
            onClick={handleShorten}
            disabled={shortening}
            className="block w-full border-t border-glow/15 px-4 py-3 text-left text-sm text-paper/85 transition hover:bg-glow/10 hover:text-gold disabled:opacity-50"
          >
            {shortening ? "Shortening..." : shortUrl ? "Copy short link" : "Shorten & copy link"}
          </button>
          {status && (
            <p className="border-t border-glow/15 px-4 py-2.5 text-xs font-bold tracking-wide text-gold">
              {status}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
