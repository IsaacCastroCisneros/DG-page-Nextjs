import React, { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from 'react'
import Image from 'next/image'

interface props {
  img: {src:string,h:number,w:number};
  label?: string;
  styles?:string
  onClick?:()=>void
}

export const InHouseButton = ({img,label,styles,onClick}:props) => {
  return (
    <button className={`flex font-bold px-[8px] bg-[#f8f9fa] rounded-[.5rem] text-[#000] items-center gap-[.4rem] py-[.3rem] hover:bg-[#f8f9fae0] ${styles}`}
     onClick={onClick}
     >
      <Image
        src={img.src}
        alt="DG-inHouseIcon"
        height={img.h}
        width={img.w}
      />
      {
        label
      }
    </button>
  );
}
