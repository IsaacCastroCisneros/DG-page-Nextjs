"use client"
import Image from 'next/image';
import { Calificaciones } from './components/Calificaciones';

import { useContext, useEffect, useState } from 'react';
import useObserver from '@/hooks/useObserver';
import { ContadorHeader } from './components/ContadorHeader';
import { globalContext } from '@/context/GlobalContext';
import { cursosContext } from '@/app/cursos/context/CursosContext';
import cursos from '@/interfaces/cursos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPen } from '@fortawesome/free-solid-svg-icons';
import postRequest from '@/helpers/postRequest';
import { usePathname } from 'next/navigation'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { programContext } from '@/app/context/ProgramContext';
import programData from '@/types/programData';
import useCart from '@/hooks/useCart';


export const Header = () => 
{
    const {program} =useContext(programContext)
    const{setShowMsg}=useContext(globalContext)
    const{user}=useContext(globalContext)
    const{updatingCart}=useCart()
    
    const{titulo,tipo,descripcion,imagen,precio,id,asesores,total_sesiones}=program as programData

    const[values,setValues]=useState<{nombres:string,telefono:string,email:string}>({nombres:"",telefono:"",email:""})
    const pathName= usePathname()
    const{telefono}=asesores[0]

    const [observe, setElement, entries] = useObserver({
        threshold: 0.100,
        root: null
    })

    const [prueba, setPrueba] = useState<boolean>(true)


    useEffect(() => {
        const intersector: NodeListOf<Element> = document.querySelectorAll("#intersector");
        setElement(intersector)
    }, [setElement])

    useEffect(() => {
        entries.forEach((element: any) => {
            setPrueba(element.isIntersecting)
        });
    }, [entries, observe])

    async function submittingFormHandle(e:any)
    {
       e.preventDefault()
       const data = new FormData()
            data.append('nombres', values.nombres)
            data.append('correo', values.email)
            data.append('telefono', values.telefono)
            data.append('curso', titulo)
            data.append('id_curso', id)
            data.append('ciudad', '')
            data.append('contenido', `Buenas tardes deseo informacion del ${tipo} ${titulo}`)
            data.append('pagina', 'https://www.desarrolloglobal.pe'+pathName)

       const {res} = await postRequest('cursos',data,true)
       if(res)
       {
          return setShowMsg({show:true,content:"se an enviado los datos"})
       }
       setShowMsg({show:true,type:"fail",content:"a ocurrido un error"})
    }

    return (
      <section className="bg-gradient-to-b from-[#4605fa] via-[#865dfb] to-[#865dfb]">
        {!prueba && <ContadorHeader />}
        <article className="container flex mx-auto p-10 mob:px-[1rem] flex-wrap">
          <div className="w-full lg:w-[70%] xl:w-[70%] 2xl:w-[70%]">
            <div className="w-full lg:w-[80%] xl:w-[80%] 2xl:w-[80%] space-y-4">
              <h1 className="text-[#ffb300] font-bold text-xl capitalize">
                {tipo} Especializado
              </h1>
              <h2 className="text-white font-bold text-5xl">{titulo}</h2>
              <p className="text-white text-lg">{descripcion}</p>
              <Calificaciones tipo="header" />
            </div>
          </div>
          <div className="w-full lg:w-[30%] relative lg:static lg:px-14 z-[999] mob:mt-[1rem]">
            <div
              className={`w-[320px] mx-auto bg-white rounded-lg block lg:fixed shadow-lg transition-all ease-in-out duration-300 ${
                !prueba && "lg:-mt-24"
              }`}
            >
              {prueba && (
                <Image
                  src={imagen}
                  alt="SOCE"
                  width="320"
                  height="212"
                  className="hidden lg:block rounded-t-md"
                />
              )}
              <div className="p-5">
                <div className="">
                  <p className="text-center font-bold text-2xl">
                    Matricúlate AHORA
                  </p>
                  <p className="text-center font-bold">
                    con un descuento especial 👇
                  </p>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <p className="font-bold text-3xl text-center">
                      S/{precio.final}
                      <span className="text-sm">.00</span>
                    </p>
                    <p className="text-rojo text-sm font-semibold text-center">
                      Normal: <span>S/{precio.normal} </span>
                    </p>
                  </div>
                  <div className="bg-rojo text-white font-bold px-[1rem] py-[.6rem] rounded-lg">
                    <p className="text-3xl flex items-center gap-2">
                      {precio.descuento} % <span className="text-lg">Dsct</span>
                    </p>
                  </div>
                </div>
                <div>
                  <form
                    action=""
                    className="space-y-5 mt-5"
                    onSubmit={submittingFormHandle}
                  >
                    <input
                      type="text"
                      className="w-full p-2 border border-black rounded-md"
                      placeholder="Nombres"
                      required
                      onChange={(e) =>
                        setValues((prev) => {
                          return { ...prev, nombres: e.target.value };
                        })
                      }
                    />
                    <input
                      type="email"
                      className="w-full p-2 border border-black rounded-md"
                      placeholder="Correo Electronico"
                      required
                      onChange={(e) =>
                        setValues((prev) => {
                          return { ...prev, email: e.target.value };
                        })
                      }
                    />
                    <input
                      type="number"
                      className="w-full p-2 border border-black rounded-md"
                      placeholder="Celular o WhatsApp"
                      required
                      onChange={(e) =>
                        setValues((prev) => {
                          return { ...prev, telefono: e.target.value };
                        })
                      }
                    />
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="rounded-full"
                        required
                      />
                      <span className="text-sm">
                        Acepto políticas de privacidad o datos
                      </span>
                    </div>
                    <button className="bg-blue-500 text-white font-bold flex items-center py-3 rounded-md gap-2 text-lg w-full justify-center">
                      <FontAwesomeIcon icon={faPen} />
                      <span>Solicitar Informacion</span>
                    </button>
                  </form>
                  <a href={`https://api.whatsapp.com/send?phone=51${telefono||''}&text=Hola,%20solicito%20información%20del%20%20cursos:${titulo},%20mi%20correo%20es:${user?.correo}`} target='_blank'  className="bg-green-500 mt-[.5rem] text-white text-center font-bold flex items-center py-[.4rem]  rounded-md gap-[.5rem] px-[1rem] text-lg w-full justify-center">
                    <FontAwesomeIcon size='2xl' icon={faWhatsapp} />
                    <div className="flex flex-1 flex-col">
                      <span className="text-[.7rem] font-normal leading-[.5rem]">
                        Click para Solicitar mas Información
                      </span>
                      <strong className='text-[1.5rem]'>WHATSAPP</strong>
                    </div>
                  </a>
                  <button onClick={()=>updatingCart({id,titulo,precio,imagen,tipo,total_sesiones})} className='flex gap-[1rem] justify-center bg-myBlue1 text-white items-center px-[1rem] py-[.8rem] w-full rounded-md mt-[.5rem]'>
                    <FontAwesomeIcon size='xl'  icon={faCartShopping}/>
                    <strong className='capitalize' >agregar al carrtio</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    );
}