import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageCircle, Menu, X, Star, Calendar } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { TouchGlowLogo } from './TouchGlowLogo';



interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Founder', href: '#founder' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Find Us', href: '#location' },
  ];


  const handleWhatsAppDirect = () => {
    const phone = '919846248245';
    const message = encodeURIComponent('Hello Touch & Glow Makeup Studio Pattom! I would like to inquire about bridal & beauty makeover appointments.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleInstagramDirect = () => {
    window.open('https://www.instagram.com/touchandglowmakeupstudio/?hl=en', '_blank');
  };


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B0B0E]/85 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-2xl shadow-black/60'
          : 'bg-gradient-to-b from-[#0B0B0E]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Subtitle */}
          <a href="#hero" className="group flex items-center space-x-3 text-left">
            <TouchGlowLogo className="w-11 h-11" />
            <div>
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider gold-gradient-text block leading-none">
                TOUCH & GLOW
              </span>
              <span className="text-[10px] tracking-[0.25em] text-zinc-400 font-medium uppercase mt-0.5 block">
                Makeup Studio • Pattom
              </span>
            </div>
          </a>


          {/* Center Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-zinc-300 hover:text-[#D4AF37] transition-colors relative py-1 group font-medium"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Google Rating Pill */}
              {/* <a
                href="https://www.google.com/maps/place/Touch+and+Glow+Makeup+Studio+Pattom/data=!4m2!3m1!1s0x0:0x59467d1f6d9a6efe?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#1A1A22] border border-[#D4AF37]/20 text-xs text-zinc-300 hover:border-[#D4AF37]/50 transition-all"
              >

                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="font-semibold text-white">4.8</span>
                <span className="text-zinc-400">(281+ Google Reviews)</span>
              </a> */}

            {/* WhatsApp Direct */}
            <button
              onClick={handleWhatsAppDirect}
              className="p-2 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/60 hover:border-emerald-400 transition-all duration-300 group relative"
              title="Quick WhatsApp Inquiry"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            {/* Instagram Direct */}
            <button
              onClick={handleInstagramDirect}
              className="p-2 rounded-full bg-pink-950/40 border border-pink-500/30 text-pink-300 hover:bg-pink-900/50 hover:border-pink-400 transition-all duration-300"
              title="Visit Instagram Page"
            >
              <InstagramIcon className="w-4 h-4" />
            </button>

            {/* Main Booking Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full font-medium text-xs tracking-wider uppercase bg-gradient-to-r from-[#D4AF37] via-[#E8C5C8] to-[#C5A059] text-black shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 transition-all duration-300 flex items-center space-x-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="font-semibold">Book Appointment</span>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#14141A] text-zinc-300 hover:text-[#D4AF37] border border-[#D4AF37]/20"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B0B0E]/95 border-b border-[#D4AF37]/30 backdrop-blur-xl"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-widest text-zinc-200 hover:text-[#D4AF37] transition-colors font-medium py-1"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-zinc-800/80 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-semibold text-xs uppercase tracking-widest shadow-lg flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment Now</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="py-2.5 px-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-medium flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    onClick={handleInstagramDirect}
                    className="py-2.5 px-3 rounded-xl bg-pink-950/60 border border-pink-500/40 text-pink-300 text-xs font-medium flex items-center justify-center space-x-2"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
