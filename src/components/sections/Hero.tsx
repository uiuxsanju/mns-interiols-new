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
      <div className="container-x relative flex min-h-[86svh] flex-col justify-end pt-24 pb-14 lg:min-h-[92svh] lg:justify-center lg:pb-24">
        <div className="max-w-2xl rise-in">
          <p className="text-[0.7rem] tracking-[0.28em] text-background/75 uppercase">
            Full home interiors · Visakhapatnam
          </p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.03] text-background sm:text-6xl lg:text-[4.2rem]">
            Interiors made for how your family actually lives
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-background/80 sm:text-lg">
            Consultation, designing and execution under one roof — modular kitchens, wardrobes, TV units,
            ceilings and complete home interiors, designed room by room.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full px-8" onClick={openEstimate}>
              Get Free Estimate
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-background/40 bg-transparent px-8 text-background hover:bg-background hover:text-ink"
            >
              <Link to="/gallery">Explore Designs</Link>
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-background/75">
            {[
              "Homes, restaurants & offices delivered",
              "Consultation to execution",
              "BNI · JCI · Meeting Millions member",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
