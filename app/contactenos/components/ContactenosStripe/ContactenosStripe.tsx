import React, { ReactNode } from 'react'
import Image from 'next/image';

export const ContactenosStripe = () => {
  return (
    <div className=" bg-myPurple2 relative z-[9]">
      <ul className="text-[#fff] flex container flex-wrap !py-0">
        <Item>
          <p className='text-[.9rem]'>
            {`Nuestra empresa cuenta con la "Certificación de calidad" ISO 9001-2015`}
          </p>
        </Item>
        <Item>
          <Image
            src={"/img/logo-nav-bar.webp"}
            height={66}
            width={270}
            alt="DG-logo-nav-bar"
          />
        </Item>
        <Item>
          <strong>En Programas de Postgrado</strong>
        </Item>
        <Item>
          <Image
            src={"/img/Certificacion.webp"}
            height={96}
            width={203}
            alt="DG-logo-certificacion"
          />
        </Item>
      </ul>
    </div>
  );
}

function Item({children}:{children:ReactNode})
{
  return <li className="flex-1 flex justify-center items-center text-center p-[.8rem] min-w-[120px]">{children}</li>;
}