import { useState } from "react";
import { Link } from "react-router";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#1B4D43] text-white/60 text-sm pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-16">

          {/* ── Brand ── */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link to="/" className="flex items-baseline gap-1 self-start">
              <span className="text-white text-2xl font-serif tracking-wide">Maison</span>
              <span className="text-[#C9A24D] text-2xl font-serif italic tracking-wide">Noir</span>
            </Link>
            <p className="text-white/50 text-xs leading-relaxed max-w-sm">
              A private studio dedicated to the craft of unhurried grooming —
              classical barbering technique paired with bespoke skin therapy,
              in a warm, refined sanctuary.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {[
                { icon: <FaInstagram size={14} />, href: "https://instagram.com" },
                { icon: <FaFacebookF size={14} />, href: "https://facebook.com" },
                { icon: <FaPinterestP size={14} />, href: "https://pinterest.com" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#1B4D43] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Hours ── */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-white text-[11px] tracking-[0.25em] uppercase font-bold">
              Studio Hours
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-white/55">
              <li className="flex justify-between gap-4">
                <span>Mon — Sat</span>
                <span className="text-white/85 font-medium">11 AM — 9 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-white/85 font-medium">12 PM — 8 PM</span>
              </li>
              <li className="border-t border-white/10 pt-3 mt-1 text-[#C9A24D]/80 italic text-[11px]">
                Appointments highly recommended
              </li>
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-white text-[11px] tracking-[0.25em] uppercase font-bold">
              Visit Us
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-white/55">
              <p className="leading-relaxed">House 12-A, Street 33,<br />F-7/1, Islamabad</p>
              <a href="tel:+925112345678" className="text-white/85 hover:text-white transition-colors">+92 51 123 4567</a>
              <a href="mailto:appointments@maisonnoir.pk" className="text-white/85 hover:text-white transition-colors break-all">
                appointments@maisonnoir.pk
              </a>
            </div>
          </div>

          {/* ── Newsletter ── */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-white text-[11px] tracking-[0.25em] uppercase font-bold">
              Maison Club
            </h4>
            <p className="text-xs text-white/50 leading-relaxed">
              Styling advice, studio announcements, and early access to
              calendar openings — once a month, never more.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3 mt-1">
                <FiCheck className="text-[#C9A24D]" size={15} />
                <span className="text-white/80 text-xs">You're on the list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 mt-1">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 bg-white/10 border-2 border-transparent focus:border-white/30 rounded-full px-4 py-2.5 text-xs text-white placeholder-white/35 outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-[#F7F4ED] text-[#1B4D43] text-[11px] font-bold uppercase tracking-wide px-5 rounded-full transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Maison Noir. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;