import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollLock } from "@/lib/use-scroll-lock";

export function Lightbox({
  images,
  alt,
  index,
  onClose,
  onNavigate,
}: {
  images: string[];
  alt: string;
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const touchStartX = useRef<number | null>(null);

  useScrollLock(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, onNavigate]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX;
    if (endX === undefined) return;
    const delta = endX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) onNavigate((index + 1) % images.length);
      else onNavigate((index - 1 + images.length) % images.length);
    }
    touchStartX.current = null;
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-ink/95 p-4 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-background/25 text-background hover:bg-background/10"
      >
        <X className="h-5 w-5" />
      </button>
      {images.length > 1 && (
        <>
          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + images.length) % images.length);
            }}
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-background/25 text-background hover:bg-background/10 lg:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % images.length);
            }}
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-background/25 text-background hover:bg-background/10 lg:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
      <figure className="max-h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[index]}
          alt={`${alt} — photo ${index + 1} of ${images.length}`}
          className="max-h-[78svh] w-full rounded-xl object-contain transition-opacity duration-200"
        />
        {images.length > 1 && (
          <figcaption className="mt-4 text-center text-sm text-background/75">
            {index + 1} / {images.length}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
