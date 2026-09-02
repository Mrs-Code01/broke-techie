import type { Metadata } from "next";
import BlogHeader from "@/components/BlogHeader";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { Ticket } from "@/components/Stage";
import { POSTS } from "@/data/posts";

export const metadata: Metadata = {
  title: "Latest Articles — BrokeTechies",
  description:
    "Recent posts and trending reads on pricing, pitching, and getting paid as a freelancer.",
};

export default function BlogIndex() {
  const trending = POSTS.filter((post) => post.trending);
  const recent = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="relative isolate overflow-hidden bg-ink">
      <BlogHeader />

      <section className="relative border-b border-glow/15 px-5 py-20 text-center sm:py-28">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(60%_60%_at_50%_0%,rgba(75,17,128,0.4),transparent_70%)]"
          aria-hidden
        />
        <Ticket>The Articles</Ticket>
        <h1 className="font-display mx-auto mt-7 max-w-3xl text-5xl leading-[0.95] tracking-tight text-paper uppercase sm:text-7xl">
          Reads for the <span className="text-gold">broke techie</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
          Straight answers on pricing, pitching, and getting paid. No hype, no countdown
          timers — just what is working right now.
        </p>
      </section>

      {trending.length > 0 && (
        <section className="border-b border-glow/15 px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-xs font-bold tracking-[0.28em] text-gold uppercase">
              Trending Posts
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {trending.map((post, i) => (
                <PostCard key={post.slug} post={post} featured={i === 0} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-xs font-bold tracking-[0.28em] text-gold uppercase">
            Recent Posts
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
