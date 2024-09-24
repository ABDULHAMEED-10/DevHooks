/* eslint-disable no-unused-vars */
import Layout from '../../Components/Layout';
import React from 'react'
import MetaData from '../../Components/MataData';
import HeroSection from './HomeComponents/HeroSection';
import Brand from './HomeComponents/Brand';
import Services from './HomeComponents/Services';
const Home = () => {
    return (
        <div>
        <MetaData title="Home" />
        <Layout>
                <HeroSection />
                {/* <Brand /> */}
                <Services />
        </Layout>
        </div>
    );
};

export default Home;