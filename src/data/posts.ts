export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "flow"; steps: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; heading: string; text: string[] };

export type Post = {
  slug: string;
  title: string;
  deck: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: ContentBlock[];
};

// Paste new posts into this array — order does not matter, newest shows
// first on /blog automatically based on `date`. A `p` block's text can
// contain "\n" to break short lines within one paragraph.
export const POSTS: Post[] = [
  {
    slug: "most-businesses-are-using-ai-few-are-working-differently",
    title: "Most Businesses Are Using AI. Few Are Actually Working Differently.",
    deck: "Why AI adoption is becoming less interesting than what companies do with it",
    excerpt:
      "AI adoption is exploding, but a lot of work still looks remarkably similar to how it looked before AI. Here is the difference between using AI and actually redesigning work around it.",
    category: "AI & Business",
    date: "2026-09-02",
    readTime: "12 min read",
    content: [
      { type: "p", text: "There's a strange contradiction in the AI market right now." },
      {
        type: "p",
        text: "AI adoption is exploding.\nBut a lot of work still looks remarkably similar to how it looked before AI.",
      },
      {
        type: "p",
        text: "Employees have ChatGPT.\nThey have Claude.\nThey have Copilot.\nThey have AI meeting notes.\nThey have AI writing assistants.\nThey have AI coding tools.\nThey have AI research tools.",
      },
      {
        type: "p",
        text: "And yet someone is still copying information from one system into another.\nSomeone is still manually qualifying leads.\nSomeone is still turning meeting notes into CRM records.\nSomeone is still checking the same documents every morning.\nSomeone is still preparing the same report every Friday.",
      },
      { type: "p", text: "So here's the question I think we should be asking in 2026:" },
      { type: "quote", text: "If almost everyone has access to AI, why hasn't work changed more dramatically?" },
      { type: "p", text: "The answer may be that we've been measuring the wrong thing." },

      { type: "h2", text: "AI adoption isn't the same as AI transformation" },
      {
        type: "p",
        text: "Stanford's 2026 AI Index reports that organizational AI adoption reached 88% in its survey data. Generative AI is being used in at least one business function by 70% of organizations.",
      },
      { type: "p", text: "Those numbers sound enormous.\nAnd they are." },
      {
        type: "p",
        text: "But they don't necessarily mean that 88% of companies have redesigned how they operate around AI.",
      },
      { type: "p", text: "That's a different achievement." },
      { type: "p", text: "The distinction matters." },
      { type: "p", text: "Imagine a sales employee using AI to write follow-up emails.\nThat's AI adoption." },
      { type: "p", text: "Now imagine the company redesigning its sales workflow so that:" },
      {
        type: "ul",
        items: [
          "incoming leads are enriched automatically",
          "customer context is gathered from multiple systems",
          "AI identifies buying signals",
          "leads are prioritized",
          "follow-up drafts are generated",
          "high-value opportunities are routed to the right salesperson",
          "the CRM is updated automatically",
          "humans review important decisions",
        ],
      },
      { type: "p", text: "That's something different.\nThat's workflow transformation." },
      {
        type: "p",
        text: "The first gives a person a better tool.\nThe second changes the system that person works inside.",
      },

      { type: "h2", text: "The newest research makes this even more interesting" },
      {
        type: "p",
        text: "A new NBER working paper published in August 2026 examined how workers actually use generative AI across occupations and tasks.",
      },
      { type: "p", text: "Its conclusion is particularly useful for understanding the current moment:" },
      { type: "quote", text: "AI adoption is widespread but shallow." },
      {
        type: "p",
        text: "AI is being used across many occupations and tasks, but within most occupations, fewer than half of workers adopt it.",
      },
      { type: "p", text: "That tells us something important." },
      { type: "p", text: "The market isn't simply divided into:\nAI users vs non-AI users." },
      { type: "p", text: "There is another dimension:\nHow deeply is AI integrated into the work?" },
      {
        type: "p",
        text: "Someone might use AI for five minutes to rewrite an email.\nSomeone else might use an AI agent to research accounts, update systems, prepare recommendations and execute a multi-step workflow.",
      },
      {
        type: "p",
        text: 'Both people are technically "using AI."\nTheir organizations are not getting the same value from it.',
      },

      { type: "h2", text: "This creates a new AI maturity problem" },
      { type: "p", text: "I think we're moving toward four distinct stages." },

      { type: "h3", text: "Stage 1: AI Experimentation" },
      {
        type: "p",
        text: "Someone discovers ChatGPT.\nThey ask questions.\nThey generate content.\nThey summarize documents.\nThey try different prompts.",
      },
      { type: "p", text: "This is useful.\nBut it's mostly individual experimentation." },

      { type: "h3", text: "Stage 2: AI-Assisted Work" },
      { type: "p", text: "The employee starts incorporating AI into regular work.\nMaybe AI helps with:" },
      { type: "ul", items: ["emails", "research", "presentations", "coding", "documentation", "analysis", "brainstorming"] },
      { type: "p", text: "Productivity improves.\nBut the underlying workflow remains mostly unchanged." },
      { type: "p", text: "AI has been added to the workflow." },

      { type: "h3", text: "Stage 3: Repeatable AI Workflows" },
      { type: "p", text: 'The organization notices:\n"We keep using AI for this."' },
      { type: "p", text: "So someone turns the process into a repeatable workflow." },
      { type: "p", text: "Maybe:" },
      {
        type: "flow",
        steps: ["Lead arrives", "Data gets enriched", "AI evaluates it", "CRM is updated", "Salesperson receives context"],
      },
      { type: "p", text: "Now AI isn't just something an employee remembers to use.\nIt's part of the process." },

      { type: "h3", text: "Stage 4: AI-Enabled Operations" },
      { type: "p", text: "This is where things become much more interesting." },
      { type: "p", text: "AI has access to:" },
      {
        type: "ul",
        items: [
          "relevant context",
          "business systems",
          "tools",
          "organizational knowledge",
          "defined permissions",
          "evaluation mechanisms",
          "human review",
        ],
      },
      {
        type: "p",
        text: "The AI isn't merely helping someone complete a task.\nIt's participating in the operating process.",
      },
      { type: "p", text: "That's increasingly visible in the latest enterprise data." },
      {
        type: "p",
        text: "OpenAI reports that its frontier enterprise users are moving from assistance toward execution, with agents increasingly connected to company context and tools.",
      },

      { type: "h2", text: "The real divide may be depth, not adoption" },
      {
        type: "p",
        text: 'This is why I think the next AI conversation needs to move beyond:\n"Does your company use AI?"',
      },
      { type: "p", text: "That question is becoming less useful." },
      { type: "p", text: "A better set of questions is:" },
      {
        type: "ul",
        items: [
          "Where does AI actually enter the workflow?",
          "What can it access?",
          "What can it do?",
          "What decisions can it influence?",
          "What happens when it is wrong?",
          "Who reviews the result?",
          "How is success measured?",
          "Can the workflow be repeated?",
        ],
      },
      { type: "p", text: "Those questions tell you much more about AI maturity." },

      { type: "h2", text: "Consider two companies" },
      { type: "p", text: 'Both tell you:\n"We use AI."' },

      { type: "h3", text: "Company A" },
      { type: "p", text: "Employees use ChatGPT to write emails, summarize meetings and brainstorm." },
      { type: "p", text: "Useful?\nAbsolutely." },
      { type: "p", text: "But most work still moves manually between people and systems." },

      { type: "h3", text: "Company B" },
      {
        type: "p",
        text: "AI is connected to the company's knowledge and systems.\nIt helps research prospects.\nIt prepares customer context.\nIt updates records.\nIt routes work.\nIt creates drafts.\nIt triggers follow-up.",
      },
      { type: "p", text: "Humans review high-risk decisions.\nThe company monitors outcomes." },
      { type: "p", text: "Both companies use AI.\nBut their operating models are completely different." },
      { type: "p", text: "That's the distinction that matters." },

      { type: "h2", text: "And this is where AI agents become interesting" },
      { type: "p", text: "The conversation around AI agents can easily become too technical.\nPeople start talking about:" },
      { type: "ul", items: ["models", "tools", "memory", "function calling", "MCP", "orchestration", "multi-agent systems"] },
      { type: "p", text: "All of those things matter.\nBut the business question comes first:" },
      { type: "p", text: "What work should the agent actually be responsible for?" },
      { type: "p", text: "OpenAI's latest enterprise data gives an interesting signal here." },
      {
        type: "p",
        text: "Among its enterprise customers, agentic use is spreading beyond software development. Since February, weekly active Codex users grew substantially in legal, sales, recruiting and marketing.",
      },
      { type: "p", text: "That doesn't mean every business needs an AI agent." },
      { type: "p", text: "It means the boundary between AI that advises and AI that executes is becoming more important." },

      { type: "h2", text: "The AI tool isn't the transformation" },
      { type: "p", text: "This is one of the biggest mistakes businesses can make." },
      { type: "p", text: "They buy an AI tool.\nThen they expect transformation." },
      { type: "p", text: "But a tool doesn't automatically redesign a process." },
      { type: "p", text: "Consider customer support." },
      { type: "p", text: "You could buy an AI chatbot.\nThat's an AI tool." },
      { type: "p", text: "Or you could redesign support:" },
      {
        type: "flow",
        steps: [
          "Customer question",
          "AI identifies intent",
          "Retrieves relevant account information",
          "Checks previous interactions",
          "Determines whether the issue is routine or sensitive",
          "Resolves routine cases",
          "Escalates exceptions",
          "Updates the support system",
          "Measures resolution quality",
        ],
      },
      { type: "p", text: "The second approach isn't really about buying a chatbot.\nIt's about redesigning the workflow." },

      { type: "h2", text: "This changes what AI skills are valuable" },
      { type: "p", text: "If AI is becoming easier to access, simply knowing how to access it becomes less differentiated." },
      { type: "p", text: "The valuable skill stack becomes broader." },
      {
        type: "ol",
        items: [
          "AI fluency — Understanding what models can and cannot do.",
          "Workflow design — Understanding how work actually moves through an organization.",
          "Technical integration — Connecting AI to the systems where the work happens.",
          "Domain knowledge — Understanding the business problem.",
          "Evaluation — Knowing whether the AI output is actually good enough.",
          "Business judgment — Knowing whether the improvement is worth the cost and complexity.",
        ],
      },
      { type: "p", text: 'That combination is much harder to commoditize than:\n"I know how to use ChatGPT."' },

      { type: "h2", text: "There's also a warning here" },
      { type: "p", text: "Deeper AI integration creates new problems." },
      {
        type: "p",
        text: "The more access AI has to company systems, the more important permissions, governance, monitoring and human oversight become.",
      },
      {
        type: "p",
        text: "Stanford's 2026 AI Index reports that knowledge gaps remain one of the biggest barriers to responsible AI implementation, alongside budget constraints and regulatory uncertainty.",
      },
      {
        type: "p",
        text: "OpenAI similarly notes that connecting agents to company systems introduces risks and requires rules around where agents operate, what information they can access, what actions they can take and when people review decisions.",
      },
      { type: "p", text: "So deeper AI adoption isn't simply:\nMore AI = better." },
      { type: "p", text: "It's:\nMore useful AI + better workflow design + appropriate controls = potentially more value." },

      { type: "h2", text: "What should businesses do?" },
      { type: "p", text: 'I wouldn\'t start with:\n"Where can we put AI?"' },
      { type: "p", text: 'I\'d start with:\n"Where is work currently getting stuck?"' },
      { type: "p", text: "Look for:" },
      {
        type: "ul",
        items: [
          "repetitive manual work",
          "information handoffs",
          "slow research",
          "unnecessary data entry",
          "expensive administrative tasks",
          "unstructured information",
          "repeated decisions",
          "delays between systems",
          "work that requires employees to constantly switch contexts",
        ],
      },
      { type: "p", text: "Then ask:\nCould AI meaningfully improve this part of the process?" },
      { type: "p", text: 'Not:\n"Can AI do this?"' },
      { type: "p", text: "Those are different questions." },

      { type: "h2", text: "What should freelancers learn?" },
      { type: "p", text: "This shift creates an interesting opportunity." },
      { type: "p", text: 'Instead of positioning yourself as:\n"I build AI agents."' },
      { type: "p", text: "You can position around the business problem." },
      {
        type: "p",
        text: 'For example:\n"I help real estate teams reduce lead leakage by connecting AI qualification, CRM workflows and follow-up."',
      },
      { type: "p", text: "That's stronger." },
      { type: "p", text: "Because the technology is the mechanism.\nThe outcome is the product." },
      { type: "p", text: "The same principle applies to:" },
      {
        type: "ul",
        items: [
          "AI automation",
          "CRM automation",
          "AI voice systems",
          "internal knowledge systems",
          "AI search",
          "customer support",
          "sales workflows",
          "AI coding systems",
          "agentic operations",
        ],
      },
      { type: "quote", text: "The client doesn't fundamentally want the technology.\nThey want the problem to become smaller." },

      { type: "h2", text: "What this means for people learning AI" },
      { type: "p", text: "Don't stop learning the tools.\nBut don't stop there." },
      { type: "p", text: "Learn:" },
      {
        type: "ul",
        items: ["AI", "how businesses work", "how workflows work", "how systems connect", "how to measure results", "how to handle failure"],
      },
      { type: "p", text: "That combination is becoming much more interesting." },

      { type: "h2", text: "The bigger idea" },
      { type: "p", text: 'The first phase of AI adoption was about access.\n"Can I use AI?"' },
      { type: "p", text: 'The next phase was about experimentation.\n"What can AI do?"' },
      { type: "p", text: 'The next phase is increasingly about execution.\n"What work can we redesign because AI can now do this?"' },
      { type: "p", text: "That's a much harder question.\nAnd potentially a much more valuable one." },
      { type: "p", text: "Because the biggest AI advantage may not belong to the company with the most AI tools." },
      { type: "p", text: "It may belong to the company that has figured out how to turn those capabilities into repeatable operating processes." },

      {
        type: "callout",
        heading: "BrokeTechie Takeaway",
        text: [
          "AI adoption is becoming a weak measure of AI maturity.",
          "A company can have AI everywhere and still operate almost exactly as it did before.",
          "The more useful question is:\nWhat has actually changed because AI exists?",
          'If the answer is:\n"Employees have another tool."\nYou\'re probably still in the adoption stage.',
          'If the answer is:\n"Several important workflows now operate differently."\nThat\'s where things get interesting.',
          "The future AI advantage may not be access to better AI.\nIt may be the ability to turn AI capability into better work.",
        ],
      },
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
