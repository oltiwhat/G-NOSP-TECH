import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore selected projects from G-NOSP TECH — intelligent, secure, and scalable systems built across AI, cybersecurity, cloud, automation, and enterprise.",
  alternates: { canonical: `${siteConfig.url}/portfolio` },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Portfolio"
          title="Systems we are proud of"
          description="A selection of platforms we have engineered for enterprises operating at global scale. Filter by what you're building."
        />

        <section className="relative mx-auto w-full max-w-6xl px-6 pb-20">
          <Reveal>
            <PortfolioGrid />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
