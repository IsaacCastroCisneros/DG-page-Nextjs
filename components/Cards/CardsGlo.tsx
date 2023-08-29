"use client"

import { globalContext } from "@/context/GlobalContext"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"

interface props
{
  id:string
  titulo:string
  tipo:string
  precio:{normal:string,final:string,descuento:string}
  inicio:string
  imagen:string
}

export const CardsGlo = (props:props) => 
{
    const{id,titulo,tipo,precio,inicio,imagen}=props  
    const{setCart,setShowMsg}=useContext(globalContext)

    return (
      <>
        <div className="2xl:w-[330px] xl:w-[330px] shadow-2xl rounded-lg mx-auto">
          <div>
            <Image
              src={imagen} 
              alt="sSIAF BASICO"
              className="rounded-t-md w-full"
              width="330"
              height="220"
            />
          </div>
          <div className="p-5">
            <div className="flex gap-3">
              <div className="border border-blue-500 text-blue-500 font-bold rounded-full px-3">
                {tipo}
              </div>
              <div className="border border-rojo text-rojo px-3 rounded-full font-bold flex items-center gap-1">
                <i className="fi fi-ss-bullet flex"></i>En vivo
              </div>
            </div>
            <p className="font-medium text-xl mt-3">
              {
                titulo
              }
            </p>
            <div className="mt-2">
              <p className="flex items-center gap-2">
                <Image
                  src="/img/icons/IconCer.webp"
                  alt="Desarrollo Global"
                  width="20"
                  height="20"
                />{" "}
                Certificación Universitaria
              </p>
              <p className="flex items-center gap-2">
                <Image
                  src="/img/icons/IconCalendarPrin.webp"
                  alt="Desarrollo Global"
                  width="20"
                  height="20"
                />{" "}
                {
                  inicio
                }
              </p>
            </div>
            <div className="w-full flex justify-between mt-3">
              <div className="bg-[#FFC107] rounded-md p-2">
                <p className="text-xs">
                  Normal <span>{precio.normal}</span>
                </p>
                <p className="font-bold text-2xl">{precio.final}</p>
              </div>
              <div className="text-rojo border border-rojo rounded-md p-2 font-bold">
                <p className="text-2xl">13%</p>
                <p className="text-center -mt-2">Dscto</p>
              </div>
            </div>
            <div className="flex mt-5 justify-between">
              <Link
                href="google"
                className="border border-black p-2 rounded-md flex items-center justify-between hover:bg-green-500 hover:text-white hover:border-white"
              >
                <i className="fi fi-brands-whatsapp text-3xl flex"></i>
              </Link>
              <Link
                href="mas"
                className="border border-black rounded-md flex items-center justify-center font-bold px-3 hover:bg-blue-500 hover:text-white hover:border-white"
              >
                Más Información
              </Link>
              <button
                className="flex items-center justify-center border border-black rounded-md p-2 hover:bg-violet-500 hover:text-white hover:border-white"
                onClick={() => {
                  setCart((prev) => {
                    const isIn = prev.find((item) => item.id === id);
                    if (isIn) return prev;
                    
                    setShowMsg({show:true})
                    return [
                      ...prev,
                      {
                        img: "https://s3.us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2022/05/Presupuesto+Publico+en+el+SIAF+RP.webp",
                        name: "PREPARACIÓN PARA EL EXAMEN DE CERTIFICACIÓN ANTE OSCE",
                        price: { discount: "327", normal: "527" },
                        id
                      },
                    ];
                  });
                }}
              >
                <i className="fi fi-ss-shopping-cart-add flex text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
}