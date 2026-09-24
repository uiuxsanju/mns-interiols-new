import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { DesignConcepts } from "@/components/sections/DesignConcepts";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { renderImages } from "@/lib/render-images";

const title = "3D Design Concepts — Interior Visualisations | MNS Interiors";
const description =
  "Photoreal 3D design concepts from MNS Interiors' client presentations — living rooms, bedrooms, kitchens and more, visualised before construction begins.";

export const Route = createFileRoute("/design-concepts")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: DesignConceptsPage,
});

function DesignConceptsPage() {
  return (
    <>
      <PageHero
        eyebrow="3D Design Concepts"
        title="See it before we build it"
        desc="Photoreal 3D concept renders from real MNS Interiors client presentations — not photos of finished work, but the exact visualisation each client approved before construction began."
        image={renderImages[0]!.src}
      />
      <DesignConcepts />
      <CtaBanner />
    </>
  );
}
