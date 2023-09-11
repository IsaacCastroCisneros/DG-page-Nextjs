"use client"

import { MyPopUp } from '@/components/MyPopUp/MyPopUp'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

export default function Page({searchParams}:any) 
{
    const[values,setValues]=useState<string>("")
    const[data,setData]=useState<any>(false)
    const[show,setShow]=useState<boolean>(false)
    const{search}=searchParams


    useEffect(()=>
    {
        if(search)
        {
            const myEntry = search.split('=')[1]||''
            if(myEntry.includes('EDGG'))
            {
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
        if(values.length<4)return

        const form=new FormData()
        form.append("text",values)
 
        const res= await axios.post('https://aula.desarrolloglobal.pe/v03/api/certificados',form)
        if(res)
        {
          setData(res.data)
          setShow(true)
        }
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

function Table({data}:{data:any} )
{
    return (
      <div className="bg-white">
        <strong className="text-red-500 px-[1.4rem] py-[1.2rem] text-[1.3rem] block border-[1px] border-[#dee2e6]">
          Certificados Verificados
        </strong>
        <thead>
          <tr className="tablet">
            <th>CODIGO</th>
            <th>NOMBRES</th>
            <th>CATEGORIA</th>
            <th>PROGRAMA</th>
            <th>MES/AÑO</th>
            <th>ESTADO</th>
          </tr>
        </thead>
      </div>
    );
}
