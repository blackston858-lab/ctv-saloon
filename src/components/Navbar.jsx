import { useState, useEffect } from "react";
 import { Link,  useLocation } from 'react-router-dom';
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

  // Perfected Apple-style liquid spring physics
  const liquidSpring = {
    type: "spring",
    stiffness: 320, // Dynamic pull towards the destination
    damping: 25, // Controls the organic, jelly-like deceleration
    mass: 0.6, // Makes the element feel light and agile
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-[#F7F4ED]/65 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(27,77,67,0.06)] border-b border-white/30"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-1.5 focus:outline-none"
        >
          <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-[#1A1A1A] group-hover:text-[#1B4D43] transition-colors">
            BARBER<span className="text-[#C5A880]">SHOP</span>
          </span>
        </Link>

        {/* Desktop Navigation Wrapper */}
        <div className="hidden md:flex items-center gap-1 bg-white/20 backdrop-blur-2xl p-1.5 rounded-full border border-white/40 shadow-[0_4px_24px_0_rgba(0,0,0,0.02)]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-xs lg:text-sm font-medium tracking-wide px-5 py-2 rounded-full focus:outline-none z-10 transition-colors duration-200"
              >
                {/* Active Fluid Capsule Backdrop */}
                {isActive && (
                  <motion.div
                    layoutId="liquidNavPill" // Framer motion syncs layouts effortlessly across component nodes
                    className="absolute inset-0 bg-[#1B4D43] rounded-full -z-10 shadow-md shadow-[#1B4D43]/20"
                    transition={liquidSpring}
                  />
                )}
                <span
                  className={`relative z-20 ${isActive ? "text-white" : "text-[#1A1A1A] hover:text-[#1B4D43]"}`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Action CTA Button */}
        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Login */}
          <Link
            to="/login"
            className="bg-[#1B4D43] hover:bg-[#133831] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition"
          >
            Login
          </Link>

          {/* Book */}
          <Link
            to="/book"
            className="bg-[#1B4D43] hover:bg-[#133831] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Open/Close Button Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#1A1A1A] hover:text-[#1B4D43] focus:outline-none rounded-xl bg-white/40 backdrop-blur-md border border-white/60 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      {/* Mobile Droplet Glass Dropdown Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: "spring", stiffness: 350, damping: 26 }}
            className="fixed inset-x-0 top-[64px] p-6 mx-4 mt-2 rounded-2xl bg-[#F7F4ED]/85 backdrop-blur-xl border border-white/50 shadow-[0_12px_40px_0_rgba(27,77,67,0.12)] transform origin-top md:hidden"
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
                        className="absolute inset-0 bg-[#1B4D43] rounded-xl -z-10"
                        transition={liquidSpring}
                      />
                    )}
                    <span
                      className={`text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? "text-white font-semibold" : "text-[#1A1A1A]"}`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}

              <div className="w-full h-[1px] bg-gray-200/50 my-2"></div>

              <Link
                to="/login"
                className="w-full bg-[#1B4D43] text-white text-center font-semibold text-sm py-3 rounded-xl shadow-md block hover:bg-[#133831] transition-colors"
              >
                Login
              </Link>

              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#1B4D43] text-white text-center font-semibold text-sm py-3 rounded-xl shadow-md block hover:bg-[#133831] transition-colors"
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
