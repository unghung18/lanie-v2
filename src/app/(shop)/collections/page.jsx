import { getCollections } from '@/api/LanieApi';
import ProductCard from '@/components/ProductCard';
import React from 'react';

async function getData() {
    const res = await getCollections()
    return res.data
}

const Page = async () => {

    const collections = await getData();

    return (
        <>
            <div className='py-10 px-5 max-w-[1280px] mx-auto space-y-20'>
                {collections.map((item) => (
                    <div key={item._id}>
                        <img src={item.banner_img} alt={item.title} className='mb-20 w-full' />
                        <div className='grid grid-cols-1 md:grid-cols-10 md:gap-16'>
                            <div className='md:col-span-6'>
                                <div className='grid grid-cols-2 gap-2'>
                                    {item.products.map((product, i) => (
                                        <ProductCard data={product} key={i} />
                                    ))}
                                </div>
                                <div >
                                    <h1 className='text-[20px] font-bold my-5 max-md:text-center'>{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            <div className='col-span-4 space-y-2 max-md:mt-5 grid-cols-1'>
                                {item.images.map((image, i) => (
                                    <img src={image} alt={item.title} key={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Page