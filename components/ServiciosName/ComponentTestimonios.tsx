"use client"
import Image from "next/image";
import { Calificaciones } from "./components/Calificaciones"
import Slider from "react-slick";
import {useContext} from 'react'
import { programContext } from "@/app/context/ProgramContext";
import programData from "@/types/programData";
import sliderOptions from "@/helpers/sliderOptions";

export const ComponentTestimonios = () => 
{
    const{program}=useContext(programContext)
    const{testimonios}=program as programData

    return (
        <section className="my-20 pb-[5rem]" >
            <article className="container mx-auto">
                <div className="w-full lg:w-[70%] space-y-3">
                    <p className="font-bold text-2xl text-center">Testimonios de nuestros Alumnos</p>
                    <p className="font-bold text-center">Más de 50,000 alumnos capacitados</p>
                    <Calificaciones tipo='testi' />
                    <br />
                    <Slider {...sliderOptions}
                         slidesToShow={testimonios.length < 3 ? testimonios.length : 3}
                         slidesToScroll={testimonios.length < 3 ? testimonios.length : 3}
                         responsive={[
                           {
                             breakpoint: 900,
                             settings: {
                               slidesToShow: testimonios.length < 2 ? 1 : 2,
                               slidesToScroll: testimonios.length < 2 ? 1 : 2,
                             },
                           },
                           {
                             breakpoint: 640,
                             settings: {
                               slidesToShow: 1,
                               slidesToScroll: 1,
                             },
                           },
                         ]}
                       >
                       {
                         testimonios.map((testimonio,pos)=>
                         (
                            <Box key={pos} {...testimonio} />
                         ))
                       }
                    </Slider>
                </div>
            </article>
        </section>
    )
}

interface testimonio
{
    usuario: string;
    avatar: string;
    registro: string;
    comentario: string;
}


function Box(props:testimonio)
{
    const{avatar,usuario,comentario}=props

    return (
      <div>
        <div className="border-2 border-[#e5f1ff] rounded-lg w-[286px] p-5 mx-auto">
          <Image
            src={avatar}
            height={100}
            width={100}
            alt="Avatar de alumno"
            className="rounded-full mx-auto"
          />
          <p className="mt-5">
            {
              comentario
            }
          </p>
          <Image
            src="/img/icons/iconEstrellas.webp"
            alt="Desarrollo Global"
            width="115"
            height="19"
            className="rounded-t-lg mx-auto mt-3"
          />
          <p className="font-bold text-center mt-2">
            {
                usuario
            }
          </p>
          <p className="text-center mt-2">Servicio Publico</p>
        </div>
      </div>
    );
}