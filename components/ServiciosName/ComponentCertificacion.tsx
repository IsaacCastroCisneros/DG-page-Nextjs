import Image from 'next/image';
export const ComponentCertificacion = () => {
    return (
        <section className="bg-[#B8D7FE]">
            <article className="container mx-auto">
                <div className="w-full lg:w-[70%] xl:w-[70%] 2xl:w-[70%] p-5">
                    <p className="text-3xl font-bold">Certificacion Universitaria</p>
                    <div className="bg-white rounded-md p-10 mt-10 shadow-lg font-bold">
                        <p>👉 Válido para postular a convocatorias Públicas y Privadas</p>
                        <p className="w-full lg:w-[60%] xl:w-[60%] 2xl:w-[60%]">Los Certificados son válidos y aceptados por instituciones públicas, de acuerdo a la Normativa Nº141-2016-SERVIR-PE.</p>
                        <p className="flex items-center gap-3 mt-5"><i className="fi fi-rr-checkbox text-green-500 flex text-2xl font-black"></i>Certificado por Curso</p>
                    </div>
                    <Image src="/img/certiCursoForReal.webp" width="768" height="465" alt='Certificacion Unniversitaria' className='mx-auto mt-5' />
                </div>
            </article>
        </section>
    )
}