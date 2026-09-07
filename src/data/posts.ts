export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "flow"; steps: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; heading: string; text: string[] }
  | { type: "art"; variant: "nodes" | "ladder" | "compare" }
  | { type: "photo"; src: string; alt: string };

export type Post = {
  slug: string;
  title: string;
  deck: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  // A real photo for the article hero and its card. Until one is supplied,
  // the hero/card fall back to a built-in illustration, see ArticleArt.tsx.
  image?: { src: string; alt: string };
  content: ContentBlock[];
};

// Paste new posts into this array, order does not matter, newest shows
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
    readTime: "6 min read",
    image: {
      src: "https://images.pexels.com/photos/29267512/pexels-photo-29267512.jpeg",
      alt: "A team collaborating together in a modern workspace",
    },
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

      {
        type: "photo",
        src: "https://images.unsplash.com/photo-1752223638233-4c9545333f89?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "A modern workspace setup",
      },

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

      { type: "art", variant: "ladder" },

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

      {
        type: "photo",
        src: "https://images.unsplash.com/photo-1677506048148-0c914dd8197b?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "A technology and business workspace",
      },

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

      { type: "art", variant: "compare" },
    ],
  },
  {
    slug: "buying-an-ai-tool-wont-transform-your-business",
    title: "Buying An AI Tool Won't Transform Your Business. Here's What Will.",
    deck: "The skills, the workflow redesign, and the questions that actually separate AI adoption from AI transformation",
    excerpt:
      "Buying an AI tool doesn't redesign your workflow. Here's what does, from the skills that matter now to exactly what businesses and freelancers should do next.",
    category: "AI & Business",
    date: "2026-09-02",
    readTime: "6 min read",
    image: {
      src: "https://images.pexels.com/photos/34639577/pexels-photo-34639577.jpeg",
      alt: "A person analyzing data on a laptop screen",
    },
    content: [
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

      {
        type: "photo",
        src: "https://plus.unsplash.com/premium_photo-1661420059531-3f33271aac57?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "A professional working with AI-connected systems",
      },

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
          "AI fluency: Understanding what models can and cannot do.",
          "Workflow design: Understanding how work actually moves through an organization.",
          "Technical integration: Connecting AI to the systems where the work happens.",
          "Domain knowledge: Understanding the business problem.",
          "Evaluation: Knowing whether the AI output is actually good enough.",
          "Business judgment: Knowing whether the improvement is worth the cost and complexity.",
        ],
      },
      { type: "p", text: 'That combination is much harder to commoditize than:\n"I know how to use ChatGPT."' },

      {
        type: "photo",
        src: "https://images.pexels.com/photos/5716016/pexels-photo-5716016.jpeg",
        alt: "A person using a laptop with a chart on screen",
      },

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
  {
    slug: "what-businesses-are-actually-buying-from-ai-people",
    title: "What Businesses Are Actually Buying From AI People Right Now",
    deck: "A demand-side look at the jobs, the budgets and the buyer language behind AI work in 2026",
    excerpt:
      "Forget AI trends for a minute. Here is what buyers are actually posting, what enterprises are actually funding, and the one shift underneath all of it: AI work is moving from \"help me use AI\" to \"make AI work inside my business.\"",
    category: "AI Market",
    date: "2026-09-07",
    readTime: "9 min read",
    content: [
      { type: "p", text: "Most AI content tells you what is popular.\nVery little of it tells you what someone is actually paying for." },
      { type: "p", text: "Those are not the same thing." },
      {
        type: "p",
        text: "A technology can dominate every feed and still have almost no budget attached to it. Another one can be quietly funded in every mid-sized company in the country and barely get mentioned.",
      },
      { type: "p", text: "So this piece looks at demand from three separate angles:" },
      {
        type: "ol",
        items: [
          "What buyers are hiring freelancers for right now.",
          "What enterprises are investing in and trying to operationalize.",
          "Where the major platform companies are steering the whole market.",
        ],
      },
      { type: "p", text: "When those three point in the same direction, that direction is worth taking seriously." },
      { type: "p", text: "Right now, they do." },

      { type: "h2", text: "The one-sentence version" },
      {
        type: "quote",
        text: "AI demand is moving from \"help me use AI\" to \"help me connect AI to my business and make it do useful work.\"",
      },
      { type: "p", text: "Everything below is a variation on that sentence." },

      { type: "h2", text: "Signal 1: what buyers are posting" },
      {
        type: "p",
        text: "Marketplace data gives the clearest read on what small and mid-sized businesses are spending on, because the requests are public and specific.",
      },
      {
        type: "p",
        text: "Upwork's 2026 data shows AI-specific skills growing 109% year over year, with AI integration up 178%, AI chatbot development up 71%, AI video generation and editing up 329% and AI data annotation up 154%.",
      },
      {
        type: "p",
        text: "Fiverr's June 2026 marketplace data tells a similar story from a different platform: searches for n8n AI automation up 125%, Claude Code up 938%, AI voice agents up 49%, AI mobile app development up 92% and AI website development up 39%.",
      },
      {
        type: "p",
        text: "But the more useful detail is buried in the same research: the strongest growth is coming from applying AI inside established disciplines, not from isolated AI experimentation.",
      },
      { type: "p", text: "In other words, the market is not converging on one AI skill.\nIt is converging on AI being embedded inside existing business functions." },

      { type: "h2", text: "The five clusters buyers keep asking for" },
      { type: "p", text: "Read enough current job posts and the same five requests keep reappearing." },

      { type: "h3", text: "1. Workflow automation and integration" },
      { type: "p", text: "This is the strongest single cluster." },
      { type: "p", text: "A typical current request looks like this:" },
      {
        type: "flow",
        steps: [
          "CRM",
          "Email and calendar",
          "Slack",
          "AI classification",
          "Lead qualification",
          "Automated follow-up",
          "Reporting",
        ],
      },
      { type: "p", text: "And the requirements list is not the interesting part.\nThe tone of it is." },
      {
        type: "ul",
        items: [
          "webhooks and REST APIs",
          "structured data extraction",
          "human review steps",
          "error handling and retries",
          "deduplication",
          "logging",
          "documentation",
        ],
      },
      { type: "p", text: "Buyers are explicitly asking for production workflows, not demos." },
      { type: "p", text: "That single word, production, is the most important change in this market." },

      { type: "h3", text: "2. CRM plus AI" },
      { type: "p", text: "This shows up so often it deserves to be treated as its own submarket." },
      { type: "p", text: "The requests are remarkably consistent:" },
      {
        type: "ul",
        items: [
          "lead capture",
          "lead qualification and scoring",
          "CRM updates and pipeline movement",
          "personalized follow-up",
          "appointment booking",
          "duplicate prevention",
          "human escalation",
        ],
      },
      {
        type: "p",
        text: "One current real estate buyer wants website and social leads classified, budget and location and timeline extracted, a score attached, the record written to Airtable, the salesperson notified and duplicates suppressed.",
      },
      { type: "p", text: "Notice what is not being bought there." },
      { type: "p", text: "Not the model.\nNot the prompt.\nNot the chatbot." },
      { type: "p", text: "What is being bought is an operating process that turns inbound demand into booked work." },

      { type: "h3", text: "3. AI voice" },
      { type: "p", text: "Voice has quietly become a real commercial market rather than a demo category." },
      {
        type: "p",
        text: "Current examples include an outbound sales agent built on Vapi, Twilio, n8n, Apollo, CRM and Slack, and a bilingual phone receptionist for a clinic that qualifies callers, quotes prices, books and reschedules appointments, syncs with the calendar and transfers to a human when needed.",
      },
      { type: "p", text: "Both attracted heavy competition almost immediately, which itself is a demand signal." },
      { type: "p", text: "And again, the request is not \"build me a voice bot.\"" },
      { type: "p", text: "The request is:\nmake the phone system perform part of my sales or service operation." },

      { type: "h3", text: "4. Retrieval and internal knowledge" },
      { type: "p", text: "RAG used to mean \"a chatbot over some PDFs.\"" },
      { type: "p", text: "The current version of the request is considerably larger:" },
      {
        type: "ul",
        items: [
          "document ingestion and chunking",
          "embeddings and vector search",
          "citations",
          "conversation history",
          "authentication and permissions",
          "observability",
          "tool calling and agent actions",
          "an architecture that can absorb more agents later",
        ],
      },
      { type: "p", text: "That is not a chatbot project.\nThat is an application architecture project." },

      { type: "h3", text: "5. AI-native development" },
      {
        type: "p",
        text: "Fiverr reported searches for Claude Code specialists up 938% over six months, and current job posts back it up: buyers want people who can use agentic coding tools to ship products and internal systems faster.",
      },
      { type: "p", text: "One current post is unusually blunt about it, asking for someone who understands Claude, Claude Code, MCP, agents, APIs and business automation, and stating plainly:" },
      { type: "quote", text: "This is not a prompt-writing or chatbot-only role." },
      { type: "p", text: "That line is the whole market in miniature." },
      { type: "p", text: "Buyers are starting to separate the AI user from the AI implementer." },

      { type: "art", variant: "nodes" },

      { type: "h2", text: "Signal 2: what enterprises are funding" },
      { type: "p", text: "The freelance market shows you what is being bought this month.\nEnterprise research shows you where the budget is heading over the next few years." },
      {
        type: "p",
        text: "Stanford's 2026 AI Index puts organizational AI adoption at 88%, with generative AI in use in at least one business function at 70% of organizations. Agent deployment, however, is still in the single digits across nearly every business function.",
      },
      { type: "p", text: "That gap is the whole opportunity." },
      {
        type: "p",
        text: "Microsoft's 2026 Work Trend Index reports active agents in Microsoft 365 growing 15x year over year, and 18x in large enterprises. Its FY2026 Q4 update claims more than 30 million paid Copilot seats, nearly 40 million agents registered through Agent 365 and over 650,000 MCP actions exposed across Dynamics.",
      },
      { type: "p", text: "Whether every one of those agents produces real economic value is a separate question.\nThe direction of the investment is not in doubt." },

      { type: "h2", text: "Signal 3: where the platforms are steering" },
      { type: "p", text: "This is the part that surprised me most, because the strategies converge so tightly." },
      {
        type: "ul",
        items: [
          "Microsoft: copilots to agents to enterprise context to MCP to governance.",
          "Google: Gemini Enterprise, an agent platform, agent identity and registries, long-running multi-step workflows.",
          "AWS: Bedrock, AgentCore, MCP infrastructure, agent identity, evaluation and enterprise controls.",
          "Oracle: agents that reason, coordinate, follow approval policies and execute transactions inside business applications.",
          "ServiceNow: AI wired into the workflow layer as a system of action.",
          "Anthropic: Claude and Claude Code with enterprise controls, usage visibility and compliance surfaces.",
          "OpenAI: chat to tools to delegated work to agents inside enterprise workflows.",
        ],
      },
      {
        type: "p",
        text: "OpenAI's August 2026 enterprise data is a useful marker here: agentic usage already accounts for 64% of combined Codex and ChatGPT enterprise output tokens, and agent use is spreading into legal, sales, recruiting and marketing.",
      },
      { type: "p", text: "Every one of those roadmaps ends in the same place." },
      { type: "quote", text: "AI is not being sold as a separate application. It is being embedded into the workflow layer." },

      { type: "h2", text: "The gap nobody has closed yet" },
      { type: "p", text: "Here is the finding I would tattoo on the wall." },
      {
        type: "p",
        text: "Deloitte's 2026 State of AI found that 37% of organizations are still using AI at a fairly surface level, 30% are redesigning key processes and 34% are transforming processes, products or business models. Only about 25% had moved at least 40% of their AI pilots into production.",
      },
      { type: "p", text: "So capability exists.\nImplementation lags." },
      {
        type: "p",
        text: "McKinsey's 2026 research puts a number on what closing that gap is worth: organizations that redesigned workflows were 5.3 times more likely to report enterprise value capture than organizations that left workflows unchanged, 32% versus 6%.",
      },
      {
        type: "p",
        text: "PwC finds the top 20% of companies capture 74% of AI-driven economic value, and those leaders are roughly twice as likely to have redesigned workflows.",
      },
      { type: "p", text: "IBM's 2026 Tech Leader Study adds the uncomfortable half: only 11% of CIOs and CTOs feel fully prepared for the scale of agent deployment they expect within twelve months." },
      { type: "p", text: "Capability is not the bottleneck anymore.\nOperating it is." },

      { type: "art", variant: "ladder" },

      { type: "h2", text: "The six problems buyers are actually paying to solve" },
      { type: "p", text: "Strip the tools away and almost every request reduces to one of six sentences." },
      {
        type: "ol",
        items: [
          "\"We have too much manual work.\" They buy automation and workflow design.",
          "\"Our systems don't talk to each other.\" They buy APIs, webhooks, integrations and CRM work.",
          "\"We have information but can't use it.\" They buy retrieval, knowledge systems and search.",
          "\"Our staff use AI but the company gets no value.\" They buy workflow redesign, training, governance and measurement.",
          "\"We want AI to actually perform work.\" They buy agents, tools, permissions, memory and orchestration.",
          "\"We deployed AI and we don't trust it.\" They buy evaluation, monitoring, guardrails and human review.",
        ],
      },
      {
        type: "p",
        text: "That last one is growing fast. NIST specifically identifies post-deployment monitoring as an emerging need, because AI behaviour shifts in real environments and organizations are dealing with fragmented logging, performance drift and heavy human-monitoring burdens.",
      },

      { type: "h2", text: "Four stages, and where the money currently sits" },
      { type: "p", text: "It helps to think of buyers as sitting in one of four stages." },
      { type: "h3", text: "Stage 1: What is AI?" },
      { type: "p", text: "Mostly finished for serious businesses." },
      { type: "h3", text: "Stage 2: How do our employees use AI?" },
      { type: "p", text: "Very active. Large, and increasingly commoditized." },
      { type: "h3", text: "Stage 3: How do we integrate AI into our workflows?" },
      { type: "p", text: "This is where the strongest current implementation demand sits." },
      { type: "h3", text: "Stage 4: How do we redesign the company around agents?" },
      { type: "p", text: "This is where the enterprise market is heading, and where every platform roadmap points." },
      { type: "p", text: "If you are selling, stage 3 is the doorway.\nIf you are learning, stage 4 is where you are heading." },

      { type: "h2", text: "One warning before anyone gets excited" },
      { type: "p", text: "The wrong conclusion from all of this is:\n\"Agents are the future, therefore every company needs an agent.\"" },
      {
        type: "p",
        text: "Deloitte reports that 74% of leaders expect nearly half of their business processes to be redesigned around agents within four years, but only 5% say their processes are highly prepared and only 15% have scaled multi-agent adoption across functions.",
      },
      { type: "p", text: "So the actual opportunity is not putting an agent everywhere." },
      { type: "p", text: "It is helping a business work out where agents genuinely make sense, and then implementing those few reliably." },

      { type: "h2", text: "The language shift to pay attention to" },
      { type: "p", text: "Two requests, a year apart." },
      { type: "p", text: "Old:\n\"Build me a chatbot.\"" },
      {
        type: "p",
        text: "New:\n\"Connect our knowledge base, CRM and internal APIs to an AI system that can answer questions, take approved actions and escalate exceptions.\"",
      },
      { type: "p", text: "The second contains AI, data, workflow, APIs, security, human judgment and monitoring." },
      { type: "p", text: "That is not a bigger version of the first request.\nIt is a different job." },

      { type: "art", variant: "compare" },

      {
        type: "callout",
        heading: "BrokeTechie Takeaway",
        text: [
          "Buyers are no longer shopping for AI. They are shopping for someone who can make AI work inside the systems they already run.",
          "The strongest current demand sits in automation, integration, CRM workflows, voice, retrieval and AI-native development.",
          "The strongest future demand sits in agents, evaluation and governance, because enterprises are funding scale before they have worked out how to operate it.",
          "The gap between AI capability and AI implementation is the market.\nThat gap is where the money is.",
        ],
      },
    ],
  },
  {
    slug: "the-ai-demand-map-where-the-money-actually-is",
    title: "The AI Demand Map: Where The Money Actually Is",
    deck: "Four buyer layers, ten opportunities, and a scoring model for telling real demand from loud demand",
    excerpt:
      "Huge demand and a good business are not the same thing. This is a map of the AI market by layer, the ten opportunities worth building on, and the ones quietly commoditizing underneath the hype.",
    category: "AI Market",
    date: "2026-09-06",
    readTime: "8 min read",
    content: [
      { type: "p", text: "There is a trap in AI career advice that almost everyone falls into." },
      { type: "p", text: "You find a category with enormous demand.\nYou learn it.\nYou start selling it." },
      { type: "p", text: "And then you discover that everyone else found the same category, that buyers treat it as a commodity, that the work does not repeat, and that nobody renews." },
      { type: "p", text: "Demand alone is a terrible signal." },
      { type: "quote", text: "Something can have enormous demand and still be a terrible business opportunity." },
      { type: "p", text: "So this article does something more useful than listing hot skills.\nIt maps the market by layer, then scores it." },

      { type: "h2", text: "The market has four buyer layers" },
      { type: "p", text: "Almost every AI purchase sits in one of four layers, and they behave completely differently." },

      { type: "h3", text: "Layer 1: AI access" },
      { type: "p", text: "Models, chat interfaces, copilots, prompting, AI productivity training." },
      { type: "p", text: "Buyer question:\n\"How can my employees use AI?\"" },
      { type: "p", text: "Large. Rapidly commoditizing. The tools themselves are absorbing this layer." },

      { type: "h3", text: "Layer 2: AI production" },
      { type: "p", text: "AI content, images, video, copy, chatbots, AI-assisted coding." },
      { type: "p", text: "Buyer question:\n\"Can AI produce something for us?\"" },
      { type: "p", text: "Also large, but under real pricing pressure. When the output is the product and the output gets cheaper, the price follows." },

      { type: "h3", text: "Layer 3: AI implementation" },
      { type: "p", text: "Automation, integrations, agents, CRM workflows, retrieval, APIs, databases, voice, monitoring, workflow redesign." },
      { type: "p", text: "Buyer question:\n\"How do we make AI actually work inside our business?\"" },
      { type: "p", text: "This is currently the best freelance and small-agency opportunity in the entire market." },

      { type: "h3", text: "Layer 4: AI operating model" },
      { type: "p", text: "Agentic workflows, multi-agent orchestration, governance, identity, permissions, observability, organizational redesign." },
      { type: "p", text: "Buyer question:\n\"How should our company operate when AI can perform work?\"" },
      { type: "p", text: "The biggest strategic prize, and the one that requires the most credibility to reach." },

      { type: "art", variant: "ladder" },

      { type: "h2", text: "The first big finding" },
      { type: "p", text: "The market is not primarily asking:\n\"Who can build an AI agent?\"" },
      { type: "p", text: "It is asking:\n\"Who can connect AI to the systems where our business already operates?\"" },
      {
        type: "p",
        text: "Current buyer requests bear this out. One wants n8n connected to CRM, email, calendar and Slack with LLM classification, structured extraction, retries, deduplication, rate limits, logging and documentation. Another wants n8n plus Supabase plus OpenAI plus CRM integrations with production-grade error handling.",
      },
      { type: "p", text: "Another wants an ongoing developer for n8n, APIs, WhatsApp, OpenAI, Claude, Google Workspace, CRM, databases, VPS deployment and maintenance." },
      { type: "p", text: "That last one is not a project.\nThat is a role." },

      { type: "h2", text: "Automation is not one market" },
      { type: "p", text: "\"AI automation\" is too coarse to be useful. It splits into five distinct workflows, and they sell to different people." },

      { type: "h3", text: "Lead automation" },
      { type: "flow", steps: ["Lead", "Enrichment", "Qualification", "CRM", "Follow-up", "Appointment"] },
      { type: "p", text: "Strong in real estate, agencies, B2B, SaaS, home services and financial services." },

      { type: "h3", text: "Support automation" },
      { type: "flow", steps: ["Customer message", "Intent detection", "Knowledge retrieval", "Response", "Escalation"] },
      { type: "p", text: "Retrieval, help desk, CRM, Slack, email, WhatsApp and voice all converge here." },

      { type: "h3", text: "Sales automation" },
      { type: "flow", steps: ["Prospect", "Research", "Qualification", "Outreach", "Reply handling", "CRM", "Meeting"] },
      { type: "p", text: "Higher risk, higher value, and the place agents get genuinely interesting." },

      { type: "h3", text: "Operations automation" },
      { type: "flow", steps: ["Input document", "AI processing", "Decision", "System update", "Approval", "Action"] },
      { type: "p", text: "Invoices, applications, reports, internal requests, compliance and procurement." },

      { type: "h3", text: "Knowledge automation" },
      { type: "flow", steps: ["Documents", "Ingestion", "Retrieval", "Reasoning", "Action"] },
      { type: "p", text: "This is where retrieval stops being a chatbot and starts being infrastructure." },

      { type: "h2", text: "What is really happening with MCP" },
      { type: "p", text: "MCP is easy to misread as a product." },
      {
        type: "p",
        text: "It is not. Upwork launched its own MCP server in August 2026 so agents can search talent, post jobs and manage contracts from inside AI tools. Microsoft is exposing hundreds of thousands of MCP actions across Dynamics. AWS is building MCP into its enterprise platform. Oracle is letting developers drive agentic applications with tools like Claude Code inside governed workflows.",
      },
      { type: "p", text: "Every one of those is plumbing." },
      { type: "p", text: "So the offer is not:\n\"I build MCP servers.\"" },
      { type: "p", text: "The offer is:\n\"I give your AI agents controlled access to the systems they need in order to do work.\"" },
      { type: "p", text: "Same technology. Completely different conversation about price." },

      { type: "h2", text: "The market above the software" },
      { type: "p", text: "There is a bigger structural argument worth knowing about." },
      {
        type: "p",
        text: "Gartner has suggested that up to $234 billion of enterprise application software spending could be exposed to what it calls agentic arbitrage by 2030, roughly 20% of enterprise SaaS spend, as agents increasingly execute outcomes across systems without anyone touching the traditional interface.",
      },
      { type: "p", text: "Forecasts that far out are directional, not gospel." },
      { type: "p", text: "But the direction matters:\nthe long-term opportunity is not AI software. It is AI sitting above existing software and orchestrating it." },

      { type: "h2", text: "The sleeper opportunity: reliability" },
      { type: "p", text: "Everyone is selling \"build me an agent.\"\nAlmost nobody is selling \"here is how you know it works.\"" },
      { type: "p", text: "But production systems need:" },
      {
        type: "ul",
        items: [
          "evaluation datasets and test cases",
          "quality metrics and regression testing",
          "hallucination checks",
          "logging and observability",
          "cost tracking",
          "alerts and human escalation",
          "failure handling",
        ],
      },
      { type: "p", text: "Current higher-budget automation projects already ask for monitoring, hallucination reduction and response accuracy by name." },
      { type: "p", text: "And there is a second wave behind it." },
      {
        type: "p",
        text: "Gartner projects that by 2028 the average Fortune 500 company could run more than 150,000 agents, up from fewer than 15 in 2025, while only around 13% of organizations currently believe they have the right agent governance in place.",
      },
      { type: "p", text: "Take the exact numbers with salt. Take the shape seriously." },
      { type: "p", text: "More agents means more identity, permission, monitoring, security, cost and ownership problems." },
      { type: "p", text: "That is a service market forming in plain sight." },

      { type: "h2", text: "Why the business model matters more than the skill" },
      { type: "p", text: "A one-off build is a transaction.\nA system that has to keep running is a relationship." },
      { type: "p", text: "The same technical work can be sold either way:" },
      {
        type: "flow",
        steps: [
          "Implementation",
          "Monitoring and maintenance",
          "Optimization",
          "Expansion to the next workflow",
        ],
      },
      {
        type: "p",
        text: "There is a pricing shift underneath this too. Reuters reported in August 2026 that India's IT services market is moving toward performance-based contracts as clients demand productivity and lower cost.",
      },
      { type: "p", text: "Old:\n\"We charge for a thousand hours.\"" },
      { type: "p", text: "New:\n\"We charge to deliver a measurable outcome.\"" },
      { type: "p", text: "Which is only possible if you can measure the outcome. Which loops right back to evaluation." },

      { type: "h2", text: "Score opportunities, don't rank them by hype" },
      { type: "p", text: "Here is the scoring model I would use on any AI opportunity before committing months to it." },
      {
        type: "ul",
        items: [
          "Demand: 20 points",
          "Growth: 10",
          "Buyer budget: 15",
          "Competition: 10",
          "Technical difficulty: 10",
          "Repeatability: 10",
          "Recurring revenue potential: 10",
          "ROI clarity: 5",
          "Fit with skills you already have: 5",
          "Content and audience potential: 5",
        ],
      },
      { type: "p", text: "Two of those deserve more attention than they usually get." },
      { type: "h3", text: "Repeatability" },
      { type: "p", text: "Ask how much of what you build you can reuse on the next client." },
      {
        type: "p",
        text: "A real estate lead system might be 70% reusable. A clinic receptionist maybe 60%. A fully bespoke AI application maybe 20%.",
      },
      { type: "p", text: "A project where you reinvent everything can easily be worse business than a smaller one where you already own most of the architecture." },
      { type: "h3", text: "ROI clarity" },
      { type: "p", text: "If the buyer cannot explain the value of the outcome in one sentence, the sale will be slow and the price will be low." },
      { type: "p", text: "\"We miss calls after 5pm\" is clear.\n\"We want to be more AI-forward\" is not." },

      { type: "h2", text: "The ten opportunities, ranked" },
      { type: "p", text: "Applying that model to everything in the research, this is where I land. These are strategic judgments built from the market signals above, not observed market statistics." },
      {
        type: "ol",
        items: [
          "AI workflow automation. Best overall. High demand, clear ROI, many buyers, repeatable, natural maintenance revenue.",
          "AI integration. Best technical position. APIs, CRM, databases, SaaS. Foundational, and integrations break, which means renewals.",
          "AI agent implementation. Best growth. Retrieve, reason, use tools, act, escalate. Crowded but expanding faster than the crowd.",
          "CRM plus AI. Best verticalized play. Real estate, agencies, B2B, home services, healthcare.",
          "AI voice plus workflow. Best productized service. Call, qualify, book, sync, follow up. Buyers understand it instantly.",
          "Retrieval and enterprise knowledge. Best higher-ticket technical work, especially once it moves from answers to actions.",
          "AI reliability and evaluation. Best emerging recurring revenue, with markedly less competition than agent building.",
          "AI-native development. Fastest-growing developer niche, and increasingly competitive. Sell what the tooling lets you ship, not the tooling.",
          "AI governance. Best enterprise opportunity. High barrier, high ceiling, very sticky.",
          "AI search visibility. Real and growing, but less mature and more volatile than implementation work.",
        ],
      },
      { type: "p", text: "And below the line:" },
      {
        type: "ul",
        items: [
          "Generic AI content: huge demand, heavy pricing pressure.",
          "Generic chatbots: commoditizing quickly.",
          "Prompt engineering alone: a genuinely useful skill, a weak standalone business.",
        ],
      },

      { type: "art", variant: "compare" },

      { type: "h2", text: "The competitive insight underneath all of it" },
      { type: "p", text: "Consider two people with identical technical skills." },
      { type: "p", text: "Person A says:\n\"I build n8n automations.\"" },
      { type: "p", text: "Person B says:\n\"I redesign lead management using AI, automation and CRM integration.\"" },
      { type: "p", text: "Person A is selling a tool.\nPerson B is selling a business capability." },
      { type: "p", text: "As the tools get cheaper and easier, that difference stops being cosmetic and starts being the entire margin." },

      {
        type: "callout",
        heading: "BrokeTechie Takeaway",
        text: [
          "The AI market has four layers, and they are not equally worth your time.",
          "Layer 1 and 2 are commoditizing. Layer 3, implementation, is where the current money is. Layer 4 is where the enterprise budget is heading.",
          "Score opportunities on repeatability and recurring revenue, not just on demand. A crowded market with reusable architecture beats an exotic one you rebuild every time.",
          "AI is getting easier.\nImplementation is becoming the moat.",
        ],
      },
    ],
  },
  {
    slug: "stop-selling-ai-start-selling-the-outcome",
    title: "Stop Selling AI. Start Selling The Outcome.",
    deck: "How to turn AI capability into an actual offer: discover, build, operate",
    excerpt:
      "Nobody wants an agent. They want fewer missed leads, fewer missed calls and less manual work. Here is how to package AI implementation into three offers, price them honestly, and turn them into recurring revenue.",
    category: "AI Careers",
    date: "2026-09-05",
    readTime: "9 min read",
    content: [
      { type: "p", text: "Knowing what the market wants is only half of a business." },
      { type: "p", text: "The other half is turning that knowledge into something a buyer can say yes to." },
      { type: "p", text: "And this is where most technically capable people lose the deal." },
      { type: "p", text: "They lead with the mechanism." },
      { type: "p", text: "Compare:" },
      { type: "p", text: "\"I build n8n AI automations.\"" },
      { type: "p", text: "\"I automate lead qualification and CRM follow-up.\"" },
      {
        type: "p",
        text: "\"I build AI lead systems that qualify, route and follow up with every new lead automatically, so nothing sits unanswered.\"",
      },
      { type: "p", text: "Same work. Three completely different conversations." },
      { type: "quote", text: "The client does not fundamentally want the technology. They want the problem to become smaller." },

      { type: "h2", text: "The structure of an offer" },
      { type: "p", text: "Every offer worth selling can be written out as one chain." },
      {
        type: "flow",
        steps: [
          "Buyer",
          "Problem",
          "Trigger",
          "Desired outcome",
          "Service",
          "Deliverables",
          "Price",
          "Recurring revenue",
        ],
      },
      { type: "p", text: "The trigger is the step people skip, and it is the one that decides whether anyone buys this quarter or next year." },
      { type: "p", text: "A trigger is the event that makes the problem suddenly urgent:" },
      {
        type: "ul",
        items: [
          "\"We're growing and drowning.\"",
          "\"We just hired two people to do copy-and-paste work.\"",
          "\"Our existing automation broke.\"",
          "\"We're missing calls after hours.\"",
          "\"We bought six tools and staff still move data by hand.\"",
        ],
      },
      { type: "p", text: "If your marketing never names a trigger, your marketing is describing a capability nobody has scheduled time to care about." },

      { type: "h2", text: "The offers worth building" },
      { type: "p", text: "Working through the current demand, six offers stand out. Every price below is a strategic positioning range built from the market signals, not a guarantee of what any given buyer pays." },

      { type: "h3", text: "1. Workflow automation" },
      { type: "p", text: "Buyer: small and mid-sized businesses, agencies, ecommerce, professional services, home services." },
      { type: "p", text: "Problem: a team doing repetitive work by hand across too many tools." },
      { type: "p", text: "Deliverables:" },
      {
        type: "ul",
        items: [
          "workflow audit and process map",
          "automation architecture",
          "implementation and API integrations",
          "AI classification and structured extraction",
          "routing, notifications and CRM updates",
          "error handling, retries and logging",
          "testing and documentation",
        ],
      },
      { type: "p", text: "Positioning range: roughly $300 to $750 entry, $750 to $2,000 standard, $2,000 to $5,000 and up for complex builds." },
      { type: "p", text: "Recurring: very high. Monitoring, fixes, API maintenance, new requests, model updates, cost review." },

      { type: "h3", text: "2. Systems integration" },
      { type: "p", text: "Buyer: businesses that already own the software but nothing talks to anything." },
      { type: "p", text: "Trigger: \"We bought all these tools and our staff still move information between them manually.\"" },
      { type: "p", text: "Deliverables: integration architecture, API connections, webhooks, authentication, data mapping and transformation, synchronization, error handling, testing and documentation." },
      { type: "p", text: "Positioning range: $750 to $2,500 for a focused integration, $2,500 to $7,500 and up for multi-system work." },
      {
        type: "p",
        text: "Recurring: very high, structurally. Integrations break, APIs change, businesses add systems. This is the strongest retainer foundation of any offer on this list.",
      },

      { type: "h3", text: "3. Lead qualification and follow-up" },
      { type: "p", text: "This is what happens when you stop selling \"automation\" and start selling a named business result." },
      { type: "p", text: "Buyer: real estate, mortgage, insurance, agencies, home services, consultants, local businesses." },
      { type: "p", text: "Problem: leads arrive and get missed, contacted late, badly qualified, entered by hand or followed up inconsistently." },
      {
        type: "flow",
        steps: [
          "Lead capture from web, social or WhatsApp",
          "AI classification",
          "Detail extraction",
          "Lead scoring",
          "CRM record",
          "Routing and assignment",
          "Personalized follow-up",
          "Appointment booking",
          "Human escalation",
        ],
      },
      { type: "p", text: "Positioning range: $1,000 to $3,000 standard, $3,000 to $7,500 and up for complex builds." },
      { type: "p", text: "Recurring: extremely high, because the buyer can see the pipeline every day." },

      { type: "h3", text: "4. AI voice receptionist" },
      { type: "p", text: "The most productizable offer in the entire list, because the value is obvious in one sentence." },
      { type: "p", text: "Buyer: clinics, dentists, real estate, home services, law firms, restaurants, hotels." },
      { type: "p", text: "Problem: missed calls, expensive reception cover, high repetitive inbound volume, nobody answering after hours." },
      {
        type: "flow",
        steps: [
          "Incoming call",
          "Intent understood",
          "Question answered",
          "Caller qualified",
          "Appointment booked",
          "CRM updated",
          "Transfer to a human when needed",
        ],
      },
      { type: "p", text: "Positioning range: $750 to $1,500 starter, $1,500 to $3,500 business, $3,500 to $7,500 and up advanced." },
      { type: "p", text: "Recurring: extremely high. Call review, prompt and knowledge updates, workflow maintenance, analytics." },

      { type: "h3", text: "5. Knowledge assistant" },
      { type: "p", text: "Buyer: law firms, consultancies, healthcare, SaaS, agencies, financial firms, any large internal team." },
      { type: "p", text: "Problem: \"Our people cannot find the information they need.\"" },
      {
        type: "ul",
        items: [
          "document ingestion and chunking",
          "embeddings and vector storage",
          "retrieval and reranking",
          "citations",
          "permissions and authentication",
          "conversation history",
          "monitoring and evaluation",
        ],
      },
      { type: "p", text: "Positioning range: $2,000 to $5,000 basic, $5,000 to $15,000 and up for enterprise scope." },
      { type: "p", text: "Harder to deliver than it looks, which is exactly why it holds its price better." },

      { type: "h3", text: "6. Reliability and evaluation" },
      { type: "p", text: "The offer almost nobody is making yet." },
      { type: "p", text: "Buyer: companies that already deployed AI." },
      { type: "p", text: "Problem: \"It works. We just have no idea when it doesn't.\"" },
      {
        type: "ul",
        items: [
          "evaluation datasets and test cases",
          "automated evaluation and quality metrics",
          "hallucination testing",
          "logging, alerts and cost tracking",
          "human review process",
          "regression testing before every change",
        ],
      },
      { type: "p", text: "Positioning range: $1,500 to $5,000 to set up, then $500 to $3,000 a month to operate." },
      { type: "p", text: "Recurring by definition, and the competition here is a fraction of what it is in agent building." },

      { type: "art", variant: "nodes" },

      { type: "h2", text: "The offer that opens every other door" },
      { type: "p", text: "There is a seventh offer, and strategically it might be the most important one." },
      { type: "p", text: "The workflow audit." },
      { type: "p", text: "Buyer: any business that knows it should be doing something with AI and has no idea what." },
      { type: "p", text: "Deliverables: process mapping, friction analysis, a list of AI and automation opportunities, risk notes, rough ROI estimates, prioritization and an implementation roadmap." },
      { type: "p", text: "Positioning range: $250 to $750 entry, $750 to $2,500 for a deeper engagement." },
      { type: "p", text: "The revenue is not the point." },
      {
        type: "flow",
        steps: ["Audit", "Automation", "Integration", "Agent", "Monitoring", "Expansion"],
      },
      { type: "p", text: "A cheap, genuinely useful audit converts a stranger into a client and hands you a roadmap of everything they will need next." },
      { type: "p", text: "It is the difference between hunting for projects and being handed them." },

      { type: "h2", text: "Three offers, not fifteen" },
      { type: "p", text: "Everything above collapses into a business model with three parts." },
      { type: "h3", text: "Discover" },
      { type: "p", text: "The AI workflow audit. Find where AI actually belongs." },
      { type: "h3", text: "Build" },
      { type: "p", text: "Automation, integration, lead systems, voice, retrieval, agents. Build the thing." },
      { type: "h3", text: "Operate" },
      { type: "p", text: "Monitoring, evaluation, optimization, maintenance, expansion. Keep it working and make it better." },
      { type: "p", text: "Discover, build, operate." },
      { type: "p", text: "That is a business.\nA list of fifteen gigs is not." },

      { type: "h2", text: "Who to sell to first" },
      { type: "p", text: "Not every buyer is equally worth chasing when you are starting." },
      {
        type: "ol",
        items: [
          "Real estate. Leads have obvious value, response speed is measurable, CRM workflows are standard, voice fits naturally.",
          "Agencies. High lead volume, repetitive processes, CRM-heavy, and they resell what you build.",
          "Home services. Phone-heavy, lead-heavy, scheduling-heavy, and the ROI needs no explaining.",
          "B2B. Higher ticket, more complex, longer sales cycle.",
          "Healthcare and professional services. Excellent value, but compliance and risk raise the bar considerably.",
        ],
      },

      { type: "h2", text: "Do not niche too early, but do niche" },
      { type: "p", text: "There is a distinction worth getting right." },
      { type: "p", text: "Do not make the whole business \"AI automation for dentists\" on day one." },
      { type: "p", text: "Build the capability around operational workflows, then create vertical offers on top of it:" },
      {
        type: "ul",
        items: [
          "AI lead automation for real estate",
          "AI receptionist for clinics",
          "AI lead qualification for agencies",
        ],
      },
      {
        type: "p",
        text: "The underlying architecture barely changes. That is where the profit is, because you reuse templates, workflows, prompts, integrations, code and evaluation harnesses.",
      },
      { type: "p", text: "Different shop window. Same warehouse." },

      { type: "h2", text: "Positioning, in order of strength" },
      { type: "p", text: "Work your way down this list until it stops describing your competition." },
      {
        type: "ol",
        items: [
          "\"AI expert.\" Means nothing.",
          "\"AI automation specialist.\" Better.",
          "\"AI automation and integration specialist.\" Stronger.",
          "\"AI workflow and integration specialist.\" Stronger still, because it names the business process.",
          "\"AI implementation specialist.\" Strongest.",
        ],
      },
      { type: "p", text: "Then explain it in one sentence:" },
      {
        type: "quote",
        text: "I help businesses find their highest-value workflows, redesign them around AI, and connect the systems needed to turn that into measurable results.",
      },

      { type: "h2", text: "What actually changed about freelancing" },
      { type: "p", text: "The old model was simple." },
      { type: "p", text: "Client has a task.\nFreelancer executes the task." },
      { type: "p", text: "The AI-era model is different." },
      { type: "p", text: "Client has a business problem.\nSomeone works out what system would solve it." },
      { type: "p", text: "That second job needs more than technical skill. It needs:" },
      {
        type: "ul",
        items: [
          "how businesses work",
          "how workflows move",
          "how systems connect",
          "what AI can and cannot be trusted with",
          "how to measure a result",
          "how to handle failure",
          "whether the improvement is even worth the complexity",
        ],
      },
      { type: "p", text: "That combination is considerably harder to commoditize than knowing a tool." },

      { type: "art", variant: "ladder" },

      {
        type: "callout",
        heading: "BrokeTechie Takeaway",
        text: [
          "Lead with the outcome, not the mechanism. Nobody has budget for an agent. They have budget for a problem.",
          "Build three offers, not fifteen: discover, build, operate. The audit opens the relationship, the build funds it, the retainer sustains it.",
          "Score every offer on how much of it you can reuse. Reusability is the difference between freelancing and a business.",
          "And say it plainly:\nI find the workflow, redesign it around AI, connect the systems, and prove it worked.",
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
