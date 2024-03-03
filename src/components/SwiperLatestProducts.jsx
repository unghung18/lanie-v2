"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import ProductCard from './ProductCard';

const SwiperLatestProducts = ({ products }) => {
    return (
        <section>
            <h2 className='my-[40px] md:my-[60px] text-[28px] text-center md:text-[36px] font-bold'>SẢN PHẨM MỚI</h2>
            <Swiper
                breakpoints={{
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 4,
                    },
                    760: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                    },
                    0: {
                        spaceBetween: 5,
                        slidesPerView: 2,
                    },
                }}
                loop={true}
                navigation={true}
                autoplay={{
                    disableOnInteraction: true,
                    delay: 2000,
                    stopOnLastSlide: false
                }}
                modules={[Navigation, Autoplay]}
            >
                {
                    products?.map((item) => (
                        <SwiperSlide key={item._id}>
                            <ProductCard data={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default SwiperLatestProducts