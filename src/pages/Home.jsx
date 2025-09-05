import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceReliability from '../components/ServiceReliability';
import IndustriesWeServe from '../components/IndustriesWeServe';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <ServiceReliability />
            <IndustriesWeServe />
            <WhyChooseUs />
        </div>
    );
};

export default Home;