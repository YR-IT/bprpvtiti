import React from "react";
import HeroSection from "../components/HeroSection";
import Welcome from "../components/Welcome";
import QuickLinks from "../components/QuickLinks";
import OurTrades from "../components/OurTrades";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Welcome />
      <QuickLinks />
      <OurTrades />
    </>
  );
};


export default Home;
