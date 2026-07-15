import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ── Articles — each tied to an actual service category, not generic
// "blog post" filler, so this section earns its place on a salon site ──
const articles = [
  {
    title: "How to Maintain Your Beard Between Visits",
    img: "blog-image1.jfif",
  },
  {
    title: "Top 5 Hairstyles for Men in 2026",
    img: "blog-image2.jfif",
  },
  {
    title: "The Ultimate Guide to a Hot Towel Shave",
    img: "blog-image3.jfi.jfif",
  },
  {
    title: "Best Products for Healthy Hair",
    img: "hairstyling.jfif",
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