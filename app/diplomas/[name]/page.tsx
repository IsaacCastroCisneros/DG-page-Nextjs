import { ComponentCertificacion, Contenido, Header, InfoAdicional, ComponentDocente, ComponentCapacitarte, ComponentsPagos, ComponentWhats, ComponentTestimonios, ComponentVacante } from "@/components/ServiciosName";
import getRequest from "@/helpers/getRequest";
import { DiplomasContext } from "../context/DiplomasContext";
import getMetadata from "@/helpers/getMetadata";
import { Metadata } from "next";

export async function generateMetadata({params}:any):Promise<Metadata>
{
  return await getMetadata(params,'diplomas')
}

export default async function DriplomasName({params}:any) 
{
    const{name}=params
    const{res:diplomas,err}=await getRequest('diplomas',name)

    return (
        <DiplomasContext
         diplomas={err ? []:diplomas}
         >
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
        </DiplomasContext>
    )
}