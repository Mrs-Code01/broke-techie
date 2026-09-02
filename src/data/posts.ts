export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  trending?: boolean;
  content: string[];
};

// Paste new posts into this array — order does not matter. "Recent" and
// "Trending" on /blog are worked out automatically from `date` and `trending`.
export const POSTS: Post[] = [
  {
    slug: "price-your-first-freelance-project",
    title: "How To Price Your First Freelance Project Without Underselling Yourself",
    excerpt:
      "Most beginners lose money on their first client because they quote a number that feels safe instead of one that covers the work. Here is a better way to land on a figure.",
    category: "Pricing",
    date: "2026-08-28",
    readTime: "6 min read",
    trending: true,
    content: [
      "The first quote you send sets the tone for every quote after it. Undercharge once and you have taught that client, and yourself, what your time is worth — and it is hard to walk that number back up later.",
      "Start from the outcome, not the hours. A client is not paying for the time it takes you to build something; they are paying for the problem going away. Price against what the result is worth to them, then sanity-check that number against a rate that would make the hours worthwhile for you.",
      "If you genuinely do not know what to charge yet, quote a fixed project price instead of an hourly rate. It protects you from feeling guilty about getting faster, and it protects the client from an open-ended bill.",
      "Build in a buffer for revisions before you are asked for it. Two rounds of feedback included, anything past that billed separately — say it up front, in writing, and nobody feels ambushed later.",
      "Your first price will not be perfect. It only has to be defensible. You can raise it on the next client the moment you have proof this one was worth more than you charged.",
    ],
  },
  {
    slug: "portfolio-mistake-costing-you-clients",
    title: "The Portfolio Mistake That Is Costing You Clients",
    excerpt:
      "A portfolio full of tutorial clones tells a client you can follow instructions, not that you can solve their problem. Here is what to replace it with.",
    category: "Portfolio",
    date: "2026-08-14",
    readTime: "5 min read",
    trending: true,
    content: [
      "If every project in your portfolio looks like it came from the same course, a client can tell. It is not that the work is bad — it is that it proves you can copy, not that you can think.",
      "Replace at least one tutorial clone with a project built from a real, if small, brief. Invent a fictional client with a specific problem, constraints, and a deadline, then build to that brief the way you would for someone paying you.",
      "Write a short case study next to each piece: what the problem was, what you decided and why, and what you would do differently now. That paragraph does more convincing than the piece itself.",
      "Cut anything you would not want to defend in a call. Three strong, explainable pieces beat twelve filler ones every time — a thin portfolio full of confidence reads better than a full one full of doubt.",
    ],
  },
  {
    slug: "cold-outreach-that-gets-replies",
    title: "Cold Outreach That Actually Gets Replies",
    excerpt:
      "Most cold messages get ignored because they read like a form letter. A few small changes make a client feel like you actually looked at their business.",
    category: "Outreach",
    date: "2026-07-30",
    readTime: "7 min read",
    content: [
      "A message that could have been sent to anyone gets treated like it was sent to everyone — deleted. The fix is not a cleverer template, it is one specific, correct detail about the person you are messaging.",
      "Open with what you noticed, not with who you are. Lead with your name and your services and you sound like every other message in their inbox. Lead with something true about their business and you sound like a person.",
      "Keep the ask small. Do not pitch a full project in the first message — ask for five minutes, or offer one specific idea they can use whether or not they hire you. Small asks get yeses; big asks get silence.",
      "Follow up. Most replies come from the second or third message, not the first. One polite nudge a few days later, adding a little more value each time, outperforms a single perfect message almost every time.",
      "Track what you send. If nothing is landing after twenty genuinely tailored messages, the problem is the offer, not your luck — go fix the offer before you send twenty more.",
    ],
  },
  {
    slug: "ai-tools-freelancers-are-quietly-using",
    title: "Five AI Tools Freelancers Are Quietly Using To Work Faster",
    excerpt:
      "Not the hype tools everyone is posting about — the boring, unglamorous ones that shave real hours off client work every single week.",
    category: "AI & Tools",
    date: "2026-08-05",
    readTime: "5 min read",
    trending: true,
    content: [
      "The tools worth paying for are rarely the ones going viral. They are the small, boring ones that quietly remove an hour of grunt work from your week without you having to think about it.",
      "A transcription and meeting-notes tool pays for itself on the first client call — no more scrambling to write down a brief while you are supposed to be listening to it.",
      "A prompt-based first-draft tool, used for outlines and rough copy rather than final work, gets you from blank page to something editable in minutes instead of an hour.",
      "A background-removal or quick-edit tool for images saves the back-and-forth of asking a client for cleaner source files you do not actually need.",
      "None of this replaces judgement. Clients are still paying for your decisions, your taste, and your ability to catch what a tool gets wrong — the tools just clear the busywork out of the way so you get to that part faster.",
    ],
  },
  {
    slug: "what-to-say-when-a-client-offers-exposure",
    title: "What To Say When A Client Asks You To Work For Exposure",
    excerpt:
      "It comes up for almost everyone eventually. Here is a script that turns the conversation down without burning the relationship.",
    category: "Mindset",
    date: "2026-06-19",
    readTime: "4 min read",
    content: [
      "\"Exposure\" is rarely a real offer — it is a way of asking for free work while making the asking sound generous. You are allowed to say no, and you can do it without sounding difficult.",
      "Acknowledge the opportunity honestly, then name your actual constraint: you take on a limited number of paid projects, and unpaid work does not fit that. That is not an excuse — it is just true, and it does not invite an argument.",
      "Offer an alternative if you want to stay generous: a shorter, clearly-scoped version of the work at a reduced rate, or a referral to someone earlier in their career who is actively looking for exposure work.",
      "If they walk away after you hold the line, that tells you something useful — you just found out for free that they were never going to pay you.",
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
