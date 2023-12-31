"use client"

import diplomados from '@/interfaces/diplomados';
import React, { ReactNode } from 'react'

export const diplomadosContext = React.createContext<values>({diplomados:[]});

interface values
{ 
  diplomados:Array<diplomados>|[]
}

export const DiplomadosContext = ({children,diplomados}:{children:ReactNode,diplomados:Array<diplomados>}) => 
{
  const values=
  {
    diplomados
  }

  return (
    <diplomadosContext.Provider value={values} >
      {
        children
      }
    </diplomadosContext.Provider>
  )
}
