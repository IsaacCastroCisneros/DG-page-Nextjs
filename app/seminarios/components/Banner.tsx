import Image from 'next/image';


export const Banner = () => {
    return (
        <section className="bg-[#000b4e]">
            <article className="container mx-auto">
                <div className="flex w-full items-center">
                    <div className="w-full lg:w-1/2 p-10 space-y-3">
                        <p className='font-bold text-4xl text-white w-1/2'>Seminarios en Gestion Publica</p>
                        <div className='flex items-center gap-3'>
                            <p className='text-3xl'>👉</p>
                            <p className='bg-[#ffc107] font-bold text-lg px-3 rounded-full'>Participa Gratis aqui</p>
                        </div>
                        <p className='text-white w-[70%]'>Regístrate ó únete a nuestros grupos de WhatsApp y Telegram, no te pierdas ningún seminarios en vivo.</p>
                        <button className='bg-[#0d6efd] text-white font-bold py-2 px-16 rounded-md block'>Registrame por Telegram</button>
                        <button className='bg-white text-black font-bold py-2 px-16 rounded-md'>Registrame por Telegram</button>
                    </div>
                    <div className="w-full lg:w-1/2 relative"> 
                        <Image src="/img/bannerSeminario.webp" width={746} height={507} alt='Desarrollo Global - Seminarios' className='' />
                    </div>
                </div>
            </article>
        </section>
    )
}
