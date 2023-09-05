import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProgramaInHouse,ProgramaInHouseForm } from '.';
import inHouseCardContext from '../context/inHouseCardContext';

export const ProgramaInHousePopUp = () => 
{
  const{titulo}=useContext(inHouseCardContext)

  return (
    <div className="flex">
      <section className="w-[581px] p-[48px] bg-[#04a5e2] popUp:hidden">
        <Image
          src={"/img/nuevo_logo_blanco.webp"}
          className="mb-[1rem]"
          width={180}
          height={50.25}
          alt="logo de desarrollog global"
        />
        <div className="flex items-start mb-[1rem]">
          <Image
            src={"/img/ImgInHouseInf.webp"}
            className="rounded-[.5rem]"
            width={300}
            height={263}
            alt="chica usando computadora"
          />
          <Image
            src="/img/FechaInHouse.webp"
            width={150}
            height={134}
            alt="flecha señalando"
            className="flex-1"
          />
        </div>
        <ProgramaInHouse />
        <p className="text-[24px] uppercase text-[#fff] block my-[.5rem]">
          {
            titulo
          }
        </p>
        <div className="flex gap-[.5rem]">
          <Link
            href="mailto:asesoria@desarrolloglobal.pe"
            className="flex rounded-[.5rem] items-center py-[6px] px-[12px] gap-[.5rem] bg-[#f8f9fa] hover:bg-[#dddddd]"
          >
            <Image
              src={"/img/iconEmail.webp"}
              width={20}
              height={16}
              alt="icono email"
            />
            asesoria@desarrolloglobal.pe
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=51933875021&text=Hola,%20solicito%20informaci%C3%B3n%20del%20%20del%20programa%20InHouse%20:HABILIDADES%20BLANDAS%20%20(WEB),%20mi%20correo%20es:"
            target='_blank'
            className="text-[#fff] rounded-[.5rem] items-center py-[6px] px-[12px] gap-[.5rem] bg-[#198754] hover:bg-[#0f5534] flex"
          >
            <Image
              src={"/img/iconWhatWhite.webp"}
              width={25}
              height={25}
              alt="icono whatsapp"
            />
            Solicitar por whatsapp
          </Link>
        </div>
      </section>
      <section className="w-[581px] p-[48px] bg-[#fff] popUp:px-[24px]">
        <ProgramaInHouse />
        <p className="text-[24px] text-[#0d6efd] my-[1rem]">
          HABILIDADES BLANDAS (WEB)
        </p>
        <p className="mb-[1rem]">
          Analisa y desarrolla las estratégias para establecer buenas relaciones
          interpersonales, gestionando tu tiempo y tus emociones a fin de
          potenciar las estrategias de los objetivos trazad...
        </p>
        <h2 className="text-[32px] mb-[1rem]">Solicíta una proforma aquí</h2>
        <ProgramaInHouseForm />
      </section>
    </div>
  );
}
