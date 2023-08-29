import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const notis=
[
  {
    title:'Diploma',
    fecha:'15/20/30',
    hora:'20:00',
    etiqueta:'fff',
    banner:"https://s3.us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2022/05/Presupuesto+Publico+en+el+SIAF+RP.webp"
  }   
]

export const NotiItems = () => 
{
  return (
    <ul className='py-[.5rem] border-b-[1px] border-borderGrey block max-h-[30rem] overflow-y-auto'>
       {
        notis.map((not,pos)=>(
            <Item key={pos} {...not} />
        ))
       }
    </ul>
  )
}

function Item({banner,title,fecha,etiqueta,hora}:any)
{
    return (
      <li className="flex items-center gap-[1rem] relative nav-bar:text-[.7rem] p-[.5rem]">
        <Image
          src={banner}
          width={100}
          height={67}
          alt="DG-cartImage"
          className="rounded-[.4rem]"
        />
        <section className="flex-1 flex flex-col">
          <strong className="line-clamp-3 text-ellipsis overflow-hidden">
            {title}
          </strong>
          <span>
            <strong>Fecha: </strong>
            {fecha}
          </span>
          <span>
            <strong>Hora: </strong>
            {hora}
          </span>
          <Link href={`/seminarios/${etiqueta}`} className='text-myLightBlue hover:underline' >Ver Seminario 👉</Link>
        </section>
      </li>
    );
}
