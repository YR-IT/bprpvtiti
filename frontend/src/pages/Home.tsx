import React from "react";
import HeroSection from "../components/HeroSection";
import Welcome from "../components/Welcome";
import QuickLinks from "../components/QuickLinks";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Welcome />
      <QuickLinks />
    </>
  );
};


export default Home;
