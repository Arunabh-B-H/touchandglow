import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X, Calendar, Heart } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'bridal' | 'studio' | 'skin' | 'hair';
  title: string;
  subtitle: string;
  image: string;
}

interface GallerySectionProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: 'b1',
      category: 'bridal',
      title: 'Traditional Kerala Bridal Makeover',
      subtitle: 'Sculpted by Lead Artist Mary Mathew',
      image: '/images/bridal/bridal_1.png',
    },
    {
      id: 'b2',
      category: 'bridal',
      title: 'Enchanting Royal Bridal Glamour',
      subtitle: 'Natural Radiant Wedding Makeup',
      image: '/images/bridal/bridal_2.png',
    },
    {
      id: 'b3',
      category: 'bridal',
      title: 'Luminous HD Airbrush Finish',
      subtitle: 'Sweat-Proof & Long-Wear Wedding Makeup',
      image: '/images/bridal/bridal_3.png',
    },
    {
      id: 'b4',
      category: 'bridal',
      title: 'Bespoke Bridal Hair & Saree Draping',
      subtitle: 'Jasmine Flower Setting & Jewelry Styling',
      image: '/images/bridal/bridal_4.png',
    },
    {
      id: 'b5',
      category: 'bridal',
      title: 'Signature Touch & Glow Bride',
      subtitle: 'Bespoke Pre-Wedding & Wedding Glow',
      image: '/images/bridal/bridal_5.png',
    },
    {
      id: 'g2',
      category: 'studio',
      title: 'Luxury Studio Vanity Ambience',
      subtitle: 'Pattom, Trivandrum Beauty Sanctuary',
      image: '/images/studio.jpg',
    },
    {
      id: 'g3',
      category: 'skin',
      title: '24K Gold Hydra-Facial Therapy',
      subtitle: 'Deep Hydration & Pore Refining',
      image: '/images/skincare.jpg',
    },
    {
      id: 'g4',
      category: 'hair',
      title: 'Silky Hollywood Waves & Styling',
      subtitle: 'Keratin Smoothening & Gloss',
      image: '/images/hair.jpg',
    },
  ];


  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-[#0B0B0E] via-[#121218] to-[#0B0B0E]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1A22] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Makeover Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Transformations <span className="gold-gradient-text">& Studio Showcase</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Explore authentic transformations and luxury studio moments at Touch & Glow Pattom.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Showcase' },
            { id: 'bridal', label: 'Bridal Makeovers' },
            { id: 'studio', label: 'Studio Ambience' },
            { id: 'skin', label: 'Skin Treatments' },
            { id: 'hair', label: 'Hair Care' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold shadow-md'
                  : 'bg-[#14141A] text-zinc-400 border border-zinc-800 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer border border-[#D4AF37]/20 shadow-xl h-96 bg-[#121218]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full glass-card rounded-3xl overflow-hidden border border-[#D4AF37]/40 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 text-white hover:text-[#D4AF37] border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-7 bg-[#0E0E12] flex items-center justify-center p-2">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-80 md:h-[480px] object-contain max-h-[80vh]"
                  />
                </div>


                <div className="md:col-span-5 p-8 text-left flex flex-col justify-between bg-[#14141A]">
                  <div className="space-y-4">
                    <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                      Touch & Glow Portfolio
                    </span>
                    <h3 className="text-2xl font-bold text-white font-serif">
                      {selectedImage.title}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      {selectedImage.subtitle}
                    </p>
                    <p className="text-xs text-zinc-300 leading-relaxed pt-2 border-t border-zinc-800">
                      Created at Touch & Glow Makeup Studio Pattom Trivandrum using top tier HD makeup & luxury hair sculpting tools.
                    </p>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => {
                        const title = selectedImage.title;
                        setSelectedImage(null);
                        onOpenBooking(title);
                      }}
                      className="w-full py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Similar Makeover</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
