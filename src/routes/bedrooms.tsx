import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { images } from "@/lib/site-data";
import bedroomTvWardrobeCombo from "@/assets/portfolio/bedroom-tv-wardrobe-combo.webp";
import bunkBedKidsPink from "@/assets/portfolio/bunk-bed-kids-pink.webp";
import kidsRoomRainbowColorful from "@/assets/portfolio/kids-room-rainbow-colorful.webp";

const title = "Bedroom Interior Design in Vizag | MNS Interiors";
const description =
  "Master, guest and kids bedroom interiors in Visakhapatnam — wardrobes, headboard walls, TV panels and false ceilings.";

export const Route = createFileRoute("/bedrooms")({
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
      eyebrow="Bedrooms"
      title="Quiet rooms with generous storage"
      desc="Headboard panelling, hidden storage and lighting that dims down to bedtime without a single harsh source."
      image={images.bedroom}
      intro={{
        heading: "Calm palettes, serious storage",
        body: "Bedrooms carry more storage than any other room in an Indian home. We plan wardrobe volume, bed-box storage and a loft strategy first, then design the room around a restful palette.",
        points: [
          "Upholstered and panelled headboard walls",
          "Hydraulic storage beds and bedside units",
          "Study or dresser nooks in tight corners",
          "Two-level lighting with bedside dimming",
          "Kids and guest bedroom specialisation",
        ],
      }}
      types={[
        { title: "Wardrobe & TV Wall", desc: "Full-height wardrobe with a wall-mounted TV panel.", image: bedroomTvWardrobeCombo },
        { title: "Kids Bunk Bed", desc: "Bunk bed with storage steps below.", image: bunkBedKidsPink },
        { title: "Themed Kids Room", desc: "Striped ceiling, arched wardrobe and a playful palette.", image: kidsRoomRainbowColorful },
      ]}
      priceNote="Bedroom packages typically start at ₹1.1 lakh including a two-door wardrobe."
    />
  ),
});
