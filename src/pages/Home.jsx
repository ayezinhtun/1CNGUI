import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ServiceReliability from '../components/ServiceReliability';
import IndustriesWeServe from '../components/IndustriesWeServe';
import WhyChooseUs from '../components/WhyChooseUs';
import ProductComponent from '../components/ProductComponent';
import { useLocation } from 'react-router-dom';

const Home = ({bannerHeight}) => {

    const { hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                const yOffset = bannerHeight;
                const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }
    }, [hash, bannerHeight]);
    return (
        <div id='home'>
            <HeroSection />
            <ProductComponent />
            <ServiceReliability />
            <IndustriesWeServe />
            <WhyChooseUs />
        </div>
    );
};

export default Home;