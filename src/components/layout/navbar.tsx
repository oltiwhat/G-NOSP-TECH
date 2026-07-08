"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { mainNav, megaMenus } from "@/lib/data/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function useActiveRoute(pathname: string) {
  return (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const isActive = useActiveRoute(pathname);

  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileSub, setMobileSub] = React.useState<string | null>(null);
  const [activeMega, setActiveMega] = React.useState<string | null>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    closeTimer.current = setTimeout(() => setActiveMega(null), 140);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={cn(
          "w-full border-b transition-all duration-300",
          scrolled
            ? "glass border-border shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]"
            : "border-transparent bg-transparent",
        )}
        onMouseLeave={scheduleClose}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
          <Link href="/" className="shrink-0" aria-label="G-NOSP TECH home">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
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
                    className="group relative inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors"
                  >
                    <span
                      className={cn(
                        active
                          ? "text-foreground"
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
                        "absolute -bottom-0.5 left-3 right-3 h-px origin-left bg-gradient-to-r from-blue-500 to-violet-500 transition-transform duration-300",
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
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "hidden sm:inline-flex",
              )}
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary/60 lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

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
                  className="group/feat relative flex flex-col justify-between gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 p-6 ring-1 ring-inset ring-white/10"
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <motion.ul
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto flex max-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col gap-1 overflow-y-auto px-6 py-6"
            >
              {mainNav.map((item) => {
                const hasMega = Boolean(megaMenus[item.title]);
                const active = isActive(item.href);
                if (!hasMega) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                          active
                            ? "bg-secondary/60 text-foreground"
                            : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground",
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                }
                const open = mobileSub === item.title;
                return (
                  <li key={item.href} className="flex flex-col">
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
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
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
                  </li>
                );
              })}
              <li className="px-1 pt-3">
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full")}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
