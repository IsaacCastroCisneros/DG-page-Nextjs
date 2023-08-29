"use client"
import Image from "next/image";
import { Calificaciones } from "./components/Calificaciones"
import Slider from "react-slick";
import { settings } from "@/helpers/ConfigSlider";

export const ComponentTestimonios = () => {

    return (
        <section className="my-20" >
            <article className="container mx-auto">
                <div className="w-full lg:w-[70%] space-y-3">
                    <p className="font-bold text-2xl text-center">Testimonios de nuestros Alumnos</p>
                    <p className="font-bold text-center">Más de 50,000 alumnos capacitados</p>
                    <Calificaciones tipo='testi' />
                    <br />
                    <Slider {...settings}>
                        <div>
                            <div className="border-2 border-[#e5f1ff] rounded-lg w-[286px] p-5 mx-auto">
                                <Image src="/img/icons/avatar.jpg" height={100} width={100} alt='Docente - Sercio Ramos' className="rounded-full mx-auto" />
                                <p className="mt-5">&quot;El profesor estuvo siempre disponible y dispuesto para resolver las dudas; eso ayuda para aprender mejor.&quot;</p>
                                <Image src="/img/icons/iconEstrellas.webp" alt='Desarrollo Global' width="115" height="19" className='rounded-t-lg mx-auto mt-3' />
                                <p className="font-bold text-center mt-2">Milena Stefany Polo Campos</p>
                                <p className="text-center mt-2">Servicio Publico</p>
                            </div>
                        </div>
                        <div>
                            <div className="border-2 border-[#e5f1ff] rounded-lg w-[286px] p-5 mx-auto">
                                <Image src="/img/icons/avatar.jpg" height={100} width={100} alt='Docente - Sercio Ramos' className="rounded-full mx-auto" />
                                <p className="mt-5">&quot;El profesor estuvo siempre disponible y dispuesto para resolver las dudas; eso ayuda para aprender mejor.&quot;</p>
                                <Image src="/img/icons/iconEstrellas.webp" alt='Desarrollo Global' width="115" height="19" className='rounded-t-lg mx-auto mt-3' />
                                <p className="font-bold text-center mt-2">Milena Stefany Polo Campos</p>
                                <p className="text-center mt-2">Servicio Publico</p>
                            </div>
                        </div>
                        <div>
                            <div className="border-2 border-[#e5f1ff] rounded-lg w-[286px] p-5 mx-auto">
                                <Image src="/img/icons/avatar.jpg" height={100} width={100} alt='Docente - Sercio Ramos' className="rounded-full mx-auto" />
                                <p className="mt-5">&quot;El profesor estuvo siempre disponible y dispuesto para resolver las dudas; eso ayuda para aprender mejor.&quot;</p>
                                <Image src="/img/icons/iconEstrellas.webp" alt='Desarrollo Global' width="115" height="19" className='rounded-t-lg mx-auto mt-3' />
                                <p className="font-bold text-center mt-2">Milena Stefany Polo Campos</p>
                                <p className="text-center mt-2">Servicio Publico</p>
                            </div>
                        </div>
                        <div>
                            <div className="border-2 border-[#e5f1ff] rounded-lg w-[286px] p-5 mx-auto wenas">
                                <Image src="/img/icons/avatar.jpg" height={100} width={100} alt='Docente - Sercio Ramos' className="rounded-full mx-auto" />
                                <p className="mt-5">&quot;El profesor estuvo siempre disponible y dispuesto para resolver las dudas; eso ayuda para aprender mejor.&quot;</p>
                                <Image src="/img/icons/iconEstrellas.webp" alt='Desarrollo Global' width="115" height="19" className='rounded-t-lg mx-auto mt-3' />
                                <p className="font-bold text-center mt-2">Milena Stefany Polo Campos</p>
                                <p className="text-center mt-2">Servicio Publico</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </article>
        </section>
    )
}
