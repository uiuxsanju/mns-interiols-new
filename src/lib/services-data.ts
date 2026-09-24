import {
  PencilRuler,
  ChefHat,
  DoorClosed,
  Tv,
  Boxes,
  Hammer,
  Sofa,
  PanelTop,
  PaintRoller,
  Zap,
  Droplet,
  Grid3x3,
  Mountain,
  GlassWater,
  Feather,
  Building2,
  ShieldCheck,
  Frame,
  Image as ImageIcon,
  Columns3,
  Layers,
  Layers2,
  Waves,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { images } from "@/lib/site-data";
import { renderImages } from "@/lib/render-images";
import kitchen1 from "@/assets/portfolio/kitchen-1.webp";
import kitchen2 from "@/assets/portfolio/kitchen-2.webp";
import kitchen3 from "@/assets/portfolio/kitchen-3.webp";
import tvUnit1 from "@/assets/portfolio/tv-unit-1.webp";
import tvUnit2 from "@/assets/portfolio/tv-unit-2.webp";
import wardrobe1 from "@/assets/portfolio/wardrobe-1.webp";
import wardrobe2 from "@/assets/portfolio/wardrobe-2.webp";
import wardrobe3 from "@/assets/portfolio/wardrobe-3.webp";
import wardrobe4 from "@/assets/portfolio/wardrobe-4.webp";
import wardrobe5 from "@/assets/portfolio/wardrobe-5.webp";
import ceiling1 from "@/assets/portfolio/ceiling-1.webp";
import ceiling2 from "@/assets/portfolio/ceiling-2.webp";
import entranceHexagon from "@/assets/portfolio/entrance-hexagon.webp";
import panelMarbleTv from "@/assets/portfolio/panel-marble-tv.webp";
import wallHexagonWood from "@/assets/portfolio/wall-hexagon-wood.webp";
import livingRoomTv from "@/assets/portfolio/living-room-tv.webp";
import kitchenModular1 from "@/assets/portfolio/kitchen-modular-1.webp";
import kitchenModular2 from "@/assets/portfolio/kitchen-modular-2.webp";
import kitchenGlassCabinet from "@/assets/portfolio/kitchen-glass-cabinet.webp";
import kitchenGlassPartition from "@/assets/portfolio/kitchen-glass-partition.webp";
import kitchenDiningExtra from "@/assets/portfolio/kitchen-dining-4.webp";
import kitchenDesignRender1 from "@/assets/portfolio/kitchen-design-render-1.webp";
import kitchenDesignRender2 from "@/assets/portfolio/kitchen-design-render-2.webp";
import kitchenCoveLighting from "@/assets/portfolio/kitchen-cove-lighting.webp";
import diningCurtains from "@/assets/portfolio/dining-curtains.webp";
import diningCeiling from "@/assets/portfolio/dining-ceiling.webp";
import bedroomPanelWall from "@/assets/portfolio/bedroom-panel-wall.webp";
import bedroomGreenAccent from "@/assets/portfolio/bedroom-green-accent.webp";
import bedroomOrangeAccent from "@/assets/portfolio/bedroom-orange-accent.webp";
import sofaStaircase from "@/assets/portfolio/sofa-staircase.webp";
import tvUnit3 from "@/assets/portfolio/tv-unit-3.webp";
import tvUnit4 from "@/assets/portfolio/tv-unit-4.webp";
import bathroomPlumbing from "@/assets/portfolio/bathroom-plumbing.webp";
import bathroomTile from "@/assets/portfolio/bathroom-tile.webp";
import wallpaperGeometricAccent from "@/assets/portfolio/wallpaper-geometric-accent.webp";
import wallpaperBuddhaMural from "@/assets/portfolio/wallpaper-buddha-mural.webp";
import wallpaperGalaxyMural from "@/assets/portfolio/wallpaper-galaxy-mural.webp";
import wallpaperMarbleMural from "@/assets/portfolio/wallpaper-marble-mural.webp";
import windowBlindGeometric from "@/assets/portfolio/window-blind-geometric.webp";
import wardrobeSlidingCream from "@/assets/portfolio/wardrobe-sliding-cream.webp";
import wardrobeWhiteMarble from "@/assets/portfolio/wardrobe-white-marble.webp";
import kitchenModular3 from "@/assets/portfolio/kitchen-modular-3.webp";
import kitchenModular4 from "@/assets/portfolio/kitchen-modular-4.webp";
import kitchenModular5 from "@/assets/portfolio/kitchen-modular-5.webp";
import ceilingCncBarUnit from "@/assets/portfolio/ceiling-cnc-bar-unit.webp";
import ceilingCncFloral from "@/assets/portfolio/ceiling-cnc-floral.webp";
import tvUnitGoldAccent from "@/assets/portfolio/tv-unit-gold-accent.webp";
import bedroomTvWardrobeCombo from "@/assets/portfolio/bedroom-tv-wardrobe-combo.webp";
import bedroomPinkBedsheet from "@/assets/portfolio/bedroom-pink-bedsheet.webp";
import glassCabinetBarUnit from "@/assets/portfolio/glass-cabinet-bar-unit.webp";
import entranceFoyerMarble from "@/assets/portfolio/entrance-foyer-marble.webp";
import carvedWoodenMainDoor from "@/assets/portfolio/carved-wooden-main-door.webp";
import wallpaperEiffelMural from "@/assets/portfolio/wallpaper-eiffel-mural.webp";
import wallpaperGeometricPinkGray from "@/assets/portfolio/wallpaper-geometric-pink-gray.webp";
import wallpaperColorfulTriangle from "@/assets/portfolio/wallpaper-colorful-triangle.webp";
import kitchenTealGoldTile from "@/assets/portfolio/kitchen-teal-gold-tile.webp";
import kitchenCoveCeilingCream from "@/assets/portfolio/kitchen-cove-ceiling-cream.webp";
import wardrobeWoodSliding2 from "@/assets/portfolio/wardrobe-wood-sliding-2.webp";
import wardrobeYellow3Door from "@/assets/portfolio/wardrobe-yellow-3door.webp";
import ceilingTriangleCove from "@/assets/portfolio/ceiling-triangle-cove.webp";
import ceilingBlueWaveLed from "@/assets/portfolio/ceiling-blue-wave-led.webp";
import ceilingGoldFloralGypsum from "@/assets/portfolio/ceiling-gold-floral-gypsum.webp";
import tvUnitGoldMarble from "@/assets/portfolio/tv-unit-gold-marble.webp";
import tvUnitMarbleWoodWall from "@/assets/portfolio/tv-unit-marble-wood-wall.webp";
import bunkBedKidsPink from "@/assets/portfolio/bunk-bed-kids-pink.webp";
import dividerWoodSlatLiving from "@/assets/portfolio/divider-wood-slat-living.webp";
import entranceMosaicWall from "@/assets/portfolio/entrance-mosaic-wall.webp";
import glassPartitionDoor2 from "@/assets/portfolio/glass-partition-door-2.webp";
import dentalWorldMapMural from "@/assets/portfolio/dental-world-map-mural.webp";
import villaExteriorPendurthi from "@/assets/portfolio/villa-exterior-pendurthi.webp";
import wallpaperPeacockMural from "@/assets/portfolio/wallpaper-peacock-mural.webp";
import entranceFoyerWoodPaneling from "@/assets/portfolio/entrance-foyer-wood-paneling.webp";
import tvUnitDarkMarbleGold2 from "@/assets/portfolio/tv-unit-dark-marble-gold-2.webp";
import ceilingSpiralCoveMarble from "@/assets/portfolio/ceiling-spiral-cove-marble.webp";
import dividerGeometricShelf from "@/assets/portfolio/divider-geometric-shelf.webp";
import kitchenDarkMarbleBacksplash from "@/assets/portfolio/kitchen-dark-marble-backsplash.webp";
import kitchenGrayWhiteUshape from "@/assets/portfolio/kitchen-gray-white-ushape.webp";
import curtainHallwayCream from "@/assets/portfolio/curtain-hallway-cream.webp";
import stoneAccentWallBacklit from "@/assets/portfolio/stone-accent-wall-backlit.webp";
import poojaJaliCncUnit from "@/assets/portfolio/pooja-jali-cnc-unit.webp";
import curtainWindowSeatOmbre from "@/assets/portfolio/curtain-window-seat-ombre.webp";
import kitchenWhiteLshapeAbhi from "@/assets/portfolio/kitchen-white-lshape-abhi.webp";
import wardrobePinkArchKids from "@/assets/portfolio/wardrobe-pink-arch-kids.webp";
import tvUnitBlackStoneAbhi from "@/assets/portfolio/tv-unit-black-stone-abhi.webp";
import entranceDoorTrianglePattern from "@/assets/portfolio/entrance-door-triangle-pattern.webp";
import mirrorNookRoundSink from "@/assets/portfolio/mirror-nook-round-sink.webp";
import wallpaperPinkFloralMural from "@/assets/portfolio/wallpaper-pink-floral-mural.webp";
import kitchenGreenCabinets from "@/assets/portfolio/kitchen-green-cabinets.webp";
import wallpaperMountainLakeMural from "@/assets/portfolio/wallpaper-mountain-lake-mural.webp";
import tvUnitWoodSlatDividerMarble from "@/assets/portfolio/tv-unit-wood-slat-divider-marble.webp";
import poojaDoorCarvedWood from "@/assets/portfolio/pooja-door-carved-wood.webp";
import poojaMandirNookPillar from "@/assets/portfolio/pooja-mandir-nook-pillar.webp";
import kitchenBlackMarbleSink from "@/assets/portfolio/kitchen-black-marble-sink.webp";
import tvUnitDarkMarbleGoldLed2 from "@/assets/portfolio/tv-unit-dark-marble-gold-led2.webp";
import wardrobeChevronPattern from "@/assets/portfolio/wardrobe-chevron-pattern.webp";
import tvUnitMarbleWoodBrassPanel from "@/assets/portfolio/tv-unit-marble-wood-brass-panel.webp";
import glassJaliPartitionDoors from "@/assets/portfolio/glass-jali-partition-doors.webp";
import kidsRoomRainbowColorful from "@/assets/portfolio/kids-room-rainbow-colorful.webp";
import wallpaperHexagonPatternBedroom from "@/assets/portfolio/wallpaper-hexagon-pattern-bedroom.webp";
import restaurantDesertMuralDome from "@/assets/portfolio/restaurant-desert-mural-dome.webp";
import restaurantDesertMuralWide from "@/assets/portfolio/restaurant-desert-mural-wide.webp";
import entranceWoodenDoubleDoorBrass from "@/assets/portfolio/entrance-wooden-double-door-brass.webp";
import corridorArchwayWoodPaneling from "@/assets/portfolio/corridor-archway-wood-paneling.webp";
import poojaNicheMarbleAbhi from "@/assets/portfolio/pooja-niche-marble-abhi.webp";
import wardrobeGlassDoorWoodFrame from "@/assets/portfolio/wardrobe-glass-door-wood-frame.webp";
import tvUnitGlassPartitionDark from "@/assets/portfolio/tv-unit-glass-partition-dark.webp";
import villaExteriorModernFacade from "@/assets/portfolio/villa-exterior-modern-facade.webp";
import wardrobeGrayGoldTrimSekhar from "@/assets/portfolio/wardrobe-gray-gold-trim-sekhar.webp";
import dressingTableArchMirror from "@/assets/portfolio/dressing-table-arch-mirror.webp";
import wardrobeMarbleDiagonalPattern from "@/assets/portfolio/wardrobe-marble-diagonal-pattern.webp";
import kitchenTealPantryCabinets from "@/assets/portfolio/kitchen-teal-pantry-cabinets.webp";
import washroomSinkRoundMirrorHarsha from "@/assets/portfolio/washroom-sink-round-mirror-harsha.webp";
import wallpaperArtPanelBedroom from "@/assets/portfolio/wallpaper-art-panel-bedroom.webp";
import wallpaperPolkaDotRoom from "@/assets/portfolio/wallpaper-polka-dot-room.webp";
import bathroomCircularPatternSink from "@/assets/portfolio/bathroom-circular-pattern-sink.webp";
import wallpaperDesertSunsetWalker from "@/assets/portfolio/wallpaper-desert-sunset-walker.webp";
import wallpaperCamelCaravanSunset from "@/assets/portfolio/wallpaper-camel-caravan-sunset.webp";
import wallpaperDesertGreeneryMoon from "@/assets/portfolio/wallpaper-desert-greenery-moon.webp";
import entranceDoorGrilleWooden from "@/assets/portfolio/entrance-door-grille-wooden.webp";
import wardrobeTealWhiteSliding from "@/assets/portfolio/wardrobe-teal-white-sliding.webp";
import wardrobeDressingMirrorCombo from "@/assets/portfolio/wardrobe-dressing-mirror-combo.webp";
import kidsRoomOrangeGoldMarble from "@/assets/portfolio/kids-room-orange-gold-marble.webp";
import hexagonMarbleAccentChandelier from "@/assets/portfolio/hexagon-marble-accent-chandelier.webp";
import artificialGrassVerticalGarden from "@/assets/portfolio/artificial-grass-vertical-garden.webp";
import glassFilmFrostedDoor from "@/assets/portfolio/glass-film-frosted-door.webp";
import woodFlooringBedroom from "@/assets/portfolio/wood-flooring-bedroom.webp";
import cushionWindowSeatBench from "@/assets/portfolio/cushion-window-seat-bench.webp";

// Real project photography, cropped from MNS Interiors' own portfolio PDF —
// used to replace/supplement the generic stock photos below wherever a
// genuine matching project photo exists.
export const portfolioImages = {
  kitchen1,
  kitchen2,
  kitchen3,
  tvUnit1,
  tvUnit2,
  wardrobe1,
  wardrobe2,
  wardrobe3,
  wardrobe4,
  wardrobe5,
  ceiling1,
  ceiling2,
  entranceHexagon,
  panelMarbleTv,
  wallHexagonWood,
  livingRoomTv,
  kitchenModular1,
  kitchenModular2,
  kitchenGlassCabinet,
  kitchenGlassPartition,
  kitchenDiningExtra,
  kitchenDesignRender1,
  kitchenDesignRender2,
  kitchenCoveLighting,
  diningCurtains,
  diningCeiling,
  bedroomPanelWall,
  bedroomGreenAccent,
  bedroomOrangeAccent,
  sofaStaircase,
  tvUnit3,
  tvUnit4,
  bathroomPlumbing,
  bathroomTile,
  wallpaperGeometricAccent,
  wallpaperBuddhaMural,
  wallpaperGalaxyMural,
  wallpaperMarbleMural,
  windowBlindGeometric,
  wardrobeSlidingCream,
  wardrobeWhiteMarble,
  kitchenModular3,
  kitchenModular4,
  kitchenModular5,
  ceilingCncBarUnit,
  ceilingCncFloral,
  tvUnitGoldAccent,
  bedroomTvWardrobeCombo,
  bedroomPinkBedsheet,
  glassCabinetBarUnit,
  entranceFoyerMarble,
  carvedWoodenMainDoor,
  wallpaperEiffelMural,
  wallpaperGeometricPinkGray,
  wallpaperColorfulTriangle,
  kitchenTealGoldTile,
  kitchenCoveCeilingCream,
  wardrobeWoodSliding2,
  wardrobeYellow3Door,
  ceilingTriangleCove,
  ceilingBlueWaveLed,
  ceilingGoldFloralGypsum,
  tvUnitGoldMarble,
  tvUnitMarbleWoodWall,
  bunkBedKidsPink,
  dividerWoodSlatLiving,
  entranceMosaicWall,
  glassPartitionDoor2,
  dentalWorldMapMural,
  villaExteriorPendurthi,
  wallpaperPeacockMural,
  entranceFoyerWoodPaneling,
  tvUnitDarkMarbleGold2,
  ceilingSpiralCoveMarble,
  dividerGeometricShelf,
  kitchenDarkMarbleBacksplash,
  kitchenGrayWhiteUshape,
  curtainHallwayCream,
  stoneAccentWallBacklit,
  poojaJaliCncUnit,
  curtainWindowSeatOmbre,
  kitchenWhiteLshapeAbhi,
  wardrobePinkArchKids,
  tvUnitBlackStoneAbhi,
  entranceDoorTrianglePattern,
  mirrorNookRoundSink,
  wallpaperPinkFloralMural,
  kitchenGreenCabinets,
  wallpaperMountainLakeMural,
  tvUnitWoodSlatDividerMarble,
  poojaDoorCarvedWood,
  poojaMandirNookPillar,
  kitchenBlackMarbleSink,
  tvUnitDarkMarbleGoldLed2,
  wardrobeChevronPattern,
  tvUnitMarbleWoodBrassPanel,
  glassJaliPartitionDoors,
  kidsRoomRainbowColorful,
  wallpaperHexagonPatternBedroom,
  restaurantDesertMuralDome,
  restaurantDesertMuralWide,
  entranceWoodenDoubleDoorBrass,
  corridorArchwayWoodPaneling,
  poojaNicheMarbleAbhi,
  wardrobeGlassDoorWoodFrame,
  tvUnitGlassPartitionDark,
  villaExteriorModernFacade,
  wardrobeGrayGoldTrimSekhar,
  dressingTableArchMirror,
  wardrobeMarbleDiagonalPattern,
  kitchenTealPantryCabinets,
  washroomSinkRoundMirrorHarsha,
  wallpaperArtPanelBedroom,
  wallpaperPolkaDotRoom,
  bathroomCircularPatternSink,
  wallpaperDesertSunsetWalker,
  wallpaperCamelCaravanSunset,
  wallpaperDesertGreeneryMoon,
  entranceDoorGrilleWooden,
  wardrobeTealWhiteSliding,
  wardrobeDressingMirrorCombo,
  kidsRoomOrangeGoldMarble,
  hexagonMarbleAccentChandelier,
  artificialGrassVerticalGarden,
  glassFilmFrostedDoor,
  woodFlooringBedroom,
  cushionWindowSeatBench,
};

export type ServiceItem = {
  slug: string;
  title: string;
  icon: LucideIcon;
  shortDesc: string;
  intro: string;
  benefits: string[];
  heroImage: string;
  // Tailwind object-position class for the Services grid thumbnail crop.
  // Only needed when the photo's key detail sits away from dead centre
  // (e.g. a ceiling design near the top) and the default centre crop would
  // hide it. Defaults to "object-center" when omitted.
  heroPosition?: string;
  gallery: string[];
};

// Centralised, single source of truth for every service MNS Interiors offers.
// Every title below comes from MNS Interiors' own portfolio deck — nothing
// invented. To add or edit a service later, just add/edit one entry here;
// the Services grid and every /services/:slug detail page read from this list.
export const services: ServiceItem[] = [
  {
    slug: "2d-3d-design",
    title: "2D & 3D Designs for Interiors & Elevations",
    icon: PencilRuler,
    shortDesc: "Photoreal walkthroughs before a single panel is cut.",
    intro:
      "Every project starts on screen, not on site. We draw your exact floor plan in 2D, then build a photoreal 3D walkthrough of every room and elevation so you can see finishes, lighting and layout before anything is manufactured.",
    benefits: [
      "To-scale 2D floor plans for every room",
      "Photoreal 3D interior and elevation renders",
      "Unlimited layout iterations before sign-off",
      "Material and finish visualisation in real lighting",
    ],
    heroImage: portfolioImages.kitchenDesignRender1,
    gallery: [
      portfolioImages.kitchenDesignRender1,
      portfolioImages.kitchenDesignRender2,
      ...renderImages.slice(0, 16).map((r) => r.src),
    ],
  },
  {
    slug: "modular-kitchen",
    title: "Modular Kitchen",
    icon: ChefHat,
    shortDesc: "Layouts engineered around how you actually cook.",
    intro:
      "We design the kitchen around your appliance list, storage needs and cooking habits — not a catalogue template. Every carcass is BWP-grade ply with moisture-sealed edges and soft-close hardware.",
    benefits: [
      "L, U, parallel, island and straight layouts",
      "Acrylic, laminate, PU and membrane shutter finishes",
      "Tall units, magic corners, pull-out baskets, cutlery organisers",
      "10-year warranty on modular components",
    ],
    heroImage: portfolioImages.kitchen1,
    gallery: [
      portfolioImages.kitchen1,
      portfolioImages.kitchen2,
      portfolioImages.kitchen3,
      portfolioImages.kitchenModular2,
      portfolioImages.kitchenModular3,
      portfolioImages.kitchenModular4,
      portfolioImages.kitchenModular5,
      portfolioImages.kitchenDiningExtra,
      portfolioImages.kitchenTealGoldTile,
      portfolioImages.kitchenCoveCeilingCream,
      portfolioImages.kitchenDarkMarbleBacksplash,
      portfolioImages.kitchenGrayWhiteUshape,
      portfolioImages.kitchenGreenCabinets,
      portfolioImages.kitchenBlackMarbleSink,
      portfolioImages.kitchenWhiteLshapeAbhi,
      portfolioImages.kitchenTealPantryCabinets,
      images.crockery,
    ],
  },
  {
    slug: "wardrobes",
    title: "Wardrobes",
    icon: DoorClosed,
    shortDesc: "Sliding, hinged and walk-in storage systems.",
    intro:
      "Wardrobes are planned around your actual wardrobe inventory — hanging length, shelf count, saree and suit storage — with a shutter finish that matches the rest of the room.",
    benefits: [
      "Sliding, hinged and walk-in configurations",
      "Internal accessories — pull-out trays, lofts, mirror panels",
      "Soft-close channels and lifetime hardware options",
      "Matching finish across bedroom furniture",
    ],
    heroImage: portfolioImages.wardrobe1,
    gallery: [
      portfolioImages.wardrobe1,
      portfolioImages.wardrobe3,
      portfolioImages.wardrobe4,
      portfolioImages.wardrobe5,
      portfolioImages.wardrobe2,
      portfolioImages.wardrobeSlidingCream,
      portfolioImages.wardrobeWhiteMarble,
      portfolioImages.wardrobeWoodSliding2,
      portfolioImages.wardrobeYellow3Door,
      portfolioImages.wardrobePinkArchKids,
      portfolioImages.wardrobeChevronPattern,
      portfolioImages.wardrobeGlassDoorWoodFrame,
      portfolioImages.wardrobeGrayGoldTrimSekhar,
      portfolioImages.wardrobeMarbleDiagonalPattern,
      portfolioImages.wardrobeTealWhiteSliding,
      portfolioImages.wardrobeDressingMirrorCombo,
    ],
  },
  {
    slug: "tv-units-panelling-framing",
    title: "TV Units, Panelling & Framing Works",
    icon: Tv,
    shortDesc: "Slatted media walls with hidden storage and clean framing.",
    intro:
      "A media wall does more than hold a television — it hides cable clutter, adds display storage and sets the tone for the living room. We combine panelling, framing and lighting into one cohesive wall.",
    benefits: [
      "Slatted, fluted and textured panel finishes",
      "Concealed wiring and set-top box storage",
      "Backlit profile framing for depth and warmth",
      "Floating or floor-to-ceiling configurations",
    ],
    heroImage: portfolioImages.tvUnit1,
    gallery: [
      portfolioImages.tvUnit1,
      portfolioImages.panelMarbleTv,
      portfolioImages.tvUnit2,
      portfolioImages.tvUnit3,
      portfolioImages.tvUnit4,
      portfolioImages.tvUnitGoldAccent,
      portfolioImages.tvUnitGoldMarble,
      portfolioImages.tvUnitMarbleWoodWall,
      portfolioImages.tvUnitDarkMarbleGold2,
      portfolioImages.tvUnitBlackStoneAbhi,
      portfolioImages.tvUnitWoodSlatDividerMarble,
      portfolioImages.tvUnitDarkMarbleGoldLed2,
      portfolioImages.tvUnitMarbleWoodBrassPanel,
      portfolioImages.tvUnitGlassPartitionDark,
      images.tvunit,
    ],
  },
  {
    slug: "modular-semi-modular",
    title: "Modular & Semi-Modular Works",
    icon: Boxes,
    shortDesc: "Flexible modular carpentry for every budget stage.",
    intro:
      "Not every room needs fully modular furniture on day one. We offer semi-modular options — factory-made carcasses with site-fitted shutters — so you can phase spends without compromising finish quality.",
    benefits: [
      "Factory-manufactured carcasses for precision fit",
      "Semi-modular options to phase your budget",
      "Consistent finish across modular and semi-modular units",
      "Site measurement and fitting by our own crew",
    ],
    heroImage: portfolioImages.kitchenModular1,
    gallery: [portfolioImages.kitchenModular1, portfolioImages.kitchenDiningExtra, images.spacesaving],
  },
  {
    slug: "house-renovation",
    title: "House Renovation Works",
    icon: Hammer,
    shortDesc: "Full-home makeovers without the guesswork.",
    intro:
      "From a single-room refresh to a full-home renovation, we handle demolition, civil work, electrical and finishing under one supervised project — so you deal with one team, not five contractors.",
    benefits: [
      "Single point of contact for civil, electrical and finishing",
      "Dust-controlled, supervised site execution",
      "Itemised quotation before work begins",
      "Structured handover with a final quality check",
    ],
    heroImage: portfolioImages.livingRoomTv,
    gallery: [
      portfolioImages.livingRoomTv,
      portfolioImages.entranceFoyerMarble,
      portfolioImages.carvedWoodenMainDoor,
      portfolioImages.dividerWoodSlatLiving,
      portfolioImages.entranceMosaicWall,
      portfolioImages.entranceFoyerWoodPaneling,
      portfolioImages.dividerGeometricShelf,
      portfolioImages.poojaJaliCncUnit,
      portfolioImages.entranceDoorTrianglePattern,
      portfolioImages.poojaDoorCarvedWood,
      portfolioImages.poojaMandirNookPillar,
      portfolioImages.entranceWoodenDoubleDoorBrass,
      portfolioImages.corridorArchwayWoodPaneling,
      portfolioImages.poojaNicheMarbleAbhi,
      portfolioImages.villaExteriorModernFacade,
      portfolioImages.entranceDoorGrilleWooden,
      images.foyer,
      images.living,
    ],
  },
  {
    slug: "customised-sofas-beds",
    title: "Customised Sofas & Beds",
    icon: Sofa,
    shortDesc: "Upholstery and bed frames built to your room's scale.",
    intro:
      "Standard furniture sizes rarely suit Indian floor plans. We build sofas and beds to your room dimensions, with the fabric, foam density and storage configuration you choose.",
    benefits: [
      "Made-to-size sofas, sectionals and daybeds",
      "Storage and hydraulic-lift bed configurations",
      "Fabric, leatherette and velvet upholstery options",
      "Matching cushion and bolster sets",
    ],
    heroImage: portfolioImages.sofaStaircase,
    gallery: [
      portfolioImages.sofaStaircase,
      portfolioImages.bedroomGreenAccent,
      portfolioImages.bedroomOrangeAccent,
      portfolioImages.bedroomTvWardrobeCombo,
      portfolioImages.bedroomPinkBedsheet,
      portfolioImages.bunkBedKidsPink,
      portfolioImages.kidsRoomRainbowColorful,
      portfolioImages.kidsRoomOrangeGoldMarble,
    ],
  },
  {
    slug: "gypsum-pvc-vox-ceiling",
    title: "Gypsum, PVC & VOX Ceiling",
    icon: PanelTop,
    shortDesc: "Cove profiles and precision-lit false ceilings.",
    intro:
      "False ceilings hide wiring, AC ducting and plumbing lines while adding layered lighting. We work in gypsum, PVC and VOX depending on the room, moisture exposure and budget.",
    benefits: [
      "Gypsum board ceilings with cove and step profiles",
      "Moisture-resistant PVC and VOX panels for wet areas",
      "Cove, spot and profile lighting layouts",
      "Concealed AC ducting and wiring channels",
    ],
    heroImage: portfolioImages.ceilingSpiralCoveMarble,
    heroPosition: "object-top",
    gallery: [
      portfolioImages.ceiling1,
      portfolioImages.ceiling2,
      portfolioImages.diningCeiling,
      portfolioImages.ceilingCncBarUnit,
      portfolioImages.ceilingCncFloral,
      portfolioImages.ceilingTriangleCove,
      portfolioImages.ceilingBlueWaveLed,
      portfolioImages.ceilingGoldFloralGypsum,
      portfolioImages.ceilingSpiralCoveMarble,
      portfolioImages.hexagonMarbleAccentChandelier,
      images.ceiling,
    ],
  },
  {
    slug: "painting-putty",
    title: "Painting & Putty Works",
    icon: PaintRoller,
    shortDesc: "Smooth, even finishes that last through Indian humidity.",
    intro:
      "A good paint job starts before the roller touches the wall — crack filling, sanding and multiple putty coats. We use branded putty and paint systems suited to Vizag's coastal humidity.",
    benefits: [
      "Crack filling and wall levelling before painting",
      "Interior emulsion, textured and enamel finishes",
      "Weatherproof exterior paint systems",
      "Colour consultation matched to your interior palette",
    ],
    heroImage: portfolioImages.bedroomOrangeAccent,
    gallery: [portfolioImages.bedroomOrangeAccent, portfolioImages.bedroomGreenAccent, images.foyer],
  },
  {
    slug: "electrical",
    title: "Electrical Works",
    icon: Zap,
    shortDesc: "Concealed, load-planned wiring done to code.",
    intro:
      "Electrical layouts are planned alongside the interior design, not as an afterthought — so switch points, appliance loads and lighting circuits are exactly where you need them, safely concealed.",
    benefits: [
      "Concealed copper wiring with load-wise circuit planning",
      "Modular switches and safety-rated MCB distribution boards",
      "Dedicated circuits for kitchen and AC appliances",
      "Layout planned jointly with the interior design",
    ],
    heroImage: portfolioImages.kitchenCoveLighting,
    gallery: [portfolioImages.kitchenCoveLighting, portfolioImages.diningCeiling, images.ceiling],
  },
  {
    slug: "plumbing",
    title: "Plumbing Works",
    icon: Droplet,
    shortDesc: "Leak-tested supply and drainage lines.",
    intro:
      "Bathroom and kitchen plumbing is re-routed and pressure-tested before tiling begins, so fittings, geysers and RO points land exactly where your fixtures need them — with no leaks after handover.",
    benefits: [
      "CPVC/UPVC supply lines and pressure testing before tiling",
      "Geyser, RO and washing-machine point planning",
      "Concealed diverters and health-faucet lines",
      "Post-installation leak check before handover",
    ],
    heroImage: portfolioImages.bathroomPlumbing,
    heroPosition: "object-bottom",
    gallery: [portfolioImages.bathroomPlumbing, portfolioImages.bathroomTile],
  },
  {
    slug: "tile-granite",
    title: "Tile & Granite Works",
    icon: Grid3x3,
    shortDesc: "Precision-laid flooring, dado and countertops.",
    intro:
      "From bathroom dado to kitchen countertops, tile and granite work is laid to level with minimal joint lines, using spacers and epoxy grouting for a clean, durable finish.",
    benefits: [
      "Vitrified, ceramic and stone flooring installation",
      "Granite, quartz and sintered-stone countertops",
      "Bathroom dado and wet-area waterproofing before tiling",
      "Epoxy grouting for stain and water resistance",
    ],
    heroImage: portfolioImages.bathroomTile,
    heroPosition: "object-bottom",
    gallery: [portfolioImages.bathroomTile, portfolioImages.bathroomPlumbing, images.kitchen],
  },
  {
    slug: "stone-wall-claddings",
    title: "Stone Wall Claddings",
    icon: Mountain,
    shortDesc: "Textured accent walls in natural and engineered stone.",
    intro:
      "A cladded accent wall — in the foyer, living room or balcony — adds texture and a natural material contrast against painted walls, finished with sealant for long-term durability.",
    benefits: [
      "Natural stone, slate and engineered stone-veneer options",
      "Backlighting for textured accent walls",
      "Sealant treatment for indoor and semi-outdoor use",
      "Feature-wall design matched to your palette",
    ],
    heroImage: portfolioImages.entranceHexagon,
    gallery: [
      portfolioImages.entranceHexagon,
      portfolioImages.wallHexagonWood,
      portfolioImages.stoneAccentWallBacklit,
      images.foyer,
    ],
  },
  {
    slug: "glass-works",
    title: "Glass Works",
    icon: GlassWater,
    shortDesc: "Partitions, shower enclosures and glass detailing.",
    intro:
      "Toughened-glass partitions, shower enclosures and cabinet shutters add light without adding visual weight — fabricated to size and fitted with corrosion-resistant hardware.",
    benefits: [
      "Toughened glass shower enclosures and partitions",
      "Glass cabinet shutters and display units",
      "Frosted, tinted and textured glass options",
      "Corrosion-resistant fittings for wet areas",
    ],
    heroImage: portfolioImages.kitchenGlassPartition,
    gallery: [
      portfolioImages.kitchenGlassPartition,
      portfolioImages.kitchenGlassCabinet,
      portfolioImages.glassCabinetBarUnit,
      portfolioImages.glassPartitionDoor2,
      portfolioImages.mirrorNookRoundSink,
      portfolioImages.glassJaliPartitionDoors,
      portfolioImages.dressingTableArchMirror,
      portfolioImages.washroomSinkRoundMirrorHarsha,
      portfolioImages.bathroomCircularPatternSink,
      images.bathroom,
    ],
  },
  {
    slug: "cushion-works",
    title: "Cushion Works",
    icon: Feather,
    shortDesc: "Custom cushions, bolsters and soft furnishing.",
    intro:
      "The final styling layer — cushion covers, bolsters and throws — sized and fabric-matched to your sofa, bed and window treatments for a coordinated finish.",
    benefits: [
      "Made-to-size cushion covers and bolsters",
      "Fabric matched to sofa, bed and curtain palette",
      "High-density fillers for shape retention",
      "Coordinated styling across living and bedroom",
    ],
    heroImage: portfolioImages.cushionWindowSeatBench,
    gallery: [portfolioImages.cushionWindowSeatBench, images.bedroom, images.living],
  },
  {
    slug: "balcony-designs",
    title: "Balcony Designs",
    icon: Building2,
    shortDesc: "Weatherproof seating, planters and flooring.",
    intro:
      "Balconies are designed as usable outdoor rooms — weatherproof seating, planter boxes, decking and lighting — built to handle sun and rain exposure.",
    benefits: [
      "Weatherproof decking and outdoor flooring",
      "Built-in and movable seating options",
      "Planter boxes and vertical garden fittings",
      "Outdoor-rated lighting and fan points",
    ],
    heroImage: portfolioImages.villaExteriorModernFacade,
    heroPosition: "object-bottom",
    gallery: [images.foyer, images.spacesaving],
  },
  {
    slug: "home-automation-security",
    title: "Home Automation & Security Services",
    icon: ShieldCheck,
    shortDesc: "App-controlled lighting, locks and CCTV.",
    intro:
      "From app-controlled lighting scenes to smart locks and CCTV, we integrate automation and security fittings into the electrical plan so wiring and points are ready before walls close up.",
    benefits: [
      "App and voice-controlled lighting and curtain motors",
      "Video door phones and smart lock integration",
      "CCTV planning with concealed cabling",
      "Wiring pre-planned for future automation add-ons",
    ],
    heroImage: images.office,
    gallery: [images.office, images.living],
  },
  {
    slug: "upvc-aluminium",
    title: "UPVC & Aluminium Works",
    icon: Frame,
    shortDesc: "Weatherproof windows, doors and partitions.",
    intro:
      "UPVC and aluminium sections give weatherproof, low-maintenance windows, doors and partitions — with mesh, glass and hardware options fitted to size for your openings.",
    benefits: [
      "UPVC and aluminium window and door systems",
      "Sliding, casement and fixed-glass configurations",
      "Insect mesh and multi-point locking hardware",
      "Sound and weather sealing for coastal climates",
    ],
    heroImage: images.bathroom,
    gallery: [images.bathroom, images.office],
  },
  {
    slug: "2d-3d-customised-wallpapers",
    title: "2D & 3D / Customised Wallpapers",
    icon: ImageIcon,
    shortDesc: "Textured, printed and photo-custom wallpapers.",
    intro:
      "Wallpaper is used as a feature-wall material — textured 2D patterns, immersive 3D prints or a fully customised design — applied by trained installers for a seam-free finish.",
    benefits: [
      "Textured 2D and immersive 3D wallpaper options",
      "Fully customised prints and photo murals",
      "Moisture-resistant adhesive for Indian humidity",
      "Seam-matched professional installation",
    ],
    heroImage: portfolioImages.wallpaperGeometricAccent,
    gallery: [
      portfolioImages.wallpaperGeometricAccent,
      portfolioImages.wallpaperBuddhaMural,
      portfolioImages.wallpaperGalaxyMural,
      portfolioImages.wallpaperMarbleMural,
      portfolioImages.wallpaperEiffelMural,
      portfolioImages.wallpaperGeometricPinkGray,
      portfolioImages.wallpaperColorfulTriangle,
      portfolioImages.wallpaperPeacockMural,
      portfolioImages.wallpaperPinkFloralMural,
      portfolioImages.wallpaperMountainLakeMural,
      portfolioImages.wallpaperHexagonPatternBedroom,
      portfolioImages.restaurantDesertMuralDome,
      portfolioImages.restaurantDesertMuralWide,
      portfolioImages.wallpaperArtPanelBedroom,
      portfolioImages.wallpaperPolkaDotRoom,
      portfolioImages.wallpaperDesertSunsetWalker,
      portfolioImages.wallpaperCamelCaravanSunset,
      portfolioImages.wallpaperDesertGreeneryMoon,
    ],
  },
  {
    slug: "customised-window-blinds",
    title: "Customised Window Blinds",
    icon: Columns3,
    shortDesc: "Roller, vertical and wooden blinds cut to size.",
    intro:
      "Blinds are measured and fabricated per window for a precise fit — roller, vertical, wooden or zebra styles — in fabrics and finishes that match your interior palette.",
    benefits: [
      "Roller, vertical, wooden and zebra blind styles",
      "Motorised and manual operating options",
      "Blackout and light-filtering fabric choices",
      "Cut-to-size fabrication for every window",
    ],
    heroImage: portfolioImages.windowBlindGeometric,
    gallery: [portfolioImages.windowBlindGeometric, portfolioImages.kitchenDesignRender2, images.living],
  },
  {
    slug: "wood-flooring",
    title: "Wood Flooring",
    icon: Layers,
    shortDesc: "Laminate and engineered-wood flooring.",
    intro:
      "Wood-look flooring adds warmth to bedrooms and living areas — laminate and engineered-wood planks laid over a moisture barrier for stability in Vizag's coastal climate.",
    benefits: [
      "Laminate and engineered-wood plank flooring",
      "Moisture-barrier underlay for coastal humidity",
      "Skirting and transition-strip detailing",
      "Scratch-resistant, easy-clean surface finishes",
    ],
    heroImage: portfolioImages.woodFlooringBedroom,
    gallery: [portfolioImages.woodFlooringBedroom, images.living, images.bedroom],
  },
  {
    slug: "glass-films",
    title: "Glass Films",
    icon: Layers2,
    shortDesc: "Frosted, tinted and privacy films for glass surfaces.",
    intro:
      "Glass film is a fast, cost-effective way to add privacy or a decorative pattern to existing glass doors, partitions and windows without replacing the glass itself.",
    benefits: [
      "Frosted, tinted and one-way privacy films",
      "Decorative and etched pattern designs",
      "UV and heat-reducing film options",
      "Bubble-free professional application",
    ],
    heroImage: portfolioImages.glassFilmFrostedDoor,
    gallery: [portfolioImages.glassFilmFrostedDoor, images.office, images.bathroom],
  },
  {
    slug: "customised-curtains",
    title: "Customised Curtains",
    icon: Waves,
    shortDesc: "Made-to-measure curtains and tracks.",
    intro:
      "Curtains are stitched to your exact window and track dimensions in the fabric weight and pleat style you choose — sheer, blackout or layered combinations.",
    benefits: [
      "Made-to-measure stitching for every window",
      "Sheer, blackout and layered curtain combinations",
      "Motorised and manual track and rod options",
      "Fabric matched to blinds and upholstery",
    ],
    heroImage: portfolioImages.diningCurtains,
    gallery: [
      portfolioImages.diningCurtains,
      portfolioImages.diningCeiling,
      portfolioImages.curtainHallwayCream,
      portfolioImages.curtainWindowSeatOmbre,
      images.bedroom,
    ],
  },
  {
    slug: "artificial-grass",
    title: "Artificial Grass",
    icon: Leaf,
    shortDesc: "Low-maintenance green for balconies and terraces.",
    intro:
      "Artificial grass gives balconies, terraces and pooja spaces a year-round green finish with no watering or mowing — UV-stabilised so it doesn't fade in direct sun.",
    benefits: [
      "UV-stabilised, fade-resistant turf",
      "Drainage-backed base for balconies and terraces",
      "Zero watering or mowing maintenance",
      "Custom-cut to irregular balcony shapes",
    ],
    heroImage: portfolioImages.artificialGrassVerticalGarden,
    gallery: [portfolioImages.artificialGrassVerticalGarden, images.foyer],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string, count = 4) {
  const idx = services.findIndex((s) => s.slug === slug);
  if (idx === -1) return services.slice(0, count);
  const related: ServiceItem[] = [];
  for (let i = 1; related.length < count && i < services.length; i++) {
    const item = services[(idx + i) % services.length];
    if (item) related.push(item);
  }
  return related;
}
