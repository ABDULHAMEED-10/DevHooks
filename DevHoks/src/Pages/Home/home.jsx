/* eslint-disable no-unused-vars */
import Layout from '../../Components/Layout';
import React from 'react'
import MetaData from '../../Components/MataData';
import HeroSection from './HomeComponents/HeroSection';
import Brand from './HomeComponents/Brand';
import Services from './HomeComponents/Services';
import TimeLine from './HomeComponents/TimeLine';
import SpecialOffer from './HomeComponents/SpecialOffer';
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
                
        </Layout>
        </div>
    );
};

export default Home;