import Image from 'next/image';
export const Stripe = () =>{
    return (
      <section className="bg-[#1900A2] px-[.8rem]">
        <article className="flex container mx-auto text-white p-4 px-0 gap-[1rem] mob:gap-[.5rem] flex-wrap">
          <div className="flex gap-3 items-center flex-1 ">
            <div className="mob:w-[60px] flex justify-center">
              <Image
                src="/img/inhouseIcon1.webp"
                alt="Desarrollo Global"
                height="50"
                width="50"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm xl:text-xl 2xl:text-xl">Capacitando</p>
              <p className="text-base font-bold xl:text-4xl">+12 Años</p>
            </div>
          </div>
          <div className="flex gap-3 items-center flex-1 ">
            <div className="mob:w-[60px] flex justify-center">
              <Image
                src="/img/inhouseIcon2.webp"
                alt="Desarrollo Global"
                height="65"
                width="75"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm xl:text-xl 2xl:text-xl">Clases</p>
              <p className="text-base font-bold xl:text-4xl">Virtuales</p>
            </div>
          </div>
          <div className="flex gap-3 items-center flex-1 ">
            <div className="mob:w-[60px] flex justify-center">
              <Image
                src="/img/inhouseIcon3.webp"
                alt="Desarrollo Global"
                height="60"
                width="60"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm xl:text-xl 2xl:text-xl">Clases</p>
              <p className="text-base font-bold xl:text-4xl">Presenciales</p>
            </div>
          </div>
          <div className="flex gap-3 items-center flex-1 ">
            <div className="mob:w-[60px] flex justify-center">
              <Image
                src="/img/inhouseIcon4.webp"
                alt="Desarrollo Global"
                height="40"
                width="40"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm xl:text-xl 2xl:text-xl">
                Certificacion de Calidad
              </p>
              <p className="text-base font-bold xl:text-4xl">ISO 9001-2015</p>
            </div>
          </div>
        </article>
      </section>
    );
}