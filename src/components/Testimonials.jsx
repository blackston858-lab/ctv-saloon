import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: "Michael Green",
      text: "The best experience I have ever had! Phenomenal attention to detail, a welcoming atmosphere, and incredibly precise results every single visit.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      role: "Verified Client"
    },
    {
      name: "David Wilson",
      text: "Extremely professional, clean, and styled to perfection. They understand exactly what fits your profile and leave you feeling highly confident.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      role: "Verified Client"
    },
  ];

  // Stagger animation rules
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bg-[#FAF9F6] py-16 md:py-24 px-6 md:px-12 w-full flex items-center justify-center border-t border-stone-100 relative overflow-hidden">
      {/* Decorative Brand Accent Circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] bg-[#1B4D43]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-[#C5A880]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center relative z-10">
        
        {/* Editorial Sub-Header & Main Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#C5A880] font-bold mb-2">
            Guest Journal
          </span>
          <h2 className="font-serif text-[#1C1917] text-3xl md:text-4xl font-semibold tracking-wide">
            What Our Clients Say
          </h2>
          <div className="w-12 h-[1px] bg-stone-300 mt-4" />
        </div>

        {/* Staggered Testimonial Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-10"
        >
          {reviews.map((r, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(27,77,67,0.04)' }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/60 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden transition-all duration-300 group"
            >
              {/* Subtle Decorative Background Quote Icon */}
              <div className="absolute right-4 top-4 text-stone-100 group-hover:text-stone-200/70 transition-colors pointer-events-none">
                <FaQuoteLeft size={36} />
              </div>

              {/* Profile Avatar Frame */}
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md shadow-stone-200/50 relative z-10">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Review Content Block */}
              <div className="flex flex-col items-center sm:items-start gap-2.5 relative z-10">
                {/* 5-Star Row */}
                <div className="flex items-center gap-0.5 text-[#C5A880]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={12} />
                  ))}
                </div>

                {/* Review Body Quote Text */}
                <p className="text-stone-600 text-sm font-light leading-relaxed italic text-center sm:text-left">
                  "{r.text}"
                </p>

                {/* Author Name Alignment */}
                <div className="text-center sm:text-left mt-1">
                  <p className="text-[#1C1917] text-xs font-bold tracking-wider uppercase">
                    {r.name}
                  </p>
                  <p className="text-stone-400 text-[10px] uppercase tracking-widest mt-0.5">
                    {r.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Minimalist Carousel Pagination Track */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-6 h-1 rounded-full bg-[#1B4D43] transition-all duration-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-stone-300 hover:bg-[#1B4D43]/40 cursor-pointer transition-colors"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-stone-300 hover:bg-[#1B4D43]/40 cursor-pointer transition-colors"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-stone-300 hover:bg-[#1B4D43]/40 cursor-pointer transition-colors"></div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;