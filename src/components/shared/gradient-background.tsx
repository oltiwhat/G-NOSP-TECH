import { cn } from "@/lib/utils";

export function GradientBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      {/* Base grid */}
      <div className="absolute inset-0 grid-pattern opacity-[0.35] mask-fade-b" />

      {/* Aurora blobs */}
      <div className="absolute left-1/2 top-[-10%] h-[55vw] w-[55vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.35),transparent_60%)] blur-3xl animate-aurora" />
      <div
        className="absolute right-[-10%] top-[20%] h-[40vw] w-[40vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.30),transparent_60%)] blur-3xl animate-float-slow"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="absolute bottom-[5%] left-[-5%] h-[38vw] w-[38vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),transparent_60%)] blur-3xl animate-float"
        style={{ animationDelay: "-6s" }}
      />

      {/* Floating light orbs */}
      <div className="absolute left-[12%] top-[18%] h-2 w-2 rounded-full bg-accent shadow-[0_0_30px_8px_rgba(59,130,246,0.7)] animate-float" />
      <div
        className="absolute right-[18%] top-[32%] h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_24px_6px_rgba(167,139,250,0.7)] animate-float-slow"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="absolute left-[28%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_24px_6px_rgba(103,232,249,0.6)] animate-float"
        style={{ animationDelay: "-7s" }}
      />

      {/* Top vignette for navbar legibility */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/80 to-transparent" />
    </div>
  );
}
