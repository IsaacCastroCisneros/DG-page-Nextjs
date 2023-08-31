import {MostrarCards, Stripe } from "@/components/Servicios";
import { Carosuel, BeneficiosDeNuestrosProgramas, CentroDeCapacitacion ,CertificiacionIso,EstamosEnLinea} from ".";

export default async function Home() 
{ 
  return (
    <>
      <Carosuel/>
      <Stripe />
      <MostrarCards program="proximos inicios" programSelector />
      {/* <BeneficiosDeNuestrosProgramas />
      <CentroDeCapacitacion/>
      <CertificiacionIso/>
      <EstamosEnLinea/> */}
    </>
  );
}
