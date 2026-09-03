import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogHeader from "@/components/BlogHeader";
import CommentSection from "@/components/CommentSection";
import Footer from "@/components/Footer";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import ScrollToBottomButton from "@/components/ScrollToBottomButton";
import ShareButton from "@/components/ShareButton";
import { CompareColumns, MaturityLadder, NodesGraphic } from "@/components/ArticleArt";
import { POSTS, formatDate, getPost, type ContentBlock } from "@/data/posts";

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
    title: `${post.title} | BrokeTechies`,
    description: post.excerpt,
  };
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="font-serif text-[1.2rem] leading-[1.75] text-ink/85">
          {block.text.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </p>
      );
    case "h2":
      return (
        <h2 className="font-serif mt-4 text-[1.75rem] font-bold leading-tight tracking-tight text-ink">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-serif mt-2 text-xl font-bold leading-tight text-ink">{block.text}</h3>
      );
    case "ul":
      return (
        <ul className="space-y-2 border-l-2 border-ink/10 pl-6">
          {block.items.map((item, i) => (
            <li key={i} className="font-serif text-[1.15rem] leading-relaxed text-ink/80">
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-3 border-l-2 border-ink/10 pl-6">
          {block.items.map((item, i) => (
            <li key={i} className="font-serif text-[1.15rem] leading-relaxed text-ink/80">
              <span className="font-sans font-bold text-magenta">{i + 1}.</span> {item}
            </li>
          ))}
        </ol>
      );
    case "flow":
      return (
        <ol className="space-y-0 border border-ink/10 bg-ink/[0.03] px-6 py-5">
          {block.steps.map((step, i) => (
            <li key={i}>
              <p className="font-sans text-[0.95rem] font-semibold text-ink/80">{step}</p>
              {i < block.steps.length - 1 && (
                <p className="my-1 font-sans text-magenta" aria-hidden>
                  &darr;
                </p>
              )}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <p className="font-serif border-l-2 border-gold py-1 pl-6 text-[1.4rem] italic leading-snug text-ink">
          {block.text.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </p>
      );
    case "art": {
      const Graphic =
        block.variant === "nodes" ? NodesGraphic : block.variant === "ladder" ? MaturityLadder : CompareColumns;
      return (
        <div className="border border-ink/10 bg-ink/[0.02] px-6 py-8">
          <Graphic className="mx-auto h-auto w-full max-w-md" />
        </div>
      );
    }
    case "photo":
      return (
        <div className="overflow-hidden border border-ink/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src} alt={block.alt} className="h-auto w-full object-cover" />
        </div>
      );
    case "callout":
      return (
        <div className="border-l-4 border-gold bg-gold/[0.08] px-6 py-6">
          <p className="font-sans text-xs font-bold tracking-[0.22em] text-ink/60 uppercase">
            {block.heading}
          </p>
          <div className="mt-3 space-y-3">
            {block.text.map((line, i) => (
              <p key={i} className="font-serif text-[1.1rem] leading-relaxed text-ink/85">
                {line.split("\n").map((l, j, arr) => (
                  <span key={j}>
                    {l}
                    {j < arr.length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
      );
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="bg-ink">
      <BlogHeader />

      <ScrollToBottomButton />

      <article className="bg-paper px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-[700px]">
          <Link
            href="/blog"
            className="font-sans text-xs font-bold tracking-[0.2em] text-ink/50 uppercase transition hover:text-ink"
          >
            &larr; All articles
          </Link>

          <p className="font-sans mt-6 text-xs font-bold tracking-[0.2em] text-magenta uppercase">
            {post.category}
          </p>

          <h1 className="font-serif mt-3 text-[2.1rem] font-bold leading-[1.1] tracking-tight text-ink sm:text-[2.85rem]">
            {post.title}
          </h1>

          <p className="font-serif mt-4 text-xl leading-snug text-ink/60 italic">{post.deck}</p>

          <div className="mt-6 flex items-center justify-between border-y border-ink/10 py-4">
            <p className="font-sans text-sm text-ink/50">
              {formatDate(post.date)} &middot; {post.readTime}
            </p>
            <ShareButton path={`/blog/${post.slug}`} />
          </div>

          <NewsletterSubscribe />
        </div>

        <div className="mx-auto max-w-[700px]">
          <div className="mt-10 overflow-hidden border border-ink/10">
            {post.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={post.image.src} alt={post.image.alt} className="h-auto w-full object-cover" />
            ) : (
              <div className="bg-ink/[0.03] px-6 py-10">
                <NodesGraphic className="mx-auto h-auto w-full max-w-lg" />
              </div>
            )}
          </div>

          <div className="mt-10 space-y-6">
            {post.content.map((block, i) => (
              <div key={i} id={block.type === "callout" ? "article-summary" : undefined}>
                <Block block={block} />
              </div>
            ))}
          </div>

          <div className="mt-14 border border-gold/40 bg-ink px-6 py-10 text-center sm:px-10">
            <p className="font-sans text-xs font-bold tracking-[0.22em] text-gold uppercase">
              Take It Further
            </p>
            <h2 className="font-serif mt-3 text-2xl font-bold text-paper sm:text-3xl">
              Want something built?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-paper/70">
              If you have a task worth turning into a repeatable AI workflow, or you just
              want one-on-one live coaching to think it through, talk to a professional
              AI consultant.
            </p>
            <a
              href="https://www.fiverr.com/s/9d2rV8E"
              target="_blank"
              rel="noopener noreferrer"
              className="notch-both mt-6 inline-block bg-gold px-8 py-3 text-sm font-bold tracking-[0.12em] text-ink uppercase transition hover:bg-paper"
            >
              Talk to a Consultant
            </a>
          </div>

          <CommentSection slug={post.slug} />
        </div>
      </article>

      <Footer />
    </main>
  );
}
