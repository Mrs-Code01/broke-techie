"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage(null);

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ intent: "subscribe", name: "", email }),
    }).catch(() => null);

    if (!response || !response.ok) {
      const payload = await response?.json().catch(() => null);
      setMessage(payload?.errors?.email ?? payload?.error ?? "Something went wrong. Try again.");
      setStatus("error");
      return;
    }

    setMessage("You're in. Watch your inbox for the next research-backed read.");
    setStatus("done");
  }

  return (
    <div className="mt-8">
      {message && (
        <p
          className={`mb-2 text-sm font-semibold ${
            status === "done" ? "text-gold" : "text-magenta"
          }`}
        >
          {message}
        </p>
      )}

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 border border-ink/10 bg-ink/[0.03] p-5 sm:flex-row sm:items-center"
      >
        <div className="flex-1">
          <p className="font-serif text-base font-bold text-ink">Want more reads like this?</p>
          <p className="mt-0.5 text-sm text-ink/60">
            Get the next research-backed article the moment it&apos;s up.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            aria-label="Email address"
            className="border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-gold focus:ring-1 focus:ring-gold/40 sm:w-56"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-gold px-5 py-2.5 text-xs font-bold tracking-[0.1em] text-ink uppercase transition hover:bg-ink hover:text-paper disabled:opacity-60"
          >
            {status === "sending" ? "..." : "Subscribe"}
          </button>
        </div>
      </form>
    </div>
  );
}
