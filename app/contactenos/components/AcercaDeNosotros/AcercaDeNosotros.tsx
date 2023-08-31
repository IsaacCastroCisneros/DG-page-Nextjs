import { MyBlock } from '@/components/MyBlock/MyBlock'
import React, { ReactNode } from 'react'
import Image from 'next/image'

export const AcercaDeNosotros = () => 
{
  return (
    <MyBlock
      header={{
        h: "Acerca de Nosotros",
        p: "Conoce nuestra misión, visión y valores.",
      }}
      styles={{ p: "font-medium" }}
    >
      <article className="w-[972px] just-stuff !mt-[3rem]">
        <section className="flex items-center border-[1px] border-borderGrey1 overflow-hidden rounded-[.5rem] flex-wrap justify-center nosotros:flex-col">
          <div className="w-fit px-[4rem] nosotros:p-[2rem]">
            <Image
              src={"/img/logo-vertical-normal.webp"}
              height={200}
              width={200}
              alt="DG-logo-vertical-normal"
            />
          </div>
          <p className="bg-myGrey block p-[48px] text-left rounded-[.5rem] flex-1">
            Centro de Capacitación y Desarrollo Global es una Empresa Educativa
            privada dedicada a proveer desarrollo gerencial de amplio rango a
            los servidores civiles, técnicos y profesionales de nuestro país, a
            través de los servicios educativos en temas de gestión
            gubernamental. Venimos trabajando esforzadamente desde el año 2011
            brindando capacitaciones en línea y de manera presencial como
            diplomas, cursos, seminarios, conferencias y talleres con el
            objetivo de aportar a nuestros clientes un servicio de calidad.
          </p>
        </section>
        <section className="flex gap-[1rem] flex-wrap mt-[3rem]">
          <Box
            title="Misión"
            p="Desarrollar y fortalecer las competencias profesionales de los
        funcionarios públicos y privados para impulsar el talento y la
        productividad."
          />
          <Box
            title="Visión"
            p="Consolidarnos como una empresa educativa estratégica de las organizaciones públicas y privadas para el desarrollo de su talento humano."
          />
          <Box
            title="Valores"
            p={
              <>
                Sinceridad<br></br>Innovación<br></br>Mejora Continua<br></br>
                Proactividad<br></br>
              </>
            }
          />
        </section>
      </article>
    </MyBlock>
  );
}

function Box({title,p}:{title:string,p:string|ReactNode})
{
  return (
    <div className="flex flex-1 items-start flex-col border-borderGrey1 border-[1px] pt-[1rem]">
      <strong className="rounded-[0_2rem_2rem_0] bg-myPurple2 text-[#fff] py-[.3rem] pl-[2rem] pr-[7rem] text-[28px]">
        {title}
      </strong>
      <p className="p-[24px] block text-left">{p}</p>
    </div>
  );
}