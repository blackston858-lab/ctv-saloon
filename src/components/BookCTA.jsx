import { motion } from "framer-motion";
import { Link } from "react-router";

const BookCTA = () => {
  return (
    <section className="relative bg-[#070707] py-32 border-t border-white/5 overflow-hidden">
      
      {/* Background large decorative watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.015] pointer-events-none">
        <span className="text-white font-serif text-[28vw] select-none tracking-[0.2em] uppercase font-light">
          MAISON
        </span>
      </div>

      {/* Decorative vertical lines for structure */}
      <div className="absolute top-0 bottom-0 left-12 md:left-24 w-[1px] bg-white/[0.02] pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-12 md:right-24 w-[1px] bg-white/[0.02] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/40 text-[10px] tracking-[0.4em] uppercase block mb-4 font-medium"
        >
          Appointments
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white font-serif text-4xl md:text-5xl tracking-tight mb-6"
        >
          Secure Your <span className="italic text-white/70">Session</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/40 text-sm md:text-base max-w-md leading-relaxed mb-10 font-light"
        >
          To ensure personalized attention and avoid waiting, we highly recommend 
          booking your visit in advance. Walk-ins are subject to availability.
        </motion.p>

        {/* Button with sliding hover fill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/book"
            className="group relative inline-flex items-center justify-center overflow-hidden border border-white bg-white text-[#070707] px-10 py-4 text-sm tracking-widest uppercase transition-colors duration-500 hover:text-white"
          >
            <span className="absolute inset-0 bg-[#070707] scale-x-0 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-x-100" />
            <span className="relative z-10 font-medium">Book An Appointment</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default BookCTA;
