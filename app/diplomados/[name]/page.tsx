import { ComponentCapacitarte, ComponentCertificacion, ComponentDocente, ComponentTestimonios, ComponentVacante, ComponentWhats, ComponentsPagos, Contenido, Header, InfoAdicional } from "@/components/ServiciosName";
import getRequest from "@/helpers/getRequest";
import { DiplomadosContext } from "../context/DiplomadosContext";
import { Metadata } from "next";
import getMetadata from "@/helpers/getMetadata";

export async function generateMetadata({params}:any):Promise<Metadata>
{
  return await getMetadata(params,'diplomados')
}

export default async function DiplomadosNombre({params}:any) 
{
    const{name}=params
    const {res:diplomados,err}=await getRequest('diplomados',name)

    return (
        <DiplomadosContext
          diplomados={err ? []:diplomados}
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
        </DiplomadosContext>
    )
}