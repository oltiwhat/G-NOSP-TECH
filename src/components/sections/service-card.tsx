"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import type { DetailedService } from "@/lib/data/content";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  icon,
}: {
  service: Omit<DetailedService, "icon">;
  icon: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLElement>(null);

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-border glass p-7",
        "transition-colors duration-300 hover:border-accent/40",
      )}
    >
      {/* Cursor spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx, 50%) var(--my, 0%), color-mix(in oklab, var(--accent) 16%, transparent), transparent 60%)",
        }}
      />
      {/* Top sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex flex-col gap-5">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 text-accent ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>
        </div>

        <ul className="flex flex-col gap-2.5">
          {service.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-2.5 text-sm text-foreground/85"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <Link
          href={service.cta.href}
          className="group/cta mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-accent"
        >
          {service.cta.label}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
