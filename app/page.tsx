import {MostrarCards, Stripe } from "@/components/Servicios";
import { Carosuel, BeneficiosDeNuestrosProgramas, CentroDeCapacitacion ,CertificiacionIso,EstamosEnLinea} from ".";
import { Metadata } from "next";

export const metadata:Metadata=
{
  title:"Desarrollo Global",
  description:"sisisi",
  openGraph:
  {
    description:"sisisi",
    images:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
  }
}

export default async function Home() 
{ 
  return (
    <>
      <Carosuel/>
      <Stripe />
      <MostrarCards program="proximos inicios" programSelector />
      <BeneficiosDeNuestrosProgramas />
      <CentroDeCapacitacion/>
      <CertificiacionIso/>
      <EstamosEnLinea/>
    </>
  );
}
