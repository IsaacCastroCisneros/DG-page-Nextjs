"use client"

import React,{Dispatch, SetStateAction, useState} from 'react'
import MenuBar from './components/MenuBar/MenuBar'
import options from './interfaces/options'
import ChatBox from './components/ChatBox/ChatBox'
import Detalles from './components/Detalles/Detalles'
import Promocion from './components/Promocion/Promocion'

export const chatContenxt= React.createContext<values>(
  {
    option:'Chat en Vivo',
    participar:false,
    setParticipar:()=>null,
    setOption:()=>null,
  }
)

interface values
{
  option:options
  setOption:Dispatch<SetStateAction<options>>
  setParticipar:Dispatch<SetStateAction<boolean>>
  participar:boolean
}

export default function Chat() 
{
  const[option,setOption]=useState<options>('Chat en Vivo')
  const[participar,setParticipar]=useState<boolean>(false)

  const values=
  {
    option,
    setOption,
    participar,
    setParticipar
  }

  return (
    <chatContenxt.Provider value={values}>
      <div className="w-[24.3rem] bg-[#000a48] pt-[.7rem] flex flex-col">
        <MenuBar />
        <div className="flex-1 flex items-stretch">
          {option === "Chat en Vivo" && <ChatBox />}
          {option === "Detalles" && <Detalles/>}
          {option === "Promocion" && <Promocion/>}
        </div>
      </div>
    </chatContenxt.Provider>
  );
}
