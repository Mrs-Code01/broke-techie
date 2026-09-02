import MobileMenu from "./MobileMenu";
import { StageBackdrop } from "./Stage";

const STATS = [
  { value: "08", label: "Skill tracks" },
  { value: "Free", label: "Round table seat" },
  { value: "In person", label: "Every seminar" },
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Latest Articles", href: "#articles" },
  { label: "Line Up", href: "#lineup" },
  { label: "Journey", href: "#journey" },
  { label: "Answers", href: "#answers" },
  { label: "Round Table", href: "#roundtable" },
];

export default function Hero() {
  return (
    <header className="relative isolate overflow-hidden">
      <StageBackdrop />

      {/* Spotlight beam washing down over the type */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[70vh] w-[120vw] -translate-x-1/2 bg-[conic-gradient(from_180deg_at_50%_0%,transparent_0deg,rgba(255,196,46,0.10)_18deg,transparent_40deg)] blur-2xl"
        aria-hidden
      />

      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gold">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.5 5h17A1.5 1.5 0 0 1 22 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 17.5v-11A1.5 1.5 0 0 1 3.5 5Zm8.5 3.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Z" />
            </svg>
          </span>
          <span className="font-display text-lg tracking-wide text-paper uppercase">
            Broke<span className="text-gold">Techies</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-paper/60 md:flex">
          <a href="#about" className="transition hover:text-gold">About</a>
          <a href="#articles" className="transition hover:text-gold">Latest Articles</a>
          <a href="#lineup" className="transition hover:text-gold">Line Up</a>
          <a href="#journey" className="transition hover:text-gold">Journey</a>
          <a href="#answers" className="transition hover:text-gold">Answers</a>
          <a href="#roundtable" className="transition hover:text-gold">Round Table</a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="bg-gold px-5 py-2 text-sm font-bold tracking-[0.12em] text-ink uppercase transition hover:bg-paper"
          >
            Join
          </a>
          <MobileMenu links={NAV_LINKS} />
        </div>
      </nav>

      <div className="relative mx-auto max-w-6xl px-5 pb-28 pt-10 text-center sm:pt-16">
        <p className="text-xs font-bold tracking-[0.3em] text-gold uppercase sm:text-sm">
          The Freelancer Journey
        </p>

        <h1 className="mt-6">
          <span className="sr-only">Broke Tech Bro and Broke Tech Sis</span>
          <span
            aria-hidden
            className="font-display text-grit block text-[17vw] leading-[0.95] tracking-tight text-paper uppercase drop-shadow-[0_0_45px_rgba(168,85,247,0.45)] sm:text-[12rem]"
          >
            Broke Tech
          </span>
          <span
            aria-hidden
            className="font-display mt-3 block text-[13.5vw] leading-[0.95] tracking-tight text-gold uppercase drop-shadow-[0_0_45px_rgba(255,196,46,0.35)] sm:text-[9.5rem]"
          >
            Bro <span className="text-magenta">&amp;</span> Sis
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-sm font-bold tracking-[0.14em] text-paper uppercase sm:text-lg">
          One laptop. <span className="text-magenta">Many skills.</span> One paycheck.
        </p>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/60">
          The journey from broke techie to booked freelancer — mapped, taught, and
          walked with someone who has already made the trip.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#roundtable"
            className="notch-both w-full bg-gold px-10 py-4 text-sm font-bold tracking-[0.12em] text-ink uppercase transition hover:bg-paper sm:w-auto"
          >
            Book the Round Table
          </a>
          <a
            href="#lineup"
            className="w-full border border-gold/50 px-10 py-4 text-sm font-bold tracking-[0.12em] text-gold uppercase transition hover:bg-gold/10 sm:w-auto"
          >
            See the Line Up
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-3 divide-x divide-glow/20 border-y border-glow/20">
          {STATS.map((s) => (
            <div key={s.label} className="px-3 py-6">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-2xl leading-tight text-gold sm:text-4xl">{s.value}</dd>
              <p className="mt-2 text-[0.7rem] font-medium tracking-[0.14em] text-paper/70 uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </dl>
      </div>

      {/* Motion streaks, echoing the runners at the poster's base */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full text-glow/25"
        viewBox="0 0 1200 120"
        fill="none"
        aria-hidden
      >
        <path d="M0 118C220 60 380 96 600 62s420-52 600-14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M0 100C240 44 420 80 640 46s400-40 560-4" stroke="currentColor" strokeWidth="1" opacity=".6" />
      </svg>
    </header>
  );
}
