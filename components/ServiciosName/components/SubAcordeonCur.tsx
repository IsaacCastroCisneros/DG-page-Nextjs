import useAcordeon from "@/hooks/useAcordeon"

export const SubAcordeonCur = () => {
    const [abrirSub, alturaMaxima, contenidoRef, handleAbrirSub] = useAcordeon()


    return (
        <div className='w-full'>
            <button className='px-5 lg:px-10 xl:px-10 2xl:px-10 py-5 bg-[#F4F5F7] w-full rounded-lg flex items-center justify-between shadow-lg' onClick={handleAbrirSub}>
                <p className="text-left"><span className="font-bold">SESIÓN 01: </span>BASE GENERAL DEL PLANEAMIENTO ESTRATÉGICO Y OPERATIVO EN LAS ENTIDADES PÚBLICAS</p>
                <p>+</p>
            </button>

            <div className={`w-full block overflow-hidden transition-all ease-in-out duration-300 rounded-lg `} style={{ maxHeight: abrirSub ? alturaMaxima : 0 }}>
                <div className="p-3" ref={contenidoRef}>
                    sdsdsdsdsd
                </div>
            </div>
              
        </div>
    )
}