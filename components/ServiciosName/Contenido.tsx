import Image from 'next/image';
import { AcrodeonCursos } from './AcrodeonCursos';
export const Contenido = () => {
    return (
        <section>
            <article className="container mx-auto">
                <div className="w-full lg:w-[70%] xl:W-[70%] 2xl:w-[70%] lg:px-10 xl:px-10 2xl:px-10">
                    <p className="text-center text-rojo font-bold text-lg mt-7">Este Curso contiene 12 sesiones de clases en vivo</p>
                    <Image src="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2022/08/temporal-temporal-DIPLOMA-FORMULACION-Y-EVALUACION-DE-PROYECTOS---BIM.png" width="856" height="347" alt='SIAF' className='mx-auto w-full rounded-md mt-5 h-full lg:h-[260px]' />
                    <p className='font-bold text-center text-2xl mt-10'>Contenido Tematico</p>
                    <div className='mt-10'>
                        <AcrodeonCursos />
                    </div>
                </div>
            </article>
        </section>
    )
}