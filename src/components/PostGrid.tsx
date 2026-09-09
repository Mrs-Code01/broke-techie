"use client";

import { useRef, useState } from "react";
import PostCard from "./PostCard";
import Reveal from "./Reveal";
import type { Post } from "@/data/posts";

const PER_PAGE = 12;

/** Pages the article grid a dozen at a time. Arrows only, no numbered links,
 * and the whole control disappears while everything fits on one page. */
export default function PostGrid({ posts }: { posts: Post[] }) {
  const [page, setPage] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);

  const pageCount = Math.max(1, Math.ceil(posts.length / PER_PAGE));
  // Guard against a page index left over from a larger list.
  const current = Math.min(page, pageCount - 1);
  const visible = posts.slice(current * PER_PAGE, current * PER_PAGE + PER_PAGE);

  function go(next: number) {
    setPage(next);
    // Land at the top of the grid rather than wherever the last page ended.
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div ref={topRef} className="scroll-mt-24">
      <div className="mx-auto mt-14 grid max-w-7xl auto-rows-fr items-stretch gap-x-7 gap-y-11 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((post, i) => (
          <Reveal key={post.slug} delay={i * 80} className="h-full">
            <PostCard post={post} />
          </Reveal>
        ))}
      </div>

      {pageCount > 1 && (
        <nav
          aria-label="Article pages"
          className="mx-auto mt-14 flex max-w-7xl items-center justify-center gap-6"
        >
          <button
            type="button"
            onClick={() => go(current - 1)}
            disabled={current === 0}
            aria-label="Previous page"
            className="notch-both border border-paper/25 px-5 py-3 text-paper transition hover:border-gold hover:bg-gold hover:text-ink disabled:pointer-events-none disabled:opacity-30"
          >
            <span aria-hidden>&larr;</span>
          </button>

          <p className="font-sans text-xs font-bold tracking-[0.2em] text-paper/50 uppercase">
            {current + 1} / {pageCount}
          </p>

          <button
            type="button"
            onClick={() => go(current + 1)}
            disabled={current === pageCount - 1}
            aria-label="Next page"
            className="notch-both border border-paper/25 px-5 py-3 text-paper transition hover:border-gold hover:bg-gold hover:text-ink disabled:pointer-events-none disabled:opacity-30"
          >
            <span aria-hidden>&rarr;</span>
          </button>
        </nav>
      )}
    </div>
  );
}
