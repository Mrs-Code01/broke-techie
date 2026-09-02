import { NextResponse } from "next/server";

export const runtime = "nodejs";

function isShortenableUrl(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const target = searchParams.get("url");

  if (!target || !isShortenableUrl(target)) {
    return NextResponse.json({ error: "A valid http(s) url is required." }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(target)}`,
    );
    const text = (await response.text()).trim();

    if (!response.ok || !text.startsWith("http")) {
      return NextResponse.json({ error: "Could not shorten that link." }, { status: 502 });
    }

    return NextResponse.json({ shortUrl: text });
  } catch {
    return NextResponse.json({ error: "Could not shorten that link." }, { status: 502 });
  }
}
