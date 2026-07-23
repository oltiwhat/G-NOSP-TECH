export type Author = {
  name: string;
  role: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: Author;
  date: string;
  gradient: string;
  featured?: boolean;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "engineering-zero-trust-systems",
    title: "Engineering Zero-Trust Systems That Scale",
    excerpt:
      "Zero-trust is a mindset, not a vendor. Here is how we design identity-first architectures that stay secure as they grow.",
    category: "Cybersecurity",
    author: { name: "Sofia Reyes", role: "Head of Security" },
    date: "2026-06-18",
    gradient: "from-rose-500/30 to-blue-600/25",
    featured: true,
    content: `Most breaches don't start with a sophisticated exploit. They start with implicit trust — a flat network, a shared secret, or a service account that was never meant to be reachable.

Zero-trust flips the default: **no request is trusted because of where it came from**. Every call is authenticated, authorized, and encrypted.

## Start with identity

Identity is the new perimeter. Issue short-lived, scoped credentials to every workload and verify them on every hop.

\`\`\`ts
async function authorize(request: Request): Promise<boolean> {
  const token = request.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) return false;

  const claims = await verifyJwt(token, {
    issuer: "https://auth.gnosp.tech",
    audience: "forge-api",
  });

  return claims.scope.includes("orders:write");
}
\`\`\`

## Least privilege by default

Grant the minimum scope a workload needs, and rotate it automatically. Long-lived keys are a liability waiting to be leaked.

> If a credential can do more than its task requires, assume an attacker will eventually use that excess.

## Make it observable

Zero-trust without telemetry is guessing. Emit a structured audit event for every authorization decision so you can detect anomalies in real time.

\`\`\`bash
# tail live authorization decisions
gnosp audit stream --filter "decision=deny" --since 5m
\`\`\`

The result is a system where a compromised node can do far less damage — and where you actually notice when something tries.`,
  },
  {
    slug: "shipping-llm-features-to-production",
    title: "Shipping LLM Features to Production Without the Chaos",
    excerpt:
      "Demos are easy; production is hard. A pragmatic playbook for taking generative AI from prototype to reliable product.",
    category: "AI",
    author: { name: "Marcus Chen", role: "Co-Founder & CTO" },
    date: "2026-06-09",
    gradient: "from-blue-600/35 to-violet-600/25",
    featured: true,
    content: `The gap between an impressive demo and a dependable feature is wider than it looks. Here is the checklist we run before any LLM feature ships.

## Ground the model in your data

Retrieval-augmented generation keeps answers factual and cites sources. Build an evaluation set early — before you tune prompts.

\`\`\`python
def answer(question: str) -> str:
    context = retrieve(question, top_k=5)
    prompt = build_prompt(question, context)
    return complete(prompt, temperature=0.2)
\`\`\`

## Evaluate, don't vibe-check

Ship a golden set of questions with expected properties and assert on them in CI. If quality drops, the build fails.

## Guardrail the edges

Constrain outputs, redact secrets, and cap retries. A model that calls tools needs the same limits as any other integration.

> Reliability is a feature. Users forgive a slower answer far more easily than a wrong one.

## Measure in production

Track latency, token cost, and harmful-output rate per route. The models improve; your budgets and users should not suffer for it.`,
  },
  {
    slug: "kubernetes-cost-optimization",
    title: "A Practical Guide to Kubernetes Cost Optimization",
    excerpt:
      "Most clusters are over-provisioned and under-instrumented. Practical moves that cut spend without cutting reliability.",
    category: "Cloud",
    author: { name: "Sonny Liston", role: "Founder & CEO" },
    date: "2026-05-27",
    gradient: "from-cyan-500/30 to-blue-600/25",
    content: `Cloud bills are a mirror of your architecture decisions. Before negotiating rates, fix the shape of your workloads.

## Right-size before you reserve

Start by measuring actual usage. Most teams provision for peak and idle the rest of the day.

\`\`\`bash
kubectl top pods -n production --sort-by=memory
\`\`\`

## Use requests and limits honestly

Set requests to the real p50 and limits a little above p99. Under-setting requests just moves the pain to the node.

\`\`\`yaml
resources:
  requests:
    cpu: "250m"
    memory: "256Mi"
  limits:
    cpu: "500m"
    memory: "512Mi"
\`\`\`

## Let it scale, then reserve

Autoscale first, observe for two weeks, then commit reserved capacity to the steady baseline. You will typically cut 30–40% with no user-visible change.`,
  },
  {
    slug: "event-driven-architectures",
    title: "Designing Event-Driven Architectures That Don't Fall Over",
    excerpt:
      "Events unlock decoupling — and a thousand new ways to fail. Patterns for building pipelines that survive load and partial outages.",
    category: "Architecture",
    author: { name: "Daniel Okoye", role: "Head of Design" },
    date: "2026-05-14",
    gradient: "from-violet-600/35 to-fuchsia-500/25",
    content: `Event-driven systems are powerful and unforgiving. The same decoupling that speeds you up will also hide failures if you are not careful.

## Make events explicit and versioned

An event is a contract. Name it, schema it, and version it so consumers can evolve independently.

\`\`\`ts
type OrderPlaced = {
  type: "order.placed";
  version: 1;
  orderId: string;
  amountCents: number;
  occurredAt: string;
};
\`\`\`

## Design for redelivery

Consumers must be idempotent. The broker will deliver twice; your logic should not create two shipments.

> If a message can arrive more than once, assume it will — and make that free.

## Backpressure is a feature

Apply rate limits and dead-letter queues. A slow consumer should degrade gracefully, not take down the stream.`,
  },
  {
    slug: "senior-engineers-code-review",
    title: "The Senior Engineer's Guide to Kind Code Review",
    excerpt:
      "Code review is where team culture is built. A framework for reviews that raise quality without burning people out.",
    category: "Engineering",
    author: { name: "Marcus Chen", role: "Co-Founder & CTO" },
    date: "2026-04-30",
    gradient: "from-emerald-500/30 to-teal-500/20",
    content: `The best reviews are fast, specific, and kind. They catch real problems and make the author better — without becoming a bottleneck.

## Separate must-fix from nitpick

Not every comment is equal. Label blocking issues clearly and let style live in the linter.

\`\`\`ts
// MUST: this path can divide by zero
const ratio = total === 0 ? 0 : value / total;
\`\`\`

## Ask, don't dictate

A question invites reasoning; a command invites resentment. "What happens if the cache is stale here?" beats "Fix this."

> Review the code, not the person. The goal is a better system, not a smaller author.

## Keep it moving

Long-lived PRs rot. Aim to review within a few hours, and never let a trivial fix wait a day.`,
  },
];

export const blogCategories: string[] = Array.from(
  new Set(posts.map((p) => p.category)),
);

export function estimateReadingTime(content: string): number {
  const words = content
    .replace(/```[\s\S]*?```/g, "")
    .trim()
    .split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelated(slug: string, limit = 3): Post[] {
  const current = getPost(slug);
  if (!current) return [];
  return posts
    .filter((p) => p.slug !== slug && p.category === current.category)
    .concat(posts.filter((p) => p.slug !== slug && p.category !== current.category))
    .slice(0, limit);
}
