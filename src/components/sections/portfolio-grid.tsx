"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { portfolio, portfolioCategories } from "@/lib/data/content";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const filters = ["All", ...portfolioCategories];

export function PortfolioGrid() {
  const [active, setActive] = React.useState<string>("All");

  const items =
    active === "All"
      ? portfolio
      : portfolio.filter((p) => p.category === active);

  return (
    <LayoutGroup>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filters.map((filter) => {
          const isActive = active === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="portfolio-pill"
                   className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-black to-violet-600 shadow-[0_8px_30px_-10px_rgba(124,58,237,0.7)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {filter}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {items.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border glass"
            >
              {/* Large image (gradient thumbnail) */}
              <div
                className={cn(
                  "relative h-52 overflow-hidden bg-gradient-to-br",
                  project.gradient,
                )}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 grid-pattern opacity-30"
                />
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125"
                />
                <span className="absolute inset-0 flex items-center justify-center text-[5rem] font-bold leading-none text-white/15">
                  {project.title.charAt(0)}
                </span>
                <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex flex-col gap-2">
                  <Badge variant="outline">{project.industry}</Badge>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3 pt-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                     className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-black to-violet-600 px-4 py-2 text-sm font-medium text-white transition-all hover:brightness-110"
                  >
                    Visit Project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    href={project.caseStudy}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/60"
                  >
                    Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
}
