import React from 'react'
import Image from 'next/image'
import footerBoxers from './helpers/footerBoxers/footerBoxes';
import { FooterBox } from './components/FooterBox';

export const Footer = () => 
{
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primaryDark py-[3rem]">
      <div className="container text-[#fff] ">
        <article className="flex flex-wrap mb-[1.6rem]">
          <section className="flex-1 p-[1rem] min-w-[197px]">
            <Image
              src={"/img/logo-nav-bar.webp"}
              width={200}
              height={49.39}
              alt="DG-logo"
              className="mb-[1.5rem]"
            />
            <p className="">
              Más de 12 años Capacitación para Funcionarios y Servidores
              Públicos ❤️️
            </p>
          </section>
          {footerBoxers.map((box, pos) => (
            <FooterBox key={pos} {...box} />
          ))}
        </article>
        <section className="relative block py-[1rem]">
          <span className="h-[2px] block w-[100%] bg-[#fff] absolute top-0"></span>
          <p className="block text-center">
            © Todos los derechos reservados © 2011 - {year} CENTRO DE
            CAPACITACIÓN Y DESARROLLO GLOBAL (DESARROLLO GLOBAL)
          </p>
        </section>
      </div>
    </footer>
  );
}
