"use client";

import { useState } from "react";
import { Section } from "./Stage";
import { Err, Label, inputClass } from "./Field";

const TRACKS = [
  "AI & Prompt Engineering",
  "AI Data Annotation",
  "Web Development",
  "UI / UX Design",
  "Short-Form Video Editing",
  "No-Code & Automation",
  "Social Media Management",
  "Data Analytics",
  "Not sure yet",
];

type Status = "idle" | "sending" | "done";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrors({});

    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        intent: "contact",
        name: form.get("name"),
        email: form.get("email"),
        track: form.get("track"),
        message: form.get("message"),
      }),
    }).catch(() => null);

    if (!response || !response.ok) {
      const payload = await response?.json().catch(() => null);
      setErrors(payload?.errors ?? { form: "Something went wrong. Try again." });
      setStatus("idle");
      return;
    }

    setStatus("done");
  }

  return (
    <Section
      id="contact"
      eyebrow="Join Us"
      title={
        <>
          Stop watching.
          <br />
          <span className="text-gold">Start earning.</span>
        </>
      }
      lede="Tell us where you are right now. We will point you at the skill that fits and the next round table you can sit in on."
    >
      <div className="mx-auto max-w-2xl">
        {status === "done" ? (
          <div className="border border-gold/40 bg-gold/5 p-10 text-center">
            <span className="font-display mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold text-2xl text-ink">
              &#10003;
            </span>
            <h3 className="font-display mt-5 text-3xl tracking-wide text-paper uppercase">
              You are in
            </h3>
            <p className="mx-auto mt-3 max-w-sm text-sm text-paper/70">
              We read every message and reply as soon as we can. Watch your inbox, and check
              spam once just in case.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate
            className="border border-glow/25 bg-grape/30 p-7 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="c-name">Full name</Label>
                <input
                  id="c-name"
                  name="name"
                  className={inputClass}
                  placeholder="Your full name"
                  autoComplete="name"
                />
                <Err>{errors.name}</Err>
              </div>
              <div>
                <Label htmlFor="c-email">Email</Label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  className={inputClass}
                  placeholder="you@email.com"
                  autoComplete="email"
                />
                <Err>{errors.email}</Err>
              </div>
            </div>

            <div className="mt-5">
              <Label htmlFor="c-track">Track you are eyeing</Label>
              <select id="c-track" name="track" className={inputClass} defaultValue="Not sure yet">
                {TRACKS.map((t) => (
                  <option key={t} value={t} className="bg-void">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <Label htmlFor="c-message">Where are you stuck?</Label>
              <textarea
                id="c-message"
                name="message"
                rows={4}
                className={inputClass}
                placeholder="I can build websites but I have never charged anyone and I do not know where to find clients."
              />
            </div>

            <Err>{errors.form}</Err>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-7 w-full bg-gold px-8 py-4 text-sm font-bold tracking-[0.12em] text-ink uppercase transition hover:bg-paper disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send it"}
            </button>

            <p className="mt-4 text-center text-xs text-paper/60">
              No spam, no daily blasts. We use your details to reply and nothing else.
            </p>
          </form>
        )}
      </div>
    </Section>
  );
}
