import { Section } from "./Stage";

const QA = [
  {
    q: "How long before I start earning?",
    a: "We do not know, and nobody honest will give you a number. It depends on the skill you pick, the hours you actually put in, and how many pitches you are willing to send. Some people get there quickly. Plenty take much longer.",
  },
  {
    q: "Do you guarantee I will get clients?",
    a: "No. We can teach the skill, review your work and show you how to pitch. We cannot make someone hire you, and we are not going to promise that on a website.",
  },
  {
    q: "Do I need a degree or a certificate?",
    a: "No. Clients ask to see work. In practice, almost nobody asks to see a certificate.",
  },
  {
    q: "Is this online or in person?",
    a: "The community runs online. Every round table seminar is physical, and the venue is sent to you once your reservation comes in.",
  },
  {
    q: "What does it cost?",
    a: "Round table seats are free to attend. Anything that ever does cost money will be stated plainly up front, not revealed at the end of a free session.",
  },
  {
    q: "I already have a skill but no clients. Is this for me?",
    a: "That is the exact person this was built for. If you can already build, design or write, the gap is visibility and pitching, and that is most of what we work on.",
  },
];

export default function Answers() {
  return (
    <Section
      id="answers"
      eyebrow="Straight Answers"
      title={
        <>
          No promises.
          <br />
          <span className="text-gold">Just straight answers.</span>
        </>
      }
      lede="The questions people ask us before they join, answered the way we would answer them in the room."
    >
      <dl className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
        {QA.map((item) => (
          <div
            key={item.q}
            className="border border-glow/20 bg-grape/30 p-7 transition hover:border-gold/40"
          >
            <dt className="flex gap-3 text-lg font-bold tracking-tight text-paper">
              <span className="text-gold" aria-hidden>
                &bull;
              </span>
              {item.q}
            </dt>
            <dd className="mt-3 pl-7 text-sm leading-relaxed text-paper/70">{item.a}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
