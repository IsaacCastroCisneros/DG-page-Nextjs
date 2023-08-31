"use client"

import Link from 'next/link';
import React,{useState} from 'react';
import Image from 'next/image';
import { ClassicButton } from '@/components/ClassicButton/ClassicButton';
import { MyPopUp } from '@/components/MyPopUp/MyPopUp';
import { SolicitaloAqui } from './components/SolicitaloAqui';

export const InHouseBanner = () => 
{
  const[show,setShow]=useState<boolean>(false)

  return (
    <>
      <div className="text-[#fff] flex">
        <section className="flex-1 block">
          <h1 className=" font-extrabold text-[36px] text-[#fff] inHouseBanner2:text-[25px] flex flex-col mb-[1.2rem] inHouseBanner:flex-row inHouseBanner:flex-wrap inHouseBanner:gap-[.4rem] justify-center">
            <span>Capacítate en nuestra</span>
            <span className="text-[#ffb300]"> Modalidad In House </span>
            <span>y cumple el PDP</span>
          </h1>
          <p className="text-[16px] font-medium block mb-[2rem] pr-[20rem] inHouseBanner:pr-[0] inHouseBanner:text-center">
            Solicite un Programa de Capacitación a la medida de su INSTITUCIÓN y
            Cumpla el Plan de Desarrollo de las Personas (PDP)
          </p>
          <div className="flex gap-[.5rem] pr-[10rem] inHouseBanner:pr-[0] inHouseBanner:flex-col">
            <ClassicButton
              styles="!flex-1"
              label="Solicitar Cotización Aquí"
              onClick={() => setShow(true)}
            />
            <Link
              className="px-[16px] inHouseBanner:flex-1 py-[8px] bg-green-500 rounded-[.5rem] flex justify-center"
              href={
                "https://api.whatsapp.com/send?phone=51987756735&text=%C2%A1Hola%20Sheyla!,%20solicito%20informaci%C3%B3n%20de%20la%20modalidad%20In%20House"
              }
              target="_blank"
            >
              <Image
                src={"/img/WhatsInHouse.webp"}
                alt="DG-wp"
                height={34}
                width={34}
              />
            </Link>
          </div>
        </section>
        <section className="flex-1 flex justify-end inHouseBanner:hidden">
          <Image
            src={"/img/inhouselogo.webp"}
            width={480}
            height={423}
            alt="DG-capacitate"
          />
        </section>
      </div>
      <MyPopUp
        isOpen={show}
        setIsOpen={setShow}
        popUp={<SolicitaloAqui setIsOpen={setShow} />}
      />
    </>
  );
}
