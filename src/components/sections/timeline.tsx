import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { timeline } from "@/lib/data/content";

export function Timeline() {
  return (
    <section className="relative mx-auto w-full max-w-3xl px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Our journey"
          title="A decade of engineering the future"
          description="From a garage whiteboard to global scale — here is how G-NOSP came to be."
        />
      </Reveal>

      <div className="relative mt-14">
        {/* Spine */}
        <div
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-black/60 via-violet-600/40 to-transparent sm:left-1/2 sm:-translate-x-1/2"
        />

        <ol className="flex flex-col gap-10">
          {timeline.map((item, i) => (
            <Reveal
              key={item.year}
              direction="up"
              className={
                i % 2 === 0
                  ? "sm:pr-[calc(50%+2rem)]"
                  : "sm:pl-[calc(50%+2rem)] sm:self-end sm:text-right"
              }
            >
              <li className="relative flex items-start gap-5 sm:block">
                <span className="relative z-10 mt-1 inline-flex h-4 w-4 shrink-0 rounded-full bg-gradient-to-br from-black to-violet-500 ring-4 ring-background" />
                <div className="flex flex-col gap-1.5 rounded-2xl border border-border glass p-5 transition-colors duration-300 hover:border-accent/40">
                  <span className="text-sm font-semibold text-gradient">
                    {item.year}
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
