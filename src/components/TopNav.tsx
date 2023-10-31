"use client";

import React from 'react';
import AuthLink from './AuthLink';
import { BsSearch } from 'react-icons/bs';
import { useGeneralStore } from '../stores/generalStore';

function TopNav () {
    const setOpenIsSideNav = useGeneralStore((state) => state.setOpenIsSideNav)
    const isOpenSideNav = useGeneralStore((state) => state.isOpenSideNav)
    return (
        <div className='fixed top-0 right-0 py-4 h-[80px] px-11 max-w-[calc(100vw-248px)] w-full flex justify-between items-center bg-white max-lg:max-w-[calc(100vw-200px)] max-md:max-w-full z-40'>
            <button className="hidden flex-col justify-between h-[20px] w-[30px] max-md:flex" onClick={() => setOpenIsSideNav(!isOpenSideNav)}>
                <span className='w-full h-[2px] bg-[#B5B5B5]'></span>
                <span className='w-full h-[2px] bg-[#B5B5B5]'></span>
                <span className='w-full h-[2px] bg-[#B5B5B5]'></span>
            </button>
            <div className='relative max-w-[360px] w-full max-lg:max-w-[280px] max-md:hidden'>
                <input type="search" id='search' autoComplete='off' className='p-3 pl-14 w-full bg-[#F5F4F6] rounded-lg outline-none text-[#7C7C8D] placeholder:text-[#7C7C8D] h-[44px]' placeholder='Search or type'/>
                <label htmlFor="search">
                    <BsSearch size={20} color="#7C7C8D" className='absolute top-3 left-[14px] w-[20px] h-[20px] object-contain border-r-2 border-[#EF9011] pr-4 box-content'/>
                </label>
            </div>
            <div>
                <AuthLink/>
            </div>
        </div>
    );
}

export default TopNav;