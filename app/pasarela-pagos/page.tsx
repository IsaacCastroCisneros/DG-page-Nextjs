import React from 'react'
import Header from './components/Header'
import CheckPoints from './components/CheckPoints'
import Detalle from './components/Detalle/Detalle'

export default function page() 
{
  return (
    <>
      <Header/>
      <CheckPoints/>
      <Detalle/>
    </>
  )
}
