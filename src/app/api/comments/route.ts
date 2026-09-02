import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";

export const runtime = "nodejs";

// See the same-named constant in /api/leads/route.ts for why this is
// os.tmpdir() and not process.cwd() — and why it's a stopgap, not real
// storage: it can reset between invocations, isn't shared across concurrent
// requests, and never survives a redeploy.
const STORE = path.join(os.tmpdir(), "broketechies-comments.json");

export type ArticleComment = {
  id: string;
  slug: string;
  name: string;
  comment: string;
  createdAt: string;
};

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

async function readAll(): Promise<ArticleComment[]> {
  return fs
    .readFile(STORE, "utf8")
    .then((text) => JSON.parse(text) as ArticleComment[])
    .catch(() => []);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = clean(searchParams.get("slug"), 200);
  if (!slug) {
    return NextResponse.json({ error: "A slug is required." }, { status: 400 });
  }

  const all = await readAll();
  const comments = all
    .filter((c) => c.slug === slug)
    .sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1));

  return NextResponse.json({ comments });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Expected a JSON body." }, { status: 400 });
  }

  const raw = (body ?? {}) as Record<string, unknown>;

  // Honeypot: a hidden field real visitors never fill in. A bot that fills
  // every field trips it, and we pretend to succeed without storing anything.
  if (clean(raw.website, 200)) {
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const slug = clean(raw.slug, 200);
  const name = clean(raw.name, 80);
  const comment = clean(raw.comment, 2000);

  const errors: Record<string, string> = {};
  if (!slug) errors.slug = "Missing article.";
  if (name.length < 2) errors.name = "Tell us your name.";
  if (comment.length < 2) errors.comment = "Say something first.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const entry: ArticleComment = {
    id: crypto.randomUUID(),
    slug,
    name,
    comment,
    createdAt: new Date().toISOString(),
  };

  // Local file store, same tradeoff as /api/leads: fine for now, swap for a
  // real database before relying on comments surviving redeploys at scale.
  try {
    await fs.mkdir(path.dirname(STORE), { recursive: true });
    const existing = await readAll();
    existing.push(entry);
    await fs.writeFile(STORE, JSON.stringify(existing, null, 2), "utf8");
  } catch (error) {
    console.error("Failed to persist comment", error);
    return NextResponse.json(
      { error: "We could not post that. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ comment: entry }, { status: 201 });
}
