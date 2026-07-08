import { cn } from "@/lib/utils";

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          className="h-9 w-9"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="gnosp-logo" x1="0" y1="0" x2="36" y2="36">
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <rect
            x="1"
            y="1"
            width="34"
            height="34"
            rx="10"
            stroke="url(#gnosp-logo)"
            strokeWidth="1.5"
            className="opacity-70"
          />
          <path
            d="M11 25V11l14 14V11"
            stroke="url(#gnosp-logo)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="25" cy="11" r="2.4" fill="url(#gnosp-logo)" />
        </svg>
      </span>
      {showWordmark && (
        <span className="text-[15px] font-semibold tracking-tight text-foreground">
          G-NOSP
          <span className="text-gradient"> TECH</span>
        </span>
      )}
    </span>
  );
}
