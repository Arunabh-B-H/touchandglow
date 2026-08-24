import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award, ExternalLink, CheckCircle } from 'lucide-react';
import { GoogleLogo, JustdialLogo, FacebookLogo } from './BrandLogos';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Arya Anand',
      role: 'Bridal Makeover Client',
      source: 'Google Review',
      rating: 5,
      text: 'I did my bridal make over from this place and I absolutely loved their work. Mary Mathew ma’am sculpted my natural wedding look so flawlessly!',
      date: 'Recent Bride',
    },
    {
      name: 'Neethu V',
      role: 'Regular Client',
      source: 'Google Review',
      rating: 5,
      text: 'A regular customer here with good service provided at affordable rates. Their skincare treatments and hair spa are top-notch in Trivandrum.',
      date: 'Verified Customer',
    },
    {
      name: 'Megha Megha',
      role: 'Beauty Parlour Client',
      source: 'Google Review',
      rating: 5,
      text: 'Very good experience, treated with good quality products and very good staffs. Touch and Glow Pattom is my favorite makeup studio.',
      date: 'Verified Customer',
    },
    {
      name: 'Anjali Nair',
      role: 'Engagement & Reception Glam',
      source: 'Justdial Review',
      rating: 5,
      text: 'Mary Mathew craft is extraordinary. The makeup lasted all night through heavy lighting and dancing without breaking or caking!',
      date: 'Verified Client',
    },
    {
      name: 'Lakshmi Mohan',
      role: 'Bridal Party Package',
      source: 'Facebook Review',
      rating: 5,
      text: 'Brought 4 of my bridesmaids here for saree draping and airbrush party makeup. Extremely professional staff and stunning results!',
      date: 'Verified Client',
    },
  ];

  return (
    <section id="reviews" className="py-20 lg:py-28 relative overflow-hidden bg-[#0B0B0E]">
      
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1A22] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            <Award className="w-3.5 h-3.5" />
            <span>Client Testimonials & Ratings</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Loved By <span className="gold-gradient-text">Brides & Clients</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Read real feedback from our Google, Justdial & Facebook reviews.
          </p>
        </div>

        {/* Aggregate Ratings Cards Grid with Official Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          
          {/* Google Card */}
          <div className="glass-card p-6 rounded-3xl border border-[#D4AF37]/30 text-center space-y-3 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-center space-x-2">
              <GoogleLogo className="w-6 h-6" />
              <span className="text-sm font-bold text-white tracking-wide">Google Reviews</span>
            </div>
            
            <div className="flex items-center justify-center space-x-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>

            <div className="text-3xl font-bold text-white font-serif">4.8 / 5.0</div>

            <div className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
              GOOGLE REVIEWS (281+ VOTES)
            </div>
            <p className="text-[11px] text-zinc-400">Verified Rating on Google Maps</p>
          </div>

          {/* Justdial Card */}
          <div className="glass-card p-6 rounded-3xl border border-[#D4AF37]/30 text-center space-y-3 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-center space-x-2">
              <JustdialLogo className="h-6" />
              <span className="text-sm font-bold text-white tracking-wide">Justdial</span>
            </div>

            <div className="flex items-center justify-center space-x-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>

            <div className="text-3xl font-bold text-white font-serif">4.8 / 5.0</div>

            <div className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
              JUSTDIAL (403 VOTES)
            </div>
            <p className="text-[11px] text-zinc-400">Top Beauty Parlour Trivandrum</p>
          </div>

          {/* Facebook Card */}
          <div className="glass-card p-6 rounded-3xl border border-[#D4AF37]/30 text-center space-y-3 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-center space-x-2">
              <FacebookLogo className="w-6 h-6" />
              <span className="text-sm font-bold text-white tracking-wide">Facebook</span>
            </div>

            <div className="flex items-center justify-center space-x-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>

            <div className="text-3xl font-bold text-white font-serif">5.0 / 5.0</div>

            <div className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
              FACEBOOK (100% RECOMMENDED)
            </div>
            <p className="text-[11px] text-zinc-400">Community Choice Award</p>
          </div>

        </div>


        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-7 rounded-3xl border border-zinc-800/80 hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] px-3 py-1 rounded-full bg-[#1A1A24] text-zinc-300 border border-zinc-800 flex items-center space-x-1.5 font-medium">
                    {rev.source === 'Google Review' && <GoogleLogo className="w-3.5 h-3.5" />}
                    {rev.source === 'Justdial Review' && <JustdialLogo className="h-3.5" />}
                    {rev.source === 'Facebook Review' && <FacebookLogo className="w-3.5 h-3.5" />}
                    <span>{rev.source}</span>
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#D4AF37]/20 mb-2" />

                <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed mb-6 font-serif">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center space-x-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </h4>
                  <span className="text-[10px] text-zinc-400">{rev.role}</span>
                </div>
                <span className="text-[10px] text-zinc-500">{rev.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Write Google Review Link */}
        <div className="mt-14 text-center">
          <a
            href="https://www.google.com/maps/place/Touch+and+Glow+Makeup+Studio+Pattom/data=!4m2!3m1!1s0x0:0x59467d1f6d9a6efe?sa=X&ved=1t:2428&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full bg-[#1A1A22] border border-[#D4AF37]/40 text-xs uppercase tracking-widest text-white font-bold hover:bg-[#D4AF37] hover:text-black transition-all shadow-lg group"
          >
            <GoogleLogo className="w-4 h-4" />
            <span>Read All 281+ Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-black" />
          </a>
        </div>


      </div>
    </section>
  );
};
