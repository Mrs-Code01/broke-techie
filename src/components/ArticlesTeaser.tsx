import Link from "next/link";
import { StageBackdrop, Ticket } from "./Stage";

export default function ArticlesTeaser() {
  return (
    <section
      id="articles"
      className="relative isolate overflow-hidden border-t border-glow/15 py-24 sm:py-32"
    >
      <StageBackdrop />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
        <Ticket>Latest Articles</Ticket>

        <h2 className="font-display mt-8 text-[13vw] leading-[0.92] tracking-tight text-paper uppercase sm:text-7xl">
          What To Know,
          <br />
          <span className="text-gold">to know what to do</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
          Short, direct reads on pricing, pitching, and getting paid — pulled from what
          is actually working for freelancers right now. No hype, no countdown timers.
        </p>

        <Link
          href="/blog"
          className="notch-both mt-10 bg-gold px-12 py-4 text-sm font-bold tracking-[0.12em] text-ink uppercase transition hover:bg-paper"
        >
          Come In
        </Link>
      </div>
    </section>
  );
}
