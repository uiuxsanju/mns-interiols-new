import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { images } from "@/lib/site-data";
import wardrobeWoodSliding2 from "@/assets/portfolio/wardrobe-wood-sliding-2.webp";
import wardrobeTealWhiteSliding from "@/assets/portfolio/wardrobe-teal-white-sliding.webp";
import wardrobeDressingMirrorCombo from "@/assets/portfolio/wardrobe-dressing-mirror-combo.webp";

const title = "Wardrobe Designs in Vizag — Sliding & Hinged | MNS Interiors";
const description =
  "Sliding and hinged wardrobes in Visakhapatnam with lofts, mirrors and dressing units, made to your room size.";

export const Route = createFileRoute("/wardrobes")({
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
      eyebrow="Wardrobes"
      title="Storage that fits the wall and the wardrobe habit"
      desc="Floor-to-ceiling systems planned around what you actually own — sarees, suit-length hanging, luggage and linen."
      image={images.wardrobe}
      intro={{
        heading: "Designed to your ceiling, not to a catalogue",
        body: "We measure the exact opening, plan internal zoning for hanging, folded and seasonal storage, and finish the loft so nothing collects dust on top.",
        points: [
          "Sliding, hinged and walk-in configurations",
          "Mirror, laminate, lacquered glass and veneer shutters",
          "Pull-out trays, tie racks, drawer inserts and safes",
          "Profile lighting on sensors inside the wardrobe",
          "Anti-termite, moisture-resistant core material",
        ],
      }}
      types={[
        { title: "Wood-grain Sliding", desc: "Full-height sliding shutters in textured laminate.", image: wardrobeWoodSliding2 },
        { title: "Teal & White Sliding", desc: "Colour-blocked sliding shutters with a study desk.", image: wardrobeTealWhiteSliding },
        { title: "Wardrobe with Dressing Unit", desc: "Hinged wardrobe paired with an arch-mirror dresser.", image: wardrobeDressingMirrorCombo },
      ]}
      priceNote="Wardrobes typically start at ₹68,000 for a 6ft two-door unit."
    />
  ),
});
