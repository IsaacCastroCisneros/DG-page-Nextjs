import { Banner, MostrarCards, Stripe } from "@/components/Servicios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Diplomados() {
    return(
        <>
            <Banner tipo="Diplomados" />
            <Stripe />
            <MostrarCards program="diplomados" />
        </>
    )
}
