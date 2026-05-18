import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-10 bg-white border-t border-clean-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-serif tracking-ultra uppercase mb-2">Happily For You</h2>
          <p className="text-[9px] uppercase tracking-ultra opacity-30 italic">Purely cinematic</p>
        </div>

        <div className="flex space-x-10">
          <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Instagram size={18} /></a>
          <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Facebook size={18} /></a>
          <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Twitter size={18} /></a>
          <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Mail size={18} /></a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-[9px] uppercase tracking-minimal mb-1 opacity-30">&copy; 2026 Happily For You</p>
          <div className="flex items-center justify-center md:justify-end gap-2 opacity-20">
            <div className="w-1 h-1 bg-clean-ink rounded-full" />
            <span className="text-[9px] uppercase tracking-ultra">Delhi & Chandigarh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
