import { Section } from "./Stage";

const PILLARS = [
  {
    title: "Skill that sells",
    body: "Not tutorials for the sake of it. We only teach the skills clients are actively paying for right now.",
  },
  {
    title: "Proof before pitch",
    body: "You leave with portfolio pieces, a profile that reads like a professional wrote it, and a pitch that does not sound like everyone else.",
  },
  {
    title: "The work is yours",
    body: "We shorten the path and correct what you build. We cannot do the hours for you, and we will not pretend results arrive without them.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About Us"
      title={
        <>
          We teach broke techies
          <br />
          <span className="text-gold">how to finally earn online</span>
        </>
      }
      lede="Plenty of people can code, design, or write. Far fewer can turn that into income. That gap is the only thing we work on."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="relative overflow-hidden border border-glow/20 bg-grape/40 p-8 sm:p-10">
          <div className="grain pointer-events-none absolute inset-0 opacity-40" aria-hidden />
          <p className="relative text-lg leading-relaxed text-paper/85">
            <span className="font-display text-2xl text-gold">Broke Tech Bro &amp; Broke Tech Sis</span>{" "}
            started with a simple observation: a lot of people around us had the
            skills and none of the income. Everyone had watched the courses. Nobody
            had been paid.
          </p>
          <p className="relative mt-5 leading-relaxed text-paper/70">
            So we rebuilt the path backwards, starting from what a client actually
            hands money over for, then working out the shortest honest route to get
            you there. That route is now a community, a short list of skills worth
            learning, and a physical round table where you can ask the questions the
            free videos never answer.
          </p>
          <p className="relative mt-5 leading-relaxed text-paper/70">
            No income screenshots. No countdown timers. No promises about what you
            will be earning by a particular month. Just the unglamorous, repeatable
            work of becoming someone worth hiring.
          </p>
        </div>

        <ul className="space-y-4">
          {PILLARS.map((p, i) => (
            <li
              key={p.title}
              className="group flex gap-5 border border-glow/20 bg-void/60 p-6 transition hover:border-gold/50"
            >
              <span className="font-display text-3xl leading-none text-gold/50 transition group-hover:text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-paper">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
