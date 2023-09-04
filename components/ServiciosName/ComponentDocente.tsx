"use client"
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderOptions from '@/helpers/sliderOptions';
import {useContext,useState} from 'react'
import { programContext } from '@/app/context/ProgramContext';
import programData from '@/types/programData';
import { MyPopUp } from '../MyPopUp/MyPopUp';


export const ComponentDocente = () => 
{
    const{program}=useContext(programContext)
    const{profesores}=program as programData

    return (
        <section className='py-[1rem]'>
            <article className="mx-auto container">
                <div className="font-bold p-5 w-full lg:w-[70%] xl:w-[70%] 2xl:w-[70%]">
                    <p className="text-center text-4xl">Profesores</p>
                    <p className="text-center text-lg">Profesionales con amplia experiencia en la Gestión Pública</p>
                    <Slider {...sliderOptions}
                       slidesToShow={3}
                       slidesToScroll={3}
                       responsive={[
                         {
                           breakpoint: 900,
                           settings: {
                             slidesToShow: 2,
                             slidesToScroll: 2,
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
                         profesores.map((profesor,pos)=>
                            (
                                <Card key={pos} profesor={profesor}/>
                            ))
                       }
                    </Slider>
                    <p className='text-rojo font-bold text-center text-xl mt-10'>*Segun disponibilidad de los docentes</p>
                </div>
            </article>
        </section>
    )
}

function Card({profesor}:any )
{
    const[show,setShow] =useState<boolean>(false)
 
    return (
      <div>
        <div className="w-[240px] shadow-lg mx-auto my-5">
          <div className="bg-white">
            <Image
              src={profesor.avatar}
              height={256}
              width={240}
              alt="avatar de profesor"
            />
            <div className="p-3 w-full grid place-items-cente">
              <p className="text-center font-medium w-[100%] overflow-hidden whitespace-nowrap text-ellipsis" title={profesor.nombre} >{profesor.nombre}</p>
              <p className="text-center w-[100%] overflow-hidden whitespace-nowrap text-ellipsis" title={profesor.profesion} >{profesor.profesion}</p>
              <button onClick={()=>setShow(true)} className="px-7 font-semibold py-2 bg-blue-500 text-white rounded-md mx-auto mt-3 swing">
                Ver CV
              </button>
            </div>
          </div>
        </div>
        <MyPopUp
        setIsOpen={setShow}
        isOpen={show}
        popUp={
          <div className='p-[1.5rem] bg-white flex gap-[2rem] max-w-[70rem]'>
            <Image width={90} height={80} className='min-w-[20rem]' alt='avatar de profesor' src={profesor.avatar}/>
            <section className='flex flex-col flex-1'>
                <strong className='text-[1.5rem]' >{profesor.nombre}</strong>
                <strong>{profesor.profesion}</strong>
                <p className='mt-[1rem]'>
                    {profesor.descripcion}
                </p>
            </section>
          </div>
        }
      />
      </div>
    );
}
