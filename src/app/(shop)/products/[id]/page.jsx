import React from 'react';

import ImageGallery from '@/components/ImageGallery';
import SwiperSimilarProduct from '@/components/SwiperSimilarProduct';
import { getLatestProducts, getOneProducts } from '@/api/LanieApi';
import ProductDetail from './ProductDetail';

async function getData(id) {
    const res = await getOneProducts(id)
    return res.data
}

async function getSimilarProductData() {
    const res = await getLatestProducts()
    return res.data
}

const Page = async ({ params }) => {

    const product = await getData(params.id);
    const similarProducts = await getSimilarProductData()

    return (
        <>
            <div>
                <div className='max-w-[1280px] mx-auto flex gap-0 min-[850px]:gap-14 py-10 px-5 max-md:flex-col max-md:space-y-10'>
                    <ImageGallery imageUrls={product?.images} />
                    <ProductDetail product={product} />
                </div>
                <hr />
                <div className='max-w-[1280px] mx-auto px-5 pb-10'>
                    <SwiperSimilarProduct similarProducts={similarProducts} />
                </div>
            </div>
        </>
    )
}

export default Page;