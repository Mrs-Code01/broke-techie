import { Numeral, Section } from "./Stage";

type Track = { name: string; note: string; d: string };

const TRACKS: Track[] = [
  {
    name: "AI & Prompt Engineering",
    note: "Building and tuning AI workflows for teams",
    d: "m12 3 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5ZM19 15l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z",
  },
  {
    name: "AI Data Annotation",
    note: "Labelling and reviewing model training data",
    d: "M3 5c0-1.1 4-2 9-2s9 .9 9 2-4 2-9 2-9-.9-9-2ZM3 5v14c0 1.1 4 2 9 2s9-.9 9-2V5",
  },
  {
    name: "Web Development",
    note: "Sites and web apps that clients pay to keep running",
    d: "m8 6-6 6 6 6M16 6l6 6-6 6",
  },
  {
    name: "UI / UX Design",
    note: "Product and interface work, not just pretty screens",
    d: "M12 3a9 9 0 1 0 0 18h2a3 3 0 0 0 0-6h-1a2 2 0 0 1 0-4h2a4 4 0 0 0 0-8h-3Z",
  },
  {
    name: "Short-Form Video Editing",
    note: "Reels, shorts and ads for creators and brands",
    d: "m22 8-6 4 6 4V8ZM2 6h12v12H2z",
  },
  {
    name: "No-Code & Automation",
    note: "Wiring tools together so businesses stop doing it by hand",
    d: "M3 3h8v8H3zM13 13h8v8h-8zM13 3h8v8h-8zM3 13h8v8H3z",
  },
  {
    name: "Social Media Management",
    note: "Owning a brand's feed, not just posting to it",
    d: "M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1ZM16 8a5 5 0 0 1 0 8",
  },
  {
    name: "Data Analytics",
    note: "Turning a client's messy numbers into decisions",
    d: "M3 3v18h18M7 15l4-4 3 3 5-6",
  },
];

export default function LineUp() {
  return (
    <Section
      id="lineup"
      eyebrow="The Line Up"
      title={
        <>
          Eight skills
          <br />
          <span className="text-gold">clients are buying now</span>
        </>
      }
      lede="We cut the list down on purpose. These are the areas with live demand today, not the ones that were hot three years ago. Pick one and go deep."
    >
      <ul className="grid gap-x-10 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4">
        {TRACKS.map((t, i) => (
          <li
            key={t.name}
            className="group flex items-center gap-4 border-b border-glow/15 py-5 transition hover:border-gold/60"
          >
            <Numeral n={i + 1} />
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 text-glow transition group-hover:text-gold"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d={t.d} />
            </svg>
            <div className="min-w-0 flex-1">
              <p className="text-base font-bold tracking-tight text-paper">{t.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-paper/60">{t.note}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-paper/60">
        We deliberately do not publish rate charts. What you can charge depends on
        your work, your clients and how you pitch, not on a number we put on a
        website.
      </p>
    </Section>
  );
}
