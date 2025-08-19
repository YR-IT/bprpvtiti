import React from 'react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  bulletHighlights?: string[];
  ctaText?: string;
  ctaAction?: () => void;
  backgroundImageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = 'UGC-Approved Online University & Degree Courses in India',
  subtitle = 'Study with 100% Placement Assistance. Live & Recorded Lectures at your convenience.',
  bulletHighlights = [
    'Equivalent to Regular Degree',
    'Live & Recorded Lectures',
    'UGC-entitled & AICTE-Approved',
    '200+ Hiring Partners'
  ],
  ctaText = 'Take the Freedom Scholarship Test (FSET)',
  ctaAction = () => {
    alert('FSET clicked');
  },
  backgroundImageUrl = '/images/hero-bg.jpg',
}) => {
  return (
    <section
      className="relative bg-cover bg-center text-white flex items-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-8">{subtitle}</p>
        <ul className="text-left inline-block mb-8 space-y-2">
          {bulletHighlights.map((highlight, idx) => (
            <li key={idx} className="flex items-center">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              <span className="text-lg">{highlight}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={ctaAction}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
