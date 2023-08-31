import { Header, InfoAdicional, Contenido , ComponentCertificacion, ComponentDocente, ComponentCapacitarte, ComponentsPagos, ComponentWhats,ComponentTestimonios, ComponentVacante } from "@/components/ServiciosName"
import getRequest from "@/helpers/getRequest"
import { CursosContext } from "../context/CursosContext"
import { Metadata } from "next"
import getMetadata from "@/helpers/getMetadata"

export async function generateMetadata({params}:any):Promise<Metadata>
{
  return await getMetadata(params,'cursos')
}


export default async function CursosNombre({params}:any) 
{
    const{name}=params
    const{res:curso,err}=await getRequest('cursos',name)
    
    return(
        <CursosContext curso={err ? curso:[]}>
            <Header />
            <InfoAdicional />
            <Contenido />
            <ComponentCertificacion />
            <ComponentDocente />
            <ComponentCapacitarte />
            <ComponentsPagos />
            <ComponentWhats />
            <ComponentTestimonios />
            <ComponentVacante />
        </CursosContext>
    )
}