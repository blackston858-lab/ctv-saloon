const PricingMenuSection = () => {
  const leftColumnPackages = [
    { title: "Classic Cut", price: "$25", desc: "Haircut with classic styling and finish." },
    { title: "Beard Design", price: "$20", desc: "Precision beard shaping and trim." },
    { title: "Hot Towel Shave", price: "$25", desc: "Relaxing hot towel shave experience." },
    { title: "Climax Combo", price: "$60", desc: "Haircut, beard trim & hot towel shave." },
  ];

  const rightColumnPackages = [
    { title: "Kids Cut", price: "$20", desc: "Stylish and comfortable cuts for kids." },
    { title: "Color Treatment", price: "$40", desc: "Hair color with premium products." },
    { title: "Line Up", price: "$15", desc: "Sharp lines and edges for a fresh look." },
    { title: "VIP Package", price: "$70", desc: "Full grooming experience, head to toe." },
  ];

  return (
    // Clean luxury light beige backdrop matching the image theme
    <section className="bg-[#F7F4ED] px-6 py-16 md:px-12 lg:py-20 w-full flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Main Section Header Layout */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-[#C5A880] mb-2">
            Pricing
          </p>
          <h2 className="font-serif text-[#1A1A1A] text-2xl md:text-4xl font-bold tracking-wide leading-tight max-w-xl mx-auto">
            Affordable Grooming Packages Tailored For You
          </h2>
        </div>

        {/* Pricing Layout Matrix Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          
          {/* Left Column Stack */}
          <div className="flex flex-col gap-8">
            {leftColumnPackages.map((p, idx) => (
              <div key={idx} className="group flex flex-col w-full">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-[#1A1A1A] text-base md:text-lg font-semibold tracking-wide group-hover:text-[#1B4D43] transition-colors">
                    {p.title}
                  </h3>
                  {/* Elegant classic dot matrix divider row */}
                  <div className="flex-grow border-b border-dashed border-gray-300 mx-2 opacity-60"></div>
                  <span className="text-[#1B4D43] font-bold text-base md:text-lg shrink-0">
                    {p.price}
                  </span>
                </div>
                <p className="text-gray-500 text-xs md:text-sm mt-1 max-w-md font-normal leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column Stack */}
          <div className="flex flex-col gap-8">
            {rightColumnPackages.map((p, idx) => (
              <div key={idx} className="group flex flex-col w-full">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-[#1A1A1A] text-base md:text-lg font-semibold tracking-wide group-hover:text-[#1B4D43] transition-colors">
                    {p.title}
                  </h3>
                  {/* Elegant classic dot matrix divider row */}
                  <div className="flex-grow border-b border-dashed border-gray-300 mx-2 opacity-60"></div>
                  <span className="text-[#1B4D43] font-bold text-base md:text-lg shrink-0">
                    {p.price}
                  </span>
                </div>
                <p className="text-gray-500 text-xs md:text-sm mt-1 max-w-md font-normal leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default PricingMenuSection;