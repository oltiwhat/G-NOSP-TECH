import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { technologyStack } from "@/lib/data/content";

export function TechnologyStack() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Our stack"
          title="Built on proven, modern technology"
          description="We choose best-in-class tools and frameworks so your systems are fast, secure, and built to last."
        />
      </Reveal>

      <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3">
        {technologyStack.map((group) => (
          <RevealItem key={group.category} className="h-full">
            <div className="flex h-full flex-col gap-5 rounded-2xl border border-border glass p-7">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {group.items.map((tech) => (
                  <li
                    key={tech.name}
                    className="flex items-center justify-between rounded-xl border border-border/60 bg-secondary/30 px-4 py-3 transition-colors hover:border-accent/40"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {tech.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {tech.category}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
