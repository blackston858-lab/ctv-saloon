// ── CategoryRail ──
// Each category button is now a solid teal card when active (was a
// flat text row before) — this is the "card" half of the white-bg +
// teal-card pairing: the rail itself becomes a piece of furniture on
// the page, not just a label list.

const CategoryRail = ({ categories, active, onSelect }) => {
  return (
    <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 gap-3 lg:gap-3 lg:pr-6">
      {categories.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`flex-shrink-0 flex items-center gap-4 text-left rounded-2xl px-4 py-3.5 border-2 transition-all duration-200 ${
              isActive
                ? "bg-[#1B4D43] border-[#1B4D43]"
                : "bg-white border-[#1B4D43]/10 hover:border-[#1B4D43]/30"
            }`}
          >
            {/* Photographic swatch */}
            <div
              className={`w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 transition-all duration-200 ${
                isActive ? "ring-[#C9A24D]" : "ring-transparent"
              }`}
            >
              <img src={cat.swatch} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="min-w-0">
              <span className={`font-serif text-base tracking-wide block ${isActive ? "text-white" : "text-[#1A1A1A]"}`}>
                {cat.name}
              </span>
              <span className={`text-[11px] hidden lg:block mt-0.5 leading-snug max-w-[200px] ${
                isActive ? "text-white/60" : "text-[#8A8A85]"
              }`}>
                {cat.description}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryRail;