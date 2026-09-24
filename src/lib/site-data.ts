import kitchen from "@/assets/portfolio/kitchen-cove-lighting.webp";
import living from "@/assets/portfolio/tv-unit-3.webp";
import bedroom from "@/assets/portfolio/bedroom-panel-wall.webp";
import wardrobe from "@/assets/portfolio/wardrobe-sliding-cream.webp";
import bathroom from "@/assets/portfolio/bathroom-circular-pattern-sink.webp";
import office from "@/assets/portfolio/glass-partition-door-2.webp";
import pooja from "@/assets/portfolio/pooja-jali-cnc-unit.webp";
import tvunit from "@/assets/portfolio/tv-unit-gold-accent.webp";
import ceiling from "@/assets/portfolio/ceiling-blue-wave-led.webp";
import spacesaving from "@/assets/portfolio/bedroom-tv-wardrobe-combo.webp";
import foyer from "@/assets/portfolio/entrance-hexagon.webp";
import crockery from "@/assets/portfolio/glass-cabinet-bar-unit.webp";
import kids from "@/assets/portfolio/bunk-bed-kids-pink.webp";
import hero from "@/assets/portfolio/living-room-tv.webp";
import lighting from "@/assets/portfolio/hexagon-marble-accent-chandelier.webp";
import wallpaper from "@/assets/portfolio/wallpaper-geometric-accent.webp";
import wallPaint from "@/assets/portfolio/bedroom-orange-accent.webp";
import movableFurniture from "@/assets/portfolio/sofa-staircase.webp";
import { renderImages } from "@/lib/render-images";

// A curated subset of the photoreal 3D design-concept renders, shown in the
// main Design Gallery alongside real photographed projects. These are NOT
// photos of completed work — they carry cat: "3D Design" so the Gallery UI
// can flag them clearly (see Gallery.tsx) and never blur them into the
// "real projects, photographed after handover" claim made for the rest of
// this array.
const curatedRenderItems = renderImages.slice(0, 12).map((r) => ({
  image: r.src,
  cat: "3D Design" as const,
  title: r.title,
}));

// All real MNS Interiors completed-project photos (no stock imagery).
export const images = {
  hero,
  kitchen,
  living,
  bedroom,
  wardrobe,
  bathroom,
  office,
  pooja,
  tvunit,
  ceiling,
  spacesaving,
  foyer,
  crockery,
  kids,
};

export const brand = {
  name: "MNS Interiors",
  tagline: "Make Nice Space",
  phone: "+91 80748 08099",
  phoneHref: "tel:+918074808099",
  whatsapp: "https://wa.me/918074808099?text=Hi%20MNS%20Interiors%2C%20I%27d%20like%20a%20free%20estimate",
  email: "mnsinteriors399@gmail.com",
  address: "# 10-385/1/11, Sri Shirdi Sai Vet. Colony, Visalakshinagar, Hanumanthuwaka Jn., Visakhapatnam 530043",
};

// Dedicated WhatsApp enquiry number for Portfolio & Services buttons.
export const whatsappNumber = "918074808099";
export const waLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

// Change this when the site moves to its own domain (also update public/sitemap.xml + robots.txt).
export const siteUrl = "https://comfort-nest-pro.lovable.app";

export const portfolioPdfUrl = "/mns-interiors-portfolio.pdf";

export type Category = {
  title: string;
  desc: string;
  image: string;
  to?: string;
};

export const categories: Category[] = [
  { title: "Modular Kitchens", desc: "Ergonomic layouts with lifetime hardware.", image: kitchen, to: "/modular-kitchens" },
  { title: "Living Rooms", desc: "Warm, editorial spaces built to host.", image: living, to: "/living-rooms" },
  { title: "Bedrooms", desc: "Quiet palettes and considered storage.", image: bedroom, to: "/bedrooms" },
  { title: "Wardrobes", desc: "Sliding, hinged and walk-in systems.", image: wardrobe, to: "/wardrobes" },
  { title: "Bathrooms", desc: "Stone, brass and soft-lit calm.", image: bathroom, to: "/bathrooms" },
  { title: "Home Office", desc: "Focused corners that disappear after work.", image: office, to: "/home-office" },
  { title: "Pooja Rooms", desc: "Crafted mandirs with layered lighting.", image: pooja, to: "/gallery" },
  { title: "TV Units", desc: "Panelled walls with hidden storage.", image: tvunit, to: "/gallery" },
  { title: "False Ceilings", desc: "Cove profiles and precision lighting.", image: ceiling, to: "/gallery" },
  { title: "Space Saving Furniture", desc: "Every inch earns its place.", image: spacesaving, to: "/gallery" },
];

export const solutions = [
  { title: "Modular Kitchen", image: kitchen },
  { title: "Wardrobes", image: wardrobe },
  { title: "TV Units", image: tvunit },
  { title: "Crockery Units", image: crockery },
  { title: "Study Tables", image: office },
  { title: "False Ceiling", image: ceiling },
  { title: "Lighting", image: lighting },
  { title: "Wallpaper", image: wallpaper },
  { title: "Wall Paint", image: wallPaint },
  { title: "Bathroom", image: bathroom },
  { title: "Pooja Unit", image: pooja },
  { title: "Foyer", image: foyer },
  { title: "Kids Bedroom", image: kids },
  { title: "Movable Furniture", image: movableFurniture },
];

export const processSteps = [
  { no: "01", title: "Consultation", desc: "Share your home plan, timeline and budget." },
  { no: "02", title: "Meet Your Designer", desc: "A dedicated designer visits your site." },
  { no: "03", title: "Design & Visualisation", desc: "3D walkthroughs of every room." },
  { no: "04", title: "Finalise Design", desc: "Lock materials, finishes and pricing." },
  { no: "05", title: "Manufacturing", desc: "Precision-built at our own factory." },
  { no: "06", title: "Installation", desc: "Supervised, dust-controlled fit-out." },
  { no: "07", title: "Move In", desc: "Deep-cleaned, handover with warranty." },
];

export const galleryItems = [
  { image: kitchen, cat: "Kitchen", title: "L-shaped kitchen with cove lighting" },
  { image: hero, cat: "Living Room", title: "Living room with wall-to-wall TV unit" },
  { image: bedroom, cat: "Bedroom", title: "Bedroom with panelled headboard wall" },
  { image: wardrobe, cat: "Wardrobe", title: "Two-tone sliding wardrobe" },
  { image: bathroom, cat: "Bathroom", title: "Vanity with backlit mirror" },
  { image: office, cat: "Office", title: "Glass-partition office cabin" },
  { image: tvunit, cat: "Living Room", title: "Floating TV unit with gold inlay" },
  { image: crockery, cat: "Kitchen", title: "Glass-front display & bar unit" },
  { image: kids, cat: "Bedroom", title: "Bunk-bed kids room" },
  { image: ceiling, cat: "Living Room", title: "Wave-profile LED ceiling" },
  { image: spacesaving, cat: "Bedroom", title: "Bedroom with wardrobe & TV wall" },
  { image: pooja, cat: "Living Room", title: "CNC jali pooja unit" },
  { image: foyer, cat: "Living Room", title: "Hexagon-panel foyer wall" },
  { image: living, cat: "Living Room", title: "Marble-backed TV wall" },
  ...curatedRenderItems,
];

export const galleryTabs = ["All", "Kitchen", "Living Room", "Bedroom", "Wardrobe", "Bathroom", "Office", "3D Design"];

// Real client feedback, transcribed from MNS Interiors' own portfolio deck
// (WhatsApp thank-you messages from completed Vizag projects). Only
// Visakhapatnam-city clients are listed here — no photo is shown because we
// don't have consented, publishable photos of these clients, so the card
// falls back to an initials avatar instead of a stock/placeholder face.
// No star ratings are shown — the source messages don't contain any.
export const testimonials = [
  {
    name: "Naresh & Srinu",
    city: "Madhurawada, Vizag",
    project: "Home Interiors",
    quote:
      "Thank you Sunil for the excellent work, uncompromising in satisfying the customer — great team work with excellent coordination. Thank you for making our home rocking!",
  },
  {
    name: "Srinivas",
    city: "Madhurawada, Vizag",
    project: "Home Interiors",
    quote:
      "Thank you for your hard work and effort to give a crazy and stunning look to our house. All my friends were amazed with your work, mainly the finishing.",
  },
];

export const faqs = [
  {
    q: "How does the interior design process work?",
    a: "It runs in seven stages: consultation, designer meeting, 3D design, finalisation, factory manufacturing, on-site installation and handover. You get a single project manager across all of them.",
  },
  {
    q: "How much do home interiors cost?",
    a: "A 2BHK typically ranges from ₹4.5–9 lakh and a 3BHK from ₹7–16 lakh, depending on scope, core material and finishes. Your estimate is itemised line by line before anything is booked.",
  },
  {
    q: "How long does the project take?",
    a: "Design usually takes 2–3 weeks. Manufacturing and installation take 35–50 days after design sign-off, depending on the number of rooms.",
  },
  {
    q: "Can I customise the designs?",
    a: "Every design is drawn for your exact floor plan. Layouts, shutter finishes, hardware brands, lighting and handles are all chosen by you.",
  },
  {
    q: "Do you provide modular kitchens?",
    a: "Yes. We build L, U, parallel and island kitchens with BWP-grade ply, moisture-sealed edges and soft-close hardware backed by a 10-year warranty.",
  },
  {
    q: "Do you provide wardrobes?",
    a: "Yes — hinged, sliding and walk-in wardrobes, with internal accessories such as pull-out trays, lofts, mirror panels and lighting.",
  },
  {
    q: "Do you provide complete home interiors?",
    a: "Yes. Full-home packages cover kitchen, wardrobes, TV and crockery units, false ceilings, lighting, painting, wallpaper, bathrooms and movable furniture.",
  },
  {
    q: "Do you provide installation?",
    a: "All installation is done by our own supervised crews with dust sheeting, daily site cleaning and a final quality check before handover.",
  },
  {
    q: "Do you provide after-sales support?",
    a: "Yes. A dedicated service line handles service requests, and modular products carry a 10-year warranty with free first-year service visits.",
  },
];
