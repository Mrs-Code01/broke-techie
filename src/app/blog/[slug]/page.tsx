import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogHeader from "@/components/BlogHeader";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import ShareButton from "@/components/ShareButton";
import { POSTS, formatDate, getPost } from "@/data/posts";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — BrokeTechies`,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="relative isolate overflow-hidden bg-ink">
      <BlogHeader />

      <article className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="text-xs font-bold tracking-[0.2em] text-gold uppercase transition hover:text-paper"
          >
            &larr; All articles
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="notch-both bg-gold px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] text-ink uppercase">
              {post.category}
            </span>
            <span className="text-xs text-paper/50">
              {formatDate(post.date)} &middot; {post.readTime}
            </span>
          </div>

          <h1 className="font-display mt-5 text-4xl leading-[0.98] tracking-tight text-paper uppercase sm:text-6xl">
            {post.title}
          </h1>

          <div className="mt-8 flex items-center justify-between border-y border-glow/15 py-4">
            <p className="text-sm text-paper/60">Share this with someone who needs it.</p>
            <ShareButton path={`/blog/${post.slug}`} />
          </div>

          <div className="relative mt-10 space-y-5 overflow-hidden border border-glow/20 bg-grape/30 p-7 sm:p-10">
            <div className="grain pointer-events-none absolute inset-0 opacity-30" aria-hidden />
            {post.content.map((paragraph, i) => (
              <p key={i} className="relative leading-relaxed text-paper/85">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {more.length > 0 && (
        <section className="border-t border-glow/15 px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-xs font-bold tracking-[0.28em] text-gold uppercase">
              More from the blog
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {more.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
