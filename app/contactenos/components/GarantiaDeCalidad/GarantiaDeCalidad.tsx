import { MyBlock } from '@/components/MyBlock/MyBlock'
import Image from 'next/image';
import React from 'react'

export const GarantiaDeCalidad = () => {
  return (
    <MyBlock styles={{ container: "bg-myGrey" }}>
      <article className="flex flex-wrap gap-[1rem] garantia:flex-col">
        <section className="flex-1 text-left garantia:text-center">
          <h3 className="text-[24px]">Garantía de Calidad de servicio</h3>
          <p>
            Centro de Capacitación y Desarrollo Global, cuenta con certificación
            ISO 9001-2015 para garantizar la calidad de nuestros programas de
            capacitación.
          </p>
          <p>PROGRAMAS DE POSTGRADO</p>
          <strong className="text-[24px]">Codigo: CO18.00048/U</strong>
        </section>
        <section className="flex-1 flex flex-col items-center">
          <h3 className='text-[24px]'>Certificación ISO 9001-2015</h3>
          <Image
            src="/img/Certificacion.webp"
            width={300}
            height={141}
            alt="DG-certificacion"
          />
          <button className='border-[2px] border-[#0d6efd] rounded-[2rem] px-[48px] py-[6px] bg-[#fff] text-[#0d6efd] font-bold block' >Ver Certificado ISO</button>
        </section>
      </article>
    </MyBlock>
  );
}
