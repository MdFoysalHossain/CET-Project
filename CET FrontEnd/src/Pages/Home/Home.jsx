import React from 'react';
import Banner from './Component/Banner';
import NavbarHome from './Component/NavbarHome';
import ProblemSolution from './Component/ProblemSolution';
import Banner2 from './Component/Banner2';
import Footer from './Component/Footer';
import Features from './Component/Features';
import Workflow from './Component/Workflow';
import Pricing from './Component/Pricing';
import FinalCTA from './Component/FinalCTA';
import Testimonials from './Component/Testimonials';

const Home = () => {
    return (
        <div className='overflow-x-hidden relative overflow-hidden'>
            <NavbarHome/>
            <Banner2/>
            {/* <Banner/> */}
            <ProblemSolution/>
            <Features/>
            <Workflow/>
            <Pricing/>
            <Testimonials/>
            <FinalCTA/>
            {/* <div className="h-1 w-screen"></div> */}
            <Footer/>
            
        </div>
    );
};

export default Home;