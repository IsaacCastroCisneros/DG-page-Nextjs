"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import { chatContenxt } from '../../../Chat'

export default function Pariticipar() 
{
  const{setParticipar}=useContext(chatContenxt)

  return (
    <div className="bg-[#6c757d] px-[1.4rem] py-[.7rem] text-white">
          <div className="flex items-center gap-[.7rem] mb-[1rem]">
            <section className="rounded-[.2rem] bg-white p-[.3rem]">
              <Image
                src="/img/NosotrosDesarrollo.webp"
                width={55}
                height={48}
                alt="logo de desarrollo global"
              />
            </section>
            <strong>Reglas del chat</strong>
          </div>
          <p className='mb-[1rem]'>
            Sigue nuestro Código de Conducta No toleramos comentarios racistas,
            sexistas o abusivos Sé respetuoso, no opines sobre la apariencia
            física de las personas Genera una conversación positiva con
            preguntas claras y <strong>sin spam</strong>
          </p>
          <button className='px-[1rem] text-center uppercase bg-[#0d6efd] py-[.5rem] w-[100%] rounded-[.3rem] text-[1.1rem] font-bold'
           onClick={()=>setParticipar(true)}
           >
             entiendo, quiero pariticipar
          </button>
        </div>
  )
}
