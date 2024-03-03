"use client"

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ProductCard = ({ data }) => {

    const router = useRouter();

    return (
        <>
            {data ?
                <Link href={`/products/${data._id}`}>
                    <div className='relative group rounded-lg overflow-hidden'>
                        {data.sale != 0 && <span className='absolute right-[10px] top-[10px] text-[10px] font-semibold text-white bg-[#50e550] rounded-[15px] px-2 pt-1'>ON SALE</span>}
                        <Image src={data.images[0]} alt={data.title} width={500} height={500} className='w-full' />
                        <div className=" absolute bottom-full left-0 right-0 bg-black/50 overflow-hidden w-full h-0 transition-all !duration-500 group-hover:bottom-0 group-hover:h-full justify-center items-center hidden md:flex">
                            <button onClick={() => router.push(`/products/${data._id}`)} className="bg-[#000] text-white text-center w-[80%] inline-block bg-transparent text-[16px] border-[1px] border-solid border-[#fff] py-2 px-5 hover:bg-[#fff] hover:text-[#000] font-semibold">XEM THÊM</button>
                        </div>
                    </div>
                    <div className='py-3 px-2 flex items-center flex-col text-[14px] font-bold text-[#8A8A8F] space-y-2 space-x-2'>
                        <p>{data.title}</p>
                        <div className='flex items-center space-x-2'>
                            <h6 className='text-[15px] font-semibold text-[#111111]'>{Math.ceil((data.price) * (100 - data.sale) / 100).toLocaleString()}₫</h6>
                            <h6 className='text-[17px] font-semibold text-red-500 line-through'>{data.price.toLocaleString()}₫</h6>
                        </div>
                    </div>
                </Link>
                :
                <div>
                    <img src="/lazyload.png" alt="lazyloading" />
                </div>
            }
        </>
    )
}

export default ProductCard