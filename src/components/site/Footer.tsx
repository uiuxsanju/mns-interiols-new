import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { brand } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import logoFull from "@/assets/mns-logo-full.webp";

type FooterLink = { label: string; to: string; hash?: string };

const cols: { title: string; links: FooterLink[] }[] = [
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
      { label: "FAQ", to: "/", hash: "faq" },
    ],
  },
];

// MNS Interiors' official profiles (tracking parameters stripped).
const socials: { Icon: LucideIcon; href: string; label: string; color: string }[] = [
  { Icon: Instagram, href: "https://www.instagram.com/mnsinteriors/", label: "MNS Interiors on Instagram", color: "#D6249F" },
  { Icon: Facebook, href: "https://www.facebook.com/share/1cFAJ6NSvw/", label: "MNS Interiors on Facebook", color: "#1877F2" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/mns-interiors-09a520176", label: "MNS Interiors on LinkedIn", color: "#0A66C2" },
  { Icon: Youtube, href: "https://www.youtube.com/@mnsinteriors", label: "MNS Interiors on YouTube", color: "#FF0000" },
];

const TERRACOTTA = "#A95F35";
const OLIVE = "#667344";

function LinkColumn({
  title,
  links,
  open,
  onToggle,
}: {
  title: string;
  links: FooterLink[];
  open: boolean;
  onToggle: () => void;
}) {
  const listId = `footer-${title.toLowerCase()}`;
  return (
    <div className="border-b border-[#E6DCCB] lg:border-b-0 lg:border-l lg:px-8 xl:px-10">
      {/* Accordion toggle below `lg`; a plain heading from `lg` up. */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={listId}
        className="flex w-full items-center justify-between py-4 text-left lg:pointer-events-none lg:cursor-default lg:py-0"
      >
        <span>
          <span className="block font-sans text-[0.78rem] font-semibold tracking-[0.24em] text-[#A95F35] uppercase">
            {title}
          </span>
          <span aria-hidden className="mt-3 hidden h-px w-7 bg-[#A95F35] lg:block" />
        </span>
        <ChevronDown
          aria-hidden
          className={cn(
            "h-4 w-4 text-[#8A8177] transition-transform duration-300 motion-reduce:transition-none lg:hidden",
            open && "rotate-180",
          )}
        />
      </button>
      <ul id={listId} className={cn("pb-4 lg:mt-5 lg:block lg:pb-0", open ? "block" : "hidden")}>
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              {...(l.hash ? { hash: l.hash } : {})}
              className="group flex items-center justify-between gap-3 py-2 text-[0.95rem] text-[#3A3531] transition-colors duration-200 hover:text-[#A95F35]"
            >
              {l.label}
              <ChevronRight
                aria-hidden
                className="h-3.5 w-3.5 shrink-0 text-[#8A8177] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#A95F35]"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
  wrap,
  accent = TERRACOTTA,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  /** let a long value (the address) wrap between words */
  wrap?: boolean;
  accent?: string;
}) {
  const body = (
    <>
      <span
        aria-hidden
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[1.5px] sm:h-12 sm:w-12"
        style={{ borderColor: `${accent}99`, color: accent }}
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[0.78rem] text-[#8A8177]">{label}</span>
        {/* nowrap: the email/phone never break mid-word — the whole item
            moves to its own row on small screens instead. */}
        <span
          className={cn(
            "block text-[0.9rem] font-medium text-[#202020] max-[375px]:text-[0.82rem] sm:text-[0.98rem]",
            wrap ? "leading-snug text-balance" : "whitespace-nowrap",
          )}
        >
          {value}
        </span>
      </span>
    </>
  );
  const cls = "flex h-full min-w-0 items-center gap-3.5 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5";
  return href ? (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={cn(cls, "transition-colors duration-200 hover:bg-white/70")}
    >
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}

export function Footer() {
  const [open, setOpen] = useState<string | null>(null);
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-12 overflow-hidden border-t border-[#E6DCCB] bg-[#F6F0E6] sm:mt-16 lg:mt-24">
      {/* Very soft decorative glows. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#EADFC8]/70 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#8AA06B]/15 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[90rem] px-5 sm:px-6 lg:px-10">
        <div className="grid pt-12 sm:pt-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:pt-16">
          {/* Brand */}
          <div className="pb-8 lg:pr-10 lg:pb-0">
            <Link to="/" className="inline-block" aria-label={`${brand.name} — home`}>
              <img
                src={logoFull}
                alt={`${brand.name} — ${brand.tagline}`}
                width={1366}
                height={256}
                loading="lazy"
                className="h-12 w-auto max-w-full object-contain sm:h-14"
              />
            </Link>
            <p className="mt-5 max-w-[430px] text-[0.95rem] leading-relaxed text-[#5F5A55]">
              Full-home interiors and modular furniture — consultation, designing and execution under one roof.
              Serving Visakhapatnam and North Andhra Pradesh.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  style={{ ["--brand" as string]: color }}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[#E6DCCB] bg-white text-[var(--brand)] shadow-[0_6px_16px_-12px_rgba(32,32,32,0.35)] transition-[background-color,color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-white motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — accordions below `lg` */}
          <div className="border-t border-[#E6DCCB] lg:contents">
            {cols.map((c) => (
              <LinkColumn
                key={c.title}
                title={c.title}
                links={c.links}
                open={open === c.title}
                onToggle={() => setOpen((o) => (o === c.title ? null : c.title))}
              />
            ))}
          </div>
        </div>

        {/* Contact strip, directly under the columns */}
        <div className="mt-8 grid overflow-hidden rounded-[22px] border border-[#E6DCCB] bg-white/55 md:grid-cols-2 xl:mt-12 xl:grid-cols-[1fr_1.35fr_0.85fr_1.2fr]">
          <div className="border-b border-[#E6DCCB] md:border-r xl:border-b-0">
            <div className="flex h-full min-w-0 items-center gap-3.5 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5">
              <span
                aria-hidden
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[1.5px] sm:h-12 sm:w-12"
                style={{ borderColor: `${TERRACOTTA}99`, color: TERRACOTTA }}
              >
                <Phone className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.78rem] text-[#8A8177]">Call Us</span>
                {[
                  { text: brand.phone, href: brand.phoneHref },
                  { text: brand.phone2, href: brand.phone2Href },
                ].map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    className="block text-[0.9rem] leading-snug font-medium whitespace-nowrap text-[#202020] transition-colors hover:text-[#A95F35] max-[375px]:text-[0.82rem] sm:text-[0.98rem]"
                  >
                    {n.text}
                  </a>
                ))}
              </span>
            </div>
          </div>
          <div className="border-b border-[#E6DCCB] xl:border-r xl:border-b-0">
            <ContactItem
              icon={<Mail className="h-5 w-5" strokeWidth={1.7} />}
              label="Email Us"
              value={brand.email}
              href={`mailto:${brand.email}`}
            />
          </div>
          <div className="border-b border-[#E6DCCB] md:border-r md:border-b-0">
            <ContactItem
              icon={<WhatsAppIcon className="h-5 w-5" />}
              label="Chat with us"
              value="WhatsApp us"
              href={brand.whatsapp}
              external
              accent={OLIVE}
            />
          </div>
          <div>
            <ContactItem
              icon={<MapPin className="h-5 w-5" strokeWidth={1.7} />}
              label="Our Location"
              value={brand.address}
              wrap
            />
          </div>
        </div>

        {/* Bottom bar — extra bottom padding on mobile so the floating
            WhatsApp/Call buttons never sit on top of this text. */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[#E0D4C1] pt-6 pb-36 text-[0.85rem] text-[#5F5A55] sm:flex-row sm:items-center sm:justify-between lg:pr-16 lg:pb-8">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>© {year} MNS Interiors. All Rights Reserved.</span>
            <span aria-hidden className="hidden h-4 w-px bg-[#D5C8B4] sm:block" />
            <span>
              Designed by <span className="font-medium text-[#A95F35]">Sanju</span>
            </span>
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-[#A95F35]">
              Privacy Policy
            </Link>
            <span aria-hidden className="h-4 w-px bg-[#D5C8B4]" />
            <Link to="/contact" className="hover:text-[#A95F35]">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
