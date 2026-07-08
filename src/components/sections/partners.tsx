import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { partners } from "@/lib/data/content";

export function Partners() {
  const row = [...partners, ...partners];

  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Partners"
          title="Powering teams across industries"
          description="From fintech to manufacturing, ambitious companies build with G-NOSP."
        />
      </Reveal>

      <div className="relative mt-14 overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee items-center gap-12 pr-12">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-2xl font-semibold tracking-tight text-foreground/40 transition-colors hover:text-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
