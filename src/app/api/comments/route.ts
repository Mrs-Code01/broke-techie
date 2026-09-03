import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = clean(searchParams.get("slug"), 200);
  if (!slug) {
    return NextResponse.json({ error: "A slug is required." }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from("comments")
    .select("id, slug, name, comment, created_at")
    .eq("slug", slug)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Failed to load comments", error);
    return NextResponse.json({ error: "Could not load comments." }, { status: 500 });
  }

  const comments: ArticleComment[] = (data ?? []).map((row) => ({
    id: row.id,
    slug: row.slug,
    name: row.name,
    comment: row.comment,
    createdAt: row.created_at,
  }));

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

  const { data, error } = await supabaseAdmin
    .from("comments")
    .insert({ slug, name, comment })
    .select("id, slug, name, comment, created_at")
    .single();

  if (error || !data) {
    console.error("Failed to persist comment", error);
    return NextResponse.json(
      { error: "We could not post that. Please try again." },
      { status: 500 },
    );
  }

  const created: ArticleComment = {
    id: data.id,
    slug: data.slug,
    name: data.name,
    comment: data.comment,
    createdAt: data.created_at,
  };

  return NextResponse.json({ comment: created }, { status: 201 });
}
