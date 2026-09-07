import type { Metadata } from "next";
import BlogHeader from "@/components/BlogHeader";
import Footer from "@/components/Footer";
import PostGrid from "@/components/PostGrid";
import { POSTS } from "@/data/posts";

export const metadata: Metadata = {
  title: "Latest Articles | BrokeTechies",
  description:
    "Heavy-research reads on where AI is heading, built to help freelancers and businesses know what's up and what to look into next.",
};

export default function BlogIndex() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="bg-ink">
      <BlogHeader />

      <section className="bg-void px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center animate-fade-up motion-reduce:animate-none">
          <p className="font-sans text-xs font-bold tracking-[0.22em] text-magenta uppercase">
            The Articles
          </p>
          <h1 className="font-serif mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-paper sm:text-5xl">
            Reads for the broke techie
          </h1>
          <p className="font-serif mt-4 text-lg leading-snug text-paper/70 italic">
            Heavy-research reads that get freelancers, businesses, and teams up to speed
            on where AI is actually heading, so you know where to position yourself and
            what to look into next.
          </p>
        </div>

        <PostGrid posts={posts} />
      </section>

      <Footer />
    </main>
  );
}
