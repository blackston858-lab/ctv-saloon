import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const galleryItems = [
  {
    id: 1,
    title: "Fade Haircut",
    category: "hair",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800",
  },
  {
    id: 2,
    title: "Beard Styling",
    category: "beard",
    image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=800",
  },
  {
    id: 3,
    title: "Hair Wash",
    category: "hair",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
  },
  {
    id: 4,
    title: "Facial Treatment",
    category: "skin",
    image: "https://images.unsplash.com/photo-1594824475317-6b1b5c8d1d2b?w=800",
  },
  {
    id: 5,
    title: "Luxury Shave",
    category: "beard",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800",
  },
  {
    id: 6,
    title: "Hair Styling",
    category: "hair",
    image: "https://images.unsplash.com/photo-1599351431402-98c3c4cbe7de?w=800",
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "hair", label: "Hair" },
  { id: "beard", label: "Beard" },
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
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-36 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B4D43]">
          Our Salon Gallery
        </h1>
        <p className="text-gray-500 mt-4">
          Explore our best haircuts, beard styles & grooming
        </p>
      </section>

      {/* FILTER */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-5 py-2 rounded-full text-sm border transition ${
              activeFilter === f.id
                ? "bg-[#1B4D43] text-white border-[#1B4D43]"
                : "border-gray-300 text-gray-600 hover:bg-[#1B4D43] hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-20 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl overflow-hidden shadow-md cursor-pointer group"
            onClick={() => setLightboxImage(item)}
          >
            <img
              src={item.image}
              className="h-64 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-[#1B4D43]">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 capitalize">
                {item.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0"
              onClick={() => setLightboxImage(null)}
            />

            <motion.div
              className="relative bg-white rounded-xl overflow-hidden max-w-3xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              <img
                src={lightboxImage.image}
                className="w-full h-[400px] object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl text-[#1B4D43] font-semibold">
                  {lightboxImage.title}
                </h2>
              </div>

              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
              >
                <FiX />
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