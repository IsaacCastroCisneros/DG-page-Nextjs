"use client"
import cursos from '@/interfaces/cursos';
import React, { ReactNode } from 'react'

export const cursosContext = React.createContext<values>({curso:{}});

interface values
{ 
  curso:cursos|{}
}

export const CursosContext = ({children,curso}:{children:ReactNode,curso:cursos}) => 
{

  const values:values =
  {
    curso
  }

  return (
    <cursosContext.Provider value={values} >
      {
        children
      }
    </cursosContext.Provider>
  )
}
