import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () =>  {
        //   fetch('reviews.json')
          fetch('https://bistro-boss-2y-server.vercel.app/review')
          .then(res => res.json())
          .then(data => setReviews(data))
    },[])
    return (
        <div>
            <section>
                <SectionTitle
                 Heading={'Testimonials'}
                 subHeading={'Judge Yourself'}
                ></SectionTitle>
            </section>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                     key={review._id}
                    >
                        <div className='flex flex-col items-center gap-4 mx-32'>
                        <Rating
                            style={{ maxWidth: 180 , text:'center'}}
                            value={review.rating}
                         
                            isRequired
                            />
                            <p>{review.details}</p>
                            <h2 className='text-2xl text-orange-500'>{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;