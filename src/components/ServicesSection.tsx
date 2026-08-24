import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Clock, Check, ArrowRight, Shield, Star, Calendar } from 'lucide-react';

interface ServiceItem {
  id: string;
  category: 'bridal' | 'hair' | 'skin' | 'party';
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface ServicesSectionProps {
  onOpenBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const services: ServiceItem[] = [
    {
      id: 'bridal-signature',
      category: 'bridal',
      title: 'Signature Bridal Makeover',
      subtitle: 'By Master Artist Mary Mathew',
      price: 'Premium Bridal Quote',
      duration: '3.5 Hours',
      popular: true,
      description: 'The ultimate royal bridal transformation featuring natural long-lasting HD airbrush makeup, saree draping, hair sculpting, and fresh floral embellishment.',
      features: [
        'Custom natural & luminous skin finish',
        'HD Water-resistant & sweat-proof airbrush',
        'Complete hair styling & flower setting',
        'Traditional / Modern saree pleating & draping',
        'Lashes, touch-up kit & bridal jewelry setting',
      ],
    },
    {
      id: 'bridal-engagement',
      category: 'bridal',
      title: 'Engagement & Pre-Wedding Glam',
      subtitle: 'Radiant Pastel Elegance',
      price: 'Custom Package',
      duration: '2.5 Hours',
      description: 'Chic, soft-glam makeover tailored for engagements, sangeet ceremonies, and pre-wedding photo sessions.',
      features: [
        'Soft eye artistry & glowing skin base',
        'Textured hair waves or elegant updo',
        'Saree or lehenga draping assistance',
        'Premium long-wear lipstick & blush',
      ],
    },
    {
      id: 'bridal-reception',
      category: 'bridal',
      title: 'Reception & Evening Gala Look',
      subtitle: 'High-Glamour Red Carpet Style',
      price: 'Custom Quote',
      duration: '2.5 Hours',
      description: 'Striking evening reception look with defined eyes, sculpted contouring, and glossy red-carpet hairstyling.',
      features: [
        'High-contrast eye makeup & shimmer',
        'Sculpted cheekbones & luminous highlight',
        'Hollywood waves or voluminous updos',
      ],
    },
    {
      id: 'hair-keratin',
      category: 'hair',
      title: 'Keratin & Protein Smoothening',
      subtitle: 'Frizz-Free Silky Transformation',
      price: 'Special Spa Rates',
      duration: '3 Hours',
      popular: true,
      description: 'Revitalize damaged locks with intense keratin nourishment, resulting in mirror-shine, silky manageable hair.',
      features: [
        'Formaldehyde-free organic formula',
        'Restores elasticity & smooth shine',
        'Long-lasting results up to 4-6 months',
      ],
    },
    {
      id: 'hair-styling',
      category: 'hair',
      title: 'Creative Hair Sculpting & Spa',
      subtitle: 'Nourishing Therapy & Buns',
      price: 'Affordable Rates',
      duration: '1.5 Hours',
      description: 'Custom hair sculpting including braided crowns, jasmine adornments, and deep moisturizing hair spa.',
      features: [
        'Steam treatment & scalp massage',
        'Custom floral hairstyle crafting',
        'Heat-protection serum treatment',
      ],
    },
    {
      id: 'skin-hydrafacial',
      category: 'skin',
      title: 'Touch & Glow Hydra-Facial',
      subtitle: 'Deep Pore Cleansing & Gold Serum',
      price: 'Affordable Spa Rates',
      duration: '60 Mins',
      popular: true,
      description: 'Clinical-grade hydra-dermabrasion treatment that unclogs pores, infuses hyaluronic acid, and leaves skin glowing.',
      features: [
        'Pore extraction & dead skin exfoliation',
        '24K Gold serum mask infusion',
        'Instant glow with zero downtime',
      ],
    },
    {
      id: 'skin-dtan',
      category: 'skin',
      title: 'Gold Polishing & D-Tan Therapy',
      subtitle: 'Sun Tan Removal & Radiance',
      price: 'Special Rates',
      duration: '75 Mins',
      description: 'Effective skin brightening therapy targeting tan lines and uneven skin tone using gentle bio-actives.',
      features: [
        'Deep botanical D-Tan cleansing',
        'Skin polishing for smooth texture',
        'Hydrating vitamin-C mask',
      ],
    },
    {
      id: 'party-hd',
      category: 'party',
      title: 'HD Airbrush Party Makeover',
      subtitle: 'For Bridesmaids & Occasions',
      price: 'Affordable Rates',
      duration: '1.5 Hours',
      description: 'Flawless camera-ready party makeup for relatives, bridesmaids, and festive celebrations.',
      features: [
        'Lightweight HD foundation',
        'Hair styling of choice',
        'Saree pleating & accessory setting',
      ],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'bridal', label: 'Bridal Makeover' },
    { id: 'hair', label: 'Hair Styling & Care' },
    { id: 'skin', label: 'Skin Treatments' },
    { id: 'party', label: 'Party & Occasion' },
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden bg-[#0B0B0E]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1A22] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sculpted Perfection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Our Signature <span className="gold-gradient-text">Makeover & Spa Services</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Crafted with high-performance international products for long-lasting, natural beauty.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold shadow-lg shadow-[#D4AF37]/20'
                  : 'bg-[#14141A] text-zinc-400 border border-zinc-800 hover:border-[#D4AF37]/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`rounded-3xl p-7 flex flex-col justify-between glass-card glass-card-hover relative group ${
                  service.popular ? 'border-[#D4AF37]/50 shadow-xl shadow-[#D4AF37]/10' : 'border-zinc-800/80'
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black text-[10px] uppercase font-bold tracking-widest shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Top Info */}
                <div>
                  <div className="flex items-center justify-between text-xs text-[#D4AF37] font-semibold mb-2">
                    <span className="uppercase tracking-wider">{service.subtitle}</span>
                    <span className="flex items-center space-x-1 text-zinc-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-serif mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pt-3 border-t border-zinc-800/80 mb-6">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing & Action Button */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">Rates</span>
                    <span className="text-sm font-bold gold-gradient-text">{service.price}</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="px-4 py-2 rounded-xl bg-[#1A1A24] border border-[#D4AF37]/30 text-xs font-semibold text-zinc-200 group-hover:bg-[#D4AF37] group-hover:text-black transition-all flex items-center space-x-1.5 shadow-md"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
