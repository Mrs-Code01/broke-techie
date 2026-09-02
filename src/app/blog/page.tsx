import type { Metadata } from "next";
import BlogHeader from "@/components/BlogHeader";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { POSTS } from "@/data/posts";

export const metadata: Metadata = {
  title: "Latest Articles — BrokeTechies",
  description: "Straight reads on pricing, pitching, AI, and getting paid as a freelancer.",
};

export default function BlogIndex() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="bg-ink">
      <BlogHeader />

      <section className="bg-paper px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-xs font-bold tracking-[0.22em] text-magenta uppercase">
            The Articles
          </p>
          <h1 className="font-serif mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Reads for the broke techie
          </h1>
          <p className="font-serif mt-4 text-lg leading-snug text-ink/60 italic">
            Straight answers on pricing, pitching, AI, and getting paid. No hype, no
            countdown timers.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
