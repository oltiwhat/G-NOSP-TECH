import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/lib/data/content";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Client voices"
          title="Trusted by leaders who can't afford to fail"
          description="Engineering leaders choose G-NOSP when reliability, security, and speed are non-negotiable."
        />
      </Reveal>

      <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2">
        {testimonials.map((t) => (
          <RevealItem key={t.name} className="h-full">
            <figure className="flex h-full flex-col gap-5 rounded-2xl border border-border glass p-7">
              <Quote className="h-7 w-7 text-accent/70" />
              <blockquote className="text-pretty text-base leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-black to-violet-600 text-sm font-semibold text-white">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">
                    {t.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </span>
                </div>
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
