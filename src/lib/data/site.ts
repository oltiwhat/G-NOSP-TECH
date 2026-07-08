export const siteConfig = {
  name: "G-NOSP TECH",
  tagline: "Engineering the Future.",
  description:
    "G-NOSP TECH is a premium software engineering company building intelligent, secure, and scalable systems across AI, cybersecurity, cloud infrastructure, automation, and enterprise solutions.",
  url: "https://www.gnosp.tech",
  locale: "en_US",
  email: "hello@gnosp.tech",
  phone: "+1 (555) 010-0999",
  address: {
    city: "San Francisco",
    country: "United States",
  },
  social: {
    twitter: "https://twitter.com/gnosp",
    linkedin: "https://www.linkedin.com/company/gnosp",
    github: "https://github.com/gnosp",
  },
} as const;

export const mainNav: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Solutions", href: "/solutions" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Careers", href: "/careers" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export type MegaMenuItem = {
  title: string;
  href: string;
  description: string;
};

export type MegaMenu = {
  items: MegaMenuItem[];
  featured: { title: string; description: string; href: string };
};

export const megaMenus: Record<string, MegaMenu> = {
  Services: {
    items: [
      {
        title: "Custom Software",
        href: "/services",
        description: "Tailored applications built to scale.",
      },
      {
        title: "AI Development",
        href: "/services",
        description: "Production LLM and ML features.",
      },
      {
        title: "Cloud Infrastructure",
        href: "/services",
        description: "Resilient, cost-efficient platforms.",
      },
      {
        title: "Cybersecurity",
        href: "/services",
        description: "Zero-trust, audit-ready security.",
      },
      {
        title: "DevOps",
        href: "/services",
        description: "Safe, fast delivery pipelines.",
      },
      {
        title: "UI/UX Design",
        href: "/services",
        description: "Interfaces people actually enjoy.",
      },
    ],
    featured: {
      title: "Start a project",
      description:
        "Tell us what you're building and our team will respond within one business day.",
      href: "/contact",
    },
  },
  Solutions: {
    items: [
      {
        title: "Financial Services",
        href: "/solutions",
        description: "Secure, compliant platforms.",
      },
      {
        title: "Healthcare",
        href: "/solutions",
        description: "HIPAA-ready intelligent systems.",
      },
      {
        title: "Retail & Commerce",
        href: "/solutions",
        description: "High-throughput storefronts.",
      },
      {
        title: "Manufacturing",
        href: "/solutions",
        description: "Connected, automated factories.",
      },
      {
        title: "Logistics",
        href: "/solutions",
        description: "Real-time visibility at scale.",
      },
      {
        title: "Public Sector",
        href: "/solutions",
        description: "Resilient citizen services.",
      },
    ],
    featured: {
      title: "Explore solutions",
      description: "See how we tailor engineering to your industry.",
      href: "/solutions",
    },
  },
};
