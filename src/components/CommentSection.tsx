"use client";

import { useEffect, useState } from "react";
import type { ArticleComment } from "@/app/api/comments/route";

function initials(name: string) {
  return name.trim().charAt(0).toUpperCase() || "?";
}

function formatWhen(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function CommentSection({ slug }: { slug: string }) {
  const [comments, setComments] = useState<ArticleComment[] | null>(null);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [website, setWebsite] = useState(""); // honeypot, left blank by real people
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch(`/api/comments?slug=${encodeURIComponent(slug)}`)
      .then((res) => res.json())
      .then((data) => setComments(data.comments ?? []))
      .catch(() => setComments([]));
  }, [slug]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setErrors({});

    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, name, comment, website }),
    }).catch(() => null);

    if (!response || !response.ok) {
      const payload = await response?.json().catch(() => null);
      setErrors(payload?.errors ?? { form: "Something went wrong. Try again." });
      setSending(false);
      return;
    }

    const { comment: posted } = await response.json();
    setComments((prev) => [...(prev ?? []), posted]);
    setName("");
    setComment("");
    setSending(false);
  }

  return (
    <div className="mt-14">
      <h2 className="font-serif text-2xl font-bold text-ink">
        {comments === null
          ? "Comments"
          : `${comments.length} Comment${comments.length === 1 ? "" : "s"}`}
      </h2>

      <div className="mt-6 space-y-6">
        {comments === null && <p className="text-sm text-ink/50">Loading comments...</p>}

        {comments?.length === 0 && (
          <p className="text-sm text-ink/50">Be the first to leave a reply.</p>
        )}

        {comments?.map((c) => (
          <div key={c.id} className="flex gap-4 border-b border-ink/10 pb-6">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold font-sans text-sm font-bold text-ink">
              {initials(c.name)}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <p className="font-sans text-sm font-bold text-ink">{c.name}</p>
                <p className="text-xs text-ink/40">{formatWhen(c.createdAt)}</p>
              </div>
              <p className="mt-1.5 font-serif text-[1.05rem] leading-relaxed text-ink/85">
                {c.comment}
              </p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={onSubmit} noValidate className="mt-10 border border-ink/10 bg-ink/[0.02] p-6">
        <h3 className="font-serif text-xl font-bold text-ink">Leave a Reply</h3>
        <p className="mt-1 text-sm text-ink/50">
          Your comment will show up here for other readers to see.
        </p>

        <input
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div className="mt-5">
          <label htmlFor="c-name" className="mb-1.5 block text-xs font-semibold text-ink/60 uppercase tracking-[0.08em]">
            Name
          </label>
          <input
            id="c-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-gold focus:ring-1 focus:ring-gold/40"
          />
          {errors.name && <p className="mt-1.5 text-xs text-magenta">{errors.name}</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="c-comment" className="mb-1.5 block text-xs font-semibold text-ink/60 uppercase tracking-[0.08em]">
            Comment
          </label>
          <textarea
            id="c-comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            placeholder="What did you think?"
            className="w-full border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-gold focus:ring-1 focus:ring-gold/40"
          />
          {errors.comment && <p className="mt-1.5 text-xs text-magenta">{errors.comment}</p>}
        </div>

        {errors.form && <p className="mt-3 text-xs text-magenta">{errors.form}</p>}

        <button
          type="submit"
          disabled={sending}
          className="mt-5 bg-gold px-6 py-2.5 text-sm font-bold tracking-[0.1em] text-ink uppercase transition hover:bg-ink hover:text-paper disabled:opacity-60"
        >
          {sending ? "Posting..." : "Post Comment"}
        </button>
      </form>
    </div>
  );
}
