import Image from 'next/image';
export const InfoAdicional = () => {
    return (
        <section className="bg-[#ECF5FF] shadow-lg" id='intersector'>
            <article className="container mx-auto p-5">
                <div className="grid gap-5 lg:gap-0 xl:gap-0 2xl:gap-0 grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 w-full lg:w-[70%] xl:w-[70%] 2xl:w-[70%]">
                    <div className="flex items-center gap-3">
                        <i className="fi fi-br-calendar-day text-4xl"></i>
                        <div className="text-base font-semibold">
                            <p>Inicio</p>
                            <p className="-mt-1">05 de Mayo</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <i className="fi fi-rr-clock-three text-4xl"></i>
                        <div className="text-base font-semibold">
                            <p>Cantidad</p>
                            <p className="-mt-1">12 Sesiones</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <i className="fi fi-rr-clock-three text-4xl"></i>
                        <div className="text-base font-semibold">
                            <p>Cantidad</p>
                            <p className="-mt-1">12 Sesiones</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image src="/img/icons/IconLiveDiploma.webp" alt='' width="68" height="35" />
                        <div className="text-base font-semibold">
                            <p>Cantidad</p>
                            <p className="-mt-1">12 Sesiones</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}