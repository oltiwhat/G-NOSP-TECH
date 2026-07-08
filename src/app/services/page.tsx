import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/shared/page-hero";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { ServiceCard } from "@/components/sections/service-card";
import { CTA } from "@/components/sections/cta";
import { servicesDetail } from "@/lib/data/content";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From custom software and AI to cloud, DevOps, and cybersecurity — explore the full range of engineering services G-NOSP TECH delivers for enterprises.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Services"
          title="Engineering across the entire stack"
          description="Whatever you are building, we bring senior engineering rigor to every layer — from strategy and design to AI, infrastructure, and security."
        />

        <section className="relative mx-auto w-full max-w-6xl px-6 pb-8">
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesDetail.map((service) => {
              const { icon: Icon, ...rest } = service;
              return (
                <RevealItem key={service.title} className="h-full">
                  <ServiceCard
                    service={rest}
                    icon={<Icon className="h-6 w-6" />}
                  />
                </RevealItem>
              );
            })}
          </RevealGroup>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
