import React from 'react';

export const TouchGlowLogo: React.FC<{ className?: string; useImage?: boolean }> = ({
  className = "w-10 h-10",
  useImage = true,
}) => {
  if (useImage) {
    return (
      <div className={`relative rounded-full overflow-hidden border border-[#D4AF37]/40 p-0.5 bg-[#0B0B0E] shadow-lg shadow-[#D4AF37]/20 flex-shrink-0 ${className}`}>
        <img
          src="/images/logo.png"
          alt="Touch & Glow Makeup Studio Logo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    );
  }

  return (
    <div className={`relative rounded-full bg-gradient-to-tr from-[#AA820A] via-[#D4AF37] to-[#FFF5EE] p-[1.5px] shadow-lg shadow-[#D4AF37]/20 flex-shrink-0 ${className}`}>
      <div className="w-full h-full bg-[#0B0B0E] rounded-full flex items-center justify-center p-1 relative overflow-hidden">
        {/* Monogram T & G SVG */}
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" stroke="url(#goldGradient)" strokeWidth="2" strokeDasharray="4 2" />
          <path
            d="M 32 30 H 68 M 50 30 V 70 M 42 70 H 58"
            stroke="url(#goldGradient)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M 68 50 C 68 38, 52 38, 50 50 C 48 64, 68 64, 68 50 M 60 56 H 72"
            stroke="#FFF5EE"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF5EE" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#AA820A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
