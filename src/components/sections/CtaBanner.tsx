import { Button } from "@/components/ui/button";
import { images } from "@/lib/site-data";
import { useEstimate } from "@/components/site/estimate-context";

export function CtaBanner() {
  const { openEstimate } = useEstimate();
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={images.bedroom}
        alt="Softly lit bedroom interior"
        loading="lazy"
        width={1200}
        height={900}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/78" />
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
