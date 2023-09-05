"use client"

import { programContext } from '@/app/context/ProgramContext';
import { globalContext } from '@/context/GlobalContext';
import programData from '@/types/programData';
import Image from 'next/image';
import { useContext } from 'react';
export const ComponentWhats = () => 
{
    const{program}=useContext(programContext)
    const{asesores}=program as programData

    return (
        <section className="bg-[#00c9a2] py-[1.5rem] px-[1rem]">
            <article className="container mx-auto">
                <div className='w-full lg:w-[70%]'>
                    <p className="text-white font-bold text-3xl">✍Hablemos por Whatsapp</p>
                    <p className="text-white mt-5">Comunícate con nuestros asesores para brindarte asesoría personalizada.</p>
                    <div className='w-full flex justify-center items-center gap-[1rem] flex-wrap max-w-[50rem]'>
                       {
                         asesores.map((asesor,pos)=>
                            (
                                <Box key={pos} {...asesor} />
                            ))
                       }
                    </div>
                </div>
            </article>
        </section>
    )
}

interface asesor
{
    nombre: string;
    descripcion: string;
    profesion: string;
    telefono: string;
    telefono_2: string;
    avatar: string;
}

function Box(props:asesor)
{
 
  const{avatar,nombre,telefono,telefono_2,descripcion}=props

  const phomes=[telefono_2,telefono].filter(phone=>phone&&phone!=="0")
  const{program}=useContext(programContext)
  const{titulo}=program as programData

  return (
    <div className="bg-white w-[300px] rounded-md p-5 relative mt-20">
      <Image
        src={avatar}
        alt="imagen de asesor"
        width={120}
        height={120}
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[120px] w-[120px] rounded-[100%] border-[5px] border-[#00c9a2]"
      />
      <p className="text-center font-bold mt-[2.8rem]">{nombre}</p>
      <p className="text-center font-bold">Asesor(a) Académica</p>
      <p className="text-center font-bold text-3xl">WHATSAPP</p>
      {phomes.map((phome, pos) => (
        <a
          key={pos}
          target='_blank'
          className="flex border-2 border-green-500 rounded-full w-[202px] mx-auto items-center  relative h-[40px] mt-1"
          href={`https://api.whatsapp.com/send?phone=51${phome}&text=Hola,%20solicito%20información%20de%20%20:${titulo}`}
        >
          <Image
            src="/img/icons/WhatsAppIcon.webp"
            alt="logo whatsapp"
            width={44}
            height={44}
            className="absolute left-0"
          />
          <p className="text-green-500 font-bold text-2xl ml-14">{phome}</p>
        </a>
      ))}
    </div>
  );
}

