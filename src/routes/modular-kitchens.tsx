import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { images } from "@/lib/site-data";
import kitchenGrayWhiteUshape from "@/assets/portfolio/kitchen-gray-white-ushape.webp";
import kitchenGlassCabinet from "@/assets/portfolio/kitchen-glass-cabinet.webp";
import kitchenModular3 from "@/assets/portfolio/kitchen-modular-3.webp";

const title = "Modular Kitchens in Vizag — L, U & Parallel | MNS Interiors";
const description =
  "Modular kitchens in Visakhapatnam — L-shape, U-shape and parallel layouts with custom shutters, storage and lighting.";

export const Route = createFileRoute("/modular-kitchens")({
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
      eyebrow="Modular Kitchen"
      title="A kitchen planned around how you cook"
      desc="Work triangles, tall-unit storage and finishes that survive Indian cooking — engineered, not assembled."
      image={images.kitchen}
      intro={{
        heading: "Built for daily Indian cooking",
        body: "We start from your appliance list and cooking habits, then design the layout around reach, ventilation and clean-up. Every carcass is BWP-grade, every edge sealed, every hinge soft-close.",
        points: [
          "L, U, parallel, island and straight layouts",
          "Acrylic, laminate, PU and membrane shutter finishes",
          "Tall units, magic corners, pull-out baskets, cutlery organisers",
          "Quartz, granite and sintered stone countertops",
          "10-year warranty on modular components",
        ],
      }}
      types={[
        { title: "Grey & White U-Shape", desc: "Marble-look backsplash with grey base units.", image: kitchenGrayWhiteUshape },
        { title: "White L-Shape with Counter", desc: "Tall storage wall and a breakfast counter.", image: kitchenGlassCabinet },
        { title: "Dark Granite L-Shape", desc: "Grey gloss shutters with black granite backsplash.", image: kitchenModular3 },
      ]}
      priceNote="Kitchens typically start at ₹1.85 lakh for a compact 2BHK layout."
    />
  ),
});
