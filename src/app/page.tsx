import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Statistics } from "@/components/sections/statistics";
import { ServicesPreview } from "@/components/sections/services-preview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { TechnologyStack } from "@/components/sections/technology-stack";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Partners } from "@/components/sections/partners";
import { CTA } from "@/components/sections/cta";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <ServicesPreview />
        <FeaturedProjects />
        <TechnologyStack />
        <WhyChooseUs />
        <Testimonials />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
