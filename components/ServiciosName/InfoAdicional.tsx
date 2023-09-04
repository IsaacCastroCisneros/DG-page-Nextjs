"use client"

import { programContext } from '@/app/context/ProgramContext';
import programData from '@/types/programData';
import Image from 'next/image';
import { useContext } from 'react';
import parsearFecha from '@/helpers/parsearFecha'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCertificate, faClock } from '@fortawesome/free-solid-svg-icons';

export const InfoAdicional = () => 
{
   const{program}=useContext(programContext)
   const{inicio,total_sesiones}=program as programData

   console.log(inicio)

    return (
        <section className="bg-[#ECF5FF] shadow-lg" id='intersector'>
            <article className="container mx-auto p-5">
                <div className="grid gap-5 lg:gap-0 xl:gap-0 2xl:gap-0 grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 w-full lg:w-[70%] xl:w-[70%] 2xl:w-[70%]">
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon  className='text-myBlue1' size='2xl' icon={faCalendar} />
                        <div className="text-base font-semibold">
                            <p>Inicio</p>
                            <p className="-mt-1">{inicio.split('-')[2]} de {parsearFecha(inicio)}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon className='text-myBlue1'  size='2xl' icon={faClock} />
                        <div className="text-base font-semibold">
                            <p>Cantidad</p>
                            <p className="-mt-1">{total_sesiones} Sesiones</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon  className='text-myBlue1' size='2xl' icon={faCertificate} />
                        <div className="text-base font-semibold">
                            <p>Certificacion</p>
                            <p className="-mt-1">Desarrollo Global</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image src="/img/icons/IconLiveDiploma.webp" alt='' width="68" height="35" />
                        <div className="text-base font-semibold">
                            <p>Clases</p>
                            <p className="-mt-1">en vivo</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}