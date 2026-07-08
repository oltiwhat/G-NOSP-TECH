"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { GradientBackground } from "@/components/shared/gradient-background";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { siteConfig } from "@/lib/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease },
    },
  };

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-28 pb-20">
      <GradientBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            {siteConfig.tagline}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Engineering Tomorrow.
          <br />
          <span className="text-gradient">Building Intelligent Software.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg md:text-xl"
        >
          {siteConfig.name} designs and operates mission-critical systems at the
          intersection of artificial intelligence, cybersecurity, and cloud
          infrastructure — engineered for enterprises that refuse to compromise.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <MagneticButton href="/contact" variant="default" size="lg">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="/services" variant="secondary" size="lg">
            Our Services
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground"
        >
          <span className="font-medium uppercase tracking-[0.18em]">
            Trusted by industry leaders
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 opacity-80">
            {["Northwind", "Helios", "Lumen", "Orbital", "Vertex"].map((p) => (
              <span key={p} className="font-semibold tracking-tight text-foreground/70">
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
