import { Link } from "react-router";

// Expanded data directly matching the 8 items and pricing structure from image_a2c2a1.png
const services = [
  {
    title: "Classic Haircut",
    price: "$25",
    description: "Timeless haircut with precision scissor and clipper work.",
  },
  {
    title: "Beard Trim",
    price: "$20",
    description: "Shape and sculpt your beard to absolute perfection.",
  },
  {
    title: "Shave",
    price: "$25",
    description: "Hot towel straight razor shave for a smooth, ultra-clean feel.",
  },
  {
    title: "Hair Color",
    price: "$35",
    description: "Professional coloring to enhance or change your style.",
  },
  {
    title: "Kids Haircut",
    price: "$20",
    description: "Stylish cuts crafted specifically for little gentlemen.",
  },
  {
    title: "Hair Styling",
    price: "$25",
    description: "Custom styling and blowouts for any special occasion.",
  },
  {
    title: "Moustache Trim",
    price: "$15",
    description: "Perfect your mustache detailing with premium products.",
  },
  {
    title: "Deluxe Package",
    price: "$60",
    description: "Haircut, advanced beard trim, and a relaxing facial routine.",
  },
];

const ServicesCategory = () => {
  return (
    // Matching the elegant light-beige canvas backdrop from the layout reference
    <section className="bg-[#F7F4ED] px-5 py-12 md:px-10 lg:py-16 w-full min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Centered Main Title Header */}
        <h2 className="font-serif text-[#1A1A1A] text-3xl md:text-4xl font-bold tracking-wide text-center mb-10">
          Our Services
        </h2>

        {/* 2x4 Responsive Menu Layout matching image_a2c2a1.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-12">
          {services.map((s, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#1B4D43]/20 transition-all duration-300 min-h-[140px]"
            >
              {/* Card Title & Pricing Layout Line */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-serif text-[#1A1A1A] text-base md:text-lg font-semibold leading-tight">
                  {s.title}
                </h3>
                <span className="text-[#1B4D43] font-bold text-base md:text-lg shrink-0">
                  {s.price}
                </span>
              </div>
              
              {/* Divider Line */}
              <div className="w-12 h-[1px] bg-[#E0B18D] opacity-60 mb-3"></div>

              {/* Detail Text Body */}
              <p className="text-gray-500 text-xs md:text-sm font-normal leading-relaxed line-clamp-2">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Centralised Primary Accent Action Button */}
        <Link
          to="/services"
          className="bg-[#C5A880] hover:bg-[#B3966E] text-white font-medium text-sm px-8 py-3 rounded-xl transition-all duration-300 tracking-wide shadow-sm hover:shadow active:scale-95"
        >
          View All Services
        </Link>

      </div>
    </section>
  );
};

export default ServicesCategory;