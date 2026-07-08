"use client";

import * as React from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Search, X } from "lucide-react";
import { BlogCard } from "@/components/blog/blog-card";
import type { Post } from "@/lib/data/posts";
import { cn } from "@/lib/utils";

export function BlogList({
  posts,
  categories,
}: {
  posts: Post[];
  categories: string[];
}) {
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState("All");

  const filters = ["All", ...categories];

  const q = query.trim().toLowerCase();
  const filtered = posts.filter((p) => {
    const matchesCategory = active === "All" || p.category === active;
    const matchesQuery =
      q === "" ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  const isBrowsing = active === "All" && q === "";
  const featured = posts.filter((p) => p.featured);

  return (
    <div className="flex flex-col gap-10">
      {/* Controls */}
      <div className="flex flex-col gap-5">
        <div className="relative mx-auto w-full max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            aria-label="Search articles"
            className="w-full rounded-full border border-border bg-secondary/30 py-3 pl-11 pr-11 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

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
                      layoutId="blog-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-600 to-violet-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {filter}
                </button>
              );
            })}
          </div>
        </LayoutGroup>
      </div>

      {/* Featured (browsing only) */}
      {isBrowsing && featured.length > 0 && (
        <section className="flex flex-col gap-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Featured
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((post) => (
              <BlogCard key={post.slug} post={post} featured={post.featured} />
            ))}
          </div>
        </section>
      )}

      {/* Results */}
      <section className="flex flex-col gap-6">
        {!isBrowsing && (
          <p className="text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "article" : "articles"} found
          </p>
        )}

        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-border glass p-12 text-center">
            <p className="text-base font-medium text-foreground">
              No articles match your search
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different keyword or category.
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((post) => (
                <motion.div
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </div>
  );
}
