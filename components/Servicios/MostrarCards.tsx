"use client"

import { ReactNode, useEffect, useState } from "react"
import program from "@/types/program"
import { CardsGlo } from "../Cards"
import { Categoria } from "@/app/components/Categoria"
import Link from "next/link"
import getRequest from "@/helpers/getRequest"
import apiurl from "@/types/apiUrl"

interface props
{
  program:program,
  children?:ReactNode
  programSelector?:boolean
  header?:{h2:string,p:string}
  footer?:ReactNode
}



export const MostrarCards = (props:props) => 
{
    const {
      program,
      programSelector = false,
      children,
      header = {
        h2: "¿En que curso deseas capacitarte?",
        p: "Mas de 50,000 alumnos capacitados",
      },
      footer
    } = props;

    const [myProgram, setMyProgram] = useState<program>(program); 
    const[data,setData]=useState<any>() 
    const [all, setAll] = useState<{
      poximosInicios: Array<Record<any, any>>;
      diplomas: Array<Record<any, any>>;
      cursos: Array<Record<any, any>>;
      diplomados: Array<Record<any, any>>;
    }>({ poximosInicios: [], diplomas: [], cursos: [], diplomados: [] });
    const[loading,setLoading]=useState<boolean>(false)

    useEffect(()=>
    {
      async function myGetting()
      {
        setLoading(true)
        const {res:cursos} =await getRequest('cursos') ; 
        const {res:diplomas} =await getRequest('diplomas') ; 
        const {res:diplomados} =await getRequest('diplomados') ; 

        const proximos = [...cursos.envivo, ...diplomas.envivo,...diplomados.envivo]

        let poximosInicios = proximos.sort(
        (a, b) => new Date(a.inicio).getTime() - new Date(b.inicio).getTime());
        setAll({
          poximosInicios,
          cursos: cursos.envivo,
          diplomados: diplomados.envivo,
          diplomas: diplomas.envivo,
        });
        setData(poximosInicios)
        setLoading(false);
      }
      myGetting()
    },[])

    useEffect(()=>
    {
      if(myProgram==="proximos inicios")
      {
        setData(all.poximosInicios||[])
      }
      if(myProgram==="cursos")
      {
        setData(all.cursos||[])
      }
      if(myProgram==="diplomas")
      {

        setData(all.diplomas||[])
      }
      if(myProgram==="diplomados")
      {

        setData(all.diplomados||[])
      }

    },[myProgram])



    return (
      <section className="pb-[1.5rem]">
        <article className="container mx-auto flex flex-col items-center">
          {!programSelector && (
            <>
              <h2 className="text-center font-bold text-3xl mt-10">
                {header.h2}
              </h2>
              <p className="text-center font-bold">{header.p}</p>
            </>
          )}
          {programSelector && (
            <>
              <h2 className="text-center font-bold text-3xl mt-16 mb-[2rem]">
                Categoria de Programas
              </h2>
              <Categoria myProgram={myProgram} setMyProgram={setMyProgram} />
            </>
          )}
          <div className="grid w-[100%] grid-cols-[repeat(auto-fill,minmax(17.3rem,1fr))] mt-10 gap-10">
            {!children && data && !loading && (
              <>
                {data.map((d: any) => (
                  <CardsGlo key={d.id} {...d} />
                ))}
              </>
            )}
            {children && children}
          </div>
          {loading && <div className="text-center font-bold text-[1.5rem]">Cargando...</div>}
          {footer}
        </article>
      </section>
    );
}