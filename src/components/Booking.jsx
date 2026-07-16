import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// ── ReadyCTA ──
// "Ready for a fresh new look?" — mini booking widget sitting directly
// on the white page. Quick-pick fields rather than a full form, since
// this is a teaser that hands off to the real /book flow on submit.

const Booking = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Smoothly navigates to the full booking page without page refresh
    navigate("/book");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#F7F4ED] rounded-3xl p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >

          {/* Left — message + button */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight leading-snug mb-3">
              Ready for a<br />
              <span className="italic text-[#1B4D43]">Fresh New Look?</span>
            </h2>
            <p className="text-[#8A8A85] text-sm leading-relaxed mb-6 max-w-sm">
              Book your appointment now and experience the Maison Noir
              difference.
            </p>
            <Link
              to="/book"
              className="inline-flex items-center bg-[#1B4D43] hover:bg-[#163e36] text-white px-7 py-3.5 rounded-full text-xs tracking-widest uppercase font-bold transition-colors duration-200"
            >
              Book Appointment
            </Link>
          </div>

          {/* Right — quick-pick widget */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          >
            <span className="text-[#1B4D43] text-[11px] tracking-widest uppercase font-bold">
              Make An Appointment
            </span>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#F7F4ED] border-2 border-transparent focus:border-[#1B4D43]/30 rounded-xl px-3.5 py-2.5 text-xs outline-none transition-colors"
              />
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-[#F7F4ED] border-2 border-transparent focus:border-[#1B4D43]/30 rounded-xl px-3.5 py-2.5 text-xs outline-none transition-colors text-[#8A8A85]"
              />
            </div>

            <select
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="bg-[#F7F4ED] border-2 border-transparent focus:border-[#1B4D43]/30 rounded-xl px-3.5 py-2.5 text-xs outline-none transition-colors text-[#8A8A85]"
            >
              <option value="">Select a Service</option>
              <option value="haircut">Classic Cut &amp; Wash</option>
              <option value="shave">Hot Towel Shave</option>
              <option value="facial">Botanical Facial</option>
              <option value="beard">Beard Sculpting</option>
            </select>

            <button
              type="submit"
              className="w-full bg-[#1B4D43] hover:bg-[#163e36] text-white py-3.5 rounded-full text-xs tracking-widest uppercase font-bold transition-colors duration-200 cursor-pointer"
            >
              Book Now
            </button>
          </form>

        </motion.div>
      </div>
    </section>
  );
};

export default Booking;