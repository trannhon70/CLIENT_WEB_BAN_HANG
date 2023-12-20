"use client";
import Image from 'next/image'
import React from 'react'

const BannerFlashSale = () => {
  return (
    <div className='flex items-center justify-between py-3 px-3 sm:px-6 mb-6 bg-mainF2'>
      <div className='flex items-center justify-between sm:justify-normal w-full  sm:w-fit'>
        <div className='flex'>
          <div className='w-6 h-6'>
            <Image src="/images/flash.svg" alt='' height={24} width={24} className='h-full w-full' />
          </div>
          <p className='text-fs15 sm:text-lg lg:text-xl uppercase font-semibold  not-italic text-mainFF leading-28'>BAO RẺ - BAO TƯƠI NGON</p>
        </div>

        <div className='flex gap-2 ml-0 sm:ml-6'>
          <div className='flex text-xs justify-center items-center bg-main20 rounded p-1 text-mainFF'>00</div>
          <div className='flex text-xs justify-center items-center bg-main20 rounded p-1 text-mainFF'>00</div>
          <div className='flex text-xs justify-center items-center bg-main20 rounded p-1 text-mainFF'>00</div>
        </div>
      </div>
      <a href='#' className='hidden sm:flex items-center gap-2 py-2.5 px-4 bg-white rounded-md text-mainF6'>
        Xem tất cả
        <Image src="/images/arrow_right.svg" alt='' height={20} width={9} />
      </a>
    </div>
  )
}

export default BannerFlashSale