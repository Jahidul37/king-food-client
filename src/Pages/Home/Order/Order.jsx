import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import img1 from "./../../../assets/home/slide1.jpg"
import img2 from "./../../../assets/home/slide2.jpg"
import img3 from "./../../../assets/home/slide3.jpg"
import "./Order.css"

import SectionTitles from '../../../Componets/SectionTitles/SectionTitles';


const Order = () => {
    return (
        <section className=' my-6'>
            <SectionTitles
                subHeading={"From 11:00 to 10:00pm"}
                heading={"Order Online"}
            >
            </SectionTitles>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className=' text-center text-2xl -mt-20 font-semibold text-white'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className=' text-center text-2xl -mt-20 font-semibold text-white'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className=' text-center text-2xl -mt-20 font-semibold text-white'>Soup</h3>
                </SwiperSlide>

            </Swiper>

            <div className="hero  h-[320px] my-4 lg:my-10 images">
                <div className="hero-content text-center border mx-6 bg-white rounded-lg">
                    <div className="max-w-md ">
                        <h1 className="text-5xl font-semibold">King Food</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;