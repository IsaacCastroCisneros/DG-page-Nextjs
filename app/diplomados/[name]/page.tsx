import { ComponentCapacitarte, ComponentCertificacion, ComponentDocente, ComponentTestimonios, ComponentVacante, ComponentWhats, ComponentsPagos, Contenido, Header, InfoAdicional } from "@/components/ServiciosName";
import getRequest from "@/helpers/getRequest";
import { DiplomadosContext } from "../context/DiplomadosContext";
import { Metadata } from "next";
import getMetadata from "@/helpers/getMetadata";
import { ProgramContext } from "@/app/context/ProgramContext";

export async function generateMetadata({params}:any):Promise<Metadata>
{
  return await getMetadata(params,'diplomados')
}

export default async function DiplomadosNombre({params}:any) 
{
    const{name}=params
    const {res:diplomados,err}=await getRequest('diplomados',name)

    if(err)return <div className="capitalize font-bold text-[2rem] text-center">an error was occurred</div> 

    return (
        <ProgramContext
          program={diplomados}
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
        </ProgramContext>
    )
}