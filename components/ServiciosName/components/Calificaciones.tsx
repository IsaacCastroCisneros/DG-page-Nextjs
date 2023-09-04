"use client"
import { programContext } from '@/app/context/ProgramContext'
import programData from '@/types/programData'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useContext } from 'react'


export const Calificaciones = ({tipo} : {tipo: string}) => 
{
   const{program }=useContext(programContext)
   const{alumnos,tipo:tipoP}=program as programData

    return (
        <div className={`border rounded-lg mt-3 mx-auto flex flex-wrap justify-center md:justify-between lg:justify-between xl:justify-between 2xl:justify-between items-center w-full ${tipo === "header" ? "text-white border-white p-5 w-full" : "text-black border-gray-200 p-3 w-full lg:w-[75%] xl:w-[75%] 2xl:w-[75%]"}`}>
            <div className='flex gap-3 items-center'>
                <Image src="/img/icons/iconEstrellas.webp" alt='Desarrollo Global' width="93" height="16" className='rounded-t-lg' />
                <p className='font-bold'>4.6 de calificación</p>
            </div>
            <div className='flex items-center gap-3 font-bold'>
                <FontAwesomeIcon icon={faUsers} />
                <p className='text-sm lg:text-base xl:text-base 2xl:text-base capitalize'>{alumnos} alunos capacitados en este {tipoP}</p>
            </div>
        </div>
    )
}
