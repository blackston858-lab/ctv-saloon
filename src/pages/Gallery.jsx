import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMaximize2 } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Brand aligned color tokens
// Primary teal:  #1B4D43
// Ink text:      #1A1A1A
// Muted text:    #8A8A85
// Page bg:       #F7F4ED
// Gold Accent:   #C5A880

const galleryItems = [
  {
    id: 1,
    title: "Executive Drop Fade",
    category: "hair",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Sculpted Beard Styling",
    category: "beard",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Botanical Conditioning Treatment",
    category: "hair",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Detoxifying Clay Facial",
    category: "skin",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Hot Towel Shave",
    category: "beard",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Modern Texturized Quiff",
    category: "hair",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&auto=format&fit=crop&q=80",
  },
];

const filters = [
  { id: "all", label: "All Works" },
  { id: "hair", label: "Haircuts" },
  { id: "beard", label: "Beard & Shaves" },
  { id: "skin", label: "Skin" },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-[#F7F4ED] min-h-screen text-[#1A1A1A] flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-36 pb-10 md:pt-40 md:pb-12 text-center max-w-2xl mx-auto px-6">
        <span className="text-[#1B4D43] text-[11px] tracking-[0.25em] uppercase font-bold block mb-2">Our Portfolio</span>
        <h1 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] tracking-tight leading-tight">
          Crafting Elite <br />
          <span className="italic text-[#1B4D43] font-light">Grooming Standards.</span>
        </h1>
        <p className="text-[#8A8A85] text-xs md:text-sm mt-3 leading-relaxed">
          Explore a curated showcase of our finest hair engineering, meticulous beard styling, and restorative skin rituals.
        </p>
      </section>

      {/* FILTER CAPSULE BAR */}
      <div className="flex justify-center items-center gap-1 mb-12 px-6 max-w-xl mx-auto flex-wrap">
        {filters.map((f) => {
          const isActive = activeFilter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className="relative px-4 py-2.5 rounded-full text-[9px] tracking-widest uppercase font-bold focus:outline-none transition-colors duration-300 z-10"
            >
              {/* Sliding glass capsule background */}
              {isActive && (
                <motion.div
                  layoutId="activeFilterPill"
                  className="absolute inset-0 bg-[#1B4D43] rounded-full -z-10 shadow-[0_4px_12px_rgba(27,77,67,0.2)]"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span
                className={`transition-colors duration-200 ${
                  isActive ? "text-white" : "text-[#1A1A1A]/70 hover:text-[#1B4D43]"
                }`}
              >
                {f.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* PINTEREST MASONRY GRID CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-24 flex-1 w-full">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-5 [column-fill:_balance] box-border">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="break-inside-avoid mb-5 group relative rounded-[28px] overflow-hidden cursor-pointer shadow-md border border-white/20 bg-[#E8E5DC]"
                onClick={() => setLightboxImage(item)}
              >
                {/* Natural aspect ratio responsive image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Smooth Dark Liquid Glass Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#C5A880] text-[9px] tracking-[0.2em] uppercase font-bold mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="text-white font-serif text-base md:text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-3 text-white/50 text-[10px] tracking-wider uppercase font-bold">
                    <FiMaximize2 size={12} />
                    <span>View Close-Up</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* GLASSMORPHIC LIGHTBOX POPUP */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Click background to exit */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setLightboxImage(null)}
            />

            <motion.div
              className="relative bg-white rounded-[32px] overflow-hidden max-w-2xl w-full shadow-2xl z-10 border border-white/20"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            >
              {/* Lightbox responsive image */}
              <div className="h-[350px] md:h-[420px] w-full overflow-hidden bg-gray-100">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Lightbox info */}
              <div className="p-6 bg-white">
                <span className="text-[#1B4D43] text-[9px] tracking-widest uppercase font-bold mb-1 block">
                  {lightboxImage.category}
                </span>
                <h2 className="text-lg md:text-xl text-[#1A1A1A] font-serif font-semibold">
                  {lightboxImage.title}
                </h2>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 bg-black/25 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black text-white p-2 rounded-full shadow transition-all duration-300 focus:outline-none"
                aria-label="Close Lightbox"
              >
                <FiX size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;