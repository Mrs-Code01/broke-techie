import Link from "next/link";
import Reveal from "./Reveal";
import { StageBackdrop, Ticket } from "./Stage";

export default function ArticlesTeaser() {
  return (
    <section
      id="articles"
      className="relative isolate overflow-hidden border-t border-glow/15 py-24 sm:py-32"
    >
      <StageBackdrop />

      <Reveal className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
        <Ticket>Latest Articles</Ticket>

        <h2 className="font-display mt-8 text-[13vw] leading-[0.92] tracking-tight text-paper uppercase sm:text-7xl">
          What To Know,
          <br />
          <span className="text-gold">to know what to do</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
          Deeply researched reads that get freelancers and businesses up to speed on
          where AI is actually heading, so you know where to position yourself and
          what to look into next.
        </p>

        <Link
          href="/blog"
          className="notch-both mt-10 bg-gold px-12 py-4 text-sm font-bold tracking-[0.12em] text-ink uppercase transition hover:bg-paper"
        >
          Come In
        </Link>
      </Reveal>
    </section>
  );
}
