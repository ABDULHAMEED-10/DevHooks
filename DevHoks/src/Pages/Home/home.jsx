/* eslint-disable no-unused-vars */
import Layout from '../../Components/Layout';
import React from 'react'
import MetaData from '../../Components/MataData';
import HeroSection from './HomeComponents/HeroSection';
const Home = () => {
    return (
        <div>
        <MetaData title="Home" />
        <Layout>
           <HeroSection />
        </Layout>
        </div>
    );
};

export default Home;