"use client"
import React, { Fragment } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { GeneralProduct } from '../general-product';
import Image from 'next/image';

const Sidles = ({ data }: any) => {
  return (
    <>
      <div className='relative overflow-clip' style={{ overflowClipMargin: "8px" }}>
        <Swiper
          loop={true}
          slidesPerView={2}
          spaceBetween={24}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            // when window width is >= 320px
            320: { slidesPerView: data !== undefined ? 1 : 2, spaceBetween: data !== undefined ? 32 : 16 },
            // when window width is >= 768px
            768: { slidesPerView: 3, spaceBetween: 16 },
            // when window width is >= 992px
            992: { slidesPerView: 4, spaceBetween: 24 }
          }}
          className="mySwiper mySwiper-custom"
          style={{
            overflow: "visible"
          }}
        >
          {
            data !== undefined ?
              (
                data.map((item: any, index: number) => (
                  <SwiperSlide key={index}>
                    <div className='flex items-center gap-4 flex-col'>
                      <Image src={`/images/${item?.icon}`} height={32} width={32} alt='' />
                      <p className='text-fs14 text-center font-semibold uppercase'>{item?.title}</p>
                    </div>
                  </SwiperSlide>

                ))
              )
              :
              [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <SwiperSlide key={index}>
                  <GeneralProduct key={index} />
                </SwiperSlide>
              ))
          }
        </Swiper>
      </div>







    </>


  )
}

export default Sidles