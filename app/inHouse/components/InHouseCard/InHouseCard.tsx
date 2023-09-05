'use client'

import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { InHouseButton } from '.';
import { MyPopUp } from '@/components/MyPopUp/MyPopUp';
import {ProgramaInHousePopUp} from '.'
import inHouseCardContext from './components/context/inHouseCardContext';
import inHouse from '@/interfaces/inHouse';
import { globalContext } from '@/context/GlobalContext';


export const InHouseCard = (props:inHouse) => 
{
  const[show,setShow]=useState<boolean>(false)
  const{user}=useContext(globalContext)

  const{titulo,color,imagen,asesores}=props

  const values=
  {
    setShow,
    ...props
  }

  console.log(color)

  return (
    <inHouseCardContext.Provider value={values} >
      <div className="flex flex-col h-[405px] px-[.3rem]">
        <Image
          src={imagen}
          height={218}
          width={325}
          className="w-[100%]"
          alt="DG-inHouse-card"
        />
        <section
          className={`flex justify-between flex-col flex-1 p-[16px] relative`}
          style={{backgroundColor:color}}
        >
          <span className="absolute top-0 left-[16px] translate-y-[-50%] bg-[#fff] py-[4px] px-[16px] flex items-center rounded-[.5rem]">
            <Image
              src={"/img/house.webp"}
              height={21}
              width={23}
              alt="DG-cardInHouse"
              className="mr-[.5rem]"
            />
            Programa In House
          </span>
          <h1 className={`font-medium text-[21px] line-clamp-2 ${(color==="#ffffff"||color===""||color==="1") ? 'text-[#000]':'text-[#fff]'}`} >{titulo}</h1>
          <div className="text-[#fff] flex w-[100%] gap-[.2rem] justify-between">
            <InHouseButton
              img={{ src: "/img/iconPencil.webp", h: 15, w: 15 }}
              label="Informacion del Programa"
              onClick={() => setShow(true)}
            />
            <InHouseButton
              href={`https://api.whatsapp.com/send?phone=51987756735&text=¡Hola Sheyla!,%20solicito%20información%20del%20%20del%20programa%20InHouse%20:${titulo},%20mi%20correo%20es:${user?.correo}`}
              img={{ src: "/img/whatsapp.webp", w: 24.8, h: 24.8 }}
            />
          </div>
        </section>
      </div>
      <MyPopUp
        isOpen={show}
        setIsOpen={setShow}
        popUp={<ProgramaInHousePopUp/>}
      />
    </inHouseCardContext.Provider>
  );
}
