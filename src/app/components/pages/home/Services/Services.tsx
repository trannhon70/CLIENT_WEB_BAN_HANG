"use client";

import { Sidles } from '@/app/components/slides'
import Image from 'next/image'
import React, { Fragment } from 'react'

const servicesItems = [
    {
        title: "Đổi trả miễn phí tại nhà nhanh chóng",
        icon: "return.svg",
    },
    {
        title: "giao hàng từ 150.000Đ",
        icon: "delivery-time.svg",
    },
    {
        title: "hệ thống cửa hàng",
        icon: "store.svg",
    },
    {
        title: "chương trình khách hàng thân thiết",
        icon: "gift.svg",
    },
]
const Services = () => {
    return (
        <div className=' justify-between items-center py-6 px-8 mb-8 sm:mb-10 border border-mainEF rounded-lg ' >
            <div className='sm:hidden'>
                <Sidles data={servicesItems} />
            </div>
            <div className='hidden lg:flex  justify-between items-center'>
                {
                    servicesItems?.map((item: any, key: number) =>
                        <Fragment key={key}>
                            <div className='flex items-center max-w-[245px] gap-4'>
                                <Image src={`/images/${item?.icon}`} height={32} width={32} alt='' />
                                <p className='text-fs15 text-center font-semibold uppercase'>{item?.title}</p>
                            </div>
                            <div className='bg-mainEF w-px h-6 hidden sm:flex last-of-type:hidden'></div>
                        </Fragment>
                    )
                }
            </div>


        </div>
    )
}

export default Services