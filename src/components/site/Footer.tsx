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
    <footer className="mt-24 border-t border-border bg-sand">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5 lg:py-20">
        <div className="lg:col-span-2">
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
              { Icon: Instagram, href: "https://www.instagram.com/mnsinteriors/", label: "MNS Interiors on Instagram" },
              { Icon: Facebook, href: "https://instagram.com", label: "Social profile" },
              { Icon: Linkedin, href: "https://instagram.com", label: "Social profile" },
              { Icon: Youtube, href: "https://instagram.com", label: "Social profile" },
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground/70 transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h3 className="font-sans text-xs tracking-[0.2em] text-ink uppercase">{col.title}</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-sans text-xs tracking-[0.2em] text-ink uppercase">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={brand.phoneHref} className="flex items-start gap-2 hover:text-primary">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" /> {brand.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`} className="flex items-start gap-2 hover:text-primary">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" /> {brand.email}
              </a>
            </li>
            <li>
              <a href={brand.whatsapp} target="_blank" rel="noreferrer noopener" className="flex items-start gap-2 hover:text-primary">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" /> WhatsApp us
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {brand.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
