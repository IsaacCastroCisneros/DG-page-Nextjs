"use client"

import { MyPopUp } from '@/components/MyPopUp/MyPopUp'
import popup from '@/interfaces/popup'
import Image from 'next/image'
import React,{useState,useEffect} from 'react'

export default function InitialPopups({initialPopups}:{initialPopups:Array<popup>}) 
{
  const[show,setShow]=useState<boolean>(false)

  useEffect(()=>
  {
    setShow(true)
  },[])


  return (
    <>
    <MyPopUp
      setIsOpen={setShow}
      isOpen={show}
      button='bg-black w-[2.5rem] h-[2.5rem] rounded-[100%] border-[1px] border-white flex justify-center items-center text-[1.5rem] text-white hover:text-white top-[0rem]'
      popUp=
      {
        <div className='flex max-w-[83rem] gap-[1rem] px-[.5rem] 1000px:flex-col'>
           {
             initialPopups.map((initialPopup,pos)=>
                (
                    <Popup key={pos} {...initialPopup} />
                ))
           }
        </div>
      }
     />
    </>
  )
}

function Popup({webp,jpg}:popup)
{
    return(
       <div className='bg-white p-[1rem] rounded-[.5rem] 1000px:p-[.5rem]'>
          <Image src={webp||jpg} alt='popup emergente' width={1800} height={1800} />
       </div>
    )
}
