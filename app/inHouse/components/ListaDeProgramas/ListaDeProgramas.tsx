import React from 'react'
import { ListaAccordion } from './components/ListaAccordion';
import { MyButtons } from '../MyButtons/MyButtons';
import { MyBlock } from '@/components/MyBlock/MyBlock';

export const ListaDeProgramas = () => 
{
  return (
    <MyBlock
      header={{ h: "Lista de Programas de Capacitación" }}
      styles={{ container: "text-[#fff] bg-myDarkPurple",h:"soliciteUna1:text-[25px] text-[#fff]" }}
    >
      <ListaAccordion />
      <h2 className="text-[40px] font-extrabold block mt-[2rem] soliciteUna1:text-[25px] text-[#fff]">
        Solicite una propuesta sin compromiso
      </h2>
      <p className="text-[24px] block px-[20rem] mt-[.2rem] soliciteUna:px-[5rem] soliciteUna1:px-[1.3rem] soliciteUna1:text-[18px]">
        Si necesita Capacitar a su Personal en un tema específico. Envíenos sus
        datos, para elaborar una propuesta a la medida de sus necesidades
      </p>
      <MyButtons />
    </MyBlock>
  );
}
