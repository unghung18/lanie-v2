"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import Link from 'next/link';

import slider1 from '../assets/slider1.webp';
import slider2 from '../assets/slider2.webp';
import Image from 'next/image';

const myslides = [
    {
        title: "new arrivals",
        name: "denim jacket",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis",
        price: "20$",
        image: slider1
    },
    {
        title: "new arrivals",
        name: "denim jacket",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis",
        price: "20$",
        image: slider2
    }
]

const Slider = () => {
    return (
        <Swiper
            className='h-[calc(100vh-125px)] md:h-[calc(100vh-78.5px)] relative'
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
        >
            {myslides.map((slide, i) => (
                <SwiperSlide key={i} className='!w-full'>
                    {({ isActive }) => (
                        <>
                            <Image src={slide.image} alt="avatar" className='object-cover h-full' />
                            <div className="absolute mx-[30px] my-[100px] md:m-[100px] top-0 left-0">
                                <div className='flex justify-between items-center text-white'>
                                    <div className='md:w-[50%]'>
                                        <span className={`text-[18px] uppercase font-semibold tracking-[3px] mb-2 block relative transition-all !duration-500 delay-200 ${isActive ? "top-0 opacity-100" : "top-[50px] opacity-0"}`}>{slide.title}</span>
                                        <h2 className={`text-[30px] md:text-[60px] uppercase font-bold mb-3 relative transition-all !duration-500 delay-[400ms] ${isActive ? "top-0 opacity-100" : "top-[50px] opacity-0"}`}>{slide.name}</h2>
                                        <p className={`text-[15px] font-light mb-[35px] relative transition-all !duration-500 delay-[600ms] ${isActive ? "top-0 opacity-100" : "top-[100px] opacity-0"}`}>{slide.description}</p>
                                    </div>
                                    <div className={`${isActive ? "opacity-100 rotate-0" : "rotate-45 opacity-0"} transition-all !duration-500 delay-[700ms] !ease-in relative max-md:hidden w-[162px] h-[162px] bg-[#f51167] rounded-full flex-center flex-col after:content-[""] after:absolute after:w-[calc(100%-10px)] after:h-[calc(100%-10px)] after:border-[1px] after:border-[#f96790] after:rounded-full after:border-solid`}>
                                        <span className='text-[18px] mb-3 inline-block'>CHỈ TỪ</span>
                                        <h2 className='text-[30px] inline-block mb-3'>{slide.price}</h2>
                                        <p className='text-[14px]'>XEM NGAY</p>
                                    </div>
                                </div>
                                <Link href="/products" className={`py-2 px-3 rounded-lg border-white border-[1px] border-solid inline-block text-white ml-3 relative transition-all !duration-500 delay-[800ms] ${isActive ? "top-0 opacity-100" : "top-[50px] opacity-0"}`}>SHOP NOW</Link>
                            </div>
                        </>
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider