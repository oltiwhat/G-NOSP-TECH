import { MapPin, Clock, Mail, Phone, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { officeAddress, businessHours } from "@/lib/data/content";

const mapQuery = encodeURIComponent(
  `${officeAddress.line1}, ${officeAddress.city}, ${officeAddress.country}`,
);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Reach the team
        </h2>
        <p className="text-sm text-muted-foreground">
          Prefer email or a call? We&apos;re here across every timezone.
        </p>
      </div>

      <ul className="flex flex-col gap-3 rounded-2xl border border-border glass p-6">
        <li className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Mail className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Email</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-medium text-foreground hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Phone className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Phone</span>
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="text-sm font-medium text-foreground hover:text-accent"
            >
              {siteConfig.phone}
            </a>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <MapPin className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Office</span>
            <span className="text-sm font-medium text-foreground">
              {officeAddress.line1}
              <br />
              {officeAddress.city}, {officeAddress.country}
            </span>
          </div>
        </li>
      </ul>

      {/* Business hours */}
      <div className="flex flex-col gap-4 rounded-2xl border border-border glass p-6">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-accent" />
          <h3 className="text-sm font-semibold text-foreground">
            Business hours
          </h3>
        </div>
        <ul className="flex flex-col divide-y divide-border">
          {businessHours.map((slot) => (
            <li
              key={slot.day}
              className="flex items-center justify-between py-2.5 text-sm"
            >
              <span className="text-muted-foreground">{slot.day}</span>
              <span className="flex items-center gap-2 font-medium text-foreground">
                <span
                  className={
                    slot.open
                      ? "h-2 w-2 rounded-full bg-emerald-400"
                      : "h-2 w-2 rounded-full bg-muted-foreground/40"
                  }
                />
                {slot.hours}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Google Maps placeholder */}
      <div className="group relative h-52 overflow-hidden rounded-2xl border border-border glass">
        <div
          aria-hidden
          className="absolute inset-0 grid-pattern opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.25),transparent_60%)]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
          <span className="relative inline-flex h-12 w-12 items-center justify-center">
            <span className="absolute inline-flex h-12 w-12 animate-pulse-glow rounded-full bg-accent/30" />
            <MapPin className="relative h-6 w-6 text-accent" />
          </span>
          <p className="px-6 text-sm text-muted-foreground">
            {officeAddress.city}, {officeAddress.country}
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-4 py-2 text-xs font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary/60"
          >
            Open in Google Maps
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
