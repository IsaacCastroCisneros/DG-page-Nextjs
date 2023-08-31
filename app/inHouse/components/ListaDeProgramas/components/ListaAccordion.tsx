import React from 'react'
import {AccordionContainer} from './components/AccordionContainer'
import { accordeonList } from './helpers/accordeonList';

export const ListaAccordion = () => 
{
  return (
    <div className='w-[1296px] just-stuff py-[48px] px-[12rem] listaDeProgramas:px-[3rem] listaDeProgramas1:px-[0rem] listaDeProgramas1:bg-transparent rounded-[.5rem] bg-myPurple flex flex-col gap-[1rem]'>
      {
        accordeonList.map((acc,pos)=>(<AccordionContainer key={pos} {...acc} />) )
      }
    </div>
  );
}
