import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { EstimateSection } from "@/components/sections/EstimateSection";
import { Process } from "@/components/sections/Process";
import { Solutions } from "@/components/sections/Solutions";
import { WhyUs } from "@/components/sections/WhyUs";
import { Gallery } from "@/components/sections/Gallery";
import { StudioFilms } from "@/components/sections/StudioFilms";
import { Founders } from "@/components/sections/Founders";
import { FounderSpotlight } from "@/components/sections/FounderSpotlight";
import { Clients } from "@/components/sections/Clients";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Memberships } from "@/components/sections/Memberships";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faq } from "@/components/sections/Faq";

const title = "MNS Interiors — Interior Designers in Visakhapatnam (Vizag)";
const description =
  "Full home interiors, modular kitchens, wardrobes, TV units and false ceilings in Visakhapatnam — consultation, designing and execution under one roof.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <StudioFilms />
      <Categories />
      <EstimateSection />
      <Process />
      <Solutions />
      <Gallery limit={12} />
      <Services />
      {/* Lower homepage: Why Choose → Founders → Clients → Testimonials → Founder Spotlight → Final CTA */}
      <WhyUs />
      <Founders />
      <Clients />
      <Testimonials />
      <FounderSpotlight />
      <CtaBanner />
      <Memberships />
      <Faq />
    </>
  );
}
