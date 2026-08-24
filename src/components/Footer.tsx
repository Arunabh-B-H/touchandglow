import React from 'react';
import { Sparkles, ArrowUp, Star } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { TouchGlowLogo } from './TouchGlowLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoogleRedirect = () => {
    window.open('https://www.google.com/maps/place/Touch+and+Glow+Makeup+Studio+Pattom/data=!4m2!3m1!1s0x0:0x59467d1f6d9a6efe?sa=X&ved=1t:2428&ictx=111', '_blank');
  };


  return (
    <footer className="bg-[#08080A] border-t border-zinc-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Footer Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-left pb-12 border-b border-zinc-800/60">
          
          {/* Brand Info (Col 1-6) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <TouchGlowLogo className="w-12 h-12" />
              <h3 className="text-2xl font-bold font-serif flex items-center space-x-2">
                <span className="gold-gradient-text">Touch & Glow</span>
                <span className="text-white font-normal">Makeup Studio</span>
              </h3>
            </div>


            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              Redefining luxury beauty and aesthetic experiences in Pattom, Trivandrum. Your sanctuary for perfection led by master artist Mary Mathew.
            </p>

            <div className="text-xs text-[#D4AF37] font-medium flex items-center space-x-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Monday – Sunday: 9:30 AM – 5:30 PM</span>
            </div>

            <div className="pt-1">
              <button
                onClick={handleGoogleRedirect}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#14141A] border border-[#D4AF37]/30 text-xs text-amber-400 hover:border-[#D4AF37] transition-all"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>4.8 ★ Google Rated (281+ Reviews)</span>
              </button>
            </div>

          </div>

          {/* Quick Links (Col 7-9) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-serif uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#hero" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#founder" className="hover:text-[#D4AF37] transition-colors">About Mary Mathew</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Reviews</a></li>
              <li><a href="#location" className="hover:text-[#D4AF37] transition-colors">Find Us</a></li>
            </ul>
          </div>

          {/* Connect (Col 10-12) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-serif uppercase tracking-wider">
              Connect
            </h4>
            
            <div className="flex items-center space-x-3 pt-1">
              {/* Instagram Button */}
              <button
                onClick={() => window.open('https://www.instagram.com/touchandglowmakeupstudio/?hl=en', '_blank')}

                className="w-10 h-10 rounded-full bg-[#181820] border border-zinc-700/80 text-zinc-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all flex items-center justify-center shadow-md"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </button>

              {/* Facebook Button */}
              <button
                onClick={handleGoogleRedirect}
                className="w-10 h-10 rounded-full bg-[#181820] border border-zinc-700/80 text-zinc-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all flex items-center justify-center font-bold text-sm shadow-md"
                title="Facebook"
              >
                f
              </button>
            </div>

            <p className="text-[11px] text-zinc-500 pt-2">
              Pattom, Thiruvananthapuram, Kerala 695004
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Touch & Glow Makeup Studio Pattom. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-[#14141A] border border-zinc-800 text-zinc-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all flex items-center space-x-1.5"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
