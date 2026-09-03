import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

const INTENTS = ["contact", "roundtable", "subscribe"] as const;
type Intent = (typeof INTENTS)[number];

export type Lead = {
  intent: Intent;
  name: string;
  email: string;
  track?: string;
  session?: string;
  message?: string;
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

  const { error } = await supabaseAdmin.from("leads").insert({
    intent,
    name: name || null,
    email,
    track: clean(raw.track, 80) || null,
    session: clean(raw.session, 120) || null,
    message: clean(raw.message, 2000) || null,
  });

  if (error) {
    console.error("Failed to persist lead", error);
    return NextResponse.json(
      { error: "We could not save that. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
