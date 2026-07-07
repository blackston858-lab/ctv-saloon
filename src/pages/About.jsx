import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { LuLeaf, LuRuler, LuCoffee } from "react-icons/lu";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Booking from "../components/Booking";
import BookingBanner from "../components/BookingBanner";

const stylists = [
  {
    name: "Zain Malik",
    role: "Founder & Master Stylist",
    bio: "12 years of experience across Europe and Asia.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  },
  {
    name: "Sara Khan",
    role: "Skin Specialist",
    bio: "Expert in clinical skincare and treatments.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500",
  },
];

const values = [
  {
    icon: <LuLeaf size={18} />,
    title: "Quality Products",
    desc: "We use premium and safe products only.",
  },
  {
    icon: <LuRuler size={18} />,
    title: "Personal Approach",
    desc: "Every client is treated individually.",
  },
  {
    icon: <LuCoffee size={18} />,
    title: "Relaxing Space",
    desc: "Comfortable and calm environment.",
  },
];

const About = () => {
  return (
    <div className="bg-white text-[#1A1A1A]">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif">
          About Our Studio
        </h1>
        <p className="text-gray-500 mt-4">
          A modern salon focused on quality and comfort.
        </p>
      </section>

      {/* FOUNDER */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800"
          className="rounded-xl w-full h-[350px] object-cover"
        />

        <div>
          <h2 className="text-2xl font-serif mb-4">
            Why we started
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We wanted to build a place where every client gets time,
            attention, and proper care — not a rushed service.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#1B4D43] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {values.map((v) => (
            <div key={v.title}>
              <div className="mb-3 flex justify-center">{v.icon}</div>
              <h3 className="font-semibold">{v.title}</h3>
              <p className="text-white/70 text-sm mt-2">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-center mb-12">
          Our Team
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {stylists.map((s) => (
            <div
              key={s.name}
              className="flex gap-4 p-5 border rounded-xl"
            >
              <img
                src={s.image}
                className="w-24 h-24 rounded-lg object-cover"
              />

              <div>
                <h3 className="font-semibold">{s.name}</h3>
                <p className="text-[#1B4D43] text-xs">{s.role}</p>
                <p className="text-gray-500 text-sm mt-1">
                  {s.bio}
                </p>

                <FaInstagram className="mt-2 text-gray-400 cursor-pointer hover:text-[#1B4D43]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default About;