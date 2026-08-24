import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';


interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialService }) => {
  const [selectedService, setSelectedService] = useState<string>('Signature Bridal Makeover');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>(' Morning (9:30 AM - 1:00 PM)');
  const [artistPreference, setArtistPreference] = useState<string>('Mary Mathew (Founder & Lead Artist)');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [copiedAlert, setCopiedAlert] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  const serviceOptions = [
    'Signature Bridal Makeover by Mary Mathew',
    'Engagement & Pre-Wedding Glam',
    'Reception & Evening Gala Look',
    'Keratin & Hair Smoothening',
    'Creative Hair Sculpting & Spa',
    'Touch & Glow Hydra-Facial',
    'Gold Polishing & D-Tan Therapy',
    'HD Airbrush Party Makeover',
  ];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = '919846248245';
    const text = `*New Appointment Inquiry - Touch & Glow Pattom*%0A%0A` +
      `*Client Name:* ${clientName || 'Valued Client'}%0A` +
      `*Contact Phone:* ${clientPhone || 'Not provided'}%0A` +
      `*Service Requested:* ${selectedService}%0A` +
      `*Preferred Date:* ${preferredDate || 'To be confirmed'}%0A` +
      `*Preferred Slot:* ${preferredTime}%0A` +
      `*Lead Artist Preference:* ${artistPreference}%0A` +
      `*Additional Details:* ${notes || 'None'}`;

    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    onClose();
  };

  const handleInstagramDM = () => {
    const textSummary = `Hi Touch & Glow! I'd like to book ${selectedService} on ${preferredDate || 'upcoming date'}. Name: ${clientName || 'Client'}.`;
    navigator.clipboard.writeText(textSummary);
    setCopiedAlert(true);
    setTimeout(() => setCopiedAlert(false), 3000);
    window.open('https://www.instagram.com/touchandglowmakeupstudio/?hl=en', '_blank');
  };


  const handleDirectCall = () => {
    window.open('tel:09846248245', '_self');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="w-full max-w-2xl glass-card rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#1A1A24] text-zinc-400 hover:text-white border border-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-left mb-6 space-y-1">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#1A1A22] border border-[#D4AF37]/30 text-[11px] text-[#D4AF37] font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Appointment Booking</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
              Book Your <span className="gold-gradient-text">Makeover Session</span>
            </h3>
            <p className="text-xs text-zinc-400">
              Touch & Glow Makeup Studio Pattom • Open Mon - Sun: 9:30 AM - 5:30 PM
            </p>

          </div>

          {/* Form */}
          <form onSubmit={handleSendWhatsApp} className="space-y-4 text-left">
            
            {/* Service Selection */}
            <div>
              <label className="text-xs uppercase tracking-widest text-zinc-300 font-semibold block mb-1.5">
                Select Service Package
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#101015] border border-zinc-800 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time Slot Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-zinc-300 font-semibold block mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#101015] border border-zinc-800 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-zinc-300 font-semibold block mb-1.5">
                  Time Slot
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#101015] border border-zinc-800 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                >
                  <option value="Morning (9:30 AM - 1:00 PM)">Morning (9:30 AM - 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 4:30 PM)">Afternoon (1:00 PM - 4:30 PM)</option>
                  <option value="Evening (4:30 PM - 7:30 PM)">Evening (4:30 PM - 7:30 PM)</option>
                </select>
              </div>
            </div>

            {/* Artist Preference */}
            <div>
              <label className="text-xs uppercase tracking-widest text-zinc-300 font-semibold block mb-1.5">
                Artist Preference
              </label>
              <select
                value={artistPreference}
                onChange={(e) => setArtistPreference(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#101015] border border-zinc-800 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
              >
                <option value="Mary Mathew (Founder & Lead Artist)">Mary Mathew (Founder & Lead Artist)</option>
                <option value="Senior Studio Styling Team">Senior Studio Styling Team</option>
              </select>
            </div>

            {/* Contact Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-zinc-300 font-semibold block mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Neethu Nair"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#101015] border border-zinc-800 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-zinc-300 font-semibold block mb-1.5">
                  WhatsApp Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 98462 48245"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#101015] border border-zinc-800 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="text-xs uppercase tracking-widest text-zinc-300 font-semibold block mb-1.5">
                Special Requirements / Event Location
              </label>
              <textarea
                rows={2}
                placeholder="Mention wedding venue or specific styling requests..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-[#101015] border border-zinc-800 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            {/* Action Buttons Grid */}
            <div className="pt-3 space-y-3">
              
              {/* WhatsApp Main Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-emerald-900/40 hover:brightness-110 transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm & Send via WhatsApp (+91 98462 48245)</span>
              </button>

              {/* Instagram & Call Secondary Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleInstagramDM}
                  className="py-3 rounded-xl bg-gradient-to-r from-pink-950 to-purple-950 border border-pink-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 hover:border-pink-400 transition-all"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <span>Book via Instagram DM</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectCall}
                  className="py-3 rounded-xl bg-[#1A1A22] border border-[#D4AF37]/30 text-zinc-200 text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Call Studio Directly</span>
                </button>
              </div>

            </div>

            {copiedAlert && (
              <p className="text-center text-xs text-pink-400 pt-1 flex items-center justify-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Booking details copied! Paste in Instagram chat.</span>
              </p>
            )}

          </form>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
