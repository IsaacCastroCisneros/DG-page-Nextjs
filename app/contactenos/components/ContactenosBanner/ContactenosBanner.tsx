import React from 'react'
import Image from 'next/image';

export const ContactenosBanner = () => {
    return (
      <div className="bg-[#c2c8f9]  relative">
        <article className="container !py-[3rem] flex justify-between">
          <section className="text-[#1900a2] flex-1 flex flex-col contactenosBanner:items-center">
            <h1 className="!font-semibold text-[40px] inline-flex flex-col contactenosBanner:items-center contactenosBanner:text-[28px]">
              <span>Centro de Capacitación y </span>
              <span className="text-[#0757cd]">Desarrollo Global 🎯</span>
            </h1>
            <strong className="mt-[.8rem] mb-[1.5rem] block contactenosBanner:text-center">
              Mas de 12 años formando servidores públicos
            </strong>
            <div className="grid grid-cols-[repeat(2,minmax(0,270px))] w-[100%] gap-[2rem] contactenosBanner:grid-cols-[repeat(2,1fr)] ">
              <Box
                img={{ img: "NosoIcon1.webp", h: 54, w: 47 }}
                p="Capacitando"
                strong="+ 12 años"
              />
              <Box
                img={{ img: "NosoIcon2.webp", h: 42, w: 67 }}
                p="Alumnos Virtuales"
                strong="+ 7,000"
              />
              <Box
                img={{ img: "NosoIcon3.webp", h: 53, w: 60 }}
                p="Alumnos Presenciales"
                strong="+ 4,000"
              />
              <Box
                img={{ img: "NosoIcon4.webp", h: 58, w: 40 }}
                p="Alumnos Certificados"
                strong="+ 14,000"
              />
            </div>
          </section>
          <section className='flex-1 relative contactenosBanner:hidden'>
            <Image
              src={"/img/LogoNosotros.webp"}
              width={432}
              height={476}
              className='absolute right-0 top-0'
              alt="DG-LogoNosotros"
            />
          </section>
        </article>
      </div>
    );
}

function Box({img,p,strong}:{img:{img:string,h:number,w:number},p:string,strong:string})
{
   return (
     <div className="flex items-center contactenosBanner:justify-center gap-[1rem] flex-wrap">
       <Image
         src={`/img/${img.img}`}
         height={img.h}
         width={img.w}
         alt="DG-NosoIcon1"
       />
       <section className='flex flex-col items-center'>
         <p className="text-[14px]">{p}</p>
         <strong className="text-[32px] contactenosBanner:text-[28px]">{strong}</strong>
       </section>
     </div>
   );
}