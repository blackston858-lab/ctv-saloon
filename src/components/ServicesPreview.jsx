import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router";

// ── Services — compact cards with image, description, price ──
const services = [
  {
    category: "Hair",
    title: "Signature Cut & Sculpt",
    duration: "50 min",
    price: "PKR 4,500",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&fit=crop&q=80",
  },
  {
    category: "Hair",
    title: "Full Colour & Gloss",
    duration: "120 min",
    price: "PKR 9,800",
    img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&fit=crop&q=80",
  },
  {
    category: "Skin",
    title: "Bespoke Facial Therapy",
    duration: "60 min",
    price: "PKR 6,000",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&fit=crop&q=80",
  },
  {
    category: "Grooming",
    title: "Hot Towel Shave",
    duration: "35 min",
    price: "PKR 2,800",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&fit=crop&q=80",
  },
];

const ServicesBento = () => {
  return (
    <section className="py-24 border-t border-[#E6DFD3]/[0.06] bg-[#0A1916]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ── */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[#E6DFD3]/50 text-[10px] tracking-[0.45em] uppercase block mb-3 font-bold">
              Our Specialties
            </span>
            <h2 className="text-[#E6DFD3] font-serif text-3xl md:text-4xl tracking-tight">
              Curated Craft <span className="italic text-[#E6DFD3]/40">& Services</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-[#E6DFD3]/70 hover:text-[#E6DFD3] text-xs tracking-widest uppercase font-bold shrink-0 transition-colors duration-300"
          >
            <span className="border-b border-[#E6DFD3]/20 group-hover:border-[#E6DFD3] pb-1 transition-colors duration-300">
              See Full Menu
            </span>
            <FiArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>

        {/* ── Compact Cards Grid — 4 across on desktop ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="group bg-[#0D1F1B] border border-[#E6DFD3]/[0.08] rounded-xl overflow-hidden cursor-pointer transition-colors duration-300 hover:border-[#E6DFD3]/20"
            >
              {/* Image — compact height */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-2.5 left-2.5 bg-[#0A1916]/70 backdrop-blur-md text-[#E6DFD3] text-[9px] tracking-widest uppercase font-bold px-2.5 py-1 rounded-full">
                  {s.category}
                </span>
              </div>

              {/* Content — tight padding */}
              <div className="p-4">
                <h3 className="text-[#E6DFD3] font-serif text-sm leading-snug mb-1.5">{s.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#E6DFD3]/35 text-[10px] tracking-wide">{s.duration}</span>
                  <span className="text-[#E6DFD3] font-serif text-sm">{s.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesBento;