"use client"

import diplomados from '@/interfaces/diplomados';
import React, { ReactNode } from 'react'

export const diplomasContext = React.createContext<values>({diplomas:[]});

interface values
{ 
  diplomas:Array<diplomados>|[]
}

export const DiplomasContext = ({children,diplomas}:{children:ReactNode,diplomas:Array<diplomados>}) => 
{
  const values=
  {
    diplomas
  }

  return (
    <diplomasContext.Provider value={values} >
      {
        children
      }
    </diplomasContext.Provider>
  )
}
