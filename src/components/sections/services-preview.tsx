import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data/content";
import { cn } from "@/lib/utils";

export function ServicesPreview() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row">
        <SectionHeading
          align="left"
          eyebrow="What we do"
          title="Capabilities engineered end to end"
          description="From applied AI to hardened infrastructure, we deliver the full stack of modern software engineering."
        />
        <Link
          href="/services"
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent"
        >
          View all services
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Reveal>

      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <RevealItem key={service.title}>
              <Link
                href="/services"
                className="group relative flex h-full flex-col gap-5 rounded-2xl border border-border glass p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:glow"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 text-accent ring-1 ring-inset ring-white/10">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {service.highlights.map((h) => (
                    <Badge key={h} variant="outline">
                      {h}
                    </Badge>
                  ))}
                </div>
                <ArrowUpRight
                  className={cn(
                    "absolute right-6 top-6 h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                  )}
                />
              </Link>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
