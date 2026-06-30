import { motion } from "framer-motion";
import { Link } from "react-router";

// ── Articles — each tied to an actual service category, not generic
// "blog post" filler, so this section earns its place on a salon site ──
const articles = [
  {
    title: "How to Maintain Your Beard Between Visits",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&fit=crop&q=80",
  },
  {
    title: "Top 5 Hairstyles for Men in 2026",
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&fit=crop&q=80",
  },
  {
    title: "The Ultimate Guide to a Hot Towel Shave",
    img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&fit=crop&q=80",
  },
  {
    title: "Best Products for Healthy Hair",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&fit=crop&q=80",
  },
];

const GroomingInsights = () => {
  return (
    <section className="py-20 bg-[#1B4D43]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-white text-3xl md:text-4xl tracking-tight leading-snug">
            Expert Grooming Tips, Style Trends,<br className="hidden md:block" />
            and Barbering Insights
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl overflow-hidden group"
            >
              {/* Image */}
              <div className="h-36 overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-[#1A1A1A] font-serif text-sm leading-snug mb-3 min-h-[40px]">
                  {a.title}
                </h3>
                <Link
                  to="/blog"
                  className="text-[#1B4D43] text-[11px] tracking-widest uppercase font-bold hover:opacity-70 transition-opacity"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GroomingInsights;