import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-32 px-10 bg-white thin-border-b">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-0">
        <div className="w-full md:w-1/2 relative bg-clean-slate p-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="aspect-[3/4] w-full max-w-sm overflow-hidden border border-clean-border"
          >
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000"
              alt="The Photographer"
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 p-20 thin-border-l">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-ultra opacity-40 mb-6 block"
          >
            Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-normal leading-tight mb-10"
          >
            The vision behind <br /> <span className="italic">Happily For You</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8 text-clean-ink/70 font-light leading-relaxed text-[15px]"
          >
            <p>
              Our approach is purely cinematic, focusing on natural light and the raw, unscripted emotions that define your unique story.
            </p>
            <p>
              Based between Delhi and Chandigarh, we travel worldwide to capture refined celebrations with a timeless, editorial aesthetic.
            </p>
            
            <motion.a 
              href="#contact"
              whileHover={{ x: 5 }}
              className="inline-block mt-8 px-10 py-4 border border-clean-ink text-[11px] uppercase tracking-minimal text-clean-ink"
            >
              Book Your Date
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
