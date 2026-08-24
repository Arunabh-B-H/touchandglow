import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette, ShieldCheck, Eye, Layers, RefreshCw } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';

export const Interactive3DShowcase: React.FC = () => {
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);

  const themes = [
    {
      id: 'gold',
      name: 'Royal Gold & Champagne',
      colorHex: '#D4AF37',
      desc: 'Warm luminous glow designed for traditional Kerala bridal elegance.',
    },
    {
      id: 'rose',
      name: 'Rose Silk & Blush',
      colorHex: '#E8C5C8',
      desc: 'Soft romantic pastels perfect for engagements & reception looks.',
    },
    {
      id: 'emerald',
      name: 'Midnight Emerald Glam',
      colorHex: '#10B981',
      desc: 'High-contrast striking glamour for grand evening receptions & red-carpet events.',
    },
  ];

  const premiumBrands = [
    { name: 'M.A.C Cosmetics', note: 'HD Airbrush & Longwear Finish' },
    { name: 'Huda Beauty', note: 'Luminous Eye Artistry' },
    { name: 'Bobbi Brown', note: 'Natural Skin Foundation' },
    { name: 'NARS Aesthetics', note: 'Radiant Blush & Glow' },
  ];

  return (
    <section id="3d-showcase" className="py-20 lg:py-28 relative overflow-hidden bg-[#0B0B0E]">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1A22] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Beauty Visualizer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Experience <span className="gold-gradient-text">3D Luxury Artistry</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Rotate the 3D studio gem element and customize lighting ambiance to preview our signature bridal palette spectrums.
          </p>
        </div>

        {/* 3D Visualizer Container Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#14141A]/60 border border-[#D4AF37]/25 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          
          {/* Left Column: Theme Customizer Controls */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                Color Palette Ambiance
              </span>
              <h3 className="text-2xl font-bold text-white font-serif">
                Select Your Glow Vibe
              </h3>
            </div>

            {/* Theme Selector Buttons */}
            <div className="space-y-3">
              {themes.map((theme, index) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveThemeIndex(index)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start space-x-4 ${
                    activeThemeIndex === index
                      ? 'bg-[#1A1A24] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/15'
                      : 'bg-[#101014]/60 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-full border border-white/20 flex-shrink-0 mt-0.5 shadow-md"
                    style={{ backgroundColor: theme.colorHex }}
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{theme.name}</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">{theme.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Brands Carousel Highlights */}
            <div className="pt-4 border-t border-zinc-800">
              <span className="text-xs text-zinc-400 uppercase tracking-widest block mb-3 font-medium">
                Certified Luxury Cosmetics Used:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {premiumBrands.map((brand, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-[#1A1A22] border border-zinc-800/80">
                    <span className="text-xs font-semibold text-white block">{brand.name}</span>
                    <span className="text-[10px] text-[#D4AF37]">{brand.note}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Viewport with selected palette */}
          <div className="lg:col-span-7 relative">
            <div className="rounded-2xl overflow-hidden bg-[#0E0E12] border border-[#D4AF37]/20 relative">
              
              <Hero3DCanvas themeColor={themes[activeThemeIndex].colorHex} />

              {/* Active Theme Info Overlay */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#D4AF37]/30 text-xs text-zinc-300 font-medium flex items-center space-x-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: themes[activeThemeIndex].colorHex }}
                />
                <span>Active 3D Glow: {themes[activeThemeIndex].name}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
