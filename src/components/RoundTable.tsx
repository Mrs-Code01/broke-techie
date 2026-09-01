"use client";

import { useState } from "react";
import { Section } from "./Stage";
import { Err, Label, inputClass } from "./Field";

const SESSIONS = [
  {
    id: "sat-pricing",
    date: "Sat 12 Sep - 5:00 PM WAT",
    topic: "Pricing without flinching",
  },
  {
    id: "wed-outreach",
    date: "Wed 16 Sep - 7:00 PM WAT",
    topic: "Cold outreach that gets replies",
  },
  {
    id: "sat-firstclient",
    date: "Sat 26 Sep - 5:00 PM WAT",
    topic: "Landing the first client from zero",
  },
];

type Status = "idle" | "sending" | "done";

export default function RoundTable() {
  const [session, setSession] = useState(SESSIONS[0].id);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrors({});

    const form = new FormData(event.currentTarget);
    const chosen = SESSIONS.find((s) => s.id === session);

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        intent: "roundtable",
        name: form.get("name"),
        email: form.get("email"),
        session: chosen ? chosen.date + " - " + chosen.topic : session,
        message: form.get("question"),
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
      id="roundtable"
      eyebrow="Round Table"
      title={
        <>
          Sit across from
          <br />
          <span className="text-gold">someone who earns</span>
        </>
      }
      lede="A small seminar table, kept deliberately small, led in person by the founder. You ask, you get a straight answer, and nobody is reading from a slide deck."
    >
      <div className="mx-auto mb-10 flex max-w-2xl items-center justify-center gap-3 border border-gold/40 bg-gold/5 px-5 py-3 text-center">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <p className="text-left text-sm leading-relaxed text-paper/80">
          Every round table is held{" "}
          <span className="font-bold text-gold">in person</span> and is led by the
          founder. The venue is sent to you once your reservation comes in.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-sm font-bold tracking-[0.16em] text-magenta uppercase">
            Upcoming sessions
          </h3>
          <div className="mt-5 space-y-3">
            {SESSIONS.map((s) => {
              const active = s.id === session;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSession(s.id)}
                  aria-pressed={active}
                  className={
                    "w-full border p-5 text-left transition " +
                    (active
                      ? "border-gold bg-gold/10"
                      : "border-glow/20 bg-void/50 hover:border-glow/50")
                  }
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.7rem] tracking-[0.18em] text-gold uppercase">
                        {s.date}
                      </p>
                      <p className="mt-2 text-lg font-bold tracking-tight text-paper">
                        {s.topic}
                      </p>
                      <p className="mt-2 text-sm text-paper/60">
                        Venue shared on reservation
                      </p>
                    </div>
                    <span
                      className={
                        "shrink-0 px-2 py-1 text-[0.65rem] font-semibold tracking-wider uppercase " +
                        (active ? "bg-gold text-ink" : "bg-glow/20 text-paper/70")
                      }
                    >
                      {active ? "Selected" : "Select"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="border border-glow/25 bg-grape/30 p-7 sm:p-8">
          {status === "done" ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <span className="font-display grid h-14 w-14 place-items-center rounded-full bg-gold text-2xl text-ink">
                &#10003;
              </span>
              <h3 className="font-display mt-5 text-2xl tracking-wide text-paper uppercase">
                Seat reserved
              </h3>
              <p className="mt-3 max-w-xs text-sm text-paper/60">
                We will email you the venue and directions ahead of the date. Bring one
                specific question &mdash; the table works best when you do.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <h3 className="font-display text-2xl tracking-wide text-paper uppercase">
                Reserve your seat
              </h3>
              <p className="mt-2 text-sm text-paper/70">
                Free to attend. Seats are held in the order they are claimed, and the
                venue follows by email.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <Label htmlFor="rt-name">Full name</Label>
                  <input
                    id="rt-name"
                    name="name"
                    className={inputClass}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                  <Err>{errors.name}</Err>
                </div>
                <div>
                  <Label htmlFor="rt-email">Email</Label>
                  <input
                    id="rt-email"
                    name="email"
                    type="email"
                    className={inputClass}
                    placeholder="you@email.com"
                    autoComplete="email"
                  />
                  <Err>{errors.email}</Err>
                </div>
                <div>
                  <Label htmlFor="rt-question">One question for the founder</Label>
                  <textarea
                    id="rt-question"
                    name="question"
                    rows={3}
                    className={inputClass}
                    placeholder="How do you handle a client who ghosts after the proposal?"
                  />
                </div>
              </div>

              <Err>{errors.form}</Err>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-7 w-full bg-gold px-8 py-4 text-sm font-bold tracking-[0.12em] text-ink uppercase transition hover:bg-paper disabled:opacity-60"
              >
                {status === "sending" ? "Reserving..." : "Claim my seat"}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
