import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { images } from "@/lib/site-data";
import livingRoomTv from "@/assets/portfolio/living-room-tv.webp";
import tvUnitMarbleWoodWall from "@/assets/portfolio/tv-unit-marble-wood-wall.webp";
import ceilingBlueWaveLed from "@/assets/portfolio/ceiling-blue-wave-led.webp";

const title = "Living Room & TV Unit Designs in Vizag | MNS Interiors";
const description =
  "Living room interiors in Visakhapatnam — TV units, wall panelling, false ceilings and lighting designed and built by MNS Interiors.";

export const Route = createFileRoute("/living-rooms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Living Room"
      title="The room your guests remember"
      desc="Media walls, seating plans, ceilings and lighting composed together so the space reads calm, not crowded."
      image={images.living}
      intro={{
        heading: "Planned for hosting and for Tuesday nights",
        body: "We map circulation first, then set seating, storage and lighting layers — ambient, task and accent — so the same room works for a full house and for one person with a book.",
        points: [
          "Panelled TV and media walls with concealed cabling",
          "False ceilings with cove and spot lighting",
          "Crockery units, bar units and display shelving",
          "Upholstery, rugs, curtains and art curation",
          "Foyer and pooja unit integration",
        ],
      }}
      types={[
        { title: "TV Wall & Lounge", desc: "Sectional seating facing a lit, full-width TV unit.", image: livingRoomTv },
        { title: "Marble & Wood TV Wall", desc: "Marble-look panel framed in walnut laminate.", image: tvUnitMarbleWoodWall },
        { title: "Wave LED Ceiling", desc: "Gypsum wave profile with colour LED strip.", image: ceilingBlueWaveLed },
      ]}
      priceNote="Living room packages typically start at ₹1.4 lakh including the media wall."
    />
  ),
});
