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
    swatch: "blog-image2.jfif",
    items: [
      {
        name: "The Classic Cut & Wash",
        price: "Rs. 2,500",
        duration: "45 mins",
        desc: "Styling consultation, scalp massage wash, tailored cut, and hot towel finish.",
        img: "blog-image1.jfif",
      },
      {
        name: "Executive Hair Design",
        price: "Rs. 3,500",
        duration: "60 mins",
        desc: "For complex styling adjustments, texture treatments, and fine detailing.",
        img: "blog-image3.jfi.jfif",
      },
      {
        name: "Royal Beard & Hair Ritual",
        price: "Rs. 4,800",
        duration: "90 mins",
        desc: "Combined structural haircut, luxury wash, and hot towel custom beard shaping.",
        img: "hairstyle1.jfif",
      },
      {
        name: "Scalp Renewal Detox",
        price: "Rs. 2,200",
        duration: "30 mins",
        desc: "Exfoliating scrub, botanical hydration oils, and a slow head massage.",
        img: "hairstyle3.jfif",
      },
    ],
  },
 {
  "id": "beard-grooming",
  "name": "Beard & Royal Shave",
  "description": "Precision beard shaping, hot towel shaves, and premium beard care.",
  "swatch": "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=200&fit=crop&q=80",
  "items": [
    {
      "name": "Royal Hot Towel Shave",
      "price": "Rs. 1,500",
      "time": "30 mins",
      "desc": "Classic straight razor shave with pre-shave essential oils, hot towels, and soothing post-shave balm.",
      "img": "blog-image2.jfif"
    },
    {
      "name": "Beard Styling & Line-Up",
      "price": "Rs. 1,200",
      "time": "25 mins",
      "desc": "Custom beard shaping and razor sharp line-up tailored to complement your facial structure.",
      "img": "blog-image1.jfif"
    },
    {
      "name": "Maison Noir Beard Spa Treatment",
      "price": "Rs. 2,500",
      "time": "45 mins",
      "desc": "Premium beard wash, deep conditioning steam, ozone therapy, and premium beard oil massage.",
      "img": "hairstyle2.jfif"
    }
  ]
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