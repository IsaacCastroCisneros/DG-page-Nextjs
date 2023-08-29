import React from 'react'
import Image from 'next/image'

interface props
{
  img:string
}

export const Entidad = ({img}:props) => 
{
  return (
    <div>
      <Image src={img} width={180} height={56} className='h-[56px]' alt='DG-entidad' />
    </div>
  )
}
