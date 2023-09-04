"use client"

import cursos from '@/interfaces/cursos';
import diplomados from '@/interfaces/diplomados';
import diplomas from '@/interfaces/diplomas';
import React, { ReactNode } from 'react'

export const programContext = React.createContext<values>({program:{tipo:''}});

interface values
{ 
  program:diplomados|cursos|diplomas|{tipo:''}
}

export const ProgramContext = ({children,program}:{children:ReactNode,program:diplomados|cursos|diplomas}) => 
{
  const values=
  {
    program
  }

  return (
    <programContext.Provider value={values} >
      {
        children
      }
    </programContext.Provider>
  )
}
