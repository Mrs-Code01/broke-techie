import { Section } from "./Stage";

const STAGES = [
  {
    title: "Broke",
    body: "Audit what you already have. Choose one skill from the line up and close the other nineteen tabs.",
  },
  {
    title: "Skilled",
    body: "Build real things, not tutorial clones. We set the briefs and review what you produce.",
  },
  {
    title: "Visible",
    body: "Profile, portfolio and positioning, so the people holding budgets can actually find you.",
  },
  {
    title: "Booked",
    body: "Outreach that gets replies. Scripts to work from, objections rehearsed before you meet them.",
  },
  {
    title: "Paid",
    body: "Scope it, invoice it, deliver it, get paid, ask for the referral. Then do it again, better.",
  },
];

export default function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="The Come Up"
      title={
        <>
          Broke to booked,
          <br />
          <span className="text-gold">stage by stage</span>
        </>
      }
      lede="Everyone moves through the same five stages. How long each one takes is down to you, so we are not going to put a number on it. Anyone who does is guessing."
    >
      <ol className="relative grid gap-8 md:grid-cols-5">
        <div
          className="absolute left-0 right-0 top-[1.6rem] hidden h-px bg-gradient-to-r from-glow/10 via-gold/50 to-magenta/40 md:block"
          aria-hidden
        />
        {STAGES.map((s, i) => (
          <li key={s.title} className="relative">
            <span className="font-display relative grid h-[3.25rem] w-[3.25rem] shrink-0 place-items-center rounded-full border border-gold/50 bg-ink text-xl text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display mt-5 text-2xl tracking-wide text-paper uppercase">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-paper/70">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
