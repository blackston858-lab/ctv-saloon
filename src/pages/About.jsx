import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { LuLeaf, LuRuler, LuCoffee } from "react-icons/lu";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── Reusable scroll-reveal wrapper — every section fades up once,
// the moment it enters view, instead of all loading flat on page-load ──
const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const stylists = [
  {
    name: "Zain Malik",
    role: "Founder & Master Stylist",
    bio: "12 years across Europe and Asia, then back to Islamabad to build the studio he wished existed when he was learning the trade.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&fit=crop&q=80",
  },
  {
    name: "Sara Khan",
    role: "Lead Skin Aesthetician",
    bio: "Trained in clinical skincare in London — now reads skin like a map before recommending a single product.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&fit=crop&q=80",
  },
  {
    name: "Bilal Ahmed",
    role: "Senior Grooming Specialist",
    bio: "Our resident perfectionist with a razor. His hot-towel pre-shave ritual has its own waiting list.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&fit=crop&q=80",
  },
  {
    name: "Amara Jamil",
    role: "Color Director",
    bio: "Believes the best colour work is the kind nobody notices as 'done' — just looks like your hair, improved.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&fit=crop&q=80",
  },
];

const studioPhotos = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&fit=crop&q=80",
];

const values = [
  { icon: <LuLeaf size={20} />, title: "What goes on you", desc: "Botanical extracts, real essential oils, premium clay. Nothing with a name you can't pronounce." },
  { icon: <LuRuler size={20} />, title: "How we look at you", desc: "Facial structure, hair density, skin condition — read first, every single visit, before a single tool touches you." },
  { icon: <LuCoffee size={20} />, title: "How the room feels", desc: "One chair, one client, no rush. Tea is offered before anything else happens." },
];

const About = () => {
  return (
    <div className="bg-white min-h-screen text-[#1A1A1A] overflow-hidden">
      <Navbar />

      {/* ── Hero — opens on the studio's actual founding fact, not a slogan ── */}
      <section className="relative pt-32 md:pt-40 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-[#1B4D43] text-[11px] tracking-[0.3em] uppercase font-bold block mb-4">
              Est. 2014, Islamabad
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-serif text-4xl md:text-6xl tracking-tight leading-tight max-w-2xl">
              We built the studio<br />
              <span className="italic text-[#1B4D43]">we wished existed.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-[#8A8A85] text-sm md:text-base max-w-md leading-relaxed mt-6">
              Not another assembly-line barbershop. A slower, more deliberate
              approach to how men are cared for — one chair, one client, one
              session at a time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Founder note — pinned card, slides in from the left as a
            distinct gesture, separate from the surrounding fade-ups ── */}
      <section className="pb-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
                Why we started <span className="italic text-[#1B4D43]">this way</span>
              </h2>
            </Reveal>

            <motion.div
              initial={{ opacity: 0, x: -40, rotate: -2 }}
              whileInView={{ opacity: 1, x: 0, rotate: -0.6 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#F7F4ED] rounded-2xl p-7 md:p-8 max-w-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            >
              <span className="absolute -top-2 left-8 w-3 h-3 rounded-full bg-[#C9A24D] shadow-sm" />
              <p className="font-serif italic text-lg leading-relaxed">
                "I trained in shops where you were on to the next head before
                the last one was even out the chair. Good work doesn't happen
                like that. I wanted a room where the only thing on the
                schedule is the person sitting in front of you."
              </p>
              <div className="mt-5 text-xs uppercase tracking-widest text-[#1B4D43] font-bold">
                Zain Malik — Founder
              </div>
            </motion.div>

            <Reveal delay={0.1}>
              <p className="text-[#8A8A85] text-sm leading-relaxed max-w-xl">
                Every chair is its own room, not a row. We spend the first few
                minutes of any visit just looking — at growth pattern, skin
                tone, how you actually move through your day — before a
                single decision gets made.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-5 overflow-hidden rounded-2xl h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&fit=crop&q=80"
              alt="Founder Zain Malik"
              className="w-full h-full object-cover"
            />
          </Reveal>

        </div>
      </section>

      {/* ── Values — three things, staggered in as a row, not numbered
            since they're parallel ideas, not a sequence ── */}
      <section className="py-20 bg-[#1B4D43]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-3"
              >
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-[#C9A24D]">
                  {v.icon}
                </div>
                <h3 className="font-serif text-lg text-white">{v.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team — cards stagger in one after another as you scroll ── */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="mb-14 text-center">
          <span className="text-[#1B4D43] text-[11px] tracking-[0.3em] uppercase font-bold block mb-3">
            Behind the Chairs
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight">
            The people <span className="italic text-[#1B4D43]">you'll meet</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {stylists.map((stylist, i) => (
            <motion.div
              key={stylist.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-5 bg-[#F7F4ED] rounded-2xl p-6 items-start"
            >
              <div className="w-28 h-28 shrink-0 overflow-hidden rounded-xl">
                <img src={stylist.image} alt={stylist.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif text-xl tracking-wide">{stylist.name}</h3>
                  <a href="https://instagram.com" className="text-[#1B4D43]/50 hover:text-[#1B4D43] transition-colors shrink-0">
                    <FaInstagram size={16} />
                  </a>
                </div>
                <span className="text-[#1B4D43] text-[11px] tracking-widest uppercase font-bold mt-0.5 block">
                  {stylist.role}
                </span>
                <p className="text-[#8A8A85] text-[13px] mt-2.5 leading-relaxed">{stylist.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Studio photos — slight scale-in, one beat after another ── */}
      <section className="py-20 bg-[#F7F4ED]">
        <Reveal className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
          <span className="text-[#1B4D43] text-[11px] tracking-[0.3em] uppercase font-bold block mb-3">
            Inside the Studio
          </span>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
            A room built to <span className="italic text-[#1B4D43]">slow down in</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-6 md:px-12 max-w-7xl mx-auto">
          {studioPhotos.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden rounded-2xl h-64 group"
            >
              <img
                src={img}
                alt={`Studio interior ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;