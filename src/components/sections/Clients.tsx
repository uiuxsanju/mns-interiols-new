import { MessageCircle } from "lucide-react";
import { LowerHeading } from "@/components/site/LowerHeading";
import { Reveal } from "@/components/site/Reveal";
import { waLink, portfolioPdfUrl } from "@/lib/site-data";
import villaExteriorEvening from "@/assets/portfolio/villa-exterior-modern-evening.webp";
import apartmentBuildingExterior from "@/assets/portfolio/apartment-building-exterior-modern.webp";
import cafeInteriorBlueArch from "@/assets/portfolio/cafe-interior-blue-arch-tile.webp";
import officeLoungeCorporate from "@/assets/portfolio/office-lounge-corporate-modern.webp";

// The client / project names below are real, from the MNS Interiors portfolio.
// The card photos are representative category images (not photos of these
// specific named projects) — see each `alt` text below.
const clientGroups = [
  {
    category: "Residential Villas & Independent Houses",
    image: villaExteriorEvening,
    clients: [
      "Raju Garu — Mindhi, Gajuwaka",
      "Srikanth Sastry Garu — Simhachalam",
      "Srinivas Garu — Pendurthi",
      "Santhosh Garu — Ranasthalam",
      "Sekhar Garu — Simhachalam / Padmavathi Nagar",
      "Pradeep & Dileep Garu — Triplex Villa, Madhurawada",
      "Srinivas Garu — Bhimili, Dorathota",
      "Naresh Garu & Srinu Garu — Madhurawada",
    ],
  },
  {
    category: "Apartments & Flats",
    image: apartmentBuildingExterior,
    clients: [
      "Celest Flat Interiors — Gajuwaka",
      "Satish Garu — MVV City, PM Palem",
      "Satish Garu — Koramanipalem, Gajuwaka",
      "MK Gold Coast Apartments — Vizag",
      "Sujatha Nagar Site Interiors",
    ],
  },
  {
    category: "Restaurants & Cafés",
    image: cafeInteriorBlueArch,
    clients: [
      "Meet & Eat Restaurant — Beach Road",
      "Mahesh Garu Restaurant — Narsipatnam",
      "Planet9 Restaurant — Rama Talkies",
    ],
  },
  {
    category: "Commercial & Corporate Spaces",
    image: officeLoungeCorporate,
    clients: [
      "Pfizer Pharma Company — Innovation Hub",
      "Raju Garu Dental Clinic — Sankarmatam",
      "Santhu Madam Stylish Cuts & Spa — AR, Narsipatnam",
    ],
  },
];

const enquiry = (category: string) =>
  waLink(
    `Hello MNS Interiors,\nI would like to know more about your ${category} projects.\n\nPlease share more details.`,
  );

export function Clients() {
  return (
    <section
      id="clients"
      className="relative isolate overflow-hidden section-lower bg-[#5A4636]"
    >
      {/* Brown fluted wall-panel texture (client's image) with a cove-light wash. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-[length:720px_auto] bg-repeat sm:bg-[length:1100px_auto]"
          style={{ backgroundImage: "url(/images/panel-brown-bg.webp)" }}
        />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,21,14,0.35)_0%,rgba(30,21,14,0.15)_45%,rgba(30,21,14,0.45)_100%)]" />
        <span className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_at_top,rgba(240,194,123,0.25)_0%,rgba(240,194,123,0)_70%)]" />
        <span className="absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-[#F0C27B]/70 to-transparent" />
      </div>
      <div
        id="portfolio"
        className="container-x scroll-mt-24 [&_.eyebrow-mns]:text-[#F0C27B] [&_h2]:text-[#F7EFE3] [&>div:first-child_p:not(.eyebrow-mns)]:text-[#EADBC6]"
      >
        <LowerHeading
          eyebrow="Our Clients"
          title="Trusted by homeowners & businesses"
          desc="A selection of residential, commercial and hospitality projects completed by MNS Interiors across Visakhapatnam and nearby areas."
          action={
            <a
              href={portfolioPdfUrl}
              download
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#F7EFE3]/70 px-6 py-3 text-sm font-medium text-[#F7EFE3] transition-colors duration-300 hover:bg-[#F7EFE3] hover:text-[#171411]"
            >
              Download Portfolio PDF <span aria-hidden>↓</span>
            </a>
          }
        />

        <div className="section-gap grid max-md:-mx-4 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:gap-3.5 max-md:overflow-x-auto max-md:scroll-px-4 max-md:px-4 max-md:pb-2 max-md:[scrollbar-width:none] max-md:*:min-w-0 max-md:*:shrink-0 max-md:*:basis-[82%] max-md:*:snap-start sm:max-md:-mx-6 sm:max-md:scroll-px-6 sm:max-md:px-6 sm:max-md:*:basis-[60%] gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {clientGroups.map((g, i) => (
            <Reveal key={g.category} as="article" delay={i * 70} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E5DED4] bg-white shadow-[0_1px_2px_rgba(23,20,17,0.04),0_14px_32px_-22px_rgba(23,20,17,0.18)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(23,20,17,0.05),0_22px_44px_-24px_rgba(23,20,17,0.26)]">
                <div className="relative overflow-hidden">
                  <img
                    src={g.image}
                    alt={`${g.category} — representative style for this category`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent"
                  />
                  <h3 className="font-editorial absolute right-4 bottom-3.5 left-4 text-[1.15rem] leading-snug text-white sm:text-[1.3rem]">
                    {g.category}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <span aria-hidden className="block h-px w-10 bg-[#B95827]/60" />
                  <div className="mt-3.5 flex flex-1 flex-wrap content-start gap-1.5 sm:mt-4">
                    {g.clients.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-[#E5DED4] bg-[#FBF6ED] px-2.5 py-1 text-[0.72rem] leading-none text-[#6B625A] sm:text-[0.76rem]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-[#E5DED4] pt-4">
                    <a
                      href={enquiry(g.category)}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[#B95827] transition-colors hover:text-[#171411]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Enquire on WhatsApp
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
