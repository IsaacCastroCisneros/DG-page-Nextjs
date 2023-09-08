"use client"
import { seminarioContext } from '@/app/seminarios/[id]/context/SeminarioContext'
import { globalContext } from '@/context/GlobalContext'
import seminarios from '@/interfaces/seminarios'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useContext} from 'react'

export default function Promocion() 
{
  const{asesor,titulo,}=useContext(seminarioContext) as seminarios
  const{user}=useContext(globalContext)
  

  return (
    <div className="pt-[2rem] w-[100%]">
      <p className="text-white text-[1.1rem] block text-center mb-[1rem]">
        Estamos en linea 😃
      </p>
      <a
        target='_blank'
        href={`https://api.whatsapp.com/send?phone=${asesor[0].telefono}&text=Hola,%20solicito%20información%20del%20%20diploma:${titulo},%20mi%20correo%20es:${user?.correo}`}
        className="bg-green-500 text-white font-bold text-[1.7rem] w-[100%] px-[1rem] py-[.5rem] flex gap-[1rem] rounded-[.5rem] justify-center items-center"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
        {asesor[0].telefono}
      </a>
    </div>
  );
}
