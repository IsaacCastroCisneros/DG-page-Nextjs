import React from 'react'
import Image from 'next/image'

export const CertificacionIsoBox = ({styles}:{styles?:string}) => {
  return (
    <div className={`mb-[4rem] px-[48px] py-[24px] shadow-2xl gap-[2rem] flex justify-center items-center max-w-[750px] flex-wrap ${styles}`}>
    <Image
      src="/img/Iso9001.webp"
      height={132.5}
      width={207.99}
      alt="DG-iso"
    />
    <section className="flex flex-col gap-[.3rem] flex-1">
      <strong className="mb-[.2rem] text-[30px] leading-[2.5rem] text-slate-900">
        Certificación ISO 9001-2015
      </strong>
      <p className="leading-[1.2rem] text-neutral-700">
        Centro de Capacitación y Desarrollo Global, cuenta con
        certificación ISO 9001-2015 para garantizar la calidad de nuestros
        programas de capacitación.
      </p>
      <strong>Cod: CO18.00048/U</strong>
    </section>
  </div>
  )
}
