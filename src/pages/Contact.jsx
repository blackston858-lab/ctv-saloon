import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── Studio hours — drives the signature "open now" indicator below ──
const hours = [
  { day: "Monday — Saturday", time: "11:00 AM — 9:00 PM", open: [11, 21] },
  { day: "Sunday", time: "12:00 PM — 8:00 PM", open: [12, 20] },
];

// Quick "are we open right now" check, used for the live status pill —
// a small honest detail rather than a decorative badge.
const isOpenNow = () => {
  const now = new Date();
  const hour = now.getHours();
  const isSunday = now.getDay() === 0;
  const [start, end] = isSunday ? hours[1].open : hours[0].open;
  return hour >= start && hour < end;
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const open = isOpenNow();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-white min-h-screen text-[#1A1A1A]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-32 md:pt-40 pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#1B4D43] text-[11px] tracking-[0.3em] uppercase font-bold">
              Studio Connections
            </span>
            {/* Live open/closed status — the one honest, data-driven signature on this page */}
            <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${
              open ? "bg-[#1B4D43]/10 text-[#1B4D43]" : "bg-[#8A8A85]/10 text-[#8A8A85]"
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${open ? "bg-[#1B4D43]" : "bg-[#8A8A85]"}`} />
              {open ? "Open Now" : "Closed Now"}
            </span>
          </div>
          <h1 className="text-[#1A1A1A] font-serif text-4xl md:text-6xl tracking-tight leading-tight max-w-2xl">
            Get in Touch &amp;<br />
            <span className="italic text-[#1B4D43]">Reserve Your Spot</span>
          </h1>
          <p className="text-[#8A8A85] text-sm md:text-base max-w-md leading-relaxed mt-6">
            Reach out for corporate packages, wedding bookings, or scheduling
            questions. Our hosts respond within two hours.
          </p>
        </div>
      </section>

      {/* ── Details + Form ── */}
      <section className="pb-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ── Left — studio details, on a teal card so the page gets
                its contrast block instead of staying flat white ── */}
          <div className="lg:col-span-5 bg-[#1B4D43] rounded-3xl p-8 md:p-9 flex flex-col gap-9 text-white">

            <div>
              <h2 className="font-serif text-2xl tracking-wide mb-6">Islamabad Studio</h2>
              <div className="flex flex-col gap-5 text-sm text-white/75">
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-[#C9A24D] mt-1 shrink-0" size={15} />
                  <p className="leading-relaxed">House 12-A, Street 33, F-7/1,<br />Islamabad, Pakistan</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-[#C9A24D] shrink-0" size={13} />
                  <a href="tel:+925112345678" className="hover:text-white transition-colors">+92 329 4689180</a>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-[#C9A24D] shrink-0" size={13} />
                  <a href="mailto:appointments@maisonnoir.pk" className="hover:text-white transition-colors">
                    appointments@maisonnoir.pk
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-7">
              <h3 className="font-serif text-lg tracking-wide mb-4">Hours of Operation</h3>
              <ul className="flex flex-col gap-2.5 text-xs text-white/60">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between max-w-xs">
                    <span>{h.day}</span>
                    <span className="text-white/90 font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://wa.me/92511234567"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-[#F7F4ED] text-[#1B4D43] px-6 py-3.5 text-xs tracking-widest uppercase font-bold rounded-full transition-colors duration-200 w-fit"
            >
              <FaWhatsapp size={16} />
              WhatsApp Chat
            </a>
          </div>

          {/* ── Right — form, on cream so it sits clearly on the white page ── */}
          <div className="lg:col-span-7 bg-[#F7F4ED] rounded-3xl p-8 md:p-10">
            <h2 className="font-serif text-2xl tracking-wide mb-7">Send a Message</h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-2xl text-center flex flex-col items-center gap-3"
              >
                <span className="w-12 h-12 rounded-full bg-[#1B4D43] flex items-center justify-center text-white">
                  <FiCheck size={22} />
                </span>
                <h3 className="font-serif text-lg">Message Sent</h3>
                <p className="text-[#8A8A85] text-sm max-w-xs leading-relaxed">
                  Thank you. Our front desk manager will review your request and reply shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div>
                  <label className="text-[#8A8A85] text-xs font-semibold uppercase tracking-wide mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ahmed Khan"
                    className="w-full bg-white border-2 border-transparent focus:border-[#1B4D43]/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[#8A8A85] text-xs font-semibold uppercase tracking-wide mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full bg-white border-2 border-transparent focus:border-[#1B4D43]/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[#8A8A85] text-xs font-semibold uppercase tracking-wide mb-1.5 block">Phone (Optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="03XX-XXXXXXX"
                      className="w-full bg-white border-2 border-transparent focus:border-[#1B4D43]/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#8A8A85] text-xs font-semibold uppercase tracking-wide mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you're looking for..."
                    className="w-full bg-white border-2 border-transparent focus:border-[#1B4D43]/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1B4D43] hover:bg-[#163e36] text-white py-4 rounded-full text-xs tracking-widest uppercase font-bold transition-colors duration-200 mt-1"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ── Location card — honest static map instead of a fake "interactive" overlay ── */}
      <section className="pb-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="w-full rounded-3xl overflow-hidden border border-[#1B4D43]/10">
          <iframe
            title="Maison Noir location"
            src="https://www.google.com/maps?q=F-7/1+Islamabad&output=embed"
            className="w-full h-[340px] grayscale-[20%]"
            loading="lazy"
          />
          <div className="bg-[#1B4D43] px-7 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h4 className="text-white font-serif text-lg">Maison Noir Sanctuary</h4>
              <p className="text-white/60 text-xs mt-0.5">
                Inside F-7/1 residential block — quiet street, private parking.
              </p>
            </div>
            <a
              href="https://www.google.com/maps?q=F-7/1+Islamabad"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-white hover:bg-[#F7F4ED] text-[#1B4D43] px-5 py-2.5 rounded-full text-xs tracking-widest uppercase font-bold transition-colors duration-200 shrink-0"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;