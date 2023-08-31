import React from 'react'
import Image from 'next/image'
import box from '../../../interfaces/box'

export const Box = ({img,description}:box) => 
{
  return (
    <div className='flex bg-[#fff] p-[8px] text-[#000] text-[10px] items-center gap-[.5rem] rounded-[.4rem] firstBanner1:justify-center'>
       <Image src={img} alt='DG-box' height={45} width={45} />
       <p className='flex-1 secondBanner:hidden'>
         {
          description
         }
       </p>
    </div>
  )
}
