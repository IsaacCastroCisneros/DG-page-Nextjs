import React from 'react'
import { ClassicButton } from '@/components/ClassicButton/ClassicButton';
import Image from 'next/image';

export const MyButtons = ({styles}:{styles?:string}) => {
  return (
    <div className={`mt-[1.8rem] inline-flex gap-[1rem] flex-wrap myButtons:flex-col ${styles}`}>
      <ClassicButton
        label="Solicitar Cotización Aquí"
        styles="!flex-1 !bg-myBlue text-[#fff]"
      />
      <ClassicButton
        label={
          <p className="flex justify-between items-center text-[#fff] gap-[1rem] myButtons:w-fit">
            WhatsApp
            <Image
              src="/img/WhatsInHouse.webp"
              height={34}
              width={34}
              alt="DG-wp"
            />
          </p>
        }
        styles="!bg-green-500 myButtons:!flex-1 flex justify-center"
        href={"https://api.whatsapp.com/send?phone=51987756735&text=%C2%A1Hola%20Sheyla!,%20solicito%20informaci%C3%B3n%20de%20la%20modalidad%20In%20House"}
      />
    </div>
  );
}
