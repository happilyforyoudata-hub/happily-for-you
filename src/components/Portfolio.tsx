import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const filters = [
  { id: "original", label: "Original", class: "" },
  { id: "vintage", label: "Vintage Warmth", class: "sepia-[0.3] saturate-[0.8] hue-rotate-[10deg] brightness-[1.1] contrast-[0.9]" },
  { id: "muted", label: "Muted Tones", class: "saturate-[0.4] contrast-[1.1] brightness-[0.95]" },
  { id: "soft", label: "Soft Focus", class: "blur-[1.5px] brightness-[1.05] contrast-[0.85] scale-[1.02]" },
];

const photos = [
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070",
    title: "Siena Sunset",
    category: "Italy",
    span: "col-span-2 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=2070",
    title: "Black Tie Bliss",
    category: "London",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1522673607200-164883eeca48?auto=format&fit=crop&q=80&w=2070",
    title: "The Vows",
    category: "France",
    span: "col-span-1 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=2070",
    title: "Eternal Dance",
    category: "New York",
    span: "col-span-2 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1465495910483-fb415aa7997a?auto=format&fit=crop&q=80&w=2070",
    title: "First Light",
    category: "Scotland",
    span: "col-span-1 row-span-1"
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <section id="portfolio" className="py-32 px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-ultra opacity-40 mb-4 block"
            >
              The Collection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif font-normal leading-tight"
            >
              Quiet moments <br /> <span className="italic">defined</span>
            </motion.h2>
          </div>
          <div className="flex flex-col items-end gap-6">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[13px] text-clean-ink/60 font-light max-w-xs leading-relaxed text-right"
            >
              We believe in the quiet moments between the grand gestures. Raw, unscripted emotions captured in natural light.
            </motion.p>
          </div>
        </div>

        {/* Filter Selection UI */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-12 border-b border-clean-border pb-6">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter)}
              className={`text-[9px] uppercase tracking-ultra transition-all relative pb-2 ${
                activeFilter.id === filter.id ? "opacity-100" : "opacity-30 hover:opacity-100"
              }`}
            >
              {filter.label}
              {activeFilter.id === filter.id && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-clean-ink"
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group border border-clean-border ${
                photo.span === "col-span-2 row-span-1" ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <motion.img
                key={activeFilter.id}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                src={photo.url}
                alt={photo.title}
                className={`h-full w-full object-cover transition-all duration-1000 group-hover:scale-105 ${activeFilter.class}`}
              />
              <div className="absolute inset-0 bg-clean-ink opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-5 border border-clean-ink/20 hover:border-clean-ink transition-all uppercase text-[10px] tracking-[0.4em]"
          >
            View More Full Stories
          </motion.button>
        </div>
      </div>
    </section>
  );
}
