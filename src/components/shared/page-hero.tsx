import { GradientBackground } from "@/components/shared/gradient-background";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative flex flex-col items-center overflow-hidden px-6 pb-12 pt-36 text-center sm:pt-44">
      <GradientBackground />
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center">
        <Badge variant="glass" className="uppercase tracking-[0.18em]">
          {eyebrow}
        </Badge>
        <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-gradient-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </Reveal>
    </section>
  );
}
