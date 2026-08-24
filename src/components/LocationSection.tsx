import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = 'https://www.google.com/maps/place/Touch+and+Glow+Makeup+Studio+Pattom/data=!4m2!3m1!1s0x0:0x59467d1f6d9a6efe?sa=X&ved=1t:2428&ictx=111';

  const handleGetDirections = () => {
    window.open(googleMapsUrl, '_blank');
  };

  const handleCallUs = () => {
    window.open('tel:09846248245', '_self');
  };

  const handleWhatsApp = () => {
    const phone = '919846248245';
    const message = encodeURIComponent('Hello Touch & Glow Studio Pattom! I would like to book an appointment.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="location" className="py-20 lg:py-24 relative overflow-hidden bg-[#0B0B0E]">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two Contact / Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Visit Our Studio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/30 flex flex-col justify-between items-center text-center space-y-6 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-2xl group cursor-pointer"
            onClick={handleGetDirections}
          >
            <div className="space-y-4 flex flex-col items-center w-full">
              {/* Gold Pin Icon Header */}
              <div className="w-14 h-14 rounded-full bg-[#1A1A24] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-lg shadow-[#D4AF37]/10 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-white font-serif">
                Visit Our Studio
              </h3>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-zinc-300 max-w-sm leading-relaxed">
                Experience our premium services in person. Click card for directions.
              </p>

              {/* Animated Google Map Viewport */}
              <div
                className="w-full h-44 rounded-2xl overflow-hidden relative border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all duration-500 bg-[#121218] shadow-inner my-2 flex items-center justify-center"
              >
                {/* Dark Map Grid Background */}
                <div
                  className="absolute inset-0 opacity-40 bg-cover bg-center filter contrast-125"
                  style={{
                    backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px), radial-gradient(#27272A 1px, #121218 1px)`,
                    backgroundSize: `20px 20px, 40px 40px`,
                    backgroundPosition: `0 0, 10px 10px`,
                  }}
                />

                {/* Animated Simulated Road Network SVG */}
                <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M -50 100 Q 150 20 350 120 T 550 80" stroke="#D4AF37" strokeWidth="3" fill="none" strokeDasharray="8 6" className="animate-pulse" />
                  <path d="M 120 -20 Q 180 100 220 200" stroke="#52525B" strokeWidth="2" fill="none" />
                  <path d="M 220 200 L 400 220" stroke="#52525B" strokeWidth="2" fill="none" />
                </svg>

                {/* Pulse Radar Circle around Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-14 h-14 rounded-full bg-[#D4AF37]/30 animate-ping" />
                    <span className="absolute w-20 h-20 rounded-full bg-[#D4AF37]/15 animate-pulse" />
                    
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#AA820A] to-[#FFF5EE] p-[2px] shadow-xl shadow-[#D4AF37]/50 relative z-10">
                      <div className="w-full h-full bg-[#0B0B0E] rounded-full flex items-center justify-center">
                        <Navigation className="w-5 h-5 text-[#D4AF37] transform rotate-45" />
                      </div>
                    </div>
                  </div>

                  {/* Studio Pin Badge */}
                  <div className="mt-2 px-3.5 py-1 rounded-full bg-black/90 border border-[#D4AF37]/60 backdrop-blur-md shadow-lg flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-white tracking-wider">
                      Touch & Glow • Pattom
                    </span>
                  </div>
                </div>
              </div>

              {/* Address detail */}
              <div className="text-xs text-zinc-300 font-medium pt-1">
                Kavallor Konam lane, Marappalam Rd, Pattom, Trivandrum 695004
              </div>
            </div>

          </motion.div>

          {/* Card 2: Book an Appointment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/30 flex flex-col justify-between items-center text-center space-y-6 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-2xl group"
          >
            <div className="space-y-6 flex flex-col items-center w-full my-auto">
              {/* Gold Phone Icon Header */}
              <div className="w-14 h-14 rounded-full bg-[#1A1A24] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-lg shadow-[#D4AF37]/10 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-white font-serif">
                Book an Appointment
              </h3>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-zinc-300 max-w-sm leading-relaxed px-2">
                Call us directly or send a message on WhatsApp to reserve your spot.
              </p>
            </div>

            {/* CALL US and WHATSAPP Buttons Side-by-Side */}
            <div className="w-full pt-4 grid grid-cols-2 gap-3 max-w-xs">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCallUs}
                className="w-full py-3.5 px-4 rounded-xl bg-[#C5A059] hover:bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg"
              >
                CALL US
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-1.5 shadow-lg shadow-emerald-950/50"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>WHATSAPP</span>
              </motion.button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
