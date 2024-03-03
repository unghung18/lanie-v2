import banner from "../assets/hb_image1.webp"
import feature1 from '../assets/feature1.webp';
import feature2 from '../assets/feature2.webp';
import feature3 from '../assets/feature3.webp';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';
import Footer from "@/components/Footer";
import SwiperLatestProducts from "@/components/SwiperLatestProducts";
import Slider from "@/components/Slider";
import { getLatestProducts } from "@/api/LanieApi";

const getData = async () => {
  const res = await getLatestProducts();
  return res.data
}

export default async function Home() {
  const products = await getData();

  return (
    <>
      <div className='overflow-hidden cursor-pointer'>
        <Navbar />
        <div className="mt-[74px] md:mt-[78.5px]">

          {/* Slider */}
          <Slider />

          {/* Feature */}
          <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='flex-center py-[20px] px-[25px] bg-[#f8f8f8]'>
              <Image src={feature1} alt="feature" className='w-[40px] mr-4' />
              <p className='font-bold text-[15px] md:text-[18px] text-center'>FAST SECURE PAYMENTS</p>
            </div>
            <div className='flex-center py-[20px] px-[25px] bg-[#f51167] text-white'>
              <Image src={feature2} alt="feature" className='w-[40px] mr-4' />
              <p className='font-bold text-[15px] md:text-[18px] text-center'>PREMIUM PRODUCTS</p>
            </div>
            <div className='flex-center py-[20px] px-[25px] bg-[#f8f8f8]'>
              <Image src={feature3} alt="feature" className='w-[40px] mr-4' />
              <p className='font-bold text-[15px] md:text-[18px] text-center'>FREE AND FAST DELIVERY</p>
            </div>
          </div>

          {/* Container */}
          <div className='px-4 max-w-[1280px] mx-auto text-center'>

            <SwiperLatestProducts products={products} />
            <SwiperLatestProducts products={products} />
          </div>

          {/* Banner */}
          <div className="my-[40px] md:my-[60px]">
            <Image src={banner} className='w-full' alt="avatar" />
          </div>
        </div>

        {/* Footer */}
        <div>
          <Footer />
        </div>
      </div >
    </>
  )
}
