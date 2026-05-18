import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2069"
          alt="Luxury Wedding"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="block text-[11px] uppercase tracking-ultra mb-6 font-serif italic"
        >
          Est. 2020 — Delhi & Chandigarh
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif font-normal mb-10 leading-[0.95]"
        >
          Timeless Love,<br /> 
          <span className="italic">Captured in Motion.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex justify-center gap-10"
        >
          <a
            href="#portfolio"
            className="text-[11px] uppercase tracking-minimal border-b border-white pb-1 transition-opacity hover:opacity-60"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="text-[11px] uppercase tracking-minimal opacity-60 hover:opacity-100"
          >
            Inquire Now
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest mb-4 opacity-70">Scroll</span>
        <ArrowDown size={16} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
