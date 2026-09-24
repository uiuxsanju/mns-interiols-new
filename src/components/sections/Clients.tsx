import { LowerHeading } from "@/components/site/LowerHeading";
import { Reveal } from "@/components/site/Reveal";
import { waLink, portfolioPdfUrl } from "@/lib/site-data";
import villaExteriorPendurthi from "@/assets/portfolio/villa-exterior-pendurthi.webp";
import apartmentLiving from "@/assets/portfolio/apartment-living.webp";
import restaurantDesertMuralDome from "@/assets/portfolio/restaurant-desert-mural-dome.webp";
import dentalWorldMapMural from "@/assets/portfolio/dental-world-map-mural.webp";

// Only real client / project names already listed in the MNS Interiors portfolio.
const clientGroups = [
  {
    category: "Residential Villas & Independent Houses",
    image: villaExteriorPendurthi,
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
    image: apartmentLiving,
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
    image: restaurantDesertMuralDome,
    clients: [
      "Meet & Eat Restaurant — Beach Road",
      "Mahesh Garu Restaurant — Narsipatnam",
      "Planet9 Restaurant — Rama Talkies",
    ],
  },
  {
    category: "Commercial & Corporate Spaces",
    image: dentalWorldMapMural,
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
    <section id="clients" className="section-lower border-t border-[#E5DED4] bg-[#F7F3EC]">
      <div id="portfolio" className="container-x scroll-mt-24">
        <LowerHeading
          eyebrow="Our Clients"
          title="Trusted by homeowners & businesses"
          desc="A selection of residential, commercial and hospitality projects completed by MNS Interiors across Visakhapatnam and nearby areas."
          action={
            <a
              href={portfolioPdfUrl}
              download
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#171411] px-6 py-3 text-sm font-medium text-[#171411] transition-colors duration-300 hover:bg-[#171411] hover:text-white"
            >
              Download Portfolio PDF <span aria-hidden>↓</span>
            </a>
          }
        />

        <div className="section-gap grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {clientGroups.map((g, i) => (
            <Reveal key={g.category} as="article" delay={i * 70} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E5DED4] bg-white shadow-[0_1px_2px_rgba(23,20,17,0.04),0_14px_32px_-22px_rgba(23,20,17,0.18)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(23,20,17,0.05),0_22px_44px_-24px_rgba(23,20,17,0.26)]">
                <div className="overflow-hidden">
                  <img
                    src={g.image}
                    alt={`${g.category} project by MNS Interiors`}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-7 lg:p-8">
                  <h3 className="font-editorial text-[1.2rem] leading-snug text-[#171411] sm:text-[1.4rem]">
                    {g.category}
                  </h3>
                  <span aria-hidden className="mt-3.5 block h-px w-10 bg-[#B95827]/60 sm:mt-5" />
                  <ul className="mt-3.5 flex-1 space-y-2.5 sm:mt-5 sm:space-y-3">
                    {g.clients.map((c) => (
                      <li key={c} className="text-[0.85rem] leading-snug text-[#6B625A] sm:text-[0.92rem]">
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 border-t border-[#E5DED4] pt-4 sm:mt-7 sm:pt-5">
                    <a
                      href={enquiry(g.category)}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#B95827] transition-colors hover:text-[#171411]"
                    >
                      Enquire on WhatsApp
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
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
