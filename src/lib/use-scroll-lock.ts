import { useEffect } from "react";

/**
 * Locks background scroll while `active` is true (for a mobile nav drawer,
 * a lightbox, or any other full-screen overlay).
 *
 * Deliberately avoids `document.body.style.overflow = "hidden"`: setting a
 * non-visible `overflow-y` on <body> breaks `position: sticky` elements
 * (like the site header) elsewhere on the page — after scrolling down and
 * opening an overlay, the sticky header snaps back to its pre-scroll
 * position instead of staying pinned, and the overlay itself can be left
 * empty/broken with page content showing through.
 *
 * Freezing <body> with `position: fixed` at the current scroll offset locks
 * scroll without touching `overflow`, so sticky/fixed positioning stays
 * correct while the overlay is open, then the scroll position is restored
 * on close.
 */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const scrollY = window.scrollY;
    const { style } = document.body;
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    return () => {
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      window.scrollTo(0, scrollY);
    };
  }, [active]);
}
