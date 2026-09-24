import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/site-data";
import { useEstimate } from "@/components/site/estimate-context";

export function Hero() {
  const { openEstimate } = useEstimate();

  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={images.hero}
        alt="Living room with full-width TV unit and cove lighting, completed by MNS Interiors"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-scrim absolute inset-0" />
      <div className="container-x relative flex min-h-[72svh] flex-col justify-end pt-20 pb-10 sm:min-h-[78svh] sm:pb-14 lg:min-h-[88svh] lg:justify-center lg:pb-24">
        <div className="max-w-2xl rise-in">
          <p className="text-[0.65rem] tracking-[0.26em] text-background/75 uppercase sm:text-[0.7rem] sm:tracking-[0.28em]">
            Full home interiors · Visakhapatnam
          </p>
          <h1 className="text-display-1 mt-3 text-balance text-background sm:mt-4">
            Interiors made for how your family actually lives
          </h1>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-background/80 sm:mt-5 sm:text-lg">
            Consultation, designing and execution under one roof — modular kitchens, wardrobes, TV units,
            ceilings and complete home interiors, designed room by room.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
            <Button className="h-11 rounded-full px-6 sm:h-12 sm:px-8" onClick={openEstimate}>
              Get Free Estimate
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-background/40 bg-transparent px-6 text-background hover:bg-background hover:text-ink sm:h-12 sm:px-8"
            >
              <Link to="/gallery">Explore Designs</Link>
            </Button>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-[0.82rem] text-background/75 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3 sm:text-sm">
            {[
              "Homes, restaurants & offices delivered",
              "Consultation to execution",
              "BNI · JCI · Meeting Millions member",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
