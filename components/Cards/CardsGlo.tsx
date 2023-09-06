"use client"

import { globalContext } from "@/context/GlobalContext"
import parsearFecha from "@/helpers/parsearFecha"
import useCart from "@/hooks/useCart"
import cartItem from "@/interfaces/cartItem"
import msg from "@/interfaces/msg"
import programData from "@/types/programData"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import {Dispatch,SetStateAction} from "react"


export const CardsGlo = (props:programData) => 
{
    const{id,titulo,tipo,precio,inicio,imagen,asesores,etiqueta}=props  
    const{user}=useContext(globalContext)
    const{updatingCart}=useCart()

    return (
      <>
        <div className="w-[307px] shadow-2xl rounded-lg mx-auto flex flex-col">
          <div>
            <Image
              src={imagen}
              alt="sSIAF BASICO"
              className="rounded-t-md w-full"
              width="330"
              height="220"
            />
          </div>
          <div className="p-5 flex-1 flex flex-col justify-between gap-[.2rem]">
            <div className="flex flex-col gap-[.3rem] text-[.8rem]">
              <div className="flex gap-[.5rem]">
                <div className="border border-blue-500 text-blue-500 font-bold rounded-full px-3">
                  {tipo}
                </div>
                <div className="border border-rojo text-rojo px-3 rounded-full font-bold flex items-center gap-1">
                  <span className="bg-red-500 w-[.5rem] h-[.5rem] rounded-[100%]"></span>{" "}
                  En vivo
                </div>
              </div>
              <p className="font-medium text-xl line-clamp-3">{titulo}</p>
            </div>
            <div>
              <div className="mt-auto">
                <p className="flex items-center gap-2">
                  <Image
                    src="/img/icons/IconCer.webp"
                    alt="icono de certticacion"
                    width="20"
                    height="20"
                  />{" "}
                  Certificación Desarrollo Global
                </p>
                <p className="flex items-center gap-2">
                  <Image
                    src="/img/icons/IconCalendarPrin.webp"
                    alt="icono de calendario"
                    width="20"
                    height="20"
                  />{" "}
                  {inicio.split("-")[2]}
                  &nbsp;de&nbsp;
                  {parsearFecha(inicio)}
                </p>
              </div>
              <div className="w-full flex justify-between mt-3">
                <div className="bg-[#FFC107] rounded-md p-2 px-[1rem]">
                  <p className="text-xs">
                    Normal{" "}
                    <span className="line-through">s/.{precio.normal}</span>
                  </p>
                  <p className="font-bold text-2xl">
                    S/ {precio.final.toFixed(2)}
                  </p>
                </div>
                <div className="text-rojo border border-rojo rounded-md p-2 font-bold">
                  <p className="text-2xl">{precio.descuento}%</p>
                  <p className="text-center -mt-2">Dscto</p>
                </div>
              </div>
              <div className="flex mt-5 justify-between h-[3rem]">
                <a
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=51${asesores[0].telefono}&text=Hola,%20solicito%20información%20del%20%20curso:${titulo},%20mi%20correo%20es:${user?.correo}`}
                  className="border border-black p-2 rounded-md flex items-center justify-between hover:bg-green-500 hover:text-white hover:border-white"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
                </a>
                <Link
                  href={`/${tipo}s/${etiqueta}`}
                  className="border border-black rounded-md flex items-center justify-center font-bold px-3 hover:bg-blue-500 hover:text-white hover:border-white"
                >
                  Más Información
                </Link>
                <button
                  className="flex items-center justify-center border border-black rounded-md p-2 hover:bg-violet-500 hover:text-white hover:border-white"
                  onClick={() =>
                    updatingCart({
                      id,
                      imagen,
                      titulo,
                      precio,
                    })
                  }
                >
                  <FontAwesomeIcon icon={faCartShopping} size="lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}



