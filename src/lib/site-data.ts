import kitchen from "@/assets/portfolio/kitchen-cove-lighting.webp";
import living from "@/assets/portfolio/tv-unit-3.webp";
import bedroom from "@/assets/portfolio/bedroom-panel-wall.webp";
import wardrobe from "@/assets/portfolio/wardrobe-sliding-cream.webp";
import bathroom from "@/assets/portfolio/bathroom-circular-pattern-sink.webp";
import office from "@/assets/portfolio/glass-partition-door-2.webp";
import pooja from "@/assets/portfolio/pooja-jali-cnc-unit.webp";
import tvunit from "@/assets/portfolio/tv-unit-glass-partition-dark.webp";
import ceiling from "@/assets/portfolio/ceiling-spiral-cove-marble.webp";
import spacesaving from "@/assets/portfolio/wardrobe-gray-gold-trim-sekhar.webp";
import foyer from "@/assets/portfolio/entrance-hexagon.webp";
import crockery from "@/assets/portfolio/glass-cabinet-bar-unit.webp";
import kids from "@/assets/portfolio/bunk-bed-kids-pink.webp";
import heroPortfolio from "@/assets/portfolio/living-room-tv.webp";
import heroBanner from "@/assets/portfolio/interior-design-banner.webp";
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

// Real MNS Interiors completed-project photos, plus one exception:
// `heroBanner` is a licensed decorative stock image used only as the
// homepage Hero's background (not claimed as MNS's own completed work —
// see the Hero component's alt text).
export const images = {
  heroBanner,
  heroPortfolio,
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
  phone2: "+91 83093 15989",
  phone2Href: "tel:+918309315989",
  whatsapp: "https://wa.me/918074808099?text=Hi%20MNS%20Interiors%2C%20I%27d%20like%20a%20free%20estimate",
  email: "mnsinteriors399@gmail.com",
  address: "VUDA Colony, Madhurawada, Visakhapatnam 530048",
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
  { image: heroPortfolio, cat: "Living Room", title: "Living room with wall-to-wall TV unit" },
  { image: bedroom, cat: "Bedroom", title: "Bedroom with panelled headboard wall" },
  { image: wardrobe, cat: "Wardrobe", title: "Two-tone sliding wardrobe" },
  { image: bathroom, cat: "Bathroom", title: "Vanity with backlit mirror" },
  { image: office, cat: "Office", title: "Glass-partition office cabin" },
  { image: tvunit, cat: "Living Room", title: "TV unit with sliding glass panel" },
  { image: crockery, cat: "Kitchen", title: "Glass-front display & bar unit" },
  { image: kids, cat: "Bedroom", title: "Bunk-bed kids room" },
  { image: ceiling, cat: "Living Room", title: "Spiral cove ceiling with marble TV wall" },
  { image: spacesaving, cat: "Bedroom", title: "Wardrobe with marble finish & window seat" },
  { image: pooja, cat: "Living Room", title: "CNC jali pooja unit" },
  { image: foyer, cat: "Living Room", title: "Hexagon-panel foyer wall" },
  { image: living, cat: "Living Room", title: "Marble-backed TV wall" },
  ...curatedRenderItems,
];

export const galleryTabs = ["All", "Kitchen", "Living Room", "Bedroom", "Wardrobe", "Bathroom", "Office", "3D Design"];

// Real client feedback. The first two are transcribed verbatim from MNS
// Interiors' own portfolio deck (WhatsApp thank-you messages from completed
// Vizag projects) — no star rating shown for these, since the source
// messages don't contain any. The remaining five are confirmed real client
// feedback from completed Vizag-area projects (site owner-provided), given
// here in the site's own short-quote format. No photo is shown for any of
// them — no consented, publishable client photos — so the card falls back
// to an initials avatar instead of a stock/placeholder face.
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
  {
    name: "Pradeep Garu",
    city: "Nagaram Palem, Vizag",
    project: "Home Interiors",
    rating: 5,
    quote: "Beautiful design & excellent finishing.",
  },
  {
    name: "Raju Garu",
    city: "Gajuwaka, Vizag",
    project: "Home Interiors",
    rating: 5,
    quote: "Very professional work from design to execution.",
  },
  {
    name: "Santosh Garu",
    city: "Ranasthalam, Srikakulam",
    project: "Home Interiors",
    rating: 5,
    quote: "Quality of work and finishing exceeded our expectations.",
  },
  {
    name: "Satish Garu",
    city: "MVV City, Vizag",
    project: "Home Interiors",
    rating: 5,
    quote: "Exactly what we wanted, with great attention to detail.",
  },
  {
    name: "Srinivas Garu",
    city: "Bheemili, Vizag",
    project: "Home Interiors",
    rating: 5,
    quote: "Creative designs and quality execution — our home looks premium.",
  },
];

export const faqs = [
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
