/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <AnimatePresence>
      <main className="min-h-screen selection:bg-luxury-gold selection:text-white">
        <Navbar />
        <Hero />
        
        {/* Cinematic Quote Section */}
        <section className="py-60 px-10 bg-white flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="max-w-4xl"
          >
            <span className="text-[10px] uppercase tracking-ultra opacity-30 mb-8 block">The Philosophy</span>
            <p className="text-3xl md:text-5xl font-serif font-normal leading-[1.3] mb-8 italic">
              "We often don’t remember days, we remember moments. Our art is dedicated to ensuring those moments never fade."
            </p>
          </motion.div>
        </section>

        <Portfolio />
        
        {/* Parallax Divider */}
        <section className="h-[60vh] relative overflow-hidden">
          <motion.div
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2070" 
              className="w-full h-[120%] object-cover brightness-75"
              alt="Atmosphere"
            />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center text-white pointer-events-none">
            <h2 className="text-4xl md:text-6xl font-serif tracking-[0.2em] uppercase opacity-80 font-light text-center px-6">
              Modern Elegance
            </h2>
          </div>
        </section>

        <About />
        <Contact />
        <Footer />
      </main>
    </AnimatePresence>
  );
}

