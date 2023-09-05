"use client"

import React, { useContext } from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCertificate, faComment, faLaptop, faLock, faQrcode, faTowerBroadcast } from '@fortawesome/free-solid-svg-icons';
import { programContext } from '@/app/context/ProgramContext';
import programData from '@/types/programData';

export const ComponentVacante = () => 
{
    const{program}=useContext(programContext)
    const{precio,asesores,titulo}=program as programData
    const{normal,final,descuento}=precio

    const telefono= [asesores[0].telefono,asesores[0].telefono_2].filter(tel=>tel&&tel!=="0")[0]

    return (
      <section className="bg-[#2000d1] pb-[2rem] px-[1rem]">
        <article className="container mx-auto">
          <div className="w-full lg:w-[70%]">
            <div className="flex items-center justify-around">
              <Image
                src="/img/icons/ChicaAmarillo.webp"
                alt="chica sonriendo señalando al fondo"
                width={375}
                height={444}
                className="-mt-32 hidden lg:block"
              />
              <div className="text-white py-5 lg:py-0">
                <p className="font-bold text-3xl text-center lg:text-end">
                  Separa tu <br /> vacante ahora
                </p>
                <p className="text-center lg:text-end ">
                  Aprovecha la oferta <br /> y registrate al Curso
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-md flex flex-wrap">
              <div className="w-full lg:w-1/2 flex items-center justify-center lg:border-2 lg:border-t-0 lg:border-l-0 lg:border-b-0 lg:border-r-blue-500 p-5 lg:p-0">
                <div className="space-y-2">
                  <p className="font-bold text-3xl text-center lg:text-left">
                    Qué Incluye el Curso :
                  </p>
                  <p className="flex items-center gap-2 text-lg">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="text-primary"
                    />{" "}
                    Certificación DesarrolloGlobal
                  </p>
                  <p className="flex items-center gap-2 text-lg">
                    <FontAwesomeIcon icon={faQrcode} className="text-primary" />{" "}
                    Certificado Digital
                  </p>
                  <p className="flex items-center gap-2 text-lg text-rojo">
                    <FontAwesomeIcon icon={faTowerBroadcast} /> 06 sesiones en
                    vivo
                  </p>
                  <p className="flex items-center gap-2 text-lg">
                    <FontAwesomeIcon icon={faLaptop} className="text-primary" />{" "}
                    Acceso aula virtual por un año
                  </p>
                  <p className="flex items-center gap-2 text-lg">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-primary"
                    />{" "}
                    Soporte durante las clases
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:p-5">
                <p className="font-bold text-blue-500 text-xl text-center">
                  Pagar en línea de manera segura <br /> con tarjeta de crédito
                  / débito
                </p>
                <p className="text-center">
                  Antes:{" "}
                  <span className="line-through">S/ {normal.toFixed(2)}</span>
                </p>
                <p className="text-rojo text-3xl font-bold text-center">
                  S/ {final.toFixed(2)}
                </p>
                <button className="flex items-center bg-blue-500 text-white rounded-md px-12 py-3 gap-2 font-bold mx-auto mt-3">
                  <FontAwesomeIcon icon={faCartShopping} /> Agregar al Carrito
                </button>
                <Image
                  src="/img/icons/IconTarjetas.webp"
                  alt="Desarrollo Global - Bancos"
                  width={264}
                  height={38}
                  className="mx-auto mt-3"
                />
                <p className="flex items-center text-center gap-2 justify-center">
                  <FontAwesomeIcon icon={faLock} />
                  Pagos seguros encriptados con seguridad SSL
                </p>
                <div className="bg-[#ffbf3f] rounded-full py-2 text-center mt-3">
                  Todos los precios incluyen IGV
                </div>
              </div>
            </div>

            <a
              href={`https://api.whatsapp.com/send?phone=51${telefono}&text=Hola consulto por tarifas corporativas y con orden de servicio (O/S) de ${titulo}`}
              target='_blank'
              className="bg-white flex text-[#33d366] font-bold text-md lg:text-lg items-center rounded-lg gap-4 p-3 w-full lg:w-[428px] mx-auto mt-10"
            >
              <Image
                src="/img/icons/WhatsAppIcon.webp"
                alt="logo de whatsapp"
                width={50}
                height={50}
              />
              <p>
                Consulte por tarifas corporativas y con orden de servicio (O/S).
              </p>
            </a>
          </div>
        </article>
      </section>
    );
}
