import { Link } from "react-router-dom";

// ── ServiceCard ──
// Was a white card on a white page (so it disappeared into the
// background). Now sits on cream (#F7F4ED) instead, with a teal
// "Book Session" pill — gives the white page its own card contrast
// without turning the whole page green.

const ServiceCard = ({ item }) => {
  return (
    <div className="group flex flex-col sm:flex-row gap-5 bg-[#F7F4ED] rounded-2xl p-4 sm:p-5 border border-[#1B4D43]/8 transition-shadow duration-200 hover:shadow-[0_8px_30px_rgba(27,77,67,0.10)]">

      {/* Real result photo */}
      <div className="w-full sm:w-32 h-40 sm:h-32 rounded-xl overflow-hidden shrink-0">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <div className="flex items-baseline justify-between gap-3 mb-1.5">
            <h3 className="text-[#1A1A1A] font-serif text-lg tracking-wide">{item.name}</h3>
            <span className="text-[#1B4D43] font-serif text-base font-semibold shrink-0">{item.price}</span>
          </div>
          <p className="text-[#8A8A85] text-[13px] leading-relaxed">{item.desc}</p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <span className="text-[11px] tracking-wider uppercase text-[#8A8A85]/70 font-semibold">
            {item.duration}
          </span>
          <Link
            to="/book"
            className="inline-flex items-center text-[11px] tracking-widest uppercase font-bold text-white bg-[#1B4D43] hover:bg-[#163e36] rounded-full px-5 py-2 transition-colors duration-200"
          >
            Book Session
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;