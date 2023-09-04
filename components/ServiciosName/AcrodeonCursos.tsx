"use client"
import useAcordeon from '@/hooks/useAcordeon';
import Image from 'next/image';
import { SubAcordeonCur } from './components/SubAcordeonCur';
import { useContext } from 'react';
import { programContext } from '@/app/context/ProgramContext';
import programData from '@/types/programData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export const AcrodeonCursos = ({data}:{data:any}) => 
{
    const [abrirSub, , , handleAbrirSub] = useAcordeon()
    const{program}=useContext(programContext)
    const {titulo,icono,color,tipo}=program as programData


    return (
      <>
        <div className="w-full shadow-lg">
          <button
            className="px-5 lg:px-10 xl:px-10 2xl:px-10 py-4 w-full rounded-lg flex items-center text-white font-bold justify-between text-lg"
            onClick={handleAbrirSub}
            style={{ backgroundColor: color }}
          >
            <div className="flex items-center justify-between gap-3">
              <Image
                src={tipo==="curso"?icono:data.icono}
                width="50"
                height="50"
                alt="siaf"
                className="hidden lg:block xl:block 2xl:block"
              />
              <p className="text-left">{titulo}</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <FontAwesomeIcon icon={faClock} />
              {tipo === "curso" && <p>{data.length}&nbsp;Sesiones</p>}
              {tipo !== "curso" && <p>{data.sesiones.length}&nbsp;Sesiones</p>}
              <p>+</p>
            </div>
          </button>
          {abrirSub && (
            <div className={`w-full h-auto rounded-lg ${tipo==="curso" ? 'p-5 space-y-4':"p-[1rem] px-[1.5rem] my-shadow mt-[.8rem]"}`} >
              {
                tipo!=="curso"&&<span className="font-bold block mb-[.4rem]">Ejes tematicos</span>
              }
              {
                tipo==="curso"&&
                data.map((dat: any) => (
                    <SubAcordeonCur key={dat.id} data={dat} />
                  ))
              }  
              {
                tipo!=="curso"&&
                data.sesiones.map((dat: any) => (
                    <SubAcordeonCur key={dat.id} data={dat} />
                  ))
              }
            </div>
          )}
        </div>
      </>
    );
}