import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { images } from "@/lib/site-data";
import dividerGeometricShelf from "@/assets/portfolio/divider-geometric-shelf.webp";
import glassJaliPartitionDoors from "@/assets/portfolio/glass-jali-partition-doors.webp";
import dentalWorldMapMural from "@/assets/portfolio/dental-world-map-mural.webp";

const title = "Office & Study Interiors in Vizag | MNS Interiors";
const description =
  "Office cabins, glass partitions, study corners and clinic interiors in Visakhapatnam by MNS Interiors.";

export const Route = createFileRoute("/home-office")({
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
      eyebrow="Home Office"
      title="A workspace that closes at 7pm"
      desc="Built-in desks, hidden cabling and lighting positioned for calls — designed to disappear into the room after hours."
      image={images.office}
      intro={{
        heading: "Focused corners in real apartments",
        body: "Most Indian homes don't have a spare room. We carve a proper workstation out of a bedroom corner, a balcony edge or a passage wall without making it look temporary.",
        points: [
          "Built-in desks sized to your monitor setup",
          "Concealed cable trays and power points",
          "Overhead and under-desk storage",
          "Glare-free task lighting for video calls",
          "Acoustic panelling and soft furnishings",
        ],
      }}
      types={[
        { title: "Geometric Divider Shelf", desc: "Open shelving that splits a room without closing it.", image: dividerGeometricShelf },
        { title: "Jali Glass Doors", desc: "CNC jali panels to separate a quiet corner.", image: glassJaliPartitionDoors },
        { title: "Clinic Feature Wall", desc: "World-map mural for a dental clinic reception.", image: dentalWorldMapMural },
      ]}
      priceNote="Home office units typically start at ₹52,000."
    />
  ),
});
