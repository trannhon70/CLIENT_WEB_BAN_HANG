"use client"
import { Option } from '@/app/components/button';
import { GeneralProduct } from '@/app/components/general-product';
import { IntroduceTitle } from '@/app/components/introduce-title';
import { Sidles } from '@/app/components/slides';
import React, { useState } from 'react'
const OptionItems = [
  "Mua là tặng",
  "Sản phẩm mới lên nên thử",
  "Chỉ từ 49K",
  "Hải sản nhập khẩu",
  "hải sản sức khỏe",
  "Ready To Eat/Cook",
];
const SuggestedProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className='mb-14 lg:mb-20'>
      <div className='mb-6 lg:mb-10'>
        <IntroduceTitle icon="best-seller.svg" title="Gợi ý cho bạn" />
      </div>
      <div className="flex gap-3 mb-6 whitespace-nowrap flex-wrap overflow-y-hidden pb-3" >

        {OptionItems.map((item, key) => (
          <Option
            title={item}
            key={key}
            index={key}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        ))}
      </div>
      <Sidles />
    </div>
  );
}

export default SuggestedProduct