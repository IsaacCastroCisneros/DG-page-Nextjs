'use client'

import { programContext } from '@/app/context/ProgramContext';
import programData from '@/types/programData';
import Image from 'next/image';
import {useContext} from 'react'

export const ContadorHeader = () => {

    const{program:curso}=useContext(programContext)
   const { imagen,titulo } = curso as programData;

    return (
        <section className="bg-blue-500 fixed top-0 w-full z-[99] hidden lg:block shadow-lg">
            <div className='flex items-center py-3 px-14 w-[70%] gap-[2rem]'>
                <Image src="/img/icons/logoBlanco.webp" width={190} height={54} alt='Desarrollo Global' />
                <Image src={imagen} width={130} height={70} alt='Desarrollo Global' className='rounded-md h-[70px]' />
                <p className='text-white font-bold'>{titulo}</p>
            {/*     <ComponentContador /> */}
            </div>
            <div className='bg-white px-[1rem] py-[.4rem]'>
                  <div className='max-w-[100%] flex w-[1000px] mx-auto gap-[4rem]'>
                     <Option label='Temario' section='#Temario' />
                     <Option label='Profesores' section='#Profesores' />
                     <Option label='Certificado' section='#Certificado' />
                     <Option label='Beneficios' section='#Beneficios' />
                     <Option label='Pagar en Linea' section='#Pagar en Linea' />
                  </div>
            </div>
        </section>
    )
}

function Option({section,label}:{section:string,label:string})
{
    return(
        <a href={section} className='text-black font-bold text-center' >
            {
                label
            }
        </a>
    )
}
