export function PageHero({
  eyebrow,
  title,
  desc,
  image,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={image} alt={title} width={1200} height={900} className="absolute inset-0 h-full w-full object-cover" />
      <div className="hero-scrim absolute inset-0" />
      <div className="container-x relative py-14 sm:py-20 lg:py-32">
        <p className="text-[0.65rem] tracking-[0.26em] text-background/70 uppercase sm:text-[0.7rem] sm:tracking-[0.28em]">
          {eyebrow}
        </p>
        <h1 className="text-display-1 mt-3 max-w-3xl text-balance text-background sm:mt-4">
          {title}
        </h1>
        <p className="mt-3.5 max-w-xl text-[0.95rem] leading-relaxed text-background/80 sm:mt-5 sm:text-base">
          {desc}
        </p>
      </div>
    </section>
  );
}
