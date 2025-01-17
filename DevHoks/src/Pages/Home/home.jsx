/* eslint-disable no-unused-vars */
import React from "react";
import MetaData from "../../Components/MataData";
import HeroSection from "./HomeComponents/HeroSec/HeroSection";
// import Brand from "./HomeComponents/TrusedBy/Brand";
import Services from "./HomeComponents/Service/Services";
import TimeLine from "./HomeComponents/WorkFlow/TimeLine";
import SpecialOffer from "./HomeComponents/Discount/SpecialOffer";
import Stats from "./HomeComponents/Satatistics/Stats";
import Caurosel from "./HomeComponents/Testimonial/Caurosel";
import FAQ from "./HomeComponents/FAQs/FAQ";
import CallToAction from "./HomeComponents/CallToAction/CallToAction";

const Home = () => {
  return (
    <div>
      <MetaData title="Home" />
      <HeroSection />
      {/* <Brand /> */}
      <Services />
      <TimeLine />
      <Stats />
      <SpecialOffer />
      <Caurosel />
      <FAQ />
    </div>
  );
};

export default Home;
