import React from 'react';
import HeroSection from '../components/HeroSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection
        backgroundImageUrl="https://source.unsplash.com/1600x900/?university,students"
        title="UGC-Approved Online University & Degree Courses in India"
        subtitle="Study with 100% Placement Assistance. Live & Recorded Lectures at your convenience."
        bulletHighlights={[
          "Equivalent to Regular Degree",
          "Live & Recorded Lectures",
          "UGC-entitled & AICTE-Approved",
          "200+ Hiring Partners",
        ]}
        ctaText="Take the Freedom Scholarship Test (FSET)"
        ctaAction={() => alert("FSET Clicked")}
      />
    </>
  );
};

export default Home;
