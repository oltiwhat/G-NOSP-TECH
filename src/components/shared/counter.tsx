"use client";

import * as React from "react";
import { animate, useInView } from "framer-motion";
import { formatNumber } from "@/lib/utils";

export function Counter({
  value,
  decimals = 0,
  duration = 1.6,
}: {
  value: number;
  decimals?: number;
  duration?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  React.useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        node.textContent = formatNumber(Number(latest.toFixed(decimals)));
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals, duration]);

  return <span ref={ref}>{formatNumber(0)}</span>;
}
