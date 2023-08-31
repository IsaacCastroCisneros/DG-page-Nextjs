import React from 'react'
import Image from 'next/image'

export const FirstBanner = () => {
  return (
    <>
      <section className="max-w-[40rem] flex flex-col gap-[1rem] self-start pt-[4rem] firstBanner1:text-center firstBanner:pt-[0] firstBanner:self-center">
        <div className="flex items-center gap-[1rem]">
          <Image
            src={"/img/logo-nav-bar.webp"}
            className="firstBanner1:w-[200px]"
            height={73}
            width={300}
            alt="DG-logo"
          />
          <div className="firstBanner:hidden">
            <Image
              src={"/img/Certificacion.webp"}
              height={93}
              width={203}
              alt="DG-certificacion"
            />
          </div>
        </div>
        <h1 className="font-bold text-[2rem] text-[#fff] block firstBanner:pr-[0] pr-[10rem] firstBanner1:text-[1.8rem]">
          Centro de Capacitación y Desarrollo Global 🎯
        </h1>
        <p className="block pr-[12rem] firstBanner:pr-[0]">
          Mas de 12 años brindando programas virtuales; Somos una empresa
          educativa que cuenta con certificación de calidad ISO 9001-2015.
        </p>
      </section>
      <section className="firstBanner1:hidden">
        <Image
          src={"/img/genteIndex.webp"}
          height={400}
          width={630}
          alt="DG-gente-banner"
        />
      </section>
    </>
  );
}
