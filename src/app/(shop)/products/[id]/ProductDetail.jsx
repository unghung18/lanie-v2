"use client"

import React, { useState } from 'react'
import RatingStart from '@/components/RatingStart';
import { FaRegCommentDots } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/redux/slices/cartSlice';


const ProductDetail = ({ product }) => {

    const [selectedSize, setSelectedSize] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);
    const dispatch = useDispatch();

    return (
        <div className='flex-1 px-5'>
            <h1 className='text-2xl font-semibold'>{product?.title}</h1>
            <h3 className='text-sm text-neutral-500'>Alan Walker</h3>
            <div className='flex items-center space-x-12 mt-4'>
                <RatingStart />
                <span className='flex items-start space-x-3'>
                    <FaRegCommentDots />
                    <span className='opacity-70 text-sm'>
                        121 bình luận
                    </span>
                </span>
            </div>
            <div className='flex items-center space-x-3  mt-8'>
                <h2 className='text-2xl font-semibold'>{Math.ceil((product.price) * (100 - product.sale) / 100).toLocaleString()}₫</h2>
                <h2 className='text-3xl font-semibold line-through text-red-500'>{product?.price?.toLocaleString()}₫</h2>
            </div>
            <h3 className='font-bold mt-8 mb-3 text-[14px]'>Kích thước</h3>
            <ul className='flex space-x-5'>
                {product?.sizes?.map((e, i) => (
                    <li key={i}
                        className={`p-1 px-2 border rounded-lg cursor-pointer inline-block text-center ${selectedSize == i ? "bg-black text-white" : "bg-white text-black"}`}
                        onClick={() => setSelectedSize(i)}
                    >
                        {e.toUpperCase()}
                    </li>
                ))}
            </ul>
            <h3 className='font-bold mt-8 mb-3 text-[14px]'>Màu sắc</h3>
            <div className='mb-3 flex'>
                {product?.colors?.map((e, i) => (
                    <div className='relative w-[35px] h-[35px] border border-neutral-400 m-1 flex-center cursor-pointer'
                        key={i}
                        onClick={() => setSelectedColor(i)}
                        style={{
                            borderRadius: '100%',
                            backgroundColor: e.color,
                        }}>
                        {selectedColor == i && <span className='text-[#fff]'>✓</span>}
                    </div>
                ))}
            </div>
            <div className='mb-5 flex mt-8 items-center'>
                <span className='font-bold text-[14px] mr-5'>Số Lượng</span>
                <div className='max-w-[100px] min-w-[75px flex justify-between] items-center border'>
                    <FiChevronLeft size={30} />
                    <input type="Number" className='w-full text-center outline-none bg-white' defaultValue={product?.quantity} disabled />
                    <FiChevronRight size={30} />
                </div>
            </div>
            <div className='flex max-[930px]:space-y-3 space-y-0 space-x-3 max-[930px]:space-x-0 max-[930px]:flex-wrap text-center'>
                <div onClick={() => dispatch(cartActions.addItem({ ...product, selectedSize: product?.sizes[selectedSize], selectedColor: product?.colors[selectedColor].name }))} className='py-2 px-3 rounded-md border cursor-pointer bg-black text-white max-[930px]:w-full'>THÊM GIỎ HÀNG</div>
                <Link href="/checkout" className='py-2 px-3 rounded-md border cursor-pointer bg-black text-white max-[930px]:w-full'>MUA NGAY</Link>
            </div>
            <h3 className='font-bold mt-8 mb-3 text-[14px]'>Mô tả sản phẩm</h3>
            <div className='text-neutral-500 text-sm'>{product?.description}</div>
        </div>
    )
}

export default ProductDetail