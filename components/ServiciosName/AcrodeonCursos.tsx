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
    const {titulo,icono}=program as programData
   

    return (
        <>
            <div className='w-full shadow-lg'>
                <button className='px-5 lg:px-10 xl:px-10 2xl:px-10 py-4 bg-red-500 w-full rounded-lg flex items-center text-white font-bold justify-between text-lg' onClick={handleAbrirSub}>
                    <div className='flex items-center justify-between gap-3'>
                        <Image src={icono} width="50" height="50" alt='siaf' className='hidden lg:block xl:block 2xl:block' />
                        <p className='text-left'>{titulo}</p>
                    </div>
                    <div className='flex items-center justify-between gap-3'>
                        <FontAwesomeIcon icon={faClock} />
                        <p>{data.length}&nbsp;Sesiones</p>
                        <p>+</p>
                    </div>
                </button>
                {
                    abrirSub && (
                        <div className='w-fll h-auto p-5 rounded-lg space-y-4'>
                            {
                                data.map((dat:any)=>
                                    (
                                       <SubAcordeonCur key={dat.id} data={dat} />
                                    ))
                            }
                        </div>
                    )
                }
            </div>
          
        </>
    )
}