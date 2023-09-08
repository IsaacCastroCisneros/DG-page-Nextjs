import parsearFecha from '@/helpers/parsearFecha';
import twentyfourToTwelve from '@/helpers/twentyfourToTwelve';
import seminarios from '@/interfaces/seminarios';
import { faCalendar, faClock, faEye, faLineChart, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export const CardsSeminar = (props:seminarios) => 
{
  const{banner,titulo,fecha,hora,etiqueta}=props 

  return (
    <div className="w-[302px] max-w-[302px] mx-auto h-[466px] flex flex-col rounded-[.3rem] overflow-hidden 370px:w-[100%]">
      <Image src={banner.oferta} alt="banner de seminario" width="302" height="180" />
      <div className="bg-[#000b4e] text-white p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 font-bold">
            <div className="border border-[#0c7aff] text-[#0c7aff] rounded-full px-5">
              Seminario
            </div>
            <div className="border border-black bg-black rounded-full px-5 text-white flex items-center gap-2">
              <FontAwesomeIcon icon={faVideoCamera} />
              Seminario
            </div>
          </div>
          <p className="text-white font-bold mt-5 line-clamp-3">{titulo}</p>
        </div>
        <div className="mt-5">
          <p className="text-white font-bold flex items-center gap-3">
            <FontAwesomeIcon icon={faCalendar} /> Fecha: {fecha.split('-')[2]} de {parsearFecha(fecha)}
          </p>
          <p className="text-white font-bold flex items-center gap-3">
            <FontAwesomeIcon icon={faClock} />{twentyfourToTwelve(hora)}
          </p>
          <Link href={`/seminarios/${etiqueta}`} className="w-full border border-white text-white font-bold flex items-center justify-center py-3 rounded-md gap-3 mt-5">
            <FontAwesomeIcon icon={faEye} />
            Ver Seminario Realizado
          </Link>
        </div>
      </div>
    </div>
  );
}

