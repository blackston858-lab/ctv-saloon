import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiStar } from "react-icons/fi";

// ── Stagger animation for text block ──
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Hero = () => {
  return (
    <section className="relative bg-[#F7F4ED] pt-32 pb-16 md:pt-24 md:pb-24 px-5 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ── Left — Text ── */}
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white border border-[#1B4D43]/10 rounded-full px-4 py-2 mb-6"
          >
            <FiStar className="text-[#E8833A]" size={14} />
            <span className="text-[#1A1A1A] text-xs font-medium">Rated 4.9 by 2,000+ clients</span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-serif text-[#1A1A1A] text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] mb-5"
          >
            Beauty &amp; Grooming,<br />
            <span className="italic text-[#1B4D43]">Booked in Seconds.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[#8A8A85] text-base leading-relaxed max-w-md mb-8"
          >
            A private studio for hair, skin and grooming in Islamabad.
            Pick a service, choose your time, and your chair is reserved —
            no calls, no waiting.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 bg-[#1B4D43] hover:bg-[#163e36] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
            >
              Book an Appointment
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/services"
              className="text-[#1A1A1A] text-sm font-medium border-b border-[#1A1A1A]/20 hover:border-[#1A1A1A] pb-1 transition-colors duration-200"
            >
              View Services
            </Link>
          </motion.div>

          {/* Quick stats row — like the app's trust signals */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-8 mt-12 pt-8 border-t border-[#1B4D43]/10"
          >
            <div>
              <p className="font-serif text-2xl text-[#1A1A1A]">12+</p>
              <p className="text-[#8A8A85] text-xs mt-0.5">Specialists</p>
            </div>
            <div className="w-px h-9 bg-[#1B4D43]/10" />
            <div>
              <p className="font-serif text-2xl text-[#1A1A1A]">5,400+</p>
              <p className="text-[#8A8A85] text-xs mt-0.5">Bookings Made</p>
            </div>
            <div className="w-px h-9 bg-[#1B4D43]/10" />
            <div>
              <p className="font-serif text-2xl text-[#1A1A1A]">4.9★</p>
              <p className="text-[#8A8A85] text-xs mt-0.5">Average Rating</p>
            </div>
          </motion.div>
        </div>

        {/* ── Right — Image card stack ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[420px] md:h-[520px]"
        >
          {/* Main photo */}
          <div className="absolute top-0 right-0 w-[78%] h-[85%] rounded-[28px] overflow-hidden shadow-xl">
            <img
              src="hairstyling.jfif"
              alt="Hair styling session"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating "Next available" card — booking-app signature element */}
          <div className="absolute bottom-4 left-0 bg-white rounded-2xl shadow-lg p-4 w-56 z-10">
            <p className="text-[#8A8A85] text-[11px] mb-2 font-medium">Next available slot</p>
            <div className="flex items-center gap-3">
              <img
                src="user1.avif"
                alt="Stylist"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-[#1A1A1A] text-sm font-semibold">Zain Malik</p>
                <p className="text-[#1B4D43] text-xs font-medium">Today, 4:30 PM</p>
              </div>
            </div>
          </div>

          {/* Floating rating badge */}
          <div className="absolute top-5 left-0 bg-white rounded-full shadow-lg px-3.5 py-2 flex items-center gap-1.5 z-10">
            <FiStar className="text-[#E8833A] fill-[#E8833A]" size={13} />
            <span className="text-[#1A1A1A] text-xs font-bold">4.9</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;