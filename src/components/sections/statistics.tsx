"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Counter } from "@/components/shared/counter";
import { statistics } from "@/lib/data/content";

export function Statistics() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="By the numbers"
          title="Engineered for outcomes that matter"
          description="A track record of building resilient, intelligent systems for the world's most demanding organizations."
        />
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border glass lg:grid-cols-4">
        {statistics.map((stat) => {
          const decimals = stat.value % 1 !== 0 ? 2 : 0;
          return (
            <RevealItem
              key={stat.label}
              className="flex flex-col items-center gap-2 p-8 text-center"
            >
              <div className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                <Counter value={stat.value} decimals={decimals} />
                {stat.suffix && (
                  <span className="text-gradient">{stat.suffix}</span>
                )}
              </div>
              <div className="text-sm font-medium text-foreground">
                {stat.label}
              </div>
              <p className="max-w-[14rem] text-xs text-muted-foreground">
                {stat.description}
              </p>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
