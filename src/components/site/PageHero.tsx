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
      <div className="container-x relative py-24 lg:py-32">
        <p className="text-[0.7rem] tracking-[0.28em] text-background/70 uppercase">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] text-background sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-background/80">{desc}</p>
      </div>
    </section>
  );
}
