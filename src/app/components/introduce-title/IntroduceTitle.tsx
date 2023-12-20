import Image from 'next/image'
import React from 'react'

const IntroduceTitle = ({ icon, title }: any) => {
  return (
    <div className={`flex space-x-3 items-center ${icon ? "justify-center" : "justify-start"}`}>
      {
        icon && <Image src={`/images/${icon}`} height={32} width={32} alt='' />

      }
      <p className='text-xl font-semibold text-main20 not-italic leading-7 uppercase'>{title}</p>
    </div>
  )
}

export default IntroduceTitle