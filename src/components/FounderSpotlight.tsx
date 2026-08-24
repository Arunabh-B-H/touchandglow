import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, Heart, CheckCircle2, MessageCircle, Calendar, Quote } from 'lucide-react';

interface FounderSpotlightProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const FounderSpotlight: React.FC<FounderSpotlightProps> = ({ onOpenBooking }) => {
  const handleWhatsAppConsult = () => {
    const phone = '919846248245';
    const message = encodeURIComponent('Hello Mary Mathew! I would like to consult with you directly regarding my bridal makeover requirement.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const achievements = [
    'Trivandrum’s Top Rated Bridal Makeup Specialist',
    'Specialist in HD Airbrush & Natural Skin Finish',
    'Customized Saree Draping & Hair Sculpting',
    'Hundreds of Enchanted Brides Across Kerala',
  ];

  return (
    <section id="founder" className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-[#0B0B0E] via-[#121218] to-[#0B0B0E]">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1A22] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            <Award className="w-3.5 h-3.5" />
            <span>Master Bridal Makeup Artist & Founder</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Meet <span className="gold-gradient-text">Mary Mathew</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            The visionary behind Touch & Glow Makeup Studio Pattom, sculpting timeless elegance for every bride’s special day.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Founder Portrait Card with Interactive Hover Glow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl shadow-black/80">
              
              {/* Image */}
              <img
                src="/images/founder.jpg"
                alt="Mary Mathew Founder Touch and Glow Makeup Studio Pattom"
                className="w-full h-[480px] sm:h-[550px] object-cover object-top group-hover:scale-105 transition-transform duration-700"

              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-transparent to-transparent opacity-90" />

              {/* Founder Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-left space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Founder & Lead Artist
                </span>
                <h3 className="text-2xl font-bold text-white font-serif">
                  Mary Mathew
                </h3>
                <p className="text-xs text-zinc-300">
                  Touch & Glow Makeup Studio • Pattom, Trivandrum
                </p>
              </div>

            </div>

            {/* Experience Pill Floating Badge */}
            <div className="absolute -top-4 -right-4 px-4 py-3 rounded-2xl glass-card border border-[#D4AF37]/40 text-left shadow-xl hidden sm:block">
              <span className="text-2xl font-bold gold-gradient-text block leading-none">
                10+ Yrs
              </span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                Excellence in Bridal Artistry
              </span>
            </div>

          </motion.div>

          {/* Right Column: Story, Quote, and Direct Consultation CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            
            {/* Quote Box */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 relative overflow-hidden">
              <Quote className="w-10 h-10 text-[#D4AF37]/20 absolute top-4 right-4" />
              
              <p className="text-zinc-200 italic font-serif text-lg sm:text-xl leading-relaxed">
                &ldquo;Every bride dreams of a perfect wedding crafted to unveil her natural radiance. My passion at Touch & Glow is to sculpt an enchanting, long-lasting look that feels authentic, lightweight, and unforgettable on your most precious day.&rdquo;
              </p>
              
              <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold">
                  — Mary Mathew
                </span>
                {/* <span className="text-xs text-zinc-400">
                  Top Rated Bridal Artist in Kerala
                </span> */}
              </div>
            </div>

            {/* Biography Description */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Mary Mathew is a highly engaged and sought-after bridal makeup artist in Trivandrum. Her elegant and trending bridal make-up and hair styling techniques have created a line of brides eager to experience her magic at Touch & Glow Makeup Studio Pattom. Using top-tier international skincare and cosmetics, she ensures flawless coverage that withstands heat and celebration while keeping skin healthy and luminous.
            </p>

            {/* Achievement Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {achievements.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>



          </motion.div>

        </div>

      </div>
    </section>
  );
};
