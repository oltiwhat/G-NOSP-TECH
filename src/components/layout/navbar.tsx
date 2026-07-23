"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { mainNav, megaMenus } from "@/lib/data/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MotionLink = motion(Link);

function useActiveRoute(pathname: string) {
  return (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
}

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
};
const listItem = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Navbar() {
  const pathname = usePathname();
  const isActive = useActiveRoute(pathname);
  const reduce = useReducedMotion();

  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileSub, setMobileSub] = React.useState<string | null>(null);
  const [activeMega, setActiveMega] = React.useState<string | null>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Continuous scroll-driven values (no React re-renders)
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => {
    const next = v > 40;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  const blur = useTransform(scrollY, [0, 40, 320], [0, 12, 20]);
  const shadowY = useTransform(scrollY, [0, 40, 400], [0, 10, 20]);
  const shadowA = useTransform(scrollY, [0, 40, 400], [0, 0.14, 0.3]);
  const blurTpl = useMotionTemplate`blur(${blur}px)`;
  const shadowTpl = useMotionTemplate`0 ${shadowY}px 32px -12px rgba(2,6,23,${shadowA})`;

  // Close any open menus when the route changes
  /* eslint-disable react-hooks/set-state-in-effect */
  React.useEffect(() => {
    setMobileOpen(false);
    setMobileSub(null);
    setActiveMega(null);
  }, [pathname]);
  /* eslint-enable react-hooks/set-state-in-effect */

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openMega = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMega(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMega(null), 150);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={reduce ? { opacity: 0 } : { y: -24, opacity: 0 }}
        animate={reduce ? { opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          backdropFilter: blurTpl,
          WebkitBackdropFilter: blurTpl,
          boxShadow: shadowTpl,
        }}
        onMouseLeave={scheduleClose}
        className={cn(
          "w-full border-b transition-[height,background-color,border-color] duration-300 ease-out",
          scrolled
            ? "h-16 border-border bg-background/70"
            : "h-[72px] border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-6">
          {/* Logo */}
          <Link
            href="/"
            className="group relative inline-flex shrink-0 items-center"
            aria-label="G-NOSP TECH home"
          >
            <span
              aria-hidden
              className="absolute -inset-3 rounded-full bg-accent/25 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="relative inline-flex transition-transform duration-300 group-hover:scale-105">
              <Logo />
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-2 lg:flex" aria-label="Primary">
            {mainNav.map((item) => {
              const hasMega = Boolean(megaMenus[item.title]);
              const active = isActive(item.href) || activeMega === item.title;
              return (
                <li
                  key={item.href}
                  onMouseEnter={() => hasMega && openMega(item.title)}
                >
                  <Link
                    href={item.href}
                    className="group relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                  >
                    <span
                      className={cn(
                        "inline-flex transition-[color,transform] duration-300 group-hover:-translate-y-px",
                        active
                          ? "text-accent"
                          : "text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {item.title}
                    </span>
                    {hasMega && (
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 text-muted-foreground transition-transform duration-200",
                          activeMega === item.title && "rotate-180",
                        )}
                      />
                    )}
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-1/2 h-px w-7 -translate-x-1/2 origin-center bg-gradient-to-r from-black to-violet-500 transition-transform duration-300",
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MotionLink
              href="/contact"
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "hidden sm:inline-flex",
              )}
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </MotionLink>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary/60 lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {activeMega && megaMenus[activeMega] && (
          <motion.div
            key={activeMega}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => openMega(activeMega)}
            onMouseLeave={scheduleClose}
            className="absolute inset-x-0 top-full hidden lg:block"
          >
            <div className="mx-auto mt-3 max-w-7xl px-6">
              <div className="grid gap-6 rounded-3xl border border-border glass p-6 sm:grid-cols-[1.6fr_1fr]">
                <div className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
                  {megaMenus[activeMega].items.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.href}
                      className="group/sub flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary/60"
                    >
                      <span className="flex items-center justify-between text-sm font-medium text-foreground">
                        {sub.title}
                        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-all group-hover/sub:translate-x-0.5 group-hover/sub:opacity-100" />
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {sub.description}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link
                  href={megaMenus[activeMega].featured.href}
                  className="group/feat relative flex flex-col justify-between gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-black/20 to-violet-600/20 p-6 ring-1 ring-inset ring-white/10"
                >
                  <div
                    aria-hidden
                    className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover/feat:scale-125"
                  />
                  <div className="relative flex flex-col gap-1">
                    <span className="text-sm font-semibold text-foreground">
                      {megaMenus[activeMega].featured.title}
                    </span>
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      {megaMenus[activeMega].featured.description}
                    </span>
                  </div>
                  <span className="relative inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/feat:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[55] bg-background/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={reduce ? { opacity: 0 } : { x: "100%" }}
              animate={reduce ? { opacity: 1 } : { x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-[60] flex h-full w-full max-w-sm flex-col border-l border-border glass px-6 py-6 lg:hidden"
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary/60"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <motion.ul
                variants={listContainer}
                initial="hidden"
                animate="show"
                className="mt-4 flex flex-col gap-1 overflow-y-auto"
              >
                {mainNav.map((item) => {
                  const hasMega = Boolean(megaMenus[item.title]);
                  const active = isActive(item.href);
                  if (!hasMega) {
                    return (
                      <motion.li key={item.href} variants={listItem}>
                        <Link
                          href={item.href}
                          className={cn(
                            "block rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                            active
                              ? "bg-secondary/60 text-accent"
                              : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground",
                          )}
                        >
                          {item.title}
                        </Link>
                      </motion.li>
                    );
                  }
                  const open = mobileSub === item.title;
                  return (
                    <motion.li key={item.href} variants={listItem}>
                      <div className="flex flex-col">
                        <button
                          type="button"
                          onClick={() => setMobileSub(open ? null : item.title)}
                          aria-expanded={open}
                          className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary/40"
                        >
                          {item.title}
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 text-muted-foreground transition-transform duration-200",
                              open && "rotate-180",
                            )}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.25,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-1 pb-2 pl-4">
                                {megaMenus[item.title].items.map((sub) => (
                                  <Link
                                    key={sub.title}
                                    href={sub.href}
                                    className="rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-foreground"
                                  >
                                    {sub.title}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.li>
                  );
                })}
                <motion.li variants={listItem} className="px-1 pt-3">
                  <MotionLink
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "w-full",
                    )}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </MotionLink>
                </motion.li>
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
