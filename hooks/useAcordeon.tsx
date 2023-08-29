import { useEffect, useRef, useState } from "react";

export default function useAcordeon() {
    const [abrirSub, setAbrirSub] = useState<boolean>(true);
    const [alturaMaxima, setAlturaMaxima] = useState<any>(0);
    const contenidoRef = useRef<HTMLElement>(null)

    useEffect(() => {
        contenidoRef.current && setAlturaMaxima(contenidoRef.current.scrollHeight)
    }, []);


    const handleAbrirSub = () => {
        setAbrirSub(!abrirSub)
    };

    return [abrirSub, alturaMaxima, contenidoRef, handleAbrirSub]
}

