import React from 'react'
import {Video}  from "@/components/Video/Video"
import { MyBlock } from '@/components/MyBlock/MyBlock';

export const CentroDeCapacitacion = () => {
  return (
    <MyBlock styles={{ container: "bg-darkBlueBg",section:"!pb-[5rem]" }}>
      <div className="px-[1rem] max-w-[100%] w-[1500px] my-0 mx-auto text-[#fff] flex flex-col items-center relative pb-[18rem] videoMain2:pb-[13rem]">
        <h2 className="font-bold text-[2rem] mb-[1.8rem] text-center mob-first:text-[1.5rem] text-[#fff]">
          Centro de Capacitación y Desarrollo Global
        </h2>
        <p className="block mb-[.4rem] text-center">
          Más de 12 años brindando capacitaciones virtuales.
        </p>
        <Video styles="absolute left-[50%] max-w-[45rem] top-[10rem] translate-x-[-50%]" src='http://player.vimeo.com/video/728721225' />
        <div>
        </div>
      </div>
    </MyBlock>
  );
}
