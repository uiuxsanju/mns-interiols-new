// Short real project clips — filmed on-site during installs and handovers,
// sourced from MNS Interiors' own Instagram (interiors_by_sunil / sunilellipilli).
// Videos and posters live in /public/videos/studio-films/ (served as static
// files, not bundled) so they can be lazy-loaded and played natively.
export type StudioFilm = {
  id: string;
  title: string;
  room: string;
  video: string;
  poster: string;
};

export const studioFilms: StudioFilm[] = [
  {
    id: "bathroom-vanity-pendant",
    title: "Fluted-panel vanity with copper pendant lights",
    room: "Bathroom",
    video: "/videos/studio-films/studio-bathroom-vanity-pendant.mp4",
    poster: "/videos/studio-films/posters/studio-bathroom-vanity-pendant.jpg",
  },
  {
    id: "kitchen-hexagon-tile",
    title: "Kitchen with hexagon-pattern backsplash",
    room: "Kitchen",
    video: "/videos/studio-films/studio-kitchen-hexagon-tile.mp4",
    poster: "/videos/studio-films/posters/studio-kitchen-hexagon-tile.jpg",
  },
  {
    id: "living-mural-ceiling",
    title: "Living room with feature wall and cove-lit ceiling",
    room: "Living Room",
    video: "/videos/studio-films/studio-living-mural-ceiling.mp4",
    poster: "/videos/studio-films/posters/studio-living-mural-ceiling.jpg",
  },
  {
    id: "bedroom-wardrobe-drapes",
    title: "Bedroom with sliding wardrobe and window seat",
    room: "Bedroom",
    video: "/videos/studio-films/studio-bedroom-wardrobe-drapes.mp4",
    poster: "/videos/studio-films/posters/studio-bedroom-wardrobe-drapes.jpg",
  },
  {
    id: "bedroom-wardrobe-detail",
    title: "Two-tone sliding wardrobe, close up",
    room: "Bedroom",
    video: "/videos/studio-films/studio-bedroom-wardrobe-detail.mp4",
    poster: "/videos/studio-films/posters/studio-bedroom-wardrobe-detail.jpg",
  },
  {
    id: "ceiling-cove-fan-1",
    title: "Cove-lit false ceiling detail",
    room: "Living Room",
    video: "/videos/studio-films/studio-ceiling-cove-fan-1.mp4",
    poster: "/videos/studio-films/posters/studio-ceiling-cove-fan-1.jpg",
  },
  {
    id: "ceiling-cove-fan-2",
    title: "Cove-lit false ceiling, another angle",
    room: "Living Room",
    video: "/videos/studio-films/studio-ceiling-cove-fan-2.mp4",
    poster: "/videos/studio-films/posters/studio-ceiling-cove-fan-2.jpg",
  },
  {
    id: "passage-map-feature-wall",
    title: "Passage with themed feature wall",
    room: "Commercial",
    video: "/videos/studio-films/studio-passage-map-feature-wall.mp4",
    poster: "/videos/studio-films/posters/studio-passage-map-feature-wall.jpg",
  },
  {
    id: "handover-balloon-walkthrough",
    title: "Handover-day walkthrough",
    room: "Commercial",
    video: "/videos/studio-films/studio-handover-balloon-walkthrough.mp4",
    poster: "/videos/studio-films/posters/studio-handover-balloon-walkthrough.jpg",
  },
  {
    id: "site-laminate-install",
    title: "On-site laminate and panel install",
    room: "Site Work",
    video: "/videos/studio-films/studio-site-laminate-install.mp4",
    poster: "/videos/studio-films/posters/studio-site-laminate-install.jpg",
  },
  {
    id: "site-terrace-construction",
    title: "Terrace cladding installation in progress",
    room: "Site Work",
    video: "/videos/studio-films/studio-site-terrace-construction.mp4",
    poster: "/videos/studio-films/posters/studio-site-terrace-construction.jpg",
  },
];
