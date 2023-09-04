'use client'

import { programContext } from '@/app/context/ProgramContext';
import { cursosContext } from '@/app/cursos/context/CursosContext';
import { ComponentContador } from '@/components/contador/ComponentContador';
import cursos from '@/interfaces/cursos';
import programData from '@/types/programData';
import Image from 'next/image';
import {useContext} from 'react'

export const ContadorHeader = () => {

    const{program:curso}=useContext(programContext)
   const { imagen } = curso as programData;

    return (
        <section className="bg-blue-500 fixed top-0 w-full z-[99] hidden lg:block">
            <div className='flex items-center py-3 px-14 w-[70%] gap-[2rem]'>
                <Image src="/img/icons/logoBlanco.webp" width={190} height={54} alt='Desarrollo Global' />
                <Image src={imagen} width={130} height={70} alt='Desarrollo Global' className='rounded-md h-[70px]' />
                <p className='text-white font-bold'>Contabilidad Gubernamental en el SIAF RP</p>
            {/*     <ComponentContador /> */}
            </div>
        </section>
    )
}
