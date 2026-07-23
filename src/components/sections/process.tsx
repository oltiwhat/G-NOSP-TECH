import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { process } from "@/lib/data/content";

export function Process() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="How we work"
          title="A process engineered for outcomes"
          description="A disciplined, transparent path from first conversation to a system that keeps getting better."
        />
      </Reveal>

      <RevealGroup className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block"
        />
        {process.map((step) => (
          <RevealItem key={step.step} className="relative h-full">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-black/20 to-violet-600/20 text-lg font-semibold text-accent ring-1 ring-inset ring-white/10">
                {step.step}
              </span>
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
