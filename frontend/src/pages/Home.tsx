import React from "react";
import HeroSection from "../components/HeroSection";
import Welcome from "../components/Welcome";
import QuickLinks from "../components/QuickLinks";
import OurTrades from "../components/OurTrades";
import WhyChooseUs from "../components/WhyChooseUs";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Welcome />
      <QuickLinks />
      <OurTrades/>
      <WhyChooseUs/>
    </>
  );
};


export default Home;
