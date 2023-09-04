"use client"
import { programContext } from "@/app/context/ProgramContext"
import useAcordeon from "@/hooks/useAcordeon"
import programData from "@/types/programData"
import { faStackExchange } from "@fortawesome/free-brands-svg-icons"
import { faLayerGroup, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useContext} from 'react'

export const SubAcordeonCur = ({data}:{data:any}) => 
{
    const [abrirSub, alturaMaxima, contenidoRef, handleAbrirSub] = useAcordeon()
    const{program}=useContext(programContext)   
    const{tipo}=program as programData

    function isCurOrDip(tipo:string)
    {
       if(tipo==="curso")
       {
        return (
          <button
            className="px-5 lg:px-10 xl:px-10 2xl:px-10 py-5 bg-[#F4F5F7] w-full rounded-lg flex items-center justify-between shadow-lg"
            onClick={handleAbrirSub}
          >
            <div className="text-left flex flex-col w-[100%]">
              <span className="flex items-center w-[100%]">
                <span className="font-bold w-[5.5rem]">{data.titulo}:</span>
                <span className="flex-1">{data.sub_titulo}</span>
                <FontAwesomeIcon className="mr-auto text-primary" icon={faPlus} />
              </span>
            </div>
          </button>
        );
       }
       return(
        <div className="text-left flex flex-col py-[.5rem] border-b-[1px] border-gray-300">
            <span className="flex items-center">
              <FontAwesomeIcon className="text-gray-400 mr-[.4rem]" icon={faLayerGroup} />
              <span className="w-[5.5rem]">{data.titulo}:</span>
              <span className="flex-1">
              {data.sub_titulo}
              </span>
            </span>
        </div>
       )
    }

    return (
      <div className="w-full">
          {
            isCurOrDip(tipo)
          }
        {tipo==='curso' && (
          <div
            className={`w-full block overflow-hidden transition-all ease-in-out duration-300 rounded-lg `}
            style={{ maxHeight: abrirSub ? alturaMaxima : 0 }}
          >
            <div
              className="p-3 listing-container"
              ref={contenidoRef}
              dangerouslySetInnerHTML={{ __html: data.descripcion }}
            ></div>
          </div>
        )}
      </div>
    );
}