import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FounderSpotlight } from './components/FounderSpotlight';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  const handleFloatingWhatsApp = () => {
    const phone = '919846248245';
    const message = encodeURIComponent('Hello Touch & Glow Studio Pattom! I am interested in booking an appointment.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-zinc-100 font-sans relative selection:bg-[#D4AF37] selection:text-black">
      
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <FounderSpotlight onOpenBooking={handleOpenBooking} />
        <ServicesSection onOpenBooking={handleOpenBooking} />
        <GallerySection onOpenBooking={handleOpenBooking} />
        <ReviewsSection />
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
      />

      {/* Sticky Bottom Floating WhatsApp CTA */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleFloatingWhatsApp}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-500 text-black shadow-2xl shadow-emerald-500/50 hover:bg-emerald-400 transition-all flex items-center justify-center group"
        title="Chat on WhatsApp (+91 98462 48245)"
      >
        <MessageCircle className="w-6 h-6 fill-black" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-bold uppercase tracking-widest pl-0 group-hover:pl-2">
          WhatsApp Us
        </span>
      </motion.button>

    </div>
  );
}

export default App;
