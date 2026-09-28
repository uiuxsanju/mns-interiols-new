import { Button } from "@/components/ui/button";
import { useEstimate } from "@/components/site/estimate-context";

export function CtaBanner() {
  const { openEstimate } = useEstimate();
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="/images/hero-3.webp"
        alt="Warm living and dining interior with pendant lighting"
        loading="lazy"
        width={1200}
        height={900}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Warm brown scrim (not flat grey) so the photo's lighting still reads. */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,19,13,0.62)_0%,rgba(28,19,13,0.74)_55%,rgba(28,19,13,0.86)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(28,19,13,0.35)_0%,rgba(28,19,13,0)_65%)]" />
      <div className="container-x relative py-20 text-center lg:py-28">
        <h2 className="mx-auto max-w-3xl text-3xl leading-tight text-background sm:text-5xl">
          Let's Design a Home You'll Love
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-background/75">
          Book a free consultation with a designer, or get an itemised estimate in 24 hours.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" className="rounded-full px-8" onClick={openEstimate}>
            Book Free Design Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={openEstimate}
            className="rounded-full border-background/40 bg-transparent px-8 text-background hover:bg-background hover:text-ink"
          >
            Get Free Estimate
          </Button>
        </div>
      </div>
    </section>
  );
}
