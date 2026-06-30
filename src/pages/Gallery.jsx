import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMaximize2 } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
 
const galleryItems = [
  { id: 1, title: "Precision Crop Design", category: "hair", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&fit=crop&q=80", size: "md:col-span-4" },
  { id: 2, title: "Beard Sculpting Ritual", category: "grooming", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&fit=crop&q=80", size: "md:col-span-8" },
  { id: 3, title: "Botanical Skin Exfoliation", category: "skin", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&fit=crop&q=80", size: "md:col-span-6" },
  { id: 4, title: "Maison Product Curation", category: "rituals", image: "https://images.unsplash.com/photo-1608248597481-496100c80836?w=800&fit=crop&q=80", size: "md:col-span-6" },
  { id: 5, title: "Classic Hot Towel Shave", category: "grooming", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&fit=crop&q=80", size: "md:col-span-4" },
  { id: 6, title: "Clean Nail Grooming", category: "nails", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&fit=crop&q=80", size: "md:col-span-4" },
  { id: 7, title: "Studio Light Reflections", category: "rituals", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&fit=crop&q=80", size: "md:col-span-4" },
  { id: 8, title: "Modern Pompadour Lift", category: "hair", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&fit=crop&q=80", size: "md:col-span-12" }
];

const filters = [
  { id: "all", label: "All Works" },
  { id: "hair", label: "Hair" },
  { id: "grooming", label: "Beard & Groom" },
  { id: "skin", label: "Skin Care" },
  { id: "nails", label: "Nails" },
  { id: "rituals", label: "Rituals" }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
       <div className="bg-warmDark min-h-screen text-[#F5F2EE]">
        <Navbar />

        {/* ── Gallery Hero ── */}
        <section className="relative pt-44 pb-20 border-b border-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="text-gold text-[10px] tracking-[0.45em] uppercase block mb-4 font-medium">
              Studio Visuals
            </span>
            <h1 className="text-white font-serif text-5xl md:text-6xl tracking-tight leading-tight max-w-2xl">
              Aesthetic Showcase & <br />
              <span className="italic text-warmMuted/70">Studio Details</span>
            </h1>
            <p className="text-warmMuted text-sm md:text-base max-w-md leading-relaxed mt-6 font-light">
              A review of our custom trims, beard contours, aesthetic therapies, and the atmosphere of Maison Noir.
            </p>
          </div>
        </section>

        {/* ── Filter Tabs ── */}
        <section className="pt-16 pb-8 max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center gap-4 border-b border-white/5 pb-6">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`text-xs tracking-widest uppercase transition-colors py-2 px-4 border rounded-full font-medium ${
                  activeFilter === filter.id
                    ? "bg-[#F5F2EE] text-warmDark border-[#F5F2EE]"
                    : "border-white/10 text-warmMuted/60 hover:text-white hover:border-white/20"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        {/* ── Bento Masonry Grid ── */}
        <section className="pb-32 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative bg-warmSurface border border-white/[0.03] rounded-2xl overflow-hidden h-[300px] md:h-[350px] cursor-pointer ${item.size}`}
                  onClick={() => setLightboxImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale opacity-[0.55] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-[0.8] transition-all duration-700"
                  />
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-warmDark/80 via-warmDark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-between items-center">
                    <div>
                      <span className="text-gold text-[9px] tracking-widest uppercase font-medium">
                        {item.category}
                      </span>
                      <h3 className="text-white font-serif text-lg tracking-wide mt-1">
                        {item.title}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all">
                      <FiMaximize2 size={13} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* ── Lightbox Modal ── */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-warmDark/90 backdrop-blur-md flex items-center justify-center p-6"
            >
              {/* Close Background Click */}
              <div className="absolute inset-0" onClick={() => setLightboxImage(null)} />

              {/* Close Button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 text-warmMuted hover:text-white transition-colors z-50 p-2 rounded-full border border-white/10 bg-warmDark/50 backdrop-blur"
              >
                <FiX size={20} />
              </button>

              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-5xl max-h-[85vh] bg-warmSurface border border-white/5 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center z-10"
              >
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="w-full h-full object-contain max-h-[75vh] grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Details Footer */}
                <div className="w-full bg-[#0A0908] p-5 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-gold text-[10px] tracking-widest uppercase font-medium font-sans">
                      {lightboxImage.category}
                    </span>
                    <h3 className="text-white font-serif text-xl tracking-wide mt-1">
                      {lightboxImage.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
   );
};

export default Gallery;
