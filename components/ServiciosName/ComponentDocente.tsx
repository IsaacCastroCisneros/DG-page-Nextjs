"use client"
import Image from 'next/image';
import Slider from "react-slick";
import { settings } from "@/helpers/ConfigSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ComponentDocente = () => {
    
    return (
        <section>
            <article className="mx-auto container">
                <div className="font-bold p-5 w-full lg:w-[70%] xl:w-[70%] 2xl:w-[70%]">
                    <p className="text-center text-4xl">Profesores</p>
                    <p className="text-center text-lg">Profesionales con amplia experiencia en la Gestión Pública</p>
                    <Slider {...settings}>
                        <div>
                            <div className="w-[240px] shadow-lg mx-auto my-5">
                                <div className='bg-white'>
                                    <Image src="https://s3.amazonaws.com/archivos-comunes/2018/profesores/Edwin_Huapaya.png" height={256} width={240} alt='Docente - Sercio Ramos' />
                                    <div className='p-3 w-full grid place-items-cente'>
                                        <p className='text-center font-medium'>Edwin  Huapaya</p>
                                        <p className='text-center'>Ingeniero de Sistemas</p>
                                        <button className='px-7 font-semibold py-2 bg-blue-500 text-white rounded-md mx-auto mt-3 swing'>Ver CV</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-[240px] shadow-lg mx-auto my-5">
                                <div className='bg-white'>
                                    <Image src="https://s3.amazonaws.com/archivos-comunes/2018/profesores/Edwin_Huapaya.png" height={256} width={240} alt='Docente - Sercio Ramos' />
                                    <div className='p-3 w-full grid place-items-cente'>
                                        <p className='text-center font-medium'>Edwin  Huapaya</p>
                                        <p className='text-center'>Ingeniero de Sistemas</p>
                                        <button className='px-7 font-semibold py-2 bg-blue-500 text-white rounded-md mx-auto mt-3 swing'>Ver CV</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-[240px] shadow-lg mx-auto my-5">
                                <div className='bg-white'>
                                    <Image src="https://s3.amazonaws.com/archivos-comunes/2018/profesores/Edwin_Huapaya.png" height={256} width={240} alt='Docente - Sercio Ramos' />
                                    <div className='p-3 w-full grid place-items-cente'>
                                        <p className='text-center font-medium'>Edwin  Huapaya</p>
                                        <p className='text-center'>Ingeniero de Sistemas</p>
                                        <button className='px-7 font-semibold py-2 bg-blue-500 text-white rounded-md mx-auto mt-3 swing'>Ver CV</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-[240px] shadow-lg mx-auto my-5">
                                <div className='bg-white'>
                                    <Image src="https://s3.amazonaws.com/archivos-comunes/2018/profesores/Edwin_Huapaya.png" height={256} width={240} alt='Docente - Sercio Ramos' />
                                    <div className='p-3 w-full grid place-items-cente'>
                                        <p className='text-center font-medium'>Edwin  Huapayasdsd</p>
                                        <p className='text-center'>Ingeniero de Sistemas</p>
                                        <button className='px-7 font-semibold py-2 bg-blue-500 text-white rounded-md mx-auto mt-3 swing'>Ver CV</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <p className='text-rojo font-bold text-center text-xl mt-10'>*Segun disponibilidad de los docentes</p>
                </div>
            </article>
        </section>
    )
}