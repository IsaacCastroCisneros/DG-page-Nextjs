"use client"
import Image from 'next/image';
import { Calificaciones } from './components/Calificaciones';

import { useEffect, useState } from 'react';
import useObserver from '@/hooks/useObserver';
import { ContadorHeader } from './components/ContadorHeader';


export const Header = () => {


    const [observe, setElement, entries] = useObserver({
        threshold: 0.100,
        root: null
    })

    const [prueba, setPrueba] = useState<boolean>(true)

    useEffect(() => {
        const intersector: NodeListOf<Element> = document.querySelectorAll("#intersector");
        setElement(intersector)
    }, [setElement])

    useEffect(() => {
        entries.forEach((element: any) => {
            setPrueba(element.isIntersecting)
        });
    }, [entries, observe])

    return (
        <section className="bg-gradient-to-b from-[#4605fa] via-[#865dfb] to-[#865dfb]">
            {
                !prueba && (
                    <ContadorHeader />
                )
            }
            <article className="container flex mx-auto p-10 flex-wrap">
                <div className="w-full lg:w-[70%] xl:w-[70%] 2xl:w-[70%]">
                    <div className='w-full lg:w-[80%] xl:w-[80%] 2xl:w-[80%] space-y-4'>
                        <h1 className="text-[#ffb300] font-bold text-xl">Curso Especializado</h1>
                        <h2 className="text-white font-bold text-5xl">PREPARACIÓN PARA EL EXAMEN DE CERTIFICACIÓN ANTE OSCE</h2>
                        <p className="text-white text-lg">Te invitamos a participar con nosotros en  MODALIDAD VIRTUAL 100 % EN VIVO en el ÚNICO CURSO ESPECIALIZADO donde te capacitamos con temas actualizados de la Directiva de Certificación actualizadas, para que RINDAS CON ÉXITO TU EXAMEN ANTE OSCE, con nuestra metodología a base de SIMULACRO TIPO OSCE </p>
                        <Calificaciones tipo='header' />

                    </div>
                </div>
                <div className="w-full lg:w-[30%] relative lg:static lg:px-14 z-[999]">
                    <div className={`w-[320px] mx-auto bg-white rounded-lg block lg:fixed shadow-lg mt-5 transition-all ease-in-out duration-300 ${!prueba && "lg:-mt-24"}`}>
                        {
                            prueba && (
                                <Image src="https://s3.us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2022/05/Preparacion+para+el+examen+ante+OSCE.webp" alt='SOCE' width="320" height="212" className="hidden lg:block rounded-t-md" />
                            )
                        }
                        <div className='p-5'>
                            <div className=''>
                                <p className='text-center font-bold text-2xl'>Matricúlate AHORA</p>
                                <p className='text-center font-bold'>con un descuento especial 👇</p>
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <div>
                                    <p className='font-bold text-3xl text-center'>S/ 337.<span className='text-sm'>00</span></p>
                                    <p className='text-rojo text-sm font-semibold text-center'>Normal: <span>S/ 407.00</span></p>
                                </div>
                                <div className='bg-rojo text-white font-bold p-3 rounded-lg'>
                                    <p className='text-3xl flex items-center gap-2'>18% <span className='text-lg'>Dsct</span></p>
                                </div>
                            </div>
                            <div>
                                <form action="" className='space-y-5 mt-5'>
                                    <input type="text" className='w-full p-2 border border-black rounded-md' placeholder='nombre' />
                                    <input type="text" className='w-full p-2 border border-black rounded-md' placeholder='nombre' />
                                    <input type="text" className='w-full p-2 border border-black rounded-md' placeholder='nombre' />
                                    <div className='flex items-center gap-3'>
                                        <input type="checkbox" className='rounded-full' />
                                        <span className='text-sm'>Acepto políticas de privacidad o datos</span>
                                    </div>
                                    <button className='bg-blue-500 text-white font-bold flex items-center py-3 rounded-md gap-2 text-lg w-full justify-center'>
                                        <i className="fi fi-br-attribution-pencil flex"></i>
                                        <span>Solicitar Informacion</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}