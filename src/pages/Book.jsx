import { useState } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft, FiCheck  } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── Brand tokens used throughout this page ──
// Primary teal:  #1B4D43
// Ink text:      #1A1A1A
// Muted text:    #8A8A85
// Card bg:       #FFFFFF on #F7F4ED page bg
// Accent (gold): #C9A24D — used sparingly, for the confirmed/success state only

const services = [
  { id: "hair-cut", name: "Classic Cut & Wash", category: "Hair", price: "Rs. 2,500", duration: "45 mins" },
  { id: "hair-style", name: "Executive Hair Design", category: "Hair", price: "Rs. 3,500", duration: "60 mins" },
  { id: "beard-shave", name: "Classic Hot Towel Shave", category: "Grooming", price: "Rs. 1,800", duration: "35 mins" },
  { id: "beard-trim", name: "Beard Sculpting & Trim", category: "Grooming", price: "Rs. 1,500", duration: "30 mins" },
  { id: "skin-facial", name: "Botanical Cleansing Facial", category: "Skin", price: "Rs. 4,000", duration: "50 mins" },
  { id: "skin-hydrate", name: "Cellular Hydration Therapy", category: "Skin", price: "Rs. 5,500", duration: "60 mins" },
  { id: "nails-hand", name: "Executive Hand Care", category: "Nails", price: "Rs. 1,800", duration: "30 mins" },
  { id: "nails-foot", name: "Classic Foot Ritual", category: "Nails", price: "Rs. 2,800", duration: "45 mins" },
];

const stylists = [
  { id: "any", name: "Any Available Master", role: "Optimized Scheduling", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=120&fit=crop&q=80" },
  { id: "zain", name: "Zain Malik", role: "Master Barber", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&fit=crop&q=80" },
  { id: "sara", name: "Sara Khan", role: "Skin Aesthetician", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&fit=crop&q=80" },
  { id: "bilal", name: "Bilal Ahmed", role: "Grooming Expert", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&fit=crop&q=80" },
  { id: "amara", name: "Amara Jamil", role: "Color Specialist", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&fit=crop&q=80" },
];

const dates = [
  { day: "Thu", date: "25", label: "June 25" },
  { day: "Fri", date: "26", label: "June 26" },
  { day: "Sat", date: "27", label: "June 27" },
  { day: "Mon", date: "29", label: "June 29" },
  { day: "Tue", date: "30", label: "June 30" },
];

const timeSlots = ["11:00 AM", "12:00 PM", "01:30 PM", "03:00 PM", "04:30 PM", "06:00 PM", "07:30 PM"];

const stepLabels = ["Service", "Stylist", "Time", "Details", "Confirm"];

const Book = () => {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    service: null,
    stylist: null,
    date: null,
    time: null,
    name: "",
    phone: "",
    notes: "",
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const selectService = (service) => {
    setBooking({ ...booking, service });
    nextStep();
  };

  const selectStylist = (stylist) => {
    setBooking({ ...booking, stylist });
    nextStep();
  };

  const selectDateTime = (date, time) => {
    setBooking({ ...booking, date, time });
  };

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    if (booking.name && booking.phone) {
      nextStep();
    }
  };

  return (
    <div className="bg-[#F7F4ED] min-h-screen text-[#1A1A1A] flex flex-col">
      <Navbar />

      <div className="flex-1 max-w-4xl mx-auto px-6 pt-32 md:pt-40 pb-24 w-full">

        {/* ── Step Progress — labelled rail, not bare numbers: each label IS the
              step's job, so a glance tells you exactly where you stand ── */}
        {step < 5 && (
          <div className="mb-12">
            <div className="flex justify-between items-center mb-3">
              {stepLabels.map((lbl, idx) => (
                <span
                  key={idx}
                  className={`text-[11px] tracking-widest uppercase font-semibold transition-colors duration-300 ${
                    step >= idx + 1 ? "text-[#1B4D43]" : "text-[#8A8A85]/40"
                  }`}
                >
                  {lbl}
                </span>
              ))}
            </div>
            <div className="w-full h-[3px] bg-[#1B4D43]/10 rounded-full relative overflow-hidden">
              <motion.div
                className="absolute h-full bg-[#1B4D43] left-0 top-0 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((step - 1) / 4) * 100}%` }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        )}

        {/* ── Wizard content ── */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">

            {/* STEP 1 — SERVICE SELECTION */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[#1B4D43] text-[11px] tracking-[0.2em] uppercase font-bold block mb-1">Step 1 of 4</span>
                  <h2 className="text-[#1A1A1A] font-serif text-3xl tracking-tight">Select a Service</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => selectService(item)}
                      className={`group text-left bg-white border-2 p-5 rounded-2xl transition-all duration-200 hover:shadow-md flex items-center justify-between ${
                        booking.service?.id === item.id ? "border-[#1B4D43]" : "border-transparent"
                      }`}
                    >
                      <div>
                        <span className="text-[#1B4D43]/60 text-[10px] tracking-widest uppercase font-bold">{item.category}</span>
                        <h3 className="text-[#1A1A1A] font-serif text-base mt-0.5">{item.name}</h3>
                        <span className="text-[#8A8A85] text-[11px] uppercase tracking-wide block mt-2">{item.duration}</span>
                      </div>
                      <div className="text-right shrink-0 ml-3">
                        <span className="text-[#1B4D43] font-serif text-base font-semibold">{item.price}</span>
                        <span className="block text-[10px] tracking-wider text-[#8A8A85] group-hover:text-[#1B4D43] transition-colors mt-2 uppercase font-bold">Select →</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2 — STYLIST SELECTION */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#1B4D43] text-[11px] tracking-[0.2em] uppercase font-bold block mb-1">Step 2 of 4</span>
                    <h2 className="text-[#1A1A1A] font-serif text-3xl tracking-tight">Select an Artist</h2>
                  </div>
                  <button onClick={prevStep} className="flex items-center gap-1 text-xs text-[#8A8A85] hover:text-[#1A1A1A] transition-colors font-medium">
                    <FiArrowLeft size={14} /> Back
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {stylists.map((stylist) => (
                    <button
                      key={stylist.id}
                      onClick={() => selectStylist(stylist)}
                      className={`cursor-pointer bg-white border-2 p-5 rounded-2xl transition-all duration-200 hover:shadow-md flex flex-col items-center text-center gap-3 ${
                        booking.stylist?.id === stylist.id ? "border-[#1B4D43]" : "border-transparent"
                      }`}
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-[#F7F4ED] border-2 border-[#1B4D43]/10">
                        <img src={stylist.image} alt={stylist.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-[#1A1A1A] font-serif text-base">{stylist.name}</h3>
                        <span className="text-[#8A8A85] text-[10px] tracking-widest uppercase mt-0.5 block">{stylist.role}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3 — DATE & TIME */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#1B4D43] text-[11px] tracking-[0.2em] uppercase font-bold block mb-1">Step 3 of 4</span>
                    <h2 className="text-[#1A1A1A] font-serif text-3xl tracking-tight">Select Date &amp; Time</h2>
                  </div>
                  <button onClick={prevStep} className="flex items-center gap-1 text-xs text-[#8A8A85] hover:text-[#1A1A1A] transition-colors font-medium">
                    <FiArrowLeft size={14} /> Back
                  </button>
                </div>

                {/* Date row */}
                <div>
                  <h3 className="text-[#8A8A85] text-xs tracking-wider uppercase font-semibold mb-3">Available Dates</h3>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {dates.map((d) => (
                      <button
                        key={d.date}
                        onClick={() => setBooking({ ...booking, date: d })}
                        className={`flex-shrink-0 w-20 py-4 border-2 rounded-2xl flex flex-col items-center gap-1 transition-all duration-200 ${
                          booking.date?.date === d.date
                            ? "bg-[#1B4D43] border-[#1B4D43] text-white"
                            : "bg-white border-transparent text-[#1A1A1A] hover:border-[#1B4D43]/15"
                        }`}
                      >
                        <span className="text-[10px] uppercase tracking-wider">{d.day}</span>
                        <span className="font-serif text-lg font-bold">{d.date}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time slots */}
                {booking.date && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-[#1B4D43]/10 pt-6">
                    <h3 className="text-[#8A8A85] text-xs tracking-wider uppercase font-semibold mb-4">Available Time Slots</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => selectDateTime(booking.date, slot)}
                          className={`text-center py-3 border-2 rounded-xl text-xs tracking-widest uppercase font-semibold transition-all duration-200 ${
                            booking.time === slot
                              ? "bg-[#1B4D43] border-[#1B4D43] text-white"
                              : "bg-white border-transparent text-[#1A1A1A] hover:border-[#1B4D43]/15"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {booking.date && booking.time && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={nextStep}
                    className="inline-flex items-center justify-center gap-2 bg-[#1B4D43] hover:bg-[#163e36] text-white px-8 py-3.5 rounded-full text-xs tracking-widest uppercase font-bold self-end mt-4 transition-colors duration-200"
                  >
                    <span>Continue</span>
                    <FiArrowRight size={14} />
                  </motion.button>
                )}
              </motion.div>
            )}

            {/* STEP 4 — CONTACT DETAILS */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#1B4D43] text-[11px] tracking-[0.2em] uppercase font-bold block mb-1">Step 4 of 4</span>
                    <h2 className="text-[#1A1A1A] font-serif text-3xl tracking-tight">Your Details</h2>
                  </div>
                  <button onClick={prevStep} className="flex items-center gap-1 text-xs text-[#8A8A85] hover:text-[#1A1A1A] transition-colors font-medium">
                    <FiArrowLeft size={14} /> Back
                  </button>
                </div>

                <form onSubmit={handleDetailsSubmit} className="flex flex-col gap-5 bg-white p-8 rounded-2xl shadow-sm">

                  <div>
                    <label className="text-[#8A8A85] text-xs font-semibold uppercase tracking-wide mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      required
                      value={booking.name}
                      onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                      placeholder="e.g. Ahmed Khan"
                      className="w-full bg-[#F7F4ED] border-2 border-transparent focus:border-[#1B4D43]/30 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[#8A8A85] text-xs font-semibold uppercase tracking-wide mb-1.5 block">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={booking.phone}
                      onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                      placeholder="03XX-XXXXXXX"
                      className="w-full bg-[#F7F4ED] border-2 border-transparent focus:border-[#1B4D43]/30 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[#8A8A85] text-xs font-semibold uppercase tracking-wide mb-1.5 block">Special Instructions (Optional)</label>
                    <textarea
                      rows={3}
                      value={booking.notes}
                      onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                      placeholder="Anything we should know before your visit?"
                      className="w-full bg-[#F7F4ED] border-2 border-transparent focus:border-[#1B4D43]/30 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1B4D43] hover:bg-[#163e36] text-white py-4 rounded-full text-xs tracking-widest uppercase font-bold transition-colors duration-200 mt-2"
                  >
                    Confirm Booking Details
                  </button>
                </form>
              </motion.div>
            )}

            {/* STEP 5 — CONFIRMATION SUMMARY */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center gap-6 py-8"
              >
                {/* Gold checkmark — the one accent moment on this page,
                    reserved exclusively for "you're done" */}
                <div className="w-16 h-16 rounded-full bg-[#C9A24D] flex items-center justify-center text-white shadow-[0_8px_30px_rgba(201,162,77,0.35)]">
                  <FiCheck size={32} />
                </div>

                <div>
                  <span className="text-[#C9A24D] text-[11px] tracking-[0.3em] uppercase font-bold block mb-1">Confirmed</span>
                  <h2 className="text-[#1A1A1A] font-serif text-3xl tracking-tight">Reservation Secured</h2>
                  <p className="text-[#8A8A85] text-sm max-w-sm mx-auto leading-relaxed mt-2">
                    Thank you. Your chair is reserved. A booking code has been sent to your phone number.
                  </p>
                </div>

                {/* Summary card */}
                <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-6 text-left flex flex-col gap-4 mt-4 text-sm">
                  <div className="flex justify-between border-b border-[#1B4D43]/10 pb-3">
                    <span className="text-[#8A8A85]">Service</span>
                    <span className="text-[#1A1A1A] font-serif font-semibold">{booking.service?.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1B4D43]/10 pb-3">
                    <span className="text-[#8A8A85]">Stylist</span>
                    <span className="text-[#1A1A1A] font-serif font-semibold">{booking.stylist?.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1B4D43]/10 pb-3">
                    <span className="text-[#8A8A85]">Scheduled Time</span>
                    <span className="text-[#1A1A1A] font-serif font-semibold">
                      {booking.date?.label} at {booking.time}
                    </span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-[#8A8A85]">Estimated Cost</span>
                    <span className="text-[#1B4D43] font-serif text-base font-bold">{booking.service?.price}</span>
                  </div>
                </div>

                <Link
                  to="/"
                  className="inline-flex items-center justify-center bg-[#1B4D43] hover:bg-[#163e36] text-white px-8 py-3.5 rounded-full text-xs tracking-widest uppercase font-bold transition-colors duration-200 mt-6"
                >
                  Return to Home
                </Link>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Book;