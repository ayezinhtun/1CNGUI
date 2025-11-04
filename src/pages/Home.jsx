import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceReliability from '../components/ServiceReliability';
import IndustriesWeServe from '../components/IndustriesWeServe';
import WhyChooseUs from '../components/WhyChooseUs';
import ProductComponent from '../components/ProductComponent';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <ProductComponent/>
            {/* <ServiceReliability /> */}
            <IndustriesWeServe />
            <WhyChooseUs />
        </div>
    );
};

export default Home;