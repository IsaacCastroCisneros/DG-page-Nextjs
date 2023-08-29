import Image from 'next/image';

export const Banner = ({tipo} : {tipo: String}) => {
    return (
        <section className={`bg-gradient-to-b ${tipo === "Cursos" ? 'from-[#2600f1] via-[#6886ff] to-[#6886ff]' : tipo === "Diplomas" ? 'from-[#002877] via-[#106fff] to-[#106fff]' : 'from-[#31003f] via-[#62007e] to-[#7c3590]'}`}>
            <article className="container mx-auto flex items-center justify-center !pb-0">
                <div className='lg:w-1/2 w-full flex justify-center'>
                    <div className='space-y-1 p-5 lg:p-10 py-10 lg:py-0'>
                        <h1 className="text-white font-bold text-5xl w-1/4">{tipo} Especializados</h1>
                        <p className='text-curDi font-bold text-2xl'>Porque aprender con nosotros</p>
                        <div className='text-white text-xl space-y-1'>
                            <p className='flex items-center gap-2'><Image src="/img/icons/VistoBuenoCursos.webp" alt='Desarrollo Global' width="23" height="23" />12 años dictando Cursos virtuales</p>
                           <p className='flex items-center gap-2'><Image src="/img/icons/VistoBuenoCursos.webp" alt='Desarrollo Global' width="23" height="23" />Certificación de calidad  ISO 9001-2015</p>
                           <p className='flex items-center gap-2'><Image src="/img/icons/VistoBuenoCursos.webp" alt='Desarrollo Global' width="23" height="23" />Certificación Universitaria</p>
                           <p className='flex items-center gap-2'><Image src="/img/icons/VistoBuenoCursos.webp" alt='Desarrollo Global' width="23" height="23" />Aula Virtual &#34;Plataforma Exclusiva&#34;</p>
                           <p className='flex items-center gap-2'><Image src="/img/icons/VistoBuenoCursos.webp" alt='Desarrollo Global' width="23" height="23" />El mejor soporte para alumnos</p>
                           <p className='flex items-center gap-2'><Image src="/img/icons/VistoBuenoCursos.webp" alt='Desarrollo Global' width="23" height="23" />Docentes Especializados</p>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 hidden md:flex xl:flex 2xl:flex items-end justify-center h-full'>
                    <Image src={tipo === "Cursos" ? "/img/LCurso.webp" : tipo === "Diplomas" ? "/img/LogoDiploma.webp" : "/img/LogoDiplomado.webp"} alt='Cursos Especializados' width="460" height="460" className='mt-5' />
                </div>
            </article>
        </section>
    )
}