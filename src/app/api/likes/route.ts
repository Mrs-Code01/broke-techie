import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

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
    .from("article_likes")
    .select("count")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("Failed to load like count", error);
    return NextResponse.json({ error: "Could not load likes." }, { status: 500 });
  }

  return NextResponse.json({ count: data?.count ?? 0 });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Expected a JSON body." }, { status: 400 });
  }

  const raw = (body ?? {}) as Record<string, unknown>;
  const slug = clean(raw.slug, 200);
  if (!slug) {
    return NextResponse.json({ error: "A slug is required." }, { status: 400 });
  }

  // Atomic increment via a Postgres function, avoids a read-then-write race
  // when two people like the same article at the same moment.
  const { data, error } = await supabaseAdmin.rpc("increment_like", { slug_input: slug });

  if (error) {
    console.error("Failed to increment like", error);
    return NextResponse.json({ error: "Could not like that. Try again." }, { status: 500 });
  }

  return NextResponse.json({ count: data as number });
}
