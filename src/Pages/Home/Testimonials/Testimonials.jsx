import React from 'react';
import SectionTitles from '../../../Componets/SectionTitles/SectionTitles';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    return (
        <section>
            <SectionTitles
                subHeading={"What Our Clients Say"}
                heading={"TESTIMONIALS"}
            ></SectionTitles>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className=''>
                            <p>Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that
                                a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <h4>JANE DOE</h4>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <p>Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that
                                a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <h4>JANE DOE</h4>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </section>
    );
};

export default Testimonials;