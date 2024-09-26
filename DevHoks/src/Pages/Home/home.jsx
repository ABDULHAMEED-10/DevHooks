/* eslint-disable no-unused-vars */
import Layout from '../../Components/Layout';
import React from 'react'
import MetaData from '../../Components/MataData';
import HeroSection from './HomeComponents/HeroSec/HeroSection';
import Brand from './HomeComponents/TrusedBy/Brand';
import Services from './HomeComponents/Service/Services';
import TimeLine from './HomeComponents/WorkFlow/TimeLine';
import SpecialOffer from './HomeComponents/Discount/SpecialOffer';
import Stats from './HomeComponents/Satatistics/Stats';
import Caurosel from './HomeComponents/Testimonial/Caurosel';
import Connect from './HomeComponents/CallToWork/Connect';
const Home = () => {
    return (
        <div>
        <MetaData title="Home" />
        <Layout>
                <HeroSection />
                <Brand />
                <Services />
                <TimeLine />
                <SpecialOffer />
                <Stats />
                <Caurosel />
                <Connect />
                
        </Layout>
        </div>
    );
};

export default Home;