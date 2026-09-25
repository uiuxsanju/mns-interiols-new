import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { brand } from "@/lib/site-data";
import logoMark from "@/assets/mns-logo-mark.png";

const cols = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Our Services", to: "/gallery" },
      { label: "Design Gallery", to: "/gallery" },
      { label: "3D Design Concepts", to: "/design-concepts" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Modular Kitchen", to: "/modular-kitchens" },
      { label: "Wardrobes", to: "/wardrobes" },
      { label: "Living Room", to: "/living-rooms" },
      { label: "Bedroom", to: "/bedrooms" },
      { label: "Bathroom", to: "/bathrooms" },
      { label: "Home Office", to: "/home-office" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Interior Design Ideas", to: "/gallery" },
      { label: "Kitchen Ideas", to: "/modular-kitchens" },
      { label: "Bedroom Ideas", to: "/bedrooms" },
      { label: "Wardrobe Ideas", to: "/wardrobes" },
      { label: "FAQ", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border bg-sand sm:mt-16 lg:mt-24">
      <div className="container-x grid grid-cols-2 gap-8 py-10 sm:gap-10 sm:py-14 lg:grid-cols-5 lg:gap-12 lg:py-20">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={logoMark} alt={`${brand.name} logo`} className="h-9 w-auto object-contain" />
            <span className="font-display text-xl text-ink">{brand.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Full-home interiors and modular furniture — consultation, designing and execution under one roof.
            Serving Visakhapatnam and North Andhra Pradesh.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              {
                Icon: Instagram,
                href: "https://www.instagram.com/mnsinteriors/",
                label: "MNS Interiors on Instagram",
                bg: "bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]",
              },
              {
                Icon: Facebook,
                href: "https://instagram.com",
                label: "Social profile",
                bg: "bg-[#1877F2]",
              },
              {
                Icon: Linkedin,
                href: "https://instagram.com",
                label: "Social profile",
                bg: "bg-[#0A66C2]",
              },
              {
                Icon: Youtube,
                href: "https://instagram.com",
                label: "Social profile",
                bg: "bg-[#FF0000]",
              },
            ].map(({ Icon, href, label, bg }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className={`grid h-10 w-10 place-items-center rounded-full text-white shadow-[0_1px_2px_rgba(23,20,17,0.06),0_10px_20px_-12px_rgba(23,20,17,0.35)] transition-transform hover:-translate-y-0.5 hover:scale-105 ${bg}`}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title} className="min-w-0">
            <h3 className="font-sans text-[0.68rem] tracking-[0.2em] text-ink uppercase sm:text-xs">
              {col.title}
            </h3>
            <ul className="mt-2.5 text-[0.82rem] sm:mt-4 sm:text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="inline-block py-1.5 text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact needs the full row on mobile — the address and email are far
            too long to sit in a half-width column without overflowing. */}
        <div className="col-span-2 min-w-0 lg:col-span-1">
          <h3 className="font-sans text-[0.68rem] tracking-[0.2em] text-ink uppercase sm:text-xs">
            Contact
          </h3>
          <ul className="mt-2.5 text-[0.82rem] text-muted-foreground sm:mt-4 sm:text-sm">
            <li>
              <a href={brand.phoneHref} className="flex items-start gap-2 py-1.5 hover:text-primary">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" /> {brand.phone}
              </a>
            </li>
            <li className="min-w-0">
              <a href={`mailto:${brand.email}`} className="flex items-start gap-2 py-1.5 hover:text-primary">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="min-w-0 break-all">{brand.email}</span>
              </a>
            </li>
            <li>
              <a href={brand.whatsapp} target="_blank" rel="noreferrer noopener" className="flex items-start gap-2 py-1.5 hover:text-primary">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" /> WhatsApp us
              </a>
            </li>
            <li className="flex min-w-0 items-start gap-2 pt-1.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span className="min-w-0 break-words">{brand.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col gap-1 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:py-6">
          <p className="py-1">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex gap-5 sm:gap-6">
            <Link to="/contact" className="inline-block py-1.5 hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/contact" className="inline-block py-1.5 hover:text-primary">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
