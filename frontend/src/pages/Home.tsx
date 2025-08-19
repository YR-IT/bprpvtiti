import React from "react";
import HeroSection from "../components/HeroSection";
import Welcome from "../components/Welcome";
import QuickLinks from "../components/QuickLinks";
import WhyChooseUs from "../components/WhyChooseUs";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Welcome />
      <QuickLinks />
      <WhyChooseUs/>
    </>
  );
};


export default Home;
