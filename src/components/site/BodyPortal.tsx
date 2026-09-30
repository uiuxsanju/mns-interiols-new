import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

/**
 * Renders full-screen overlays (video player, lightboxes) directly under
 * <body>, so they sit above the sticky header and floating buttons even when
 * the section that opens them creates its own stacking context (`isolate`).
 */
export function BodyPortal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? createPortal(children, document.body) : null;
}
