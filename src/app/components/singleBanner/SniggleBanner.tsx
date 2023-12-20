import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleBanner = () => {
  return (
    <Link href={"/"} className='h-auto lg:h-[350px] overflow-hidden w-full rounded-lg animation-link'>
      <Image src="/images/single-banner/baner001.png" height={240} width={1200} alt="" className='w-full h-full' />
    </Link>
  )
}
export default SingleBanner