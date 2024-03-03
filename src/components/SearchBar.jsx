'use client'
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {

    const [querySearch, setQuerySearch] = useState('');

    const router = useRouter();

    const handleChangeSearchInput = (e) => {
        setQuerySearch(e.target.value)
    }

    const handleSearch = () => {
        let queryParams;
        if (typeof window !== "undefined") {
            queryParams = new URLSearchParams(window.location.search);
        }
        if (querySearch !== '') {
            if (window.location.pathname === '/products') {
                if (queryParams.has("search")) {
                    queryParams.set("search", querySearch);
                } else {
                    queryParams.append("search", querySearch);
                }

                const path = window.location.pathname + "?" + queryParams.toString();
                router.push(path);
            }
            else {
                router.push(`/products?search=${querySearch}`)
            }
        }
    }

    const handleEnterSearch = (e) => {
        if (e.keyCode === 13 && querySearch !== '') {
            handleSearch();
        }
    }

    return (
        <div>
            <div className='flex items-center bg-gray-100 p-2 rounded-lg max-md:hidden'>
                <button onClick={handleSearch}><BiSearch size={20} className='opacity-50' /></button>
                <input
                    type="text"
                    className='outline-none max-[850px]:w-[110px] bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]'
                    placeholder='Tìm kiếm'
                    autoComplete='false'
                    onChange={handleChangeSearchInput}
                    onKeyDown={handleEnterSearch}
                    value={querySearch}
                />
            </div>
        </div>
    )
}

export default SearchBar