"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import box from '@/interfaces/box'

export const BeneficiosDeLaBox = ({title,description,img}:box) => 
{
  const[isHover,setIsHover]=useState<boolean>(false)

  return (
    <div className={`rounded-[.4rem] flex p-[16px] gap-[.4rem] ${isHover ? '!text-[#000] bg-[#fff]':'bg-myLightPurple !text-[#fff]'} transition-all duration-200`} 
      onMouseEnter={()=>setIsHover(true)}
      onMouseLeave={()=>setIsHover(false)}
      >
      <section>
        <Image
          src={img}
          height={64}
          width={64}
          alt="DG-iconInhouse"
        />
      </section>
      <section className='flex-1 flex flex-col justify-between'>
        <h3 className={`font-extrabold text-[24px] text-left block ${isHover ? '':'text-[#fff]'}`}>{title}</h3>
        <p className='text-left block pb-[1.3rem]'>
          {
            description
          }
        </p>
      </section>
    </div>
  );
}
