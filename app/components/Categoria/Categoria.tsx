import program from '@/types/program'
import React, { Dispatch, SetStateAction } from 'react'
import { categorias} from './helpers/categorias'
import {CategoriaButton} from '.'

interface props
{
  myProgram:program
  setMyProgram:Dispatch<SetStateAction<program>>
}

export const Categoria = ({myProgram,setMyProgram}:props) => {
  return (
    <div className='bg-primary rounded-[15rem] flex py-[.5rem] px-[.5rem] w-fit gap-[.5rem] my-0 mx-auto program-selector:rounded-[1.8rem] flex-wrap justify-between'>
      <CategoriaButton label={'proximos inicios'} program={myProgram} setMyProgram={setMyProgram} bigger/>
      {
        categorias.map((cat,pos)=>
            (
              <CategoriaButton key={pos} label={cat} program={myProgram} setMyProgram={setMyProgram} />
            ))
      }
      <CategoriaButton label={'inHouse'} href={'/inHouse'} />
      <CategoriaButton label={'seminarios'} href={'/seminarios'} />
      <CategoriaButton label={'grabados'} href={'https://grabados.desarrolloglobal.pe/'} blank/>
    </div>
  )
}

