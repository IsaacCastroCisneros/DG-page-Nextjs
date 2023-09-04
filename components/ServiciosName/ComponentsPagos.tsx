"use client"
import { faLock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { MyPopUp } from '../MyPopUp/MyPopUp';
import { globalContext } from '@/context/GlobalContext';


export const ComponentsPagos = () => 
{
    const[show,setShow]=useState<boolean>(false)
    

    return (
      <>
        <MyPopUp
          setIsOpen={setShow}
          isOpen={show}
          popUp={
            <div className="bg-white px-[2rem] py-[3.5rem] w-[55rem] 1000px:w-[100%]">
              <strong className="text-[1.5rem]">
                Pagos por Transferencias y/o deposito
              </strong>
              <p className='block mb-[1rem]'>
                Puedes pagar con tarjeta de credito o debito, deposito o
                transferencia. 
              </p>
              <div className="grid gap-[1rem] grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
                <BankBox
                  img="/img/icons/IconNacion.webp"
                  alt="logo de BANCO DE LA NACION"
                  num="04-074-875926"
                  nombre="BANCO DE LA NACION"
                />
                <BankBox
                  img="/img/icons/Scotiabank.webp"
                  alt="logo de SCOTIABANK"
                  num="027-7544565"
                  nombre="SCOTIABANK"
                />
                <BankBox
                  img="/img/icons/Bbva.webp"
                  alt="logo de BBVA"
                  num="0011-0153-02-00460394"
                  nombre="BBVA"
                />
                <BankBox
                  img="/img/icons/Interbank.webp"
                  alt="logo de INTERBANK"
                  num="011-303500069-3"
                  nombre="INTERBANK"
                />
              </div>
            </div>
          }
        />
        <section className="py-[1.5rem] px-[1rem]">
          <article className="container mx-auto">
            <div className="w-full lg:w-[70%] xl:w-[70%] 2xl:w-[70%] lg:p-5 xl:p-5 2xl:p-5">
              <p className="text-3xl font-bold mt-5">
                ✍ Pasos para Inscribirme
              </p>
              <div className="flex text-[#010c4f] font-bold items-center gap-5 mt-5">
                <div className="border-4 w-[48px] h-[48px] rounded-full border-[#010c4f] flex items-center justify-center">
                  <p className="text-lg">01</p>
                </div>
                <div className="text-xl">
                  <p>Paso 1:</p>
                  <p className="-mt-2">
                    {" "}
                    Efectuar el pago a las siguientes cuentas bancarias.
                  </p>
                </div>
              </div>
              <div className="border-dashed border-l-4 border-[#e5f1ff] mx-[1.40rem] pl-5 lg:px-10 xl:px-10 2xl:px-10 py-2">
                <p className="font-bold text-[#010c4f]">Cuentas Corriente</p>

                <div className="bg-[#e5f1ff] mt-2 rounded-md flex items-center px-2 lg:px-16 xl:px-16 2xl:px-16 gap-2 py-1">
                  <Image
                    src="/img/icons/IconBcp.webp"
                    alt="logo de BCP"
                    width={80}
                    height={80}
                  />
                  <div>
                    <p className="font-bold">Cta corriente: </p>
                    <p>
                      <span className="font-bold">N° cuenta:</span>{" "}
                      193-1945239-0-77
                    </p>
                    <p>
                      <span className="font-bold">CCI: </span>
                      0219300194523907716
                    </p>
                    <p>Centro de Capacitación y Desarrollo Global</p>
                  </div>
                </div>

                <div className="bg-[#e5f1ff] mt-2 rounded-md flex items-center px-2 lg:px-16 xl:px-16 2xl:px-16 gap-2 py-1">
                  <Image
                    src="/img/icons/IconNacion.webp"
                    alt="logo del banco de la nacion"
                    width={80}
                    height={80}
                  />
                  <div>
                    <p className="font-bold">Cta corriente: </p>
                    <p>
                      <span className="font-bold">N° cuenta:</span>{" "}
                      00-015-013982
                    </p>
                    <p>
                      <span className="font-bold">CCI: </span>
                      0219300194523907716
                    </p>
                    <p>Centro de Capacitación y Desarrollo Global</p>
                  </div>
                </div>

                <p className="text-[#010c4f] font-bold mt-2">
                  Cuenta de Ahorro
                </p>

                <div className="bg-[#e5f1ff] mt-2 rounded-md flex items-center justify-center gap-8 px-16 py-3">
                  <Image
                    src="/img/icons/IconNacion.webp"
                    alt="logo de BANCO DE LA NACION"
                    width={60}
                    height={60}
                    className="hidden lg:block xl:blck 2xl:block"
                  />
                  <Image
                    src="/img/icons/IconBcp.webp"
                    alt="logo de BCP"
                    width={60}
                    height={60}
                    className="hidden lg:block xl:blck 2xl:block"
                  />
                  <Image
                    src="/img/icons/Scotiabank.webp"
                    alt="logo de SCOTIABANK"
                    width={60}
                    height={60}
                    className="hidden lg:block xl:blck 2xl:block"
                  />
                  <Image
                    src="/img/icons/Interbank.webp"
                    alt="logo de INTERBANK"
                    width={60}
                    height={60}
                    className="hidden lg:block xl:blck 2xl:block"
                  />
                  <Image
                    src="/img/icons/Bbva.webp"
                    alt="logo de BBVA"
                    width={60}
                    height={60}
                    className="hidden lg:block xl:blck 2xl:block"
                  />
                  <button
                    className="bg-white text-blue-500 border-2 border-blue-500 font-bold px-5 py-2 rounded-md"
                    onClick={() => setShow(true)}
                  >
                    Ver Cuentas
                  </button>
                </div>

                <p className="text-[#010c4f] font-bold mt-2">
                  Pagos por Aplicativo (Yape, Plin)
                </p>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(17.3rem,1fr))] gap-0 lg:gap-5">
                  <div className="bg-[#e5f1ff] rounded-lg mt-5">
                    <div className="flex items-center p-5 justify-center">
                      <div className='1000px:hidden'>
                        <Image
                          src="/img/icons/IconYape.webp"
                          alt="logo de Yape"
                          width={75}
                          height={75}
                          className="rounded-lg"
                        />
                        <p className="font-bold w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2">
                          Escanear el codigo QR
                        </p>
                      </div>
                      <div>
                        <Image
                          src="/img/icons/CodigoQrYape.webp"
                          alt="qr de yape"
                          width={210}
                          height={175}
                          className="rounded-lg"
                        />
                        <p className="text-[#732382] bg-[#01d0b5] font-bold text-2xl rounded-full text-center mt-2">
                          933179895
                        </p>
                      </div>
                    </div>
                    <p className="text-center mb-2">
                      Titular: Wilber C. Camargo Muñoz
                    </p>
                  </div>
                  <div className="bg-[#e5f1ff] rounded-lg mt-5">
                    <div className="flex items-center p-5 justify-center">
                      <div className='1000px:hidden'>
                        <Image
                          src="/img/icons/IconPlin.webp"
                          alt="logo de plin"
                          width={75}
                          height={75}
                          className="rounded-lg"
                        />
                        <p className="font-bold w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2">
                          Escanear el codigo QR
                        </p>
                      </div>
                      <div>
                        <Image
                          src="/img/icons/CodigoQrPlin.webp"
                          alt="qr de plin"
                          width={210}
                          height={175}
                          className="rounded-lg"
                        />
                        <p className="text-white bg-[#05369d] font-bold text-2xl rounded-full text-center mt-2">
                          933179895
                        </p>
                      </div>
                    </div>
                    <p className="text-center mb-2">
                      Titular: Wilber C. Camargo Muñoz
                    </p>
                  </div>
                </div>

                <p className="text-[#010c4f] font-bold mt-2">
                  Pagos en línea con tarjeta de crédito/débito
                </p>

                <div className="bg-[#e5f1ff] mt-2 rounded-md px-5 lg:px-16 xl:px-16 2xl:px-16 py-3 flex items-center gap-5 lg:gap-10 xl:gap-10 2xl:gap-10 flex-wrap">
                  <div className="space-y-2 md:w-1/2">
                    <p>
                      Puedes pagar en linea de manera segura desde nuestra
                      pasarela de pago de IZIPAY y PAGO EFECTIVO con total
                      seguridad.
                    </p>
                    <p className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faLock} />
                      Pagos seguros encriptados con seguridad SSL
                    </p>
                  </div>
                  <div>
                    <button className="text-white bg-blue-500 flex items-center text-lg font-bold justify-center gap-3 rounded-md w-full lg:w-[246px] py-3">
                      <FontAwesomeIcon icon={faShoppingCart} />
                      En el Carrito
                    </button>
                    <Image
                      src="/img/icons/IconTarjetas.webp"
                      width={245}
                      height={58}
                      alt="logos de bancos de credito"
                      className="w-[245px] mt-5"
                    />
                  </div>
                </div>
              </div>

              <div className="flex text-[#010c4f] font-bold items-center gap-5 mt-5">
                <div className="border-4 w-[48px] h-[48px] rounded-full border-[#010c4f] flex items-center justify-center">
                  <p className="text-lg">02</p>
                </div>
                <div className="text-xl">
                  <p>Paso 2:</p>
                  <p className="-mt-2"> Envíanos el comprobante de pago</p>
                </div>
              </div>

              <div className="border-dashed border-l-4 border-[#e5f1ff] mx-[1.40rem] px-5 lg:px-10 xl:px-10 2xl:px-10 py-2">
                <p className="font-bold text-[#010c4f]">
                  Tomar foto o escanear el voucher de pago y enviar al <br />{" "}
                  whatsapp o correo asesoria@desarrolloglobal.pe{" "}
                </p>
                <div className="flex bg-[#e5f1ff] rounded-lg justify-around relative mt-5">
                  <div className="p-10">
                    <p className="font-bold text-[#010c4f]">
                      Al enviar el voucher incluir lo siguiente:
                    </p>
                    <ul>
                      <li>Número de DNI del participante:</li>
                      <li>N° de celular o fijo para contactarlo(a):</li>
                      <li>Especificar el nombre del programa:</li>
                    </ul>
                  </div>
                  <div className="relative w-[40%] hidden lg:block xl:block 2xl:block">
                    <Image
                      src="/img/icons/IconEnviar.webp"
                      alt="mano enviando un voucher digital por celular"
                      width={162}
                      height={241}
                      className="absolute bottom-0 left-[30%]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex text-[#010c4f] font-bold items-center gap-5 mt-5">
                <div className="border-4 w-[48px] h-[48px] rounded-full border-[#010c4f] flex items-center justify-center">
                  <p className="text-lg">03</p>
                </div>
                <div className="text-xl">
                  <p>Paso 3:</p>
                  <p className="-mt-2"> Ingresa a tu Aula Virtual</p>
                </div>
              </div>
              <div className="border-dashed border-l-4 border-[#e5f1ff] mx-[1.40rem] px-10 py-2">
                <div className="flex bg-[#e5f1ff] rounded-lg justify-around relative mt-5">
                  <div className="p-5">
                    <p className="font-bold text-[#010c4f]">
                      Solicita tu acceso a la plataforma virtual y <br /> lleva
                      tu programa.{" "}
                    </p>
                  </div>
                  <div className="relative w-[40%] hidden lg:block">
                    <Image
                      src="/img/icons/IconLapto.webp"
                      alt="laptop abierta"
                      width={162}
                      height={155}
                      className="absolute bottom-0 left-[30%] h-[135px] w-[174px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </>
    );
}

function BankBox(props:{nombre:string,num:string,img:string,alt:string})
{
  const{nombre,num,img,alt}=props
  const{setShowMsg}=useContext(globalContext)

  return (
    <div className="flex gap-[1rem] items-center">
      <Image src={img} width={70} height={70} alt={alt} />
      <section className="flex flex-col items-start">
        <strong>{nombre}</strong>
        <span>cuenta corriente</span>
        <strong className='mb-[1rem] block'>{num}</strong>
        <button className='my-shadow rounded-[.5rem] px-[.5rem] py-[.3rem] inline-block' onClick={()=>
          {
            navigator.clipboard.writeText(num)
            setShowMsg({show:true,type:"success",content:"se a copiado el numero de cuenta"})
          }} >
           Copiar
        </button>
      </section>
    </div>
  );
}