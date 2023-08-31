import {MostrarCards, Stripe } from "@/components/Servicios";
import { Carosuel, BeneficiosDeNuestrosProgramas, CentroDeCapacitacion ,CertificiacionIso,EstamosEnLinea} from ".";
import { Metadata } from "next";

const title = "Centro de Capacitación y Desarrollo Global"
const description="Desarrollo Global con mas de 12 años mejorando las competencias y capacidades de los servidores públicos y privados. Contamos con la Certificación de calidad ISO 9001-2015."

export const metadata:Metadata=
{
  title,
  description,
  openGraph:
  {
    title,
    description
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
