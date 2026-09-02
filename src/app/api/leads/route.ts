import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";

export const runtime = "nodejs";

// os.tmpdir() because the deployed bundle itself is read-only on serverless
// hosts like Vercel — process.cwd() would throw. /tmp is writable there, but
// it is NOT durable: it can reset between invocations, is per-instance (not
// shared across concurrent requests), and never survives a redeploy. Treat
// this as a functional stopgap, not real storage — swap for an actual
// database (Vercel Postgres, Supabase, etc.) before relying on this data.
const STORE = path.join(os.tmpdir(), "broketechies-leads.json");
const INTENTS = ["contact", "roundtable", "subscribe"] as const;
type Intent = (typeof INTENTS)[number];

export type Lead = {
  intent: Intent;
  name: string;
  email: string;
  track?: string;
  session?: string;
  message?: string;
  receivedAt: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Expected a JSON body." }, { status: 400 });
  }

  const raw = (body ?? {}) as Record<string, unknown>;
  const intent = clean(raw.intent, 20);
  const name = clean(raw.name, 120);
  const email = clean(raw.email, 200);

  const errors: Record<string, string> = {};
  if (!INTENTS.includes(intent as Intent)) errors.intent = "Unknown form.";
  if (intent !== "subscribe" && name.length < 2) errors.name = "Tell us your name.";
  if (!EMAIL.test(email)) errors.email = "That email does not look right.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const lead: Lead = {
    intent: intent as Intent,
    name,
    email,
    track: clean(raw.track, 80) || undefined,
    session: clean(raw.session, 120) || undefined,
    message: clean(raw.message, 2000) || undefined,
    receivedAt: new Date().toISOString(),
  };

  // Local file store so the forms genuinely capture data out of the box.
  // Swap this for your CRM, mailing list, or database when you go live.
  try {
    await fs.mkdir(path.dirname(STORE), { recursive: true });
    const existing = await fs
      .readFile(STORE, "utf8")
      .then((text) => JSON.parse(text) as Lead[])
      .catch(() => [] as Lead[]);
    existing.push(lead);
    await fs.writeFile(STORE, JSON.stringify(existing, null, 2), "utf8");
  } catch (error) {
    console.error("Failed to persist lead", error);
    return NextResponse.json(
      { error: "We could not save that. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
