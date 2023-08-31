import { Header, InfoAdicional, Contenido , ComponentCertificacion, ComponentDocente, ComponentCapacitarte, ComponentsPagos, ComponentWhats,ComponentTestimonios, ComponentVacante } from "@/components/ServiciosName"
import getRequest from "@/helpers/getRequest"
import { CursosContext } from "../context/CursosContext"
import { Metadata } from "next"
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types"

export async function generateMetadata({params}:any):Promise<Metadata>
{
   const{name}=params
   const {res:curso} = await getRequest('cursos',name)
   
   const{titulo,descripcion,tags}=curso.nuevo_seos

   const seo:OpenGraph = 
   {
    title:titulo,
    description:descripcion,
   }

   return{
     ...seo,
     keywords:tags,
     openGraph:{...seo,images:curso.imagen} 
   }
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