"use client"

import Image from 'next/image';
import { AcrodeonCursos } from './AcrodeonCursos';
import { ReactNode, useContext } from 'react';
import { programContext } from '@/app/context/ProgramContext';
import programData from '@/types/programData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faSatelliteDish } from '@fortawesome/free-solid-svg-icons';

export const Contenido = ({data}:{data:any}) => 
{
    const{program}=useContext(programContext)
    const{total_sesiones,banner,tipo,objectivos}=program as programData

    function renderingAccordion(tipo:string):ReactNode
    {
        if(tipo==="curso")
        {
            return(
                <AcrodeonCursos data={data} />
            )
        }
        return data.map((dat:any)=>
        (
            <AcrodeonCursos data={dat} key={dat.id} />
        ))  
    }

    return (
      <section className='px-[1rem]'>
        <article className="container mx-auto">
          <div className="w-full lg:w-[70%] xl:W-[70%] 2xl:w-[70%] lg:px-10 xl:px-10 2xl:px-10">
            <p className="text-center text-rojo font-bold text-lg mt-7 flex gap-[.5rem] w-[100%] justify-center">
              <FontAwesomeIcon size="2xl" icon={faSatelliteDish} /> Este {tipo}{" "}
              contiene {total_sesiones} sesiones de clases en vivo
            </p>
            <Image
              src={banner}
              width="856"
              height="347"
              alt="SIAF"
              className="mx-auto w-full rounded-md mt-5 h-full lg:h-[260px]"
            />
            <p className="font-bold text-center text-2xl mt-10" id='Temario'>
              Contenido Tematico
            </p>
            <div className="mt-10 flex flex-col gap-[1rem]">
              {renderingAccordion(tipo)}
            </div>
            <div className="w-[100%] my-10 flex justify-center">
              {objectivos && (
                <a
                  href={objectivos}
                  target="_blank"
                  className="bg-red-500 inline-flex p-3 rounded-lg text-white items-center gap-3 font-bold swing"
                >
                  <FontAwesomeIcon size="2xl" icon={faFilePdf} />
                  Descargar Temario PDF
                </a>
              )}
            </div>
          </div>
        </article>
      </section>
    );
}