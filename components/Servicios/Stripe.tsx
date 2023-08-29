import Image from 'next/image';
export const Stripe = () =>{
    return(
        <section className="bg-[#1900A2]">
            <article className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 container mx-auto text-white p-4 gap-3">
                <div className='flex gap-3 items-center md:mx-auto xl:mx-auto 2xl:mx-auto'>
                    <Image src="/img/inhouseIcon1.webp" alt='Desarrollo Global' height="50" width="50" />
                    <div>
                        <p className='text-sm xl:text-xl 2xl:text-xl'>Capcitando</p>
                        <p className='text-base font-bold xl:text-4xl'>+12 Años</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center md:mx-auto xl:mx-auto 2xl:mx-auto'>
                    <Image src="/img/inhouseIcon2.webp" alt='Desarrollo Global' height="65" width="75" />
                    <div>
                        <p className='text-sm xl:text-xl 2xl:text-xl'>Clases</p>
                        <p className='text-base font-bold xl:text-4xl'>Virtuales</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center md:mx-auto xl:mx-auto 2xl:mx-auto'>
                    <Image src="/img/inhouseIcon3.webp" alt='Desarrollo Global' height="60" width="60" />
                    <div>
                        <p className='text-sm xl:text-xl 2xl:text-xl'>Clases</p>
                        <p className='text-base font-bold xl:text-4xl'>Presenciales</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center md:mx-auto xl:mx-auto 2xl:mx-auto'>
                    <Image src="/img/inhouseIcon4.webp" alt='Desarrollo Global' height="40" width="40" />
                    <div>
                        <p className='text-sm xl:text-xl 2xl:text-xl'>Certificacion de Calidad</p>
                        <p className='text-base font-bold xl:text-4xl'>ISO 9001-2015</p>
                    </div>
                </div>
            </article>
        </section>
    )
}