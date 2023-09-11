"use client"

import { MyPopUp } from '@/components/MyPopUp/MyPopUp'
import { globalContext } from '@/context/GlobalContext'
import axios from 'axios'
import React, { useEffect, useRef, useState,useContext, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface row
{
  cod_registro_0:     string;
  cod_registro_1:     string;
  nombres:            string;
  dni:                string;
  categoria:          string;
  programa:           string;
  mes:                string;
  year:               string;
  horas_certificadas: string;
  fecha_inicio:       string;
  fecha_fin:          string;
  estado:             string;
}

export default function Page({searchParams}:any) 
{
    const[values,setValues]=useState<string>("")
    const[data,setData]=useState<Array<row>>([])
    const[show,setShow]=useState<boolean>(false)
    const{search}=searchParams
    const{setShowMsg}=useContext(globalContext)


    useEffect(()=>
    {
        if(search)
        {
          if(search.includes('EDGG'))
          {
              console.log('sii')
               submitData(search)
            }
        }
    },[])

    async function  submittingForm(e:any)
    {
       e.preventDefault()
       submitData(values)
    }

    async function submitData(values:string)
    {
        if(values.length<4)return setShowMsg({show:true,type:"fail",content:"El DNI o codigo no es correcto"})

        const form=new FormData()
        form.append("text",values)
 
        const res= await axios.post('https://aula.desarrolloglobal.pe/v03/api/certificados',form)
        if(res.data)
        {
          setData(res.data)
          setShow(true)
          return
        }
      
        setShowMsg({show:true,type:"fail",content:"El DNI o codigo no es correcto"})

    }

    return (
      <>
      <div className="bg-[#1f44a7] text-[#fff] py-[4rem] px-[1.2rem]">
        <div className="w-[57rem] max-w-[100%] mx-auto text-center">
          <h1 className="text-[2.5rem] text-white block mb-[5.5rem]">
            Certificados Digitales de Desarrollo Global
          </h1>
          <form className="flex flex-col mb-[2rem]" onSubmit={submittingForm} >
            <label className="text-[1.5rem] block mb-[1rem]">
              Digite su N° de DNI, nombres completos o código (Ejem. 22000)
            </label>
            <div className='flex gap-[4rem] justify-center'>
              <input
                type="text"
                value={values}
                className="text-black max-w-[423px] flex-1 px-[1rem] py-[.7rem] outline-none border-[3px] focus:border-primary rounded-[.4rem] text-[1.3rem]"
                onChange={(e) => setValues(e.target.value)}
              />
              <button className='bg-primary px-[3rem] py-[.5rem] font-bold text-[1.5rem] rounded-[.5rem]'>
                Buscar
              </button>
            </div>
          </form>
          <p>
            {`* Al darle "BUSCAR" acepta la POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES`}
          </p>
        </div>
      </div>
      <MyPopUp isOpen={show} setIsOpen={setShow} popUp={<Table data={data} />} />
      </>
    );
}

function Table({data}:{data:Array<row>} )
{
    function Cell({children,className=""}:{children:ReactNode,className?:string})
    {
      return(
        <strong className={twMerge('text-center px-[2rem] py-[1rem] flex-[1] block',className)}>{children}</strong>
      )
    }

    function Block(props:row)
    {
      const{cod_registro_0,cod_registro_1,nombres,categoria,programa,mes,year,estado}=props

      const myEstado = estado === "entregado" ? (<>Entregado</>) : estado === "aula" ? (<>En Aula Virtual</>) : (<>En Oficina</>)

      return(
        <div className='flex w-[100%] border-b-[1px] border-[#dee2e6]'>
           <Cell>{cod_registro_0}{cod_registro_1}</Cell>
            <Cell className='flex-[2]'>{nombres}</Cell>
            <Cell>{categoria}</Cell>
            <Cell>{programa}</Cell>
            <Cell>{mes}/{year}</Cell>
            <Cell>{myEstado}</Cell>
        </div>
      )
    }

    return (
      <div className="bg-white w-[1137px] max-w-[100%] overflow-x-auto">
        <strong className="text-red-500 px-[1.4rem] py-[1.2rem] text-[1.3rem] block border-[1px] border-[#dee2e6]">
          Certificados Verificados
        </strong>
        <div className='flex w-[100%] border-[#dee2e6] border-b-[1px]'>
            <Cell>CODIGO</Cell>
            <Cell className='flex-[2]'>NOMBRES</Cell>
            <Cell>CATEGORIA</Cell>
            <Cell>PROGRAMA</Cell>
            <Cell>MES/AÑO</Cell>
            <Cell>ESTADO</Cell>
        </div>
        {
          data.map((data,pos)=>
          (
             <Block key={pos} {...data} />
          ))
        }
      </div>
    );
}
