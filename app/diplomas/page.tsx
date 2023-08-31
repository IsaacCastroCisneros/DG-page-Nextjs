import { Banner, MostrarCards, Stripe } from "@/components/Servicios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Driplomas() 
{ 

    return(
        <>
            <Banner tipo="Diplomas" />
            <Stripe />
            <MostrarCards program="diplomas" />
        </>
    )
}
