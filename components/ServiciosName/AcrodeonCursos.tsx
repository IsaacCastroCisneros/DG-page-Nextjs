"use client"
import useAcordeon from '@/hooks/useAcordeon';
import Image from 'next/image';
import { SubAcordeonCur } from './components/SubAcordeonCur';
export const AcrodeonCursos = () => {
    const [abrirSub, , , handleAbrirSub] = useAcordeon()
    return (
        <>
            <div className='w-full shadow-lg'>
                <button className='px-5 lg:px-10 xl:px-10 2xl:px-10 py-4 bg-red-500 w-full rounded-lg flex items-center text-white font-bold justify-between text-lg' onClick={handleAbrirSub}>
                    <div className='flex items-center justify-between gap-3'>
                        <Image src="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2019/12/logo_planeamiento_ceplan.png" width="50" height="50" alt='siaf' className='hidden lg:block xl:block 2xl:block' />
                        <p className='text-left'>ELABORACIÓN DE INSTRUMENTOS DE GESTIÓN PEI POI PIA </p>
                    </div>
                    <div className='flex items-center justify-between gap-3'>
                        <i className="fi fi-rr-clock-three hidden lg:flex xl:flex 2xl:flex"></i>
                        <p className='hidden'>Sesiones</p>
                        <p>+</p>
                    </div>
                </button>
                {
                    abrirSub && (
                        <div className='w-fll h-auto p-5 rounded-lg space-y-4'>
                            <SubAcordeonCur />
                            <SubAcordeonCur />
                            <SubAcordeonCur />
                            <SubAcordeonCur />
                            <SubAcordeonCur />
                            <SubAcordeonCur />
                        </div>
                    )
                }
            </div>
            <button className='mx-auto my-10 bg-red-500 p-3 rounded-lg text-white flex items-center gap-3 font-bold swing'><i className="fi fi-rr-file-pdf flex text-2xl"></i>Descargar Temario PDF</button>
        </>
    )
}