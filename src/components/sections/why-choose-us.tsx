import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { whyChooseUs } from "@/lib/data/content";

export function WhyChooseUs() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Why G-NOSP"
          title="A partner, not a vendor"
          description="We embed senior engineering rigor into everything we ship, so your most critical systems are built to endure."
        />
      </Reveal>

      <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border glass sm:grid-cols-2">
        {whyChooseUs.map((reason) => {
          const Icon = reason.icon;
          return (
            <RevealItem
              key={reason.title}
              className="flex flex-col gap-4 p-8 transition-colors hover:bg-secondary/40"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
