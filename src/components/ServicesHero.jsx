// ── ServicesHero ──
// White page bg; the teal lives in the eyebrow label and the italic
// accent word, so the hero still reads as branded without painting
// the whole section.

const ServicesHero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-14 bg-[#1B4D43]/5 overflow-hidden mb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <span className="text-[#1B4D43] text-[11px] tracking-[0.3em] uppercase font-bold block mb-4">
          Menu of Services
        </span>
        <h1 className="text-[#1A1A1A] font-serif text-4xl md:text-6xl tracking-tight leading-tight max-w-2xl">
          Grooming Craft &amp;<br />
          <span className="italic text-[#1B4D43]">Bespoke Therapies</span>
        </h1>
        <p className="text-[#8A8A85] text-sm md:text-base max-w-md leading-relaxed mt-6">
          Every session is customizable to your lifestyle. We use botanically
          derived oils and zero harsh synthetics — browse the full menu below.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;