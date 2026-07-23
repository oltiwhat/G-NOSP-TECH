import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  ShieldCheck,
  Cloud,
  Workflow,
  Boxes,
  LineChart,
  Cpu,
  Lock,
  Code2,
  Network,
  Smartphone,
  Globe,
  Building2,
  GitBranch,
  Webhook,
  PenTool,
  Briefcase,
  Target,
  Lightbulb,
  Users,
  Zap,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    description:
      "Production-grade machine learning and generative AI systems that turn data into decisions.",
    highlights: ["LLM platforms", "Computer vision", "MLOps"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Zero-trust architecture, threat modeling, and continuous security validation at scale.",
    highlights: ["Zero-trust", "Pen testing", "Compliance"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Resilient, cost-efficient cloud platforms engineered for performance and uptime.",
    highlights: ["Kubernetes", "Multi-cloud", "FinOps"],
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Intelligent workflow automation that removes toil and accelerates delivery.",
    highlights: ["RPA", "Event-driven", "Pipelines"],
  },
  {
    icon: Boxes,
    title: "Enterprise Solutions",
    description:
      "Mission-critical platforms tailored to complex organizational requirements.",
    highlights: ["Platform eng", "Integrations", "Governance"],
  },
  {
    icon: LineChart,
    title: "Data & Analytics",
    description:
      "Real-time analytics and data products that power measurable business outcomes.",
    highlights: ["Warehousing", "Streaming", "BI"],
  },
];

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
  description: string;
};

export const statistics: Stat[] = [
  {
    value: 120,
    suffix: "+",
    label: "Enterprise Clients",
    description: "Trusted by teams across regulated industries.",
  },
  {
    value: 340,
    suffix: "+",
    label: "Systems Shipped",
    description: "Production platforms engineered end to end.",
  },
  {
    value: 99.99,
    suffix: "%",
    label: "Uptime SLA",
    description: "Guaranteed reliability for mission-critical workloads.",
  },
  {
    value: 48,
    suffix: "M+",
    label: "Requests / day",
    description: "Processed by the systems we operate.",
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  metrics: { label: string; value: string }[];
  gradient: string;
};

export const featuredProjects: Project[] = [
  {
    name: "Aegis AI",
    category: "Cybersecurity · AI",
    description:
      "An autonomous threat-detection platform that neutralizes attacks in milliseconds using real-time ML.",
    metrics: [
      { label: "Threats blocked", value: "12M+" },
      { label: "Latency", value: "8ms" },
    ],
    gradient: "from-black/30 to-violet-600/20",
  },
  {
    name: "Nimbus Grid",
    category: "Cloud Infrastructure",
    description:
      "A self-healing multi-cloud control plane managing capacity across three providers.",
    metrics: [
      { label: "Nodes", value: "9,400" },
      { label: "Cost saved", value: "37%" },
    ],
    gradient: "from-cyan-500/25 to-black",
  },
  {
    name: "Forge OS",
    category: "Enterprise · Automation",
    description:
      "A unified automation layer that orchestrates 2,000+ internal workflows for a global manufacturer.",
    metrics: [
      { label: "Workflows", value: "2,100+" },
      { label: "Time saved", value: "62%" },
    ],
    gradient: "from-violet-600/30 to-fuchsia-500/20",
  },
];

export type Tech = {
  name: string;
  category: string;
};

export const technologyStack: { category: string; items: Tech[] }[] = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "TypeScript", category: "Language" },
      { name: "Next.js", category: "Framework" },
      { name: "React", category: "Framework" },
      { name: "Node.js", category: "Runtime" },
      { name: "Python", category: "Language" },
      { name: "Go", category: "Language" },
    ],
  },
  {
    category: "Infrastructure & Cloud",
    items: [
      { name: "Kubernetes", category: "Orchestration" },
      { name: "AWS", category: "Cloud" },
      { name: "GCP", category: "Cloud" },
      { name: "Terraform", category: "IaC" },
      { name: "Docker", category: "Containers" },
      { name: "Cloudflare", category: "Edge" },
    ],
  },
  {
    category: "AI & Data",
    items: [
      { name: "PyTorch", category: "ML" },
      { name: "TensorFlow", category: "ML" },
      { name: "Snowflake", category: "Warehouse" },
      { name: "Kafka", category: "Streaming" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Redis", category: "Cache" },
    ],
  },
];

export type Reason = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyChooseUs: Reason[] = [
  {
    icon: Cpu,
    title: "Senior-Only Engineering",
    description:
      "Every line is written by principal engineers with a decade of production experience.",
  },
  {
    icon: Lock,
    title: "Security by Default",
    description:
      "Threat modeling and compliance are built into the foundation, never bolted on.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Native Delivery",
    description:
      "We embed intelligence into products so they improve continuously after launch.",
  },
  {
    icon: LineChart,
    title: "Measurable Outcomes",
    description:
      "Roadmaps are tied to business KPIs, not vanity metrics or feature counts.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "G-NOSP re-architected our core platform and cut infra cost by 40% while improving latency. It felt less like a vendor and more like an extension of our team.",
    name: "Elena Vasquez",
    role: "VP Engineering",
    company: "Northwind",
  },
  {
    quote:
      "Their zero-trust rollout passed our hardest audit on the first attempt. The rigor was unlike anything we had seen before.",
    name: "Marcus Lee",
    role: "CISO",
    company: "Helios Bank",
  },
  {
    quote:
      "We shipped an AI assistant to 3 million users in ten weeks. G-NOSP engineered it like a product, not a prototype.",
    name: "Priya Nair",
    role: "Head of Product",
    company: "Lumen",
  },
  {
    quote:
      "Calm, precise, and obsessively detailed. They turned a fragile system into something we finally trust at 3am.",
    name: "David Okafor",
    role: "CTO",
    company: "Orbital",
  },
];

export const partners: string[] = [
  "Northwind",
  "Helios",
  "Lumen",
  "Orbital",
  "Vertex",
  "Aether",
  "Quanta",
  "Meridian",
];

export type DetailedService = {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  cta: { label: string; href: string };
};

export const servicesDetail: DetailedService[] = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Bespoke applications engineered around your exact workflows, built to scale and evolve with your business.",
    benefits: [
      "Tailored architecture for your domain",
      "Maintainable, test-covered codebases",
      "Ownership transferred, no lock-in",
    ],
    cta: { label: "Start a build", href: "/contact" },
  },
  {
    icon: BrainCircuit,
    title: "AI Development",
    description:
      "Production-grade AI features and assistants built on modern LLMs, grounded in your data and guardrailed for safety.",
    benefits: [
      "Retrieval-augmented, accurate answers",
      "Evaluations and guardrails by default",
      "Seamless product integration",
    ],
    cta: { label: "Explore AI", href: "/services" },
  },
  {
    icon: Network,
    title: "Machine Learning",
    description:
      "End-to-end ML systems — from data pipelines to deployed models — that turn signals into measurable predictions.",
    benefits: [
      "Feature stores and ML pipelines",
      "Continuous training and monitoring",
      "Explainable, auditable models",
    ],
    cta: { label: "Build with ML", href: "/contact" },
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native-quality mobile experiences with buttery performance, offline support, and pixel-perfect design.",
    benefits: [
      "iOS and Android from one codebase",
      "Offline-first and fast cold starts",
      "App Store launch support",
    ],
    cta: { label: "Ship mobile", href: "/contact" },
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Fast, accessible web platforms engineered with modern frameworks for delightful, resilient user experiences.",
    benefits: [
      "Sub-second load times",
      "WCAG-compliant accessibility",
      "Server and edge rendering",
    ],
    cta: { label: "Plan web app", href: "/contact" },
  },
  {
    icon: Building2,
    title: "Enterprise Systems",
    description:
      "Mission-critical platforms for complex organizations, with the governance, integrations, and reliability enterprises demand.",
    benefits: [
      "SSO, RBAC, and audit trails",
      "Legacy system integration",
      "High availability by design",
    ],
    cta: { label: "Talk enterprise", href: "/contact" },
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Resilient, cost-efficient cloud platforms engineered for performance, security, and effortless scale.",
    benefits: [
      "Multi-cloud and hybrid ready",
      "Infrastructure as code",
      "FinOps cost optimization",
    ],
    cta: { label: "Design cloud", href: "/contact" },
  },
  {
    icon: GitBranch,
    title: "DevOps",
    description:
      "Automated delivery pipelines and platform engineering that make shipping safe, fast, and boring — in a good way.",
    benefits: [
      "CI/CD and GitOps workflows",
      "Observability and on-call readiness",
      "Faster, safer releases",
    ],
    cta: { label: "Accelerate delivery", href: "/contact" },
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Zero-trust architecture, threat modeling, and continuous validation that hardens systems without slowing teams down.",
    benefits: [
      "Zero-trust architecture",
      "Pen testing and audits",
      "Compliance readiness",
    ],
    cta: { label: "Get secure", href: "/contact" },
  },
  {
    icon: Webhook,
    title: "API Development",
    description:
      "Robust, well-documented APIs that connect your systems and power partners, with versioning and rate limits built in.",
    benefits: [
      "REST and event-driven APIs",
      "Versioned and documented",
      "Secure by default",
    ],
    cta: { label: "Build APIs", href: "/contact" },
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Human-centered design systems that make complex products feel effortless, consistent, and unmistakably premium.",
    benefits: [
      "Design systems at scale",
      "Research-led decisions",
      "High-fidelity prototypes",
    ],
    cta: { label: "Design with us", href: "/contact" },
  },
  {
    icon: Briefcase,
    title: "IT Consulting",
    description:
      "Senior advisors who help you choose the right architecture, stack, and roadmap — and de-risk the road ahead.",
    benefits: [
      "Architecture and stack reviews",
      "Technical due diligence",
      "Fractional CTO support",
    ],
    cta: { label: "Book a consult", href: "/contact" },
  },
];

export const aboutMission =
  "We exist to engineer intelligent software that moves enterprises forward — systems that are secure by design, beautiful to use, and built to endure far beyond our engagement.";

export const aboutVision =
  "A world where every organization, regardless of size, can wield world-class engineering — where AI, security, and cloud infrastructure are defaults, not luxuries.";

export type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    icon: ShieldCheck,
    title: "Security by Default",
    description:
      "We treat every system as if it protects someone's livelihood, because it does. Security is foundational, never optional.",
  },
  {
    icon: Target,
    title: "Outcome Obsessed",
    description:
      "We measure success in business impact and user delight, not lines of code or features shipped.",
  },
  {
    icon: Lightbulb,
    title: "Craft & Curiosity",
    description:
      "We obsess over the details and stay relentlessly curious about what technology makes possible next.",
  },
  {
    icon: Users,
    title: "Partners, Not Vendors",
    description:
      "We embed with your team, transfer ownership, and care about your systems long after launch.",
  },
  {
    icon: Zap,
    title: "Engineered for Scale",
    description:
      "We build for the load you will have in three years, not just the one you have today.",
  },
  {
    icon: Globe,
    title: "Global by Nature",
    description:
      "Distributed teams, diverse thinking, and round-the-clock delivery across every timezone.",
  },
];

export type Leader = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const leadership: Leader[] = [
  {
    name: "Sonny Liston",
    role: "Founder & CEO",
    bio: "Former principal engineer who scaled platforms to billions of requests. Obsessed with turning hard problems into calm, reliable systems.",
    initials: "SL",
  },
  {
    name: "John J Rambo",
    role: "Co-Founder & CTO",
    bio: "Distributed systems veteran and AI researcher. Believes the best architecture is the one your team can still reason about at 3am.",
    initials: "JR",
  },
];

export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export const timeline: Milestone[] = [
  {
    year: "2016",
    title: "Founded in a garage",
    description:
      "Two engineers, one whiteboard, and a belief that enterprise software could be both powerful and beautiful.",
  },
  {
    year: "2018",
    title: "First enterprise platform",
    description:
      "Shipped a mission-critical system for a Fortune 500 manufacturer, proving the model at scale.",
  },
  {
    year: "2020",
    title: "Security practice born",
    description:
      "Launched a dedicated zero-trust practice as clients faced escalating threats.",
  },
  {
    year: "2022",
    title: "AI-native delivery",
    description:
      "Embedded LLMs and ML into core delivery, shipping intelligent products to millions of users.",
  },
  {
    year: "2024",
    title: "Global engineering hubs",
    description:
      "Opened distributed hubs across three continents for true round-the-clock delivery.",
  },
  {
    year: "2025",
    title: "340+ systems shipped",
    description:
      "Crossed a major milestone of production platforms operating at global scale.",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We immerse in your domain, map constraints, and define the outcomes that actually matter.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architecture, UX, and security are designed together — never as afterthoughts.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Senior engineers ship in tight iterations with tests, observability, and reviews baked in.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We deploy with confidence via progressive rollouts and rigorous validation.",
  },
  {
    step: "05",
    title: "Evolve",
    description:
      "We measure, learn, and continuously improve the system long after day one.",
  },
];

export type ImpactStat = {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
};

export const globalImpact: ImpactStat[] = [
  { value: 32, suffix: "+", label: "Countries served" },
  { value: 180, suffix: "+", label: "Engineers worldwide" },
  { value: 340, suffix: "+", label: "Systems shipped" },
  { value: 99.99, suffix: "%", label: "Avg. uptime SLA", decimals: 2 },
];

export const officeAddress = {
  line1: "201 Mission Street, 12th Floor",
  city: "San Francisco, CA 94105",
  country: "United States",
};

export const businessHours: { day: string; hours: string; open: boolean }[] = [
  { day: "Monday – Friday", hours: "9:00 – 18:00", open: true },
  { day: "Saturday", hours: "10:00 – 14:00", open: true },
  { day: "Sunday", hours: "Closed", open: false },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What kinds of projects does G-NOSP TECH take on?",
    answer:
      "We partner on end-to-end engineering: custom software, AI/ML platforms, cloud infrastructure, DevOps, cybersecurity, and enterprise systems. If it is mission-critical and technically hard, we are interested.",
  },
  {
    question: "How do engagements typically start?",
    answer:
      "With a free discovery call. We learn your domain, constraints, and outcomes, then propose a scoped plan with clear milestones and ownership transfer.",
  },
  {
    question: "Do you work with early-stage startups or only enterprises?",
    answer:
      "Both. We embed senior engineering with startups moving fast, and provide governed, compliant delivery for large enterprises with complex requirements.",
  },
  {
    question: "How do you handle security and compliance?",
    answer:
      "Security is built in from day one — zero-trust architecture, threat modeling, encrypted data, and audit-ready practices aligned to SOC 2 and ISO 27001.",
  },
  {
    question: "What does ongoing support look like after launch?",
    answer:
      "We offer flexible retainers for evolution, monitoring, and on-call support so your system keeps improving long after the first release.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "Most engagements begin within two weeks of a signed proposal. For urgent security or reliability work, we can often mobilize a pod within days.",
  },
];

export type PortfolioProject = {
  id: string;
  title: string;
  slug: string;
  category: string;
  industry: string;
  summary: string;
  technologies: string[];
  gradient: string;
  url: string;
  caseStudy: string;
};

export const portfolioCategories = [
  "AI",
  "Cybersecurity",
  "Cloud",
  "Automation",
  "Enterprise",
  "Data",
] as const;

export const portfolio: PortfolioProject[] = [
  {
    id: "aegis-ai",
    title: "Aegis AI",
    slug: "aegis-ai",
    category: "AI",
    industry: "Cybersecurity",
    summary:
      "An autonomous threat-detection platform that neutralizes attacks in milliseconds using real-time machine learning.",
    technologies: ["LLMs", "PyTorch", "Kubernetes"],
    gradient: "from-black/35 to-violet-600/25",
    url: "https://www.gnosp.tech",
    caseStudy: "/case-studies",
  },
  {
    id: "nimbus-grid",
    title: "Nimbus Grid",
    slug: "nimbus-grid",
    category: "Cloud",
    industry: "Infrastructure",
    summary:
      "A self-healing multi-cloud control plane managing capacity and cost across three providers.",
    technologies: ["Kubernetes", "Terraform", "AWS"],
    gradient: "from-cyan-500/30 to-black",
    url: "https://www.gnosp.tech",
    caseStudy: "/case-studies",
  },
  {
    id: "forge-os",
    title: "Forge OS",
    slug: "forge-os",
    category: "Automation",
    industry: "Manufacturing",
    summary:
      "A unified automation layer orchestrating 2,000+ internal workflows for a global manufacturer.",
    technologies: ["Event-driven", "Go", "Kafka"],
    gradient: "from-violet-600/35 to-fuchsia-500/25",
    url: "https://www.gnosp.tech",
    caseStudy: "/case-studies",
  },
  {
    id: "helix-health",
    title: "Helix Health",
    slug: "helix-health",
    category: "AI",
    industry: "Healthcare",
    summary:
      "A clinical copilot that summarizes records and surfaces insights while staying fully HIPAA-compliant.",
    technologies: ["ML", "Python", "FHIR"],
    gradient: "from-emerald-500/30 to-teal-500/20",
    url: "https://www.gnosp.tech",
    caseStudy: "/case-studies",
  },
  {
    id: "vault-sentinel",
    title: "Vault Sentinel",
    slug: "vault-sentinel",
    category: "Cybersecurity",
    industry: "Finance",
    summary:
      "A zero-trust access platform that passed a top-tier bank's hardest audit on the first attempt.",
    technologies: ["Zero-trust", "Go", "PostgreSQL"],
    gradient: "from-rose-500/30 to-black",
    url: "https://www.gnosp.tech",
    caseStudy: "/case-studies",
  },
  {
    id: "orbit-commerce",
    title: "Orbit Commerce",
    slug: "orbit-commerce",
    category: "Enterprise",
    industry: "Retail",
    summary:
      "A headless commerce platform handling peaks of 1M orders/hour with sub-100ms checkout.",
    technologies: ["Next.js", "Node.js", "Redis"],
    gradient: "from-amber-500/30 to-orange-500/20",
    url: "https://www.gnosp.tech",
    caseStudy: "/case-studies",
  },
  {
    id: "pulse-analytics",
    title: "Pulse Analytics",
    slug: "pulse-analytics",
    category: "Data",
    industry: "Media",
    summary:
      "A real-time analytics suite turning 40M daily events into decisions in under a second.",
    technologies: ["Snowflake", "Kafka", "dbt"],
    gradient: "from-sky-500/30 to-indigo-500/20",
    url: "https://www.gnosp.tech",
    caseStudy: "/case-studies",
  },
  {
    id: "atlas-docs",
    title: "Atlas Docs",
    slug: "atlas-docs",
    category: "Enterprise",
    industry: "Legal",
    summary:
      "A retrieval-augmented knowledge system that answers from 2M legal documents with citations.",
    technologies: ["RAG", "Next.js", "PostgreSQL"],
    gradient: "from-slate-500/30 to-black",
    url: "https://www.gnosp.tech",
    caseStudy: "/case-studies",
  },
  {
    id: "lumen-vision",
    title: "Lumen Vision",
    slug: "lumen-vision",
    category: "AI",
    industry: "Logistics",
    summary:
      "A computer-vision platform that inspects shipments at line speed and cuts defects by 31%.",
    technologies: ["Computer Vision", "Python", "GCP"],
    gradient: "from-fuchsia-500/30 to-purple-600/20",
    url: "https://www.gnosp.tech",
    caseStudy: "/case-studies",
  },
];
