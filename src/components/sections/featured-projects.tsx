import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { featuredProjects } from "@/lib/data/content";

export function FeaturedProjects() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Selected work"
          title="Systems we are proud of"
          description="A glimpse into the platforms we have engineered for enterprises operating at global scale."
        />
      </Reveal>

      <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <RevealItem key={project.name} className="h-full">
            <article className="group relative h-full overflow-hidden rounded-2xl border border-border glass p-px">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-background/70 p-7 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto grid grid-cols-2 gap-4 border-t border-border pt-5">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col gap-1">
                      <span className="text-xl font-semibold text-foreground">
                        {m.value}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
