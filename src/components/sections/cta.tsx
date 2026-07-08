import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { siteConfig } from "@/lib/data/site";

export function CTA() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border glass px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.35),transparent_55%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_100%,rgba(124,58,237,0.3),transparent_50%)]"
          />
          <div className="absolute inset-0 -z-10 grid-pattern opacity-20 mask-fade-b" />

          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-gradient-foreground sm:text-4xl md:text-5xl">
            Ready to engineer the future?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
            Let&apos;s build intelligent, secure software that moves your business
            forward. Start a conversation with our engineering team today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MagneticButton href="/contact" variant="default" size="lg">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href={`mailto:${siteConfig.email}`} variant="secondary" size="lg">
              Talk to our team
            </MagneticButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
