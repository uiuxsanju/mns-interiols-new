import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Gallery } from "@/components/sections/Gallery";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { images } from "@/lib/site-data";

const title = "Interior Design Gallery — Real Vizag Projects | MNS Interiors";
const description =
  "Photos of kitchens, living rooms, bedrooms, wardrobes and more from homes MNS Interiors has completed in and around Visakhapatnam, plus a few tagged 3D design concepts.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Design Gallery"
        title="Inspiration from homes we've delivered"
        desc="Filter by room, open any photo full screen and save the direction you like for your consultation. A few 3D design concepts are mixed in, clearly tagged."
        image={images.living}
      />
      <Gallery heading={false} />
      <CtaBanner />
    </>
  );
}
