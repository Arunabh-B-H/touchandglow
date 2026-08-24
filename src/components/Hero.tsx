import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MessageCircle, MapPin, Star, ShieldCheck, Heart } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';


interface HeroProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleWhatsAppDirect = () => {
    const phone = '919846248245';
    const message = encodeURIComponent('Hello Mary Mathew & Touch & Glow Studio! I am looking for bridal makeover & beauty package details.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleGoogleMapsRedirect = () => {
    window.open('https://www.google.com/maps/place/Touch+and+Glow+Makeup+Studio+Pattom/data=!4m2!3m1!1s0x0:0x59467d1f6d9a6efe?sa=X&ved=1t:2428&ictx=111', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center">
      
      {/* Background Decorative Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#D4AF37]/15 via-rose-950/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#1A1A22] border border-[#D4AF37]/30 shadow-lg shadow-[#D4AF37]/5">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-300">
                Pattom, Trivandrum’s Premier Beauty Sanctuary
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Touch & Glow <br />
              <span className="gold-gradient-text italic font-normal">Sculpting Eternal</span> Elegance.
            </h1>

            {/* Description */}
            <p className="text-zinc-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              Step into a realm of bespoke bridal artistry, trending hair sculpture, and revitalizing skin therapies crafted by Trivandrum’s renowned master artist <strong className="text-white font-semibold">Mary Mathew</strong>. Where every bride’s dream is sculpted to perfection.
            </p>

            {/* Verified Ratings Counter Bar */}
            <div className="py-3 px-4 rounded-2xl bg-[#14141A]/70 border border-[#D4AF37]/20 backdrop-blur-md grid grid-cols-3 gap-3 max-w-xl">
              
              {/* Google Reviews */}
              <a
                href="https://www.google.com/maps/place/Touch+and+Glow+Makeup+Studio+Pattom/data=!4m2!3m1!1s0x0:0x59467d1f6d9a6efe?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center sm:items-start group hover:opacity-90 transition-opacity"
              >
                <div className="flex items-center space-x-1">
                  <span className="text-lg font-bold text-white">4.8</span>
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <span className="text-[11px] text-zinc-400">281+ Google Reviews</span>
              </a>

              {/* Justdial Ratings */}
              <div className="flex flex-col items-center sm:items-start border-x border-zinc-800/80 px-2">
                <div className="flex items-center space-x-1">
                  <span className="text-lg font-bold text-white">4.8</span>
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <span className="text-[11px] text-zinc-400">403+ Justdial Votes</span>
              </div>

              {/* Facebook Ratings */}
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center space-x-1">
                  <span className="text-lg font-bold text-white">5.0</span>
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <span className="text-[11px] text-zinc-400">100% Facebook Score</span>
              </div>

            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              
              {/* Book Appointment Modal Trigger */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onOpenBooking()}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E8C5C8] to-[#C5A059] text-black font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/50 transition-all flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </motion.button>

              {/* Direct WhatsApp Action */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleWhatsAppDirect}
                className="px-6 py-3.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-semibold text-xs uppercase tracking-widest hover:bg-emerald-900/80 hover:border-emerald-400 transition-all flex items-center space-x-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Inquiry</span>
              </motion.button>

              {/* Google Maps Redirect */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleGoogleMapsRedirect}
                className="px-5 py-3.5 rounded-full bg-[#1A1A22] border border-[#D4AF37]/30 text-zinc-300 font-semibold text-xs uppercase tracking-widest hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all flex items-center space-x-2"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Find On Google Maps</span>
              </motion.button>

            </div>

            {/* Quality Guarantee Badges */}
            <div className="pt-4 flex items-center space-x-6 text-xs text-zinc-400">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>100% Premium International Products</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Heart className="w-4 h-4 text-pink-400" />
                <span>Custom Natural Bridal Finish</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 3D Canvas Visualizer & Floating Feature Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* 3D Interactive Three.js Viewport */}
            <Hero3DCanvas />

            {/* Floating Luxury Preview Image Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="absolute bottom-6 left-4 right-4 sm:left-8 sm:right-8 glass-card rounded-2xl p-3 border border-[#D4AF37]/30 shadow-2xl flex items-center space-x-4"
            >
              <img
                src="/images/hero.jpg"
                alt="Bridal Makeover by Mary Mathew"
                className="w-16 h-16 rounded-xl object-cover border border-[#D4AF37]/40"
              />
              <div className="text-left flex-1">
                <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-semibold block">
                  Signature Bridal Makeover
                </span>
                <h4 className="text-sm font-bold text-white font-serif">
                  Natural & Long-Lasting Glamour
                </h4>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  Sculpted by lead artist Mary Mathew
                </p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
