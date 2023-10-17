import React, { useEffect, useState } from 'react';
import SectionTitles from '../../../Componets/SectionTitles/SectionTitles';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { FaQuoteLeft } from 'react-icons/fa';


const Testimonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // FaQuoteLeft
    return (
        <section className='my-10'>
            <SectionTitles
                subHeading={"What Our Clients Say"}
                heading={"TESTIMONIALS"}
            ></SectionTitles>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >

                            <div className=' mx-24  flex flex-col items-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <div className=' text-5xl my-5'>
                                    <FaQuoteLeft></FaQuoteLeft>
                                </div>
                                <p className=' my-8'>{review.details}</p>
                                <h4 className=' text-2xl text-orange-400'>{review.name}</h4>

                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>

        </section>
    );
};

export default Testimonials;