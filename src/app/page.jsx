
import Navbar from '@/components/Navbar';
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
      <div className='overflow-hidden'>
        <Navbar />
        <div className="mt-[74px] md:mt-[78.5px]">

          {/* Slider */}
          <Slider />

          {/* Feature */}
          <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='flex-center py-[20px] px-[25px] bg-[#f8f8f8]'>
              <img src="/feature1.webp" alt="feature" className='w-[40px] mr-4' />
              <p className='font-bold text-[15px] md:text-[18px] text-center'>FAST SECURE PAYMENTS</p>
            </div>
            <div className='flex-center py-[20px] px-[25px] bg-[#f51167] text-white'>
              <img src="/feature2.webp" alt="feature" className='w-[40px] mr-4' />
              <p className='font-bold text-[15px] md:text-[18px] text-center'>PREMIUM PRODUCTS</p>
            </div>
            <div className='flex-center py-[20px] px-[25px] bg-[#f8f8f8]'>
              <img src="/feature3.webp" alt="feature" className='w-[40px] mr-4' />
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
            <img src="/hb_image1.webp" className='w-full' alt="avatar" />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div >
    </>
  )
}
