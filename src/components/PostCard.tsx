import Link from "next/link";
import { NodesGraphic } from "./ArticleArt";
import { formatDate, type Post } from "@/data/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden border border-ink/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
    >
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-ink/[0.03]">
        {post.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.image.src} alt={post.image.alt} className="h-full w-full object-cover" />
        ) : (
          <NodesGraphic className="h-full w-full scale-125 opacity-90" />
        )}
        <span className="notch-both absolute left-4 top-4 bg-gold px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] text-ink uppercase">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-bold leading-tight text-ink transition group-hover:text-magenta">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{post.excerpt}</p>
        <p className="mt-5 border-t border-ink/10 pt-4 text-xs text-ink/50">
          {formatDate(post.date)} &middot; {post.readTime}
        </p>
      </div>
    </Link>
  );
}
