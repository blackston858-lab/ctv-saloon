import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiStar } from "react-icons/fi";

// ── Stagger Container & Child Variants (100% Reliable Animation) ──
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Automatically delays each sequential child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Premium Apple cubic-bezier curve
    },
  },
};

// Gentle continuous floating motion for signature glass elements
const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const floatAnimationDelayed = {
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 4.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative bg-[#F7F4ED] pt-36 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ── Left Content Block with Automated Staggering ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          {/* Trust Rating Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white border border-[#1B4D43]/10 rounded-full px-4 py-2 mb-6 shadow-sm"
          >
            <FiStar className="text-[#E8833A] fill-[#E8833A]" size={13} />
            <span className="text-[#1A1A1A] text-xs font-semibold tracking-wide">Rated 4.9 by 2,000+ clients</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-[#1A1A1A] text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-5 font-black tracking-tight"
          >
            Beauty &amp; Grooming,<br />
            <span className="italic text-[#1B4D43] font-light">Booked in Seconds.</span>
          </motion.h1>

          {/* Paragraph description */}
          <motion.p
            variants={itemVariants}
            className="text-[#8A8A85] text-sm md:text-base leading-relaxed max-w-md mb-8"
          >
            A private studio for hair, skin and grooming in Islamabad.
            Pick a service, choose your time, and your chair is reserved —
            no calls, no waiting.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-5"
          >
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 bg-[#1B4D43] hover:bg-[#133831] text-white text-xs tracking-widest uppercase font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(27,77,67,0.3),_inset_0_1px_0_rgba(255,255,255,0.2)] hover:scale-[1.02]"
            >
              Book Appointment
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={14} />
            </Link>
            <Link
              to="/services"
              className="text-[#1A1A1A] text-xs tracking-widest uppercase font-bold border-b-2 border-[#1A1A1A]/10 hover:border-[#1A1A1A] pb-1 transition-all duration-300"
            >
              View Services
            </Link>
          </motion.div>

          {/* Trust Metrics Grid */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-8 mt-12 pt-8 border-t border-[#1B4D43]/10 w-full max-w-md"
          >
            <div>
              <p className="font-serif text-2xl font-bold text-[#1A1A1A]">12+</p>
              <p className="text-[#8A8A85] text-[10px] tracking-wider uppercase font-semibold mt-0.5">Specialists</p>
            </div>
            <div className="w-px h-9 bg-[#1B4D43]/10" />
            <div>
              <p className="font-serif text-2xl font-bold text-[#1A1A1A]">5,400+</p>
              <p className="text-[#8A8A85] text-[10px] tracking-wider uppercase font-semibold mt-0.5">Bookings</p>
            </div>
            <div className="w-px h-9 bg-[#1B4D43]/10" />
            <div>
              <p className="font-serif text-2xl font-bold text-[#1A1A1A]">4.9★</p>
              <p className="text-[#8A8A85] text-[10px] tracking-wider uppercase font-semibold mt-0.5">Average Rating</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right Content Block (Dynamic Images and Cards) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[420px] md:h-[520px] w-full flex items-center justify-end"
        >
          {/* Main Visual Photo (Clean Barber session) */}
          <div className="w-[85%] h-[90%] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white">
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format&fit=crop&q=80"
              alt="Premium Grooming Experience"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating "Next available" glass card (Infinite Floating Motion) */}
          <motion.div
            variants={floatAnimation}
            animate="animate"
            className="absolute bottom-4 left-0 bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06),_inset_0_1px_1px_rgba(255,255,255,0.5)] p-4 w-56 z-10"
          >
            <p className="text-[#8A8A85] text-[10px] tracking-wider uppercase font-bold mb-2">Next available chair</p>
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&fit=crop&q=80"
                alt="Available Barber Stylist"
                className="w-10 h-10 rounded-full object-cover border border-[#1B4D43]/20"
              />
              <div>
                <p className="text-[#1A1A1A] text-sm font-bold">Zain Malik</p>
                <p className="text-[#1B4D43] text-xs font-semibold">Today, 4:30 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Floating rating badge (Infinite Floating Motion Delayed) */}
          <motion.div
            variants={floatAnimationDelayed}
            animate="animate"
            className="absolute top-8 left-6 bg-white/80 backdrop-blur-md rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.04)] border border-white/40 px-4 py-2 flex items-center gap-1.5 z-10"
          >
            <FiStar className="text-[#E8833A] fill-[#E8833A]" size={12} />
            <span className="text-[#1A1A1A] text-xs font-extrabold tracking-wide">4.9 / 5.0</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;