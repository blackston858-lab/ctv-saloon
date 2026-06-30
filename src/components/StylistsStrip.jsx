// ── Stylists data ──
const stylists = [
  {
    name: "Zain Malik",
    specialty: "Master Barber & Styling Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&fit=crop&q=80",
    instagram: "@zain.maison",
  },
  {
    name: "Sara Khan",
    specialty: "Aesthetician & Skin Therapist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&fit=crop&q=80",
    instagram: "@sara.skin",
  },
  {
    name: "Bilal Ahmed",
    specialty: "Beard Sculptor & Groomer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&fit=crop&q=80",
    instagram: "@bilal.grooming",
  },
  {
    name: "Amara Jamil",
    specialty: "Hair Coloring Expert",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&fit=crop&q=80",
    instagram: "@amara.color",
  },
];

const StylistsStrip = () => {
  return (
    <section className="py-32 border-t border-[#E6DFD3]/[0.06] bg-[#0A1916] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <span className="text-[#E6DFD3]/70 text-[10px] tracking-[0.45em] uppercase block mb-3 font-bold">
          The Masters
        </span>
        <h2 className="text-[#E6DFD3] font-serif text-4xl md:text-5xl tracking-tight">
          Featured Stylists <span className="italic text-[#E6DFD3]/40">& Artists</span>
        </h2>
      </div>

      {/* Horizontal scroll cards */}
      <div className="flex gap-8 overflow-x-auto pb-10 px-6 md:px-12 max-w-7xl mx-auto scrollbar-none snap-x snap-mandatory">
        {stylists.map((stylist) => (
          <div
            key={stylist.name}
            className="flex-shrink-0 w-[280px] md:w-[320px] bg-[#0D1F1B] border border-[#E6DFD3]/[0.08] p-5 rounded-2xl snap-start group"
          >
            <div className="w-full h-[320px] overflow-hidden bg-[#0A1916] rounded-xl relative mb-5">
              <img
                src={stylist.image}
                alt={stylist.name}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1916]/60 to-transparent" />
            </div>
            <h3 className="text-[#E6DFD3] font-serif text-lg tracking-wide transition-colors duration-300">
              {stylist.name}
            </h3>
            <p className="text-[#E6DFD3]/50 text-xs font-light mt-1 mb-3">
              {stylist.specialty}
            </p>
            <span className="text-[10px] text-[#E6DFD3]/70 tracking-widest uppercase font-bold">
              {stylist.instagram}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StylistsStrip;