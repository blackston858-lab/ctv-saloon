import { Link } from "react-router";

// ── BookingBanner ──
// Closing CTA — dark teal instead of the old cream "light section,"
// so the page ends on the same brand color it opened with rather
// than switching palette for one block.

const BookingBanner = () => {
  return (
    <section className="py-20 bg-[#1B4D43] relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <span className="text-[#C9A24D] text-[11px] tracking-[0.3em] uppercase font-bold block mb-4">
          Ready to schedule?
        </span>
        <h2 className="text-white font-serif text-3xl md:text-4xl tracking-tight mb-7">
          Create Your Personalized <span className="italic text-white/70">Ritual</span>
        </h2>
        <Link
          to="/book"
          className="inline-flex items-center justify-center bg-white hover:bg-[#F7F4ED] text-[#1B4D43] px-10 py-4 rounded-full text-xs tracking-widest uppercase font-bold transition-colors duration-200"
        >
          Reserve Your Visit
        </Link>
      </div>
    </section>
  );
};

export default BookingBanner;