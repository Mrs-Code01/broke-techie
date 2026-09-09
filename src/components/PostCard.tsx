import Link from "next/link";
import { CompareColumns, MaturityLadder, NodesGraphic } from "./ArticleArt";
import { formatDate, type Post } from "@/data/posts";

/** Pick a built-in illustration from the slug so a grid of imageless posts
 * still varies card to card, and the same post always keeps the same one. */
function FallbackArt({ slug, className }: { slug: string; className: string }) {
  let sum = 0;
  for (let i = 0; i < slug.length; i++) sum += slug.charCodeAt(i);
  switch (sum % 3) {
    case 0:
      return <NodesGraphic className={className} />;
    case 1:
      return <MaturityLadder className={className} />;
    default:
      return <CompareColumns className={className} />;
  }
}

/** A compact card: image, category, title, meta. No excerpt, so a dozen
 * of them fit on one screen and the whole catalogue is scannable. */
export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-xl border border-paper/15 bg-grape p-3.5 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-orchid/60"
    >
      {/* Kept light so the fallback illustration, which is drawn in ink on
       * paper, still reads against the dark page. */}
      <div className="aspect-[16/10] overflow-hidden rounded-lg bg-paper">
        {post.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.image.src}
            alt={post.image.alt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <FallbackArt
            slug={post.slug}
            className="h-full w-full p-6 transition duration-500 group-hover:scale-[1.04]"
          />
        )}
      </div>

      <p className="font-sans mt-3.5 text-[0.65rem] font-bold tracking-[0.18em] text-magenta uppercase">
        {post.category}
      </p>

      <h3 className="font-serif mt-2 text-[1.05rem] font-bold leading-snug text-paper transition group-hover:text-gold">
        {post.title}
      </h3>

      <p className="font-sans mt-auto pt-3.5 text-xs text-paper/45">
        {formatDate(post.date)}
        <span className="mx-1.5 text-magenta" aria-hidden>
          &bull;
        </span>
        {post.readTime}
      </p>
    </Link>
  );
}
