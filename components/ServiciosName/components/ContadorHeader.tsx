import { ComponentContador } from '@/components/contador/ComponentContador';
import Image from 'next/image';

export const ContadorHeader = () => {
    return (
        <section className="bg-blue-500 fixed top-0 w-full z-[99] hidden lg:block">
            <div className='flex items-center py-3 px-14 w-[70%] justify-between'>
                <Image src="/img/icons/logoBlanco.webp" width={190} height={54} alt='Desarrollo Global' />
                <Image src="https://s3.us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2022/05/Preparacion+para+el+examen+ante+OSCE.webp" width={130} height={70} alt='Desarrollo Global' className='rounded-md h-[70px]' />
                <p className='text-white font-bold'>Contabilidad Gubernamental en el SIAF RP</p>
                <ComponentContador />
            </div>
        </section>
    )
}
