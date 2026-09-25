import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/site-data";
import logoFull from "@/assets/mns-logo-full.webp";
import { useEstimate } from "./estimate-context";
import { cn } from "@/lib/utils";
import { useScrollLock } from "@/lib/use-scroll-lock";

const nav = [
  { label: "Design Gallery", to: "/gallery" },
  { label: "Modular Kitchen", to: "/modular-kitchens" },
  { label: "Wardrobe", to: "/wardrobes" },
  { label: "Bedroom", to: "/bedrooms" },
  { label: "Living Room", to: "/living-rooms" },
  { label: "Bathroom", to: "/bathrooms" },
  { label: "Home Office", to: "/home-office" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openEstimate } = useEstimate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useScrollLock(menuOpen);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled ? "border-border bg-background/92 backdrop-blur-md" : "border-transparent bg-background",
      )}
    >
      <div className="container-x grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:h-20 lg:flex lg:h-24 lg:justify-between lg:py-3">
        <Link to="/" className="flex min-w-0 shrink-0 items-center" aria-label={`${brand.name} — home`}>
          <img
            src={logoFull}
            alt={`${brand.name} — ${brand.tagline}`}
            width={1366}
            height={256}
            className="h-9 w-auto max-w-full shrink-0 object-contain max-[359px]:h-8 sm:h-11 lg:h-12 2xl:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-4 xl:flex 2xl:gap-6">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm whitespace-nowrap text-foreground/75 transition-colors hover:text-primary xl:text-[0.82rem] 2xl:text-sm"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={brand.phoneHref}
            className="hidden items-center gap-2 text-sm whitespace-nowrap text-foreground/75 transition-colors hover:text-primary lg:flex xl:hidden 2xl:flex"
          >
            <Phone className="h-4 w-4" /> {brand.phone}
          </a>
          <Button onClick={openEstimate} className="hidden shrink-0 rounded-full px-5 whitespace-nowrap sm:inline-flex">
            Get Free Estimate
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 origin-top bg-background transition-all duration-300 sm:top-20 lg:top-24 xl:hidden",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <div className="container-x flex h-full flex-col overflow-y-auto pt-4 pb-8">
          <nav className="flex flex-col divide-y divide-border">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                style={{ animationDelay: `${i * 35}ms` }}
                className={cn(
                  "py-3.5 font-display text-lg text-ink sm:py-4 sm:text-xl",
                  menuOpen && "rise-in",
                )}
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/about" className="py-3.5 font-display text-lg text-ink sm:py-4 sm:text-xl">
              About
            </Link>
          </nav>
          <div className="mt-6 space-y-3">
            <Button onClick={openEstimate} className="h-11 w-full rounded-full">
              Get Free Estimate
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Or call{" "}
              <a href={brand.phoneHref} className="whitespace-nowrap text-ink hover:text-primary">
                {brand.phone}
              </a>{" "}
              /{" "}
              <a href={brand.phone2Href} className="whitespace-nowrap text-ink hover:text-primary">
                {brand.phone2}
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
