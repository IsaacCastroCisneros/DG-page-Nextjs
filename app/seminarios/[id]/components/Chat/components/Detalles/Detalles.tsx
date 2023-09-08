"use client"
import { seminarioContext } from '@/app/seminarios/[id]/context/SeminarioContext'
import seminarios from '@/interfaces/seminarios'
import Image from 'next/image'
import React,{useContext} from 'react'

export default function Detalles() 
{
  const{titulo,profesor}=useContext(seminarioContext) as seminarios
  

  return (
    <div className="text-[1.6rem] flex flex-col pt-[1rem]">
      <strong className="text-[#3d87f5] ">Tema del Seminario</strong>
      <strong className="text-white block mb-[1rem]">{titulo}</strong>
      <strong className="text-[#3d87f5] mb-[1rem]">¿Quien es el Docente?</strong>
      <section>
        <div className="flex items-center gap-[1rem] mb-[1rem]">
          <Image
            src={profesor.perfil}
            width={100}
            height={100}
            alt="avatar de profesor de seminario"
            className="rounded-[100%]"
          />
          <p className='text-[1.8rem] text-white'>
            {
                profesor.nombre
            }
          </p>
        </div>
        <p className='text-white text-[16px]'>
            {profesor.descripcion}
        </p>
      </section>
    </div>
  );
}
