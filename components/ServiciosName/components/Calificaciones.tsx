import Image from 'next/image'


export const Calificaciones = ({tipo} : {tipo: string}) => {
    return (
        <div className={`border rounded-lg mt-3 mx-auto flex flex-wrap justify-center md:justify-between lg:justify-between xl:justify-between 2xl:justify-between items-center w-full ${tipo === "header" ? "text-white border-white p-5 w-full" : "text-black border-gray-200 p-3 w-full lg:w-[75%] xl:w-[75%] 2xl:w-[75%]"}`}>
            <div className='flex gap-3 items-center'>
                <Image src="/img/icons/iconEstrellas.webp" alt='Desarrollo Global' width="93" height="16" className='rounded-t-lg' />
                <p className='font-bold'>4.6 de calificación</p>
            </div>
            <div className='flex items-center gap-3 font-bold'>
                <i className="fi fi-sr-users-alt flex"></i>
                <p className='text-sm lg:text-base xl:text-base 2xl:text-base'>219 alunos capacitados en este Diploma</p>
            </div>
        </div>
    )
}
