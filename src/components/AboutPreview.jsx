import { motion } from "framer-motion";
import { Link } from "react-router";

const AboutPreview = () => {
  return (
    <section className="py-32 border-t border-[#E6DFD3]/[0.06] bg-[#081310]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left - Story */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-[#E6DFD3]/70 text-[10px] tracking-[0.45em] uppercase font-bold">
              Our Philosophy
            </span>
            <h2 className="text-[#E6DFD3] font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight">
              Quiet Luxury for the <br />
              <span className="italic text-[#E6DFD3]/40">Modern Gentleman</span>
            </h2>
            <p className="text-[#E6DFD3]/50 text-sm md:text-base leading-relaxed font-light mt-2 max-w-xl">
              At Maison Noir, we believe grooming shouldn't be rushed. It is a moment of care, a process
              of refinement. We choose raw, high-end organic oils, custom essential extracts, and botanical
              products to treat your hair and skin with the highest respect.
            </p>
            <p className="text-[#E6DFD3]/50 text-sm md:text-base leading-relaxed font-light max-w-xl">
              Every chair resides in its own spacious sanctuary, guaranteeing a silent, tailored experience
              without interruption.
            </p>
            <div className="mt-6">
              <Link
                to="/about"
                className="group relative inline-flex items-center justify-center overflow-hidden border border-[#E6DFD3]/30 text-[#E6DFD3] px-8 py-3.5 text-xs tracking-widest uppercase rounded-xl transition-colors duration-500 hover:text-[#0A1916]"
              >
                <span className="absolute inset-0 bg-[#E6DFD3] scale-x-0 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-x-100" />
                <span className="relative z-10 font-bold">About the Studio</span>
              </Link>
            </div>
          </div>

          {/* Right - Overlapping Images */}
          <div className="lg:col-span-6 relative w-full h-[420px] md:h-[520px] flex items-center justify-center">
            <div className="absolute inset-8 border border-[#E6DFD3]/[0.05] z-0 pointer-events-none rounded-2xl" />

            <div className="absolute top-0 left-0 w-[62%] h-[78%] overflow-hidden bg-[#0D1F1B] border border-[#E6DFD3]/[0.08] shadow-2xl z-10 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&fit=crop&q=80"
                alt="Bespoke haircut detail"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 25, y: 25 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="absolute bottom-0 right-0 w-[48%] h-[60%] overflow-hidden bg-[#0D1F1B] border border-[#E6DFD3]/[0.1] shadow-2xl z-20 rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&fit=crop&q=80"
                alt="Luxury interior detailing"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;