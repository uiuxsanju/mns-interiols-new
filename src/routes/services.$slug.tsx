import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";
import { getServiceBySlug, services } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    // Only validate the slug here — the service object itself (which holds a
    // Lucide icon component) must not be returned from the loader, since
    // loader data is serialized for SSR and functions/components can't be.
    if (!getServiceBySlug(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) return {};
    const title = `${service.title} in Vizag | MNS Interiors`;
    const description = `${service.shortDesc} ${service.intro}`.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: RouteComponent,
  notFoundComponent: () => (
    <div className="container-x flex min-h-[50vh] flex-col items-center justify-center gap-4 py-24 text-center">
      <h1 className="font-display text-3xl text-ink">Service not found</h1>
      <p className="text-muted-foreground">That service page doesn't exist.</p>
    </div>
  ),
});

function RouteComponent() {
  const { slug } = Route.useParams();
  const service = getServiceBySlug(slug);
  if (!service) return null;
  return <ServiceDetailPage service={service} />;
}

// Referenced by the dynamic segment map for typed Link params elsewhere.
export type ServiceSlug = (typeof services)[number]["slug"];
