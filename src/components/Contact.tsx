import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-10 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[10px] uppercase tracking-ultra opacity-40 mb-6 block"
        >
          Connect
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-serif font-normal mb-16"
        >
          Tell us your <span className="italic">story</span>
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-ultra opacity-30">Full Name</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-clean-ink/10 py-3 focus:border-clean-ink outline-none transition-colors font-light text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-ultra opacity-30">Email Address</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-clean-ink/10 py-3 focus:border-clean-ink outline-none transition-colors font-light text-sm"
            />
          </div>
          <div className="md:col-span-2 space-y-2 pt-4">
            <label className="text-[9px] uppercase tracking-ultra opacity-30">Message</label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-clean-ink/10 py-3 focus:border-clean-ink outline-none transition-colors font-light text-sm resize-none"
            />
          </div>
          
          <div className="md:col-span-2 text-center pt-10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-16 py-4 border border-clean-ink text-[11px] uppercase tracking-minimal text-clean-ink"
            >
              Send Inquiry
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
