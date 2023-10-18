import React from 'react';
import Banner from '../Banner/Banner';
import Order from '../Order/Order';
import OurMenu from '../OurMenu/OurMenu';
import CallUs from '../CallUs/CallUs';
import CeafRecomnd from '../CeafRecomnd/CeafRecomnd';
import MenuBg from '../MenuBg/MenuBg';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> King Food | Home</title>
            </Helmet>
            <Banner></Banner>
            <Order></Order>
            <OurMenu></OurMenu>
            <CallUs></CallUs>
            <CeafRecomnd></CeafRecomnd>
            <MenuBg></MenuBg>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;