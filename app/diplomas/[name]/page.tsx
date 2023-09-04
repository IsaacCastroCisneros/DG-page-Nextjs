import { ComponentCertificacion, Contenido, Header, InfoAdicional, ComponentDocente, ComponentCapacitarte, ComponentsPagos, ComponentWhats, ComponentTestimonios, ComponentVacante } from "@/components/ServiciosName";
import getRequest from "@/helpers/getRequest";
import { DiplomasContext } from "../context/DiplomasContext";
import getMetadata from "@/helpers/getMetadata";
import { Metadata } from "next";
import { ProgramContext } from "@/app/context/ProgramContext";
import diplomas from "@/interfaces/diplomas";

export async function generateMetadata({params}:any):Promise<Metadata>
{
  return await getMetadata(params,'diplomas')
}

export default async function DriplomasName({params}:any) 
{
    const{name}=params
    const{res:diplomas,err}=await getRequest('diplomas',name)

    const{cursos}=diplomas as diplomas

    if(err)return <div className="capitalize font-bold text-[2rem] text-center">an error was occurred</div> 

    return (
        <ProgramContext
         program={diplomas}
         >
            <Header />
            <InfoAdicional />
            <Contenido data={cursos} />
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