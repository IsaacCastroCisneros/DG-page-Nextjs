"use client"
import React,{useContext} from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import inHouseCardContext from './context/inHouseCardContext'

interface props {
  img: {src:string,h:number,w:number}
  href?:string,
  label?: string
  styles?:string
  onClick?:()=>void
}

export const InHouseButton = ({img,label,styles,onClick,href}:props) => 
{
  const className =twMerge('flex font-bold px-[8px] bg-[#f8f9fa] rounded-[.5rem] text-[#000] items-center gap-[.4rem] py-[.3rem] hover:bg-[#f8f9fae0]',styles) 
  const{}=useContext(inHouseCardContext)

  return (
    <>
      {!href && (
        <button
          className={className+' text-[.9rem]'}
          onClick={onClick}
        >
          <Image
            src={img.src}
            alt="DG-inHouseIcon"
            height={img.h}
            width={img.w}
          />
          {label}
        </button>
      )}
      {
        href&&
        <a
          className={className}
          target='_blank'
          href={href}
          >
          <Image
            src={img.src}
            alt="DG-inHouseIcon"
            height={img.h}
            width={img.w}
          />
        </a>
      }
    </>
  );
}
