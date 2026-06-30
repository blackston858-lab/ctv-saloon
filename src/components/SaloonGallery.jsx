// ── Gallery images ──
const galleryImages = [
  "hairstyle1.jfif",
  "hairstyle2.jfif",
  "hairstyle3.jfif",
  "hairstyle4.jfif",
  "hairstyle5.jfif",
];

const SaloonGallery = () => {
  return (
    <section className="py-32 border-t border-[#E6DFD3]/[0.06] bg-[#1B4D43]/[0.02] ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <span className="text-[#E6DFD3]/70 text-[10px] tracking-[0.45em] uppercase block mb-3 font-bold">
          Gallery Details
        </span>
        <h2 className="text-[#E6DFD3] font-serif text-3xl md:text-4xl tracking-tight">
          Captured Moments <span className="italic text-[#E6DFD3]/40">@maisonnoir.pk</span>
        </h2>
      </div>

      {/* Masonry grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 md:px-12 max-w-7xl mx-auto">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className={`overflow-hidden bg-[#0D1F1B] border border-[#E6DFD3]/[0.06] rounded-xl relative group cursor-pointer ${
              i % 2 === 0 ? "h-64 mt-4" : "h-72"
            }`}
          >
            <img
              src={img}
              alt={`Salon detail ${i + 1}`}
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-[#0A1916]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SaloonGallery;