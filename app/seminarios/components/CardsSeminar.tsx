import Image from 'next/image';

export const CardsSeminar = () => {
  return (
    <div className="w-[302px] mx-auto">
        <Image src="https://s3.us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2022/05/Presupuesto+Publico+en+el+SIAF+RP.webp" alt="sSIAF BASICO" width="302" height="180"/>
        <div className='bg-[#000b4e] text-white p-5'>
            <div className='flex items-center gap-3 font-bold'>
                <div className='border border-[#0c7aff] text-[#0c7aff] rounded-full px-5'>
                    Seminario
                </div>
                <div className='border border-black bg-black rounded-full px-5 text-white flex items-center gap-2'>
                    <i className="fi fi-rr-video-camera-alt flex"></i>
                    Seminario
                </div>
            </div>
            <p className='text-white font-bold mt-5'>RESTRICCIONES DE PROFORMAS Y RECHAZOS DE ORDENES DE COMPRA</p>
            <p className='text-white font-bold flex items-center gap-3 mt-5'><i className="fi fi-rr-calendar-day flex"></i>Fecha: 17 de Febrero</p>
            <p className='text-white font-bold flex items-center gap-3'><i className="fi fi-rr-clock-three flex"></i>6:58 PM</p>
            <button className='w-full border border-white text-white font-bold flex items-center justify-center py-3 rounded-md gap-3 mt-5'><i className="fi fi-sr-eye flex text-xl"></i>Ver Seminario Realizado</button>
        </div>
    </div>
  )
}
