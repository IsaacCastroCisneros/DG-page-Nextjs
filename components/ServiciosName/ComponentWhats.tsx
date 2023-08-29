import Image from 'next/image';
export const ComponentWhats = () => {
    return (
        <section className="bg-[#00c9a2]">
            <article className="container mx-auto">
                <div className='w-full lg:w-[70%]'>
                    <p className="text-white font-bold text-3xl">✍Hablemos por Whatsapp</p>
                    <p className="text-white mt-5">Comunícate con nuestros asesores para brindarte asesoría personalizada.</p>
                    <div className='w-full flex justify-center items-center'>
                        <div className="bg-white w-[300px] rounded-md p-5 relative mt-20">
                            <Image src="/img/icons/WhatsAppIcon.webp" alt='Desarrollo Global - WhatsApp' width={90} height={90} className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2' />
                            <p className="text-center font-bold mt-7">Lucero  Alcántara</p>
                            <p className="text-center font-bold">Asesora Académica</p>
                            <p className="text-center font-bold text-3xl">WHATSAPP</p>
                            <a className='flex border-2 border-green-500 rounded-full w-[202px] mx-auto items-center  relative h-[40px] mt-1' href='google.ocm'>
                                <Image src="/img/icons/WhatsAppIcon.webp" alt='Desarrollo Global - WhatsApp' width={44} height={44} className='absolute left-0' />
                                <p className='text-green-500 font-bold text-2xl ml-14'>925571975</p>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}
