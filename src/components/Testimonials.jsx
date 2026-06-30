import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      name: "Michael Green",
      text: '"The best barber shop I have ever visited! Great service, friendly staff, and amazing results every time."',
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "David Wilson",
      text: '"Professional, clean, and stylish! Always leave feeling confident and refreshed."',
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
  ];

  return (
    // Clean light beige canvas layout matching the image background profile
    <section className="bg-[#F7F4ED] px-5 py-12 md:px-12 lg:py-16 w-full flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Main Header Title */}
        <h2 className="font-serif text-[#1A1A1A] text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-center mb-10">
          What Our Clients Say
        </h2>

        {/* Testimonial Dual-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
          {reviews.map((r, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition-shadow duration-300"
            >
              {/* Profile Avatar Frame */}
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-gray-100 shadow-inner">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Review Content Content Block */}
              <div className="flex flex-col gap-2">
                {/* 5-Star Row */}
                <div className="flex items-center gap-0.5 text-[#E0B18D]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={13} />
                  ))}
                </div>

                {/* Review Body Quote Text */}
                <p className="text-gray-600 text-xs md:text-sm font-normal leading-relaxed italic">
                  {r.text}
                </p>

                {/* Author Name Alignment */}
                <p className="text-[#1A1A1A] text-xs font-semibold tracking-wide mt-1">
                  — {r.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Indicator Carousel Track */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          <div className="w-2.5 h-1.5 rounded-full bg-[#1B4D43] transition-all duration-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300 hover:bg-[#1B4D43]/40 cursor-pointer transition-colors"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300 hover:bg-[#1B4D43]/40 cursor-pointer transition-colors"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300 hover:bg-[#1B4D43]/40 cursor-pointer transition-colors"></div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;