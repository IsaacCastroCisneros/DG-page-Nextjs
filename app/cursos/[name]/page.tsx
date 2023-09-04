import { Header, InfoAdicional, Contenido , ComponentCertificacion, ComponentDocente, ComponentCapacitarte, ComponentsPagos, ComponentWhats,ComponentTestimonios, ComponentVacante } from "@/components/ServiciosName"
import getRequest from "@/helpers/getRequest"
import { CursosContext } from "../context/CursosContext"
import { Metadata } from "next"
import getMetadata from "@/helpers/getMetadata"
import { ProgramContext } from "@/app/context/ProgramContext"
import cursos from "@/interfaces/cursos"

export async function generateMetadata({params}:any):Promise<Metadata>
{
  return await getMetadata(params,'cursos')
}


export default async function CursosNombre({params}:any) 
{
    const{name}=params
    const{res:curso,err}=await getRequest('cursos',name)
    const{sesiones}=curso as cursos

    if(err)return <div className="capitalize font-bold text-[2rem] text-center">an error was occurred</div> 

    return(
        <ProgramContext program={curso}>
            <Header />
            <InfoAdicional />
            <Contenido data={sesiones}/>
            <ComponentCertificacion />
            <ComponentDocente />
            <ComponentCapacitarte />
            <ComponentsPagos />
            <ComponentWhats />
            <ComponentTestimonios />
            <ComponentVacante />
        </ProgramContext>
    )
}