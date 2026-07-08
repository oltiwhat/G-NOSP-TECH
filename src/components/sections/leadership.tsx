import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { leadership } from "@/lib/data/content";

export function Leadership() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Leadership"
          title="The people behind the engineering"
          description="A senior team of builders, researchers, and designers who have shipped systems at the highest stakes."
        />
      </Reveal>

      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {leadership.map((leader) => (
          <RevealItem key={leader.name} className="h-full">
            <article className="group flex h-full flex-col gap-5 rounded-2xl border border-border glass p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:glow">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-lg font-semibold text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                {leader.initials}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {leader.name}
                </h3>
                <p className="text-sm font-medium text-accent">{leader.role}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {leader.bio}
              </p>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
