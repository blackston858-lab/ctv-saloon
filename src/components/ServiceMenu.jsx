import { AnimatePresence, motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

// ── ServiceMenu ──
// The right-hand list for whichever category is active. Owns only
// the swap animation between categories — each row's own look is
// ServiceCard's job.

const ServiceMenu = ({ category }) => {
  return (
    <div className="lg:col-span-8 flex flex-col w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
          {category.items.map((item, idx) => (
            <ServiceCard key={idx} item={item} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServiceMenu;