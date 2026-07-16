import { useState } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft, FiCheck } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── Brand tokens used throughout this page ──
// Primary teal:  #1B4D43
// Ink text:      #1A1A1A
// Muted text:    #8A8A85
// Card bg:       #FFFFFF on #F7F4ED page bg
// Accent (gold): #C9A24D — used sparingly, for the confirmed/success state only

const services = [
  { 
    id: "hair-cut", 
    name: "Classic Cut & Wash", 
    category: "Hair", 
    price: "Rs. 2,500", 
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=300&fit=crop&q=80"
  },
  { 
    id: "hair-style", 
    name: "Executive Hair Design", 
    category: "Hair", 
    price: "Rs. 3,500", 
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=300&fit=crop&q=80"
  },
  { 
    id: "beard-shave", 
    name: "Classic Hot Towel Shave", 
    category: "Grooming", 
    price: "Rs. 1,800", 
    duration: "35 mins",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=300&fit=crop&q=80"
  },
  { 
    id: "beard-trim", 
    name: "Beard Sculpting & Trim", 
    category: "Grooming", 
    price: "Rs. 1,500", 
    duration: "30 mins",
    image: "https://images.unsplash.com/photo-1593702295094-aec22597af05?w=300&fit=crop&q=80"
  },
  { 
    id: "skin-facial", 
    name: "Botanical Cleansing Facial", 
    category: "Skin", 
    price: "Rs. 4,000", 
    duration: "50 mins",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=300&fit=crop&q=80"
  },
  { 
    id: "skin-hydrate", 
    name: "Cellular Hydration Therapy", 
    category: "Skin", 
    price: "Rs. 5,500", 
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300&fit=crop&q=80"
  },
  { 
    id: "nails-hand", 
    name: "Executive Hand Care", 
    category: "Nails", 
    price: "Rs. 1,800", 
    duration: "30 mins",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&fit=crop&q=80"
  },
  { 
    id: "nails-foot", 
    name: "Classic Foot Ritual", 
    category: "Nails", 
    price: "Rs. 2,800", 
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1535137812806-899988bb45ec?w=300&fit=crop&q=80"
  },
];

const stylists = [
  { id: "any", name: "Any Available Master", role: "Optimized Scheduling", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&fit=crop&q=80" },
  { id: "zain", name: "Zain Malik", role: "Master Barber", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&fit=crop&q=80" },
  { id: "bilal", name: "Bilal Ahmed", role: "Grooming Expert", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&fit=crop&q=80" },
  { id: "hamza", name: "Hamza Ali", role: "Hair Styling Specialist", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&fit=crop&q=80" },
  { id: "asad", name: "Asad Khan", role: "Skin Consultant", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&fit=crop&q=80" },
];

const timeSlots = ["11:00 AM", "12:00 PM", "01:30 PM", "03:00 PM", "04:30 PM", "06:00 PM", "07:30 PM"];

const stepLabels = ["Service", "Stylist", "Time", "Details", "Payment", "Confirm"];

const Book = () => {
  const [step, setStep] = useState(1);
  const today = new Date();
  
  // States for dynamic monthly calendar navigation
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [booking, setBooking] = useState({
    service: null,
    stylist: null,
    date: null,
    time: null,
    name: "",
    phone: "",
    notes: "",
    paymentMethod: "cash", // default selected
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 6));
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

  // Helper to generate dynamic days of month for calendar
  const getCalendarDays = (year, month) => {
    const firstDayIndex = new Date(year, month, 1).getDay(); // 0 is Sunday
    const totalDays = new Date(year, month + 1, 0).getDate();
    const days = [];
    
    // Fill empty spaces for alignment with days of week
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }
    // Fill actual dates
    for (let d = 1; d <= totalDays; d++) {
      days.push(new Date(year, month, d));
    }
    return days;
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calendarDays = getCalendarDays(currentYear, currentMonth);

  const handlePrevMonth = () => {
    if (currentMonth === today.getMonth() && currentYear === today.getFullYear()) return;
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Helper to check if a specific slot on chosen day is in the past
  const isTimeInPast = (selectedDate, slotStr) => {
    const now = new Date();
    const isToday =
      selectedDate.getDate() === now.getDate() &&
      selectedDate.getMonth() === now.getMonth() &&
      selectedDate.getFullYear() === now.getFullYear();

    if (!isToday) return false;

    // Convert e.g., "11:00 AM" to hours/minutes
    const [time, modifier] = slotStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    const slotTime = new Date(now);
    slotTime.setHours(hours, minutes, 0, 0);

    return slotTime <= now;
  };

  // Simulation: checks if slot is already booked for that stylist on that day
  const isSlotBooked = (date, stylistId, slot) => {
    if (!date || !stylistId) return false;
    const dateNum = date.getDate();
    const charSum = stylistId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const slotIndex = timeSlots.indexOf(slot);
    return (dateNum + charSum + slotIndex) % 5 === 0; // Deterministic random booking rule (~20%)
  };

  return (
    <div className="bg-[#F7F4ED] min-h-screen text-[#1A1A1A] flex flex-col">
      <Navbar />

      <div className="flex-1 max-w-4xl mx-auto px-6 pt-32 md:pt-40 pb-24 w-full">

        {/* ── Progress Bar ── */}
        {step < 6 && (
          <div className="mb-12">
            <div className="flex justify-between items-center mb-3 overflow-x-auto gap-2">
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
                animate={{ width: `${((step - 1) / 5) * 100}%` }}
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
                  <span className="text-[#1B4D43] text-[11px] tracking-[0.2em] uppercase font-bold block mb-1">Step 1 of 5</span>
                  <h2 className="text-[#1A1A1A] font-serif text-3xl tracking-tight">Select a Service</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => selectService(item)}
                      className={`group text-left bg-white border-2 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-md flex items-stretch ${
                        booking.service?.id === item.id ? "border-[#1B4D43]" : "border-transparent"
                      }`}
                    >
                      <div className="w-24 md:w-28 bg-[#F7F4ED] shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 flex flex-col justify-between flex-1">
                        <div>
                          <span className="text-[#1B4D43]/60 text-[9px] tracking-widest uppercase font-bold">{item.category}</span>
                          <h3 className="text-[#1A1A1A] font-serif text-sm md:text-base mt-0.5 font-semibold">{item.name}</h3>
                          <span className="text-[#8A8A85] text-[10px] uppercase tracking-wide block mt-1">{item.duration}</span>
                        </div>
                        <div className="flex justify-between items-baseline mt-3 border-t border-dashed border-gray-100 pt-2">
                          <span className="text-[#1B4D43] font-serif text-sm font-bold">{item.price}</span>
                          <span className="text-[10px] tracking-wider text-[#8A8A85] group-hover:text-[#1B4D43] transition-colors uppercase font-bold">Select →</span>
                        </div>
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
                    <span className="text-[#1B4D43] text-[11px] tracking-[0.2em] uppercase font-bold block mb-1">Step 2 of 5</span>
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
                    <span className="text-[#1B4D43] text-[11px] tracking-[0.2em] uppercase font-bold block mb-1">Step 3 of 5</span>
                    <h2 className="text-[#1A1A1A] font-serif text-3xl tracking-tight">Select Date &amp; Time</h2>
                  </div>
                  <button onClick={prevStep} className="flex items-center gap-1 text-xs text-[#8A8A85] hover:text-[#1A1A1A] transition-colors font-medium">
                    <FiArrowLeft size={14} /> Back
                  </button>
                </div>

                {/* Full Calendar UI */}
                <div>
                  <h3 className="text-[#8A8A85] text-xs tracking-wider uppercase font-semibold mb-3">Calendar</h3>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-md mx-auto">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-serif text-lg text-[#1A1A1A] font-semibold">
                        {monthNames[currentMonth]} {currentYear}
                      </h4>
                      <div className="flex gap-1">
                        <button
                          type="button"
                          onClick={handlePrevMonth}
                          disabled={currentMonth === today.getMonth() && currentYear === today.getFullYear()}
                          className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 disabled:opacity-30 disabled:hover:bg-transparent"
                        >
                          <FiArrowLeft size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextMonth}
                          className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"
                        >
                          <FiArrowRight size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center mb-2">
                      {daysOfWeek.map((day) => (
                        <span key={day} className="text-xs text-[#8A8A85] font-semibold py-1">
                          {day}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {calendarDays.map((dateObj, idx) => {
                        if (!dateObj) {
                          return <div key={`empty-${idx}`} />;
                        }

                        // Past dates comparison
                        const isPast = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate()) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                        
                        const isSelected = booking.date &&
                          booking.date.getDate() === dateObj.getDate() &&
                          booking.date.getMonth() === dateObj.getMonth() &&
                          booking.date.getFullYear() === dateObj.getFullYear();

                        return (
                          <button
                            key={idx}
                            type="button"
                            disabled={isPast}
                            onClick={() => setBooking({ ...booking, date: dateObj, time: null })}
                            className={`aspect-square flex items-center justify-center text-sm rounded-xl font-medium transition-all ${
                              isSelected
                                ? "bg-[#1B4D43] text-white font-bold"
                                : isPast
                                ? "text-gray-300 cursor-not-allowed"
                                : "text-[#1A1A1A] hover:bg-gray-100"
                            }`}
                          >
                            {dateObj.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Time slots */}
                {booking.date && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-[#1B4D43]/10 pt-6">
                    <h3 className="text-[#8A8A85] text-xs tracking-wider uppercase font-semibold mb-4">Available Time Slots</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {timeSlots.map((slot) => {
                        const past = isTimeInPast(booking.date, slot);
                        const booked = isSlotBooked(booking.date, booking.stylist?.id, slot);
                        const isSelected = booking.time === slot;

                        return (
                          <button
                            key={slot}
                            type="button"
                            disabled={past || booked}
                            onClick={() => selectDateTime(booking.date, slot)}
                            className={`text-center py-3 border-2 rounded-xl text-xs tracking-widest uppercase font-semibold transition-all duration-200 relative ${
                              isSelected
                                ? "bg-[#1B4D43] border-[#1B4D43] text-white"
                                : past
                                ? "bg-gray-100 border-transparent text-gray-300 cursor-not-allowed"
                                : booked
                                ? "bg-red-50 border-red-200 text-red-300 cursor-not-allowed line-through"
                                : "bg-white border-transparent text-[#1A1A1A] hover:border-[#1B4D43]/15"
                            }`}
                          >
                            <div>{slot}</div>
                            {booked && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[7px] px-1 rounded uppercase tracking-tighter scale-90">Booked</span>}
                            {past && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gray-400 text-white text-[7px] px-1 rounded uppercase tracking-tighter scale-90">Past</span>}
                          </button>
                        );
                      })}
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
                    <span className="text-[#1B4D43] text-[11px] tracking-[0.2em] uppercase font-bold block mb-1">Step 4 of 5</span>
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
                    Proceed to Payment Options
                  </button>
                </form>
              </motion.div>
            )}

            {/* STEP 5 — PAYMENT METHOD SELECTION */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#1B4D43] text-[11px] tracking-[0.2em] uppercase font-bold block mb-1">Step 5 of 5</span>
                    <h2 className="text-[#1A1A1A] font-serif text-3xl tracking-tight">Payment Method</h2>
                  </div>
                  <button onClick={prevStep} className="flex items-center gap-1 text-xs text-[#8A8A85] hover:text-[#1A1A1A] transition-colors font-medium">
                    <FiArrowLeft size={14} /> Back
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Cash Option */}
                  <button
                    type="button"
                    onClick={() => setBooking({ ...booking, paymentMethod: "cash" })}
                    className={`text-left bg-white border-2 p-6 rounded-2xl transition-all duration-200 hover:shadow-md flex flex-col justify-between ${
                      booking.paymentMethod === "cash" ? "border-[#1B4D43]" : "border-transparent"
                    }`}
                  >
                    <div>
                      <span className="text-[#1B4D43]/60 text-[10px] tracking-widest uppercase font-bold">In-Salon Payment</span>
                      <h3 className="text-[#1A1A1A] font-serif text-xl mt-1 font-semibold">Pay at Counter</h3>
                      <p className="text-[#8A8A85] text-xs mt-2 leading-relaxed">
                        Pay with cash or card directly at the desk after receiving your services.
                      </p>
                    </div>
                    <div className="mt-6 flex justify-end w-full">
                      <span className={`text-xs uppercase tracking-widest font-bold ${booking.paymentMethod === 'cash' ? 'text-[#1B4D43]' : 'text-gray-400'}`}>
                        {booking.paymentMethod === 'cash' ? '✓ Selected' : 'Select'}
                      </span>
                    </div>
                  </button>

                  {/* Online Option */}
                  <button
                    type="button"
                    onClick={() => setBooking({ ...booking, paymentMethod: "online" })}
                    className={`text-left bg-white border-2 p-6 rounded-2xl transition-all duration-200 hover:shadow-md flex flex-col justify-between ${
                      booking.paymentMethod === "online" ? "border-[#1B4D43]" : "border-transparent"
                    }`}
                  >
                    <div>
                      <span className="text-[#1B4D43]/60 text-[10px] tracking-widest uppercase font-bold">Instant Secure Transfer</span>
                      <h3 className="text-[#1A1A1A] font-serif text-xl mt-1 font-semibold">Pay Online Now</h3>
                      <p className="text-[#8A8A85] text-xs mt-2 leading-relaxed">
                        Complete your booking online securely using Credit/Debit card, EasyPaisa, or JazzCash.
                      </p>
                    </div>
                    <div className="mt-6 flex justify-end w-full">
                      <span className={`text-xs uppercase tracking-widest font-bold ${booking.paymentMethod === 'online' ? 'text-[#1B4D43]' : 'text-gray-400'}`}>
                        {booking.paymentMethod === 'online' ? '✓ Selected' : 'Select'}
                      </span>
                    </div>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full bg-[#1B4D43] hover:bg-[#163e36] text-white py-4 rounded-full text-xs tracking-widest uppercase font-bold transition-colors duration-200 mt-4"
                >
                  Finalize Reservation
                </button>
              </motion.div>
            )}

            {/* STEP 6 — CONFIRMATION SUMMARY */}
            {step === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center gap-6 py-8"
              >
                {/* Gold checkmark */}
                <div className="w-16 h-16 rounded-full bg-[#C9A24D] flex items-center justify-center text-white shadow-[0_8px_30px_rgba(201,162,77,0.35)]">
                  <FiCheck size={32} />
                </div>

                <div>
                  <span className="text-[#C9A24D] text-[11px] tracking-[0.3em] uppercase font-bold block mb-1">Confirmed</span>
                  <h2 className="text-[#1A1A1A] font-serif text-3xl tracking-tight">Reservation Secured</h2>
                  <p className="text-[#8A8A85] text-sm max-w-sm mx-auto leading-relaxed mt-2">
                    Thank you. Your chair is reserved. A confirmation message has been dispatched.
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
                      {booking.date ? booking.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ""} at {booking.time}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#1B4D43]/10 pb-3">
                    <span className="text-[#8A8A85]">Payment Method</span>
                    <span className="text-[#1B4D43] uppercase text-xs tracking-wider font-bold">
                      {booking.paymentMethod === "online" ? "Online Payment" : "Cash on Arrival"}
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