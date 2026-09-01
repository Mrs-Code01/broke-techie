const LINKS = [
  {
    heading: "Explore",
    items: [
      { label: "About us", href: "#about" },
      { label: "The line up", href: "#lineup" },
      { label: "The come up", href: "#journey" },
      { label: "Straight answers", href: "#answers" },
    ],
  },
  {
    heading: "Get in",
    items: [
      { label: "Round table", href: "#roundtable" },
      { label: "Join the community", href: "#contact" },
      { label: "Become a speaker", href: "#contact" },
      { label: "Partner with us", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-glow/20 bg-void">
      <div className="grain pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      {/* Closing hype band, in the spirit of the poster's sign-off */}
      <div className="relative px-5 py-16 text-center">
        <p className="font-display text-4xl leading-none tracking-tight text-magenta uppercase sm:text-7xl">
          Anticipate!
        </p>
        <p className="mt-4 text-xs font-bold tracking-[0.28em] text-gold uppercase sm:text-sm">
          &#9733; Stay tuned &#9733;
        </p>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 border-t border-glow/15 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.5 5h17A1.5 1.5 0 0 1 22 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 17.5v-11A1.5 1.5 0 0 1 3.5 5Zm8.5 3.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Z" />
              </svg>
            </span>
            <span className="font-display text-lg tracking-wide text-paper uppercase">
              Broke<span className="text-gold">Techies</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/70">
            BrokeTechies is a community teaching skilled but
            unpaid techies how to finally earn online. One laptop, many skills, one
            paycheck.
          </p>
          <p className="mt-6 text-sm text-paper/70">
            <a href="mailto:hello@broketechies.com" className="transition hover:text-gold">
              hello@broketechies.com
            </a>
          </p>
        </div>

        {LINKS.map((group) => (
          <nav key={group.heading}>
            <h2 className="text-[0.7rem] font-bold tracking-[0.16em] text-gold uppercase">
              {group.heading}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-paper/65 transition hover:text-paper">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-glow/15 px-5 py-6 text-xs text-paper/35 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Broke Tech Bro &amp; Broke Tech Sis. All rights reserved.</p>
        <p className="tracking-[0.2em] uppercase">One community. Many skills. One victory.</p>
      </div>
    </footer>
  );
}
