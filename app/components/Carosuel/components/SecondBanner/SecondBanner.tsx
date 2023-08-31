import React from 'react'
import Image from 'next/image'
import { Box } from './components/Box';
import { myBoxes } from '../../helpers/MyBoxes';

export const SecondBanner = () => 
{
  return (
    <>
      <div className="self-start pt-[4rem] secondBanner:pt-[1rem] flex flex-col items-center flex-1 max-w-[660px]">
        <h2 className="text-[1.5rem] mb-[1rem] secondBanner:text-center text-[#fff]">
          Tenemos programas enfocados al desarrollo de tus capacidades.
        </h2>
        <section className="w-[100%] secondBanner:px-[0] grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(3,61px)] gap-y-[.5rem] gap-x-[1.8rem] mb-[.7rem]">
         {
           myBoxes.map((box,pos)=>
           (
             <Box key={pos} {...box} />
           ))
         }
        </section>
        <p className="text-[1.2rem] secondBanner:text-center">
          Aprende y Certifícate en mas de 90 programas
        </p>
      </div>
      <div className='firstBanner:hidden'>
        <Image
          src="/img/hombreIndex.webp"
          alt="DG-hombre-index"
          className="translate-y-[12rem]"
          width={603}
          height={633}
        />
      </div>
    </>
  );
}

