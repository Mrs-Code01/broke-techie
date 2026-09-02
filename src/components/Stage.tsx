import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** The circular gold mark plus wordmark, shared by the homepage nav, footer, and blog pages. */
export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-gold">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5 5h17A1.5 1.5 0 0 1 22 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 17.5v-11A1.5 1.5 0 0 1 3.5 5Zm8.5 3.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Z"
          />
        </svg>
      </span>
      <span className="font-display text-lg tracking-wide text-paper uppercase">
        Broke<span className="text-gold">Techies</span>
      </span>
    </span>
  );
}

/** Gold notched banner used as the eyebrow on every section, like "EVENTS" on the poster. */
export function Ticket({ children }: { children: ReactNode }) {
  return (
    <div className="relative inline-flex notch-both bg-gold px-8 py-2 sm:px-10">
      <span className="stripe-gold absolute inset-0" aria-hidden />
      <span className="relative text-sm font-bold tracking-[0.22em] text-ink sm:text-base">
        {children}
      </span>
    </div>
  );
}

/** Small gold index chip: 01, 02, 03 ... */
export function Numeral({ n }: { n: number }) {
  return (
    <span className="font-display grid h-9 w-9 shrink-0 place-items-center bg-gold text-base text-ink tabular-nums">
      {String(n).padStart(2, "0")}
    </span>
  );
}

/** The purple stage: radial spotlight, curtain edges, film grain. */
export function StageBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,#4b1180_0%,#2a0b4a_38%,#17062b_66%,#0b0316_100%)]" />
      <div className="curtain absolute inset-y-0 left-0 w-[8vw] opacity-40 [mask-image:linear-gradient(to_right,black,transparent)]" />
      <div className="curtain absolute inset-y-0 right-0 w-[8vw] opacity-40 [mask-image:linear-gradient(to_left,black,transparent)]" />
      <div className="grain absolute inset-0 opacity-50" />
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  tight = false,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
  tight?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative border-t border-glow/15 px-5 ${tight ? "py-20" : "py-24 sm:py-32"}`}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-center text-center">
          <Ticket>{eyebrow}</Ticket>
          <h2 className="font-display mt-7 text-4xl leading-[0.92] tracking-tight text-paper uppercase sm:text-6xl">
            {title}
          </h2>
          {lede && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">
              {lede}
            </p>
          )}
        </Reveal>
        <Reveal delay={120} className="mt-14">
          {children}
        </Reveal>
      </div>
    </section>
  );
}
