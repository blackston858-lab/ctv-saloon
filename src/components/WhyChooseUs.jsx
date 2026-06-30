import { FiCheckCircle } from "react-icons/fi";

const WhyChooseUs = () => {
  const highlights = [
    "Skilled & Experienced Barbers",
    "Hygienic Tools & Environment",
    "Premium Quality Products",
    "Personalized Consultation",
  ];

  return (
    <section className="bg-[#1B4D43] px-6 py-12 md:px-12 lg:py-20 w-full text-[#F7F4ED]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Side Content Column */}
        <div className="flex flex-col justify-center">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-[#E0B18D] mb-2">
            Our Features
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Why Choose Us
          </h2>
          <p className="text-[#A5CFC9] text-sm md:text-base font-normal max-w-md leading-relaxed mb-8">
            We are passionate about grooming and committed to providing the best experience for our clients.
          </p>

          {/* List Matrix */}
          <div className="flex flex-col gap-4 mb-8">
            {highlights.map((text, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="text-[#E0B18D] bg-white/5 p-1 rounded-full shrink-0">
                  <FiCheckCircle size={18} className="stroke-[2.5]" />
                </div>
                <span className="text-sm md:text-base font-medium tracking-wide">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Elegant Signature Vector/Text Representation */}
          <div className="mt-2">
            <span className="font-serif italic text-3xl md:text-4xl text-[#E0B18D]/80 select-none tracking-wider block font-light">
              James Anderson
            </span>
          </div>
        </div>

        {/* Right Side Visual Block */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] md:aspect-[4/3] lg:aspect-[14/11] rounded-2xl overflow-visible">
          {/* Main Barber Work Image */}
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-[#F7F4ED]/10">
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
              alt="Professional Barber at Work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Bottom Floating Metric Card Layout */}
          <div className="absolute -bottom-6 left-6 right-6 sm:left-12 sm:right-12 md:left-6 md:right-6 lg:left-12 lg:right-12 bg-white text-[#1A1A1A] rounded-xl p-4 shadow-xl flex items-center justify-between border border-gray-100 backdrop-blur-sm bg-white/95">
            {/* Tiny stacked avatar sequence mockup */}
            <div className="flex items-center -space-x-3">
              <img
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
                alt="Client 1"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                alt="Client 2"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
                alt="Client 3"
              />
            </div>
            
            {/* Metric Analytics Text block */}
            <div className="text-right">
              <p className="font-bold text-lg md:text-xl text-[#1B4D43] leading-none">
                1,200+
              </p>
              <p className="text-gray-500 text-[10px] md:text-xs font-medium tracking-wide mt-1">
                Happy Clients
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;