import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { images } from "@/lib/site-data";
import bathroomCircularPatternSink from "@/assets/portfolio/bathroom-circular-pattern-sink.webp";
import washroomSinkRoundMirror from "@/assets/portfolio/washroom-sink-round-mirror-harsha.webp";
import mirrorNookRoundSink from "@/assets/portfolio/mirror-nook-round-sink.webp";

const title = "Bathroom Interior Design in Vizag | MNS Interiors";
const description =
  "Bathroom interiors in Visakhapatnam — vanity units, mirrors, tiling and lighting, designed and executed by MNS Interiors.";

export const Route = createFileRoute("/bathrooms")({
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
      eyebrow="Bathrooms"
      title="Stone, brass and dependable waterproofing"
      desc="Everything behind the tile matters as much as the finish. We rebuild slope, waterproofing and plumbing before the first tile goes down."
      image={images.bathroom}
      intro={{
        heading: "Finished well, sealed better",
        body: "Bathroom work is the easiest place to cut corners, so we document waterproofing and slope testing with photos before tiling and share it with you.",
        points: [
          "Full waterproofing with ponding test records",
          "Vanity units in moisture-resistant materials",
          "Anti-skid floors and large-format wall tiling",
          "Concealed cisterns, rain showers, brass fittings",
          "Mirror lighting and exhaust planning",
        ],
      }}
      types={[
        { title: "Pattern Vanity Wall", desc: "Round mirror with a patterned feature wall.", image: bathroomCircularPatternSink },
        { title: "Minimal Wash Basin", desc: "Wall-hung basin with a backlit round mirror.", image: washroomSinkRoundMirror },
        { title: "Arched Mirror Nook", desc: "Wood-framed arch with a vessel basin.", image: mirrorNookRoundSink },
      ]}
      priceNote="Bathroom renovations typically start at ₹1.6 lakh per bathroom."
    />
  ),
});
