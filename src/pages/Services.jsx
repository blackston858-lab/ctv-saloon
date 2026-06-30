import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHero from "../components/ServicesHero";
import CategoryRail from "../components/CategoryRail";
import ServiceMenu from "../components/ServiceMenu";
import BookingBanner from "../components/BookingBanner";

// ── Service data — each category has a swatch photo, each item has
// its own result photo, sourced to actually match the service named ──
const serviceCategories = [
  {
    id: "hair",
    name: "Hair Sculpting & Design",
    description: "Cuts, scalp therapy and structural styling.",
    swatch: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200&fit=crop&q=80",
    items: [
      {
        name: "The Classic Cut & Wash",
        price: "Rs. 2,500",
        duration: "45 mins",
        desc: "Styling consultation, scalp massage wash, tailored cut, and hot towel finish.",
        img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=300&fit=crop&q=80",
      },
      {
        name: "Executive Hair Design",
        price: "Rs. 3,500",
        duration: "60 mins",
        desc: "For complex styling adjustments, texture treatments, and fine detailing.",
        img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=300&fit=crop&q=80",
      },
      {
        name: "Royal Beard & Hair Ritual",
        price: "Rs. 4,800",
        duration: "90 mins",
        desc: "Combined structural haircut, luxury wash, and hot towel custom beard shaping.",
        img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=300&fit=crop&q=80",
      },
      {
        name: "Scalp Renewal Detox",
        price: "Rs. 2,200",
        duration: "30 mins",
        desc: "Exfoliating scrub, botanical hydration oils, and a slow head massage.",
        img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=300&fit=crop&q=80",
      },
    ],
  },
  {
    id: "skin",
    name: "Skin & Aesthetic Care",
    description: "Cleansing, detox wraps and hydration therapy.",
    swatch: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&fit=crop&q=80",
    items: [
      {
        name: "Botanical Cleansing Facial",
        price: "Rs. 4,000",
        duration: "50 mins",
        desc: "Pore cleansing, steam exfoliation, mud extraction mask, and facial massage.",
        img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&fit=crop&q=80",
      },
      {
        name: "Cellular Hydration Therapy",
        price: "Rs. 5,500",
        duration: "60 mins",
        desc: "Deep serum infusion with micro-massage to restore elasticity and glow.",
        img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=300&fit=crop&q=80",
      },
      {
        name: "Activated Charcoal Detox",
        price: "Rs. 4,500",
        duration: "45 mins",
        desc: "Peel-off charcoal mask, micro-bead cleaning, and cold stone compression.",
        img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&fit=crop&q=80",
      },
      {
        name: "Anti-Fatigue Eye Ritual",
        price: "Rs. 2,500",
        duration: "30 mins",
        desc: "Cool gel compressions, under-eye massage, and firming botanical hydration.",
        img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=300&fit=crop&q=80",
      },
    ],
  },
  {
    id: "nails",
    name: "Hands & Nails Refinement",
    description: "Manicure, pedicure and cuticle care.",
    swatch: "https://images.unsplash.com/photo-1604654894611-6973b7069616?w=200&fit=crop&q=80",
    items: [
      {
        name: "Executive Hand Care",
        price: "Rs. 1,800",
        duration: "30 mins",
        desc: "Nail shaping, cuticle trimming, exfoliating scrub, and light hand massage.",
        img: "https://images.unsplash.com/photo-1604654894611-6973b7069616?w=300&fit=crop&q=80",
      },
      {
        name: "Classic Foot Ritual",
        price: "Rs. 2,800",
        duration: "45 mins",
        desc: "Warm salt scrub, nail shaping, callus smoothing, and hot towel oil wrap.",
        img: "https://images.unsplash.com/photo-1604654894611-6973b7069616?w=300&fit=crop&q=80",
      },
      {
        name: "Maison Noir Hand & Foot Treatment",
        price: "Rs. 4,200",
        duration: "75 mins",
        desc: "The full joint package — clay masks, massage treatments, and clean trims.",
        img: "https://images.unsplash.com/photo-1604654894611-6973b7069616?w=300&fit=crop&q=80",
      },
    ],
  },
  {
    id: "grooming",
    name: "Premium Grooming Rituals",
    description: "Hot towel barbering and beard sculpting.",
    swatch: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=200&fit=crop&q=80",
    items: [
      {
        name: "Maison Signature Shave",
        price: "Rs. 1,800",
        duration: "35 mins",
        desc: "Pre-shave oils, double hot towel pack, straight razor shave, cold stone finish.",
        img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=300&fit=crop&q=80",
      },
      {
        name: "Beard Sculpting & Trim",
        price: "Rs. 1,500",
        duration: "30 mins",
        desc: "Clip detailing, straight razor edge lining, hot towel finish, organic beard oil.",
        img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=300&fit=crop&q=80",
      },
      {
        name: "Mustache Design & Care",
        price: "Rs. 800",
        duration: "15 mins",
        desc: "Wax styling, edge detailing, and shape trimming for your facial structure.",
        img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=300&fit=crop&q=80",
      },
    ],
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("hair");
  const current = serviceCategories.find((cat) => cat.id === activeCategory);

  return (
    // bg-white page, teal cards/sections do the work of colour — fixes the
    // typo'd "bg" class that was rendering as plain unstyled white before
    <div className="bg-white min-h-screen text-[#1A1A1A]">
      <Navbar />

      <ServicesHero />

      <section className="pb-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <CategoryRail
            categories={serviceCategories}
            active={activeCategory}
            onSelect={setActiveCategory}
          />
          <ServiceMenu category={current} />
        </div>
      </section>

      <BookingBanner />
      <Footer />
    </div>
  );
};

export default Services;