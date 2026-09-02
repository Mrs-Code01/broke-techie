import Link from "next/link";
import ShareButton from "./ShareButton";
import { formatDate, type Post } from "@/data/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group relative flex flex-col overflow-hidden border border-glow/20 bg-void/60 transition hover:border-gold/50">
      <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-0" aria-label={post.title} />

      <div className="relative flex h-32 items-start overflow-hidden bg-[radial-gradient(120%_120%_at_20%_0%,var(--color-orchid)_0%,var(--color-grape)_55%,var(--color-ink)_100%)] p-5">
        <div className="grain pointer-events-none absolute inset-0 opacity-30" aria-hidden />
        <span className="notch-both relative bg-gold px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] text-ink uppercase">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl leading-tight tracking-tight text-paper uppercase transition group-hover:text-gold">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/65">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between border-t border-glow/15 pt-4 text-xs text-paper/50">
          <span>
            {formatDate(post.date)} &middot; {post.readTime}
          </span>
          <ShareButton path={`/blog/${post.slug}`} />
        </div>
      </div>
    </article>
  );
}
