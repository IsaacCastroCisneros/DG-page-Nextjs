import { CertificacionIsoBox } from '@/components/CertificacionIsoBox/CertificacionIso';
import { MyBlock } from '@/components/MyBlock/MyBlock'
import { Video } from '@/components/Video/Video';
import React from 'react'
import { MyButtons } from '../MyButtons/MyButtons';
import Image from 'next/image';

export const AcercaDeNosotros = () => {
  return (
    <MyBlock
      header={{
        h: "Acerca de Nosotros",
        p: "Más de 12 años brindando capacitaciones en Gestión Pública",
      }}
    >
     <Video styles={"mb-[2rem] mt-[.4rem]"} />
      <CertificacionIsoBox />
      <section className="grid grid-cols-[repeat(2,1fr)] gap-[.5rem] max-w-[100%] w-[55rem] másde14,000alumnoscapacitados:grid-cols-[100%] mb-[1rem]">
        <MyImage num={1} />
        <MyImage num={2} />
        <MyImage num={3} />
        <MyImage num={4} />
        <MyImage num={5} />
        <MyImage num={6} />
      </section>
      <h3 className="text-center font-extrabold text-[24px]">
        Más de 14, 000 alumnos capacitados
      </h3>
      <MyButtons />
    </MyBlock>
  );
}

function MyImage({num}:{num:number})
{
  return(
    <Image src={`/img/imgInHouse${num}.webp`} width={440} className='h-[100%] rounded-[.5rem] másde14,000alumnoscapacitados:w-[100%]' height={226} alt='DG-nosotrosImage'/>
  )
}