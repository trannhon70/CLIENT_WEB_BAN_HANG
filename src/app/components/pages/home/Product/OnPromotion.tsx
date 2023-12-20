"use client";
import { SeeMore } from '@/app/components/button'
import { IntroduceTitle } from '@/app/components/introduce-title'
import { SingleBanner } from '@/app/components/singleBanner'
import { Sidles } from '@/app/components/slides'
import React from 'react'

const OnPromotion = () => {
    return (
        <div className='mb-14 lg:mb-20'>
            <div className='mb-14 lg:mb-20'>
                <SingleBanner />
            </div>
            <div className='mb-6'>
                <IntroduceTitle icon="sale-tag.svg" title="ĐANG KHUYẾN MÃI" />
            </div>
            <div className="mb-6">
                <Sidles />
            </div>
            <div className="flex justify-center">
                <SeeMore />
            </div>
        </div>
    )
}

export default OnPromotion