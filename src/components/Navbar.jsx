import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "About Us", path: "/about" },
  ];

  // Perfected Apple-style liquid spring physics for smooth sliding
  const liquidSpring = {
    type: "spring",
    stiffness: 360, // Fast dynamic pull
    damping: 28,    // Organic jelly-like deceleration
    mass: 0.5,      // Light & snappy feel
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "py-3 bg-white/20 md:bg-[#F7F4ED]/40 backdrop-blur-xl border-b border-white/20 shadow-[0_10px_30px_-10px_rgba(27,77,67,0.08),_inset_0_1px_1px_0_rgba(255,255,255,0.4)]"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-1.5 focus:outline-none"
        >
          <span className="font-serif text-lg md:text-xl font-black tracking-widest text-[#1A1A1A] group-hover:text-[#1B4D43] transition-colors">
            BARBER<span className="text-[#C5A880] font-light">SHOP</span>
          </span>
        </Link>

        {/* Desktop Navigation Wrapper with Liquid Glass Capsule */}
        <div className="hidden md:flex items-center gap-1 bg-white/40 backdrop-blur-xl p-1 rounded-full border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.02),_inset_0_1px_1px_rgba(255,255,255,0.5)]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-xs lg:text-sm font-medium tracking-wide px-5 py-2 rounded-full focus:outline-none z-10 transition-colors duration-200"
              >
                {/* Active Fluid Capsule Backdrop with gloss & shadow */}
                {isActive && (
                  <motion.div
                    layoutId="liquidNavPill"
                    className="absolute inset-0 bg-[#1B4D43] rounded-full -z-10 shadow-[0_4px_12px_rgba(27,77,67,0.25),_inset_0_1px_0_rgba(255,255,255,0.25)]"
                    transition={liquidSpring}
                  />
                )}
                <span
                  className={`relative z-20 transition-colors duration-300 ${
                    isActive ? "text-white font-semibold" : "text-[#1A1A1A] hover:text-[#1B4D43]"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Login (Translucent Glass Pill) */}
          <Link
            to="/login"
            className="relative group overflow-hidden border border-[#1B4D43]/20 bg-white/30 backdrop-blur-md text-[#1A1A1A] hover:text-white text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]"
          >
            <span className="absolute inset-0 w-full h-full bg-[#1B4D43] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 rounded-full" />
            Login
          </Link>

          {/* Book Appointment (Solid Liquid-reflective button) */}
          <Link
            to="/book"
            className="relative group overflow-hidden bg-[#1B4D43] text-white text-xs font-bold tracking-wider uppercase px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(27,77,67,0.3),_inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_12px_24px_-4px_rgba(27,77,67,0.45)] hover:scale-[1.02]"
          >
            {/* Subtle light shimmer sweep on hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#1A1A1A] hover:text-[#1B4D43] focus:outline-none rounded-xl bg-white/50 backdrop-blur-md border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
        </button>
      </div>

      {/* Mobile Glass Dropdown Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="fixed inset-x-0 top-[68px] p-6 mx-4 mt-2 rounded-2xl bg-[#F7F4ED]/80 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(27,77,67,0.12),_inset_0_1px_1px_rgba(255,255,255,0.5)] transform origin-top md:hidden z-50"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="relative px-4 py-3 rounded-xl block focus:outline-none z-10"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="liquidMobileNavPill"
                        className="absolute inset-0 bg-[#1B4D43] rounded-xl -z-10 shadow-[0_4px_12px_rgba(27,77,67,0.15)]"
                        transition={liquidSpring}
                      />
                    )}
                    <span
                      className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                        isActive ? "text-white font-bold" : "text-[#1A1A1A] hover:text-[#1B4D43]"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}

              <div className="w-full h-[1px] bg-gray-200/40 my-3"></div>

              {/* Mobile Actions */}
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full text-center font-bold text-xs tracking-widest uppercase py-3 border border-[#1B4D43]/20 bg-white/40 backdrop-blur-md text-[#1A1A1A] rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] block transition-colors"
              >
                Login
              </Link>

              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#1B4D43] text-white text-center font-bold text-xs tracking-widest uppercase py-3.5 rounded-xl shadow-[0_6px_15px_-4px_rgba(27,77,67,0.3),_inset_0_1px_0_rgba(255,255,255,0.3)] block transition-colors mt-2"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;