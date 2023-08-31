import { Banner, MostrarCards, Stripe } from "@/components/Servicios";

export default function Cursos() {
    return(
        <>
            <Banner tipo="Cursos" />
            <Stripe />
            <MostrarCards program="cursos" />
        </>
    )
}
