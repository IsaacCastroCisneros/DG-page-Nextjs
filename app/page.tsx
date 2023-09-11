import {MostrarCards, Stripe } from "@/components/Servicios";
import { Carosuel, BeneficiosDeNuestrosProgramas, CentroDeCapacitacion ,CertificiacionIso,EstamosEnLinea} from ".";
import Image from "next/image";
import getRequest from "@/helpers/getRequest";
import InitialPopups from "./components/InitialPopups/InitialPopups";



export default async function Home() 
{ 
  const{res:popups,err:errPopup}=await getRequest('modal')

  return (
    <>
      {
       ((popups.length>0)&&(!errPopup))&&<InitialPopups initialPopups={popups}/>
      }
      <div className="w-[1920px] mx-auto max-w-[100%]">
        <Image
          src="/img/baner-aniversario-horizontal.webp"
          className="w-[100%] 1000px:hidden"
          width={1920}
          height={92}
          alt="banner"
        />
        <Image
          src="/img/baner-aniversario-cuadrado.webp"
          width={1000}
          height={514}
          className="w-[100%] 1000px:block hidden"
          alt="banner"
        />
      </div>
      <Carosuel />
      <Stripe />
      <MostrarCards program="proximos inicios" programSelector />
      <BeneficiosDeNuestrosProgramas />
      <CentroDeCapacitacion />
      <CertificiacionIso />
      <EstamosEnLinea />
    </>
  );
}
