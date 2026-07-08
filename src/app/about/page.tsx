import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Counter } from "@/components/shared/counter";
import { CTA } from "@/components/sections/cta";
import { Leadership } from "@/components/sections/leadership";
import { Timeline } from "@/components/sections/timeline";
import { Process } from "@/components/sections/process";
import { TechnologyStack } from "@/components/sections/technology-stack";
import {
  aboutMission,
  aboutVision,
  values,
  globalImpact,
} from "@/lib/data/content";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of G-NOSP TECH — our mission, vision, values, leadership, and the global impact of the systems we engineer.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About us"
          title="We engineer the future, on purpose"
          description="G-NOSP TECH was founded on a simple conviction: enterprise software should be intelligent, secure, and genuinely beautiful to use."
        />

        {/* Mission & Vision */}
        <section className="relative mx-auto w-full max-w-6xl px-6 py-12">
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal direction="right" className="h-full">
              <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border glass p-8">
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.35),transparent_60%)] blur-2xl"
                />
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Mission
                </span>
                <p className="relative text-lg leading-relaxed text-foreground/90 sm:text-xl">
                  {aboutMission}
                </p>
              </div>
            </Reveal>
            <Reveal direction="left" className="h-full">
              <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border glass p-8">
                <div
                  aria-hidden
                  className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.35),transparent_60%)] blur-2xl"
                />
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Vision
                </span>
                <p className="relative text-lg leading-relaxed text-foreground/90 sm:text-xl">
                  {aboutVision}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="What we stand for"
              title="Values that shape every line of code"
              description="Principles we hire for, build by, and are held accountable to."
            />
          </Reveal>

          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <RevealItem key={value.title} className="h-full">
                  <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border glass p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-semibold tracking-tight text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </section>

        <Leadership />
        <Timeline />
        <Process />
        <TechnologyStack />

        {/* Global Impact */}
        <section className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Global impact"
              title="Engineering at planet scale"
              description="The cumulative reach of the platforms, teams, and users we have helped build."
            />
          </Reveal>

          <Reveal>
            <div className="relative mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border glass lg:grid-cols-4">
              {globalImpact.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-2 p-8 text-center"
                >
                  <div className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    <Counter value={stat.value} decimals={stat.decimals ?? 0} />
                    {stat.suffix && (
                      <span className="text-gradient">{stat.suffix}</span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
