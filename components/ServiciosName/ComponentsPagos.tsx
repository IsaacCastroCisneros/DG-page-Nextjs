import Image from 'next/image';


export const ComponentsPagos = () => {
    return (
        <section>
            <article className="container mx-auto">
                <div className="w-full lg:w-[70%] xl:w-[70%] 2xl:w-[70%] lg:p-5 xl:p-5 2xl:p-5">
                    <p className="text-3xl font-bold mt-5">✍ Pasos para Inscribirme</p>
                    <div className="flex text-[#010c4f] font-bold items-center gap-5 mt-5">
                        <div className="border-4 w-[48px] h-[48px] rounded-full border-[#010c4f] flex items-center justify-center">
                            <p className="text-lg">01</p>
                        </div>
                        <div className="text-xl">
                            <p>Paso 1:</p>
                            <p className="-mt-2"> Efectuar el pago a las siguientes cuentas bancarias.</p>
                        </div>
                    </div>
                    <div className="border-dashed border-l-4 border-[#e5f1ff] mx-[1.40rem] pl-5 lg:px-10 xl:px-10 2xl:px-10 py-2">
                        <p className='font-bold text-[#010c4f]'>Cuentas Corriente</p>

                        <div className='bg-[#e5f1ff] mt-2 rounded-md flex items-center px-2 lg:px-16 xl:px-16 2xl:px-16 gap-2 py-1'>
                            <Image src="/img/icons/IconBcp.webp" alt='Desarrollo Global - BCP' width={80} height={80} />
                            <div>
                                <p className='font-bold'>Cta corriente: </p>
                                <p><span className='font-bold'>N° cuenta:</span> 193-1945239-0-77</p>
                                <p><span className='font-bold'>CCI: </span>0219300194523907716</p>
                                <p>Centro de Capacitación y Desarrollo Global</p>
                            </div>
                        </div>

                        <div className='bg-[#e5f1ff] mt-2 rounded-md flex items-center px-2 lg:px-16 xl:px-16 2xl:px-16 gap-2 py-1'>
                            <Image src="/img/icons/IconNacion.webp" alt='Desarrollo Global - BCP' width={80} height={80} />
                            <div>
                                <p className='font-bold'>Cta corriente: </p>
                                <p><span className='font-bold'>N° cuenta:</span> 00-015-013982</p>
                                <p><span className='font-bold'>CCI: </span>0219300194523907716</p>
                                <p>Centro de Capacitación y Desarrollo Global</p>
                            </div>
                        </div>

                        <p className='text-[#010c4f] font-bold mt-2'>Cuenta de Ahorro</p>

                        <div className='bg-[#e5f1ff] mt-2 rounded-md flex items-center justify-center gap-8 px-16 py-3'>
                            <Image src="/img/icons/IconNacion.webp" alt='Desarrollo Global - BANCO DE LA NACION' width={60} height={60} className='hidden lg:block xl:blck 2xl:block' />
                            <Image src="/img/icons/IconBcp.webp" alt='Desarrollo Global - BCP' width={60} height={60} className='hidden lg:block xl:blck 2xl:block' />
                            <Image src="/img/icons/Scotiabank.webp" alt='Desarrollo Global - SCOTIABANK' width={60} height={60} className='hidden lg:block xl:blck 2xl:block' />
                            <Image src="/img/icons/Interbank.webp" alt='Desarrollo Global - INTERBANK' width={60} height={60} className='hidden lg:block xl:blck 2xl:block' />
                            <Image src="/img/icons/Bbva.webp" alt='Desarrollo Global - BBVA' width={60} height={60} className='hidden lg:block xl:blck 2xl:block' />
                            <button className='bg-white text-blue-500 border-2 border-blue-500 font-bold px-5 py-2 rounded-md'>Ver Cuentas</button>
                        </div>

                        <p className='text-[#010c4f] font-bold mt-2'>Pagos por Aplicativo (Yape, Plin)</p>

                        <div className='grid grid-cols-[repeat(auto-fill,minmax(17.3rem,1fr))] gap-0 lg:gap-5'>
                            <div className='bg-[#e5f1ff] rounded-lg mt-5'>
                                <div className='flex items-center p-5'>
                                    <div>
                                        <Image src="/img/icons/IconYape.webp" alt='Desarrollo Global - Yape' width={75} height={75} className='rounded-lg' />
                                        <p className='font-bold w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2'>Escanear el codigo QR</p>
                                    </div>
                                    <div>
                                        <Image src="/img/icons/CodigoQrYape.webp" alt='Desarrollo Global - Yape' width={210} height={175} className='rounded-lg' />
                                        <p className='text-[#732382] bg-[#01d0b5] font-bold text-2xl rounded-full text-center mt-2'>
                                            933179895
                                        </p>
                                    </div>
                                </div>
                                <p className='text-center mb-2'>Titular: Wilber C. Camargo Muñoz</p>
                            </div>
                            <div className='bg-[#e5f1ff] rounded-lg mt-5'>
                                <div className='flex items-center p-5'>
                                    <div>
                                        <Image src="/img/icons/IconPlin.webp" alt='Desarrollo Global - Yape' width={75} height={75} className='rounded-lg' />
                                        <p className='font-bold w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2'>Escanear el codigo QR</p>
                                    </div>
                                    <div>
                                        <Image src="/img/icons/CodigoQrPlin.webp" alt='Desarrollo Global - Yape' width={210} height={175} className='rounded-lg' />
                                        <p className='text-white bg-[#05369d] font-bold text-2xl rounded-full text-center mt-2'>
                                            933179895
                                        </p>
                                    </div>
                                </div>
                                <p className='text-center mb-2'>Titular: Wilber C. Camargo Muñoz</p>
                            </div>
                        </div>

                        <p className='text-[#010c4f] font-bold mt-2'>Pagos en línea con tarjeta de crédito/débito</p>

                        <div className='bg-[#e5f1ff] mt-2 rounded-md px-5 lg:px-16 xl:px-16 2xl:px-16 py-3 flex items-center gap-5 lg:gap-10 xl:gap-10 2xl:gap-10 flex-wrap'>
                            <div className='space-y-2 md:w-1/2'>
                                <p>Puedes pagar en linea de manera segura desde nuestra pasarela de pago de IZIPAY y PAGO EFECTIVO con total seguridad.</p>
                                <p className='flex items-center gap-2'><i className="fi fi-rr-lock flex text-2xl"></i>Pagos seguros encriptados con seguridad SSL</p>
                            </div>
                            <div>
                                <button className='text-white bg-blue-500 flex items-center text-lg font-bold justify-center gap-3 rounded-md w-full lg:w-[246px] py-3'><i className="fi fi-rr-shopping-cart-add flex text-2xl"></i>En el Carrito</button>
                                <Image src="/img/icons/IconTarjetas.webp" width={245} height={58} alt='Desarrollo Global - Bancos' className='w-[245px] mt-5' />
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
                        <p className='font-bold text-[#010c4f]'>Tomar foto o escanear el voucher de pago y enviar al <br /> whatsapp o correo asesoria@desarrolloglobal.pe </p>
                        <div className='flex bg-[#e5f1ff] rounded-lg justify-around relative mt-5'>
                            <div className='p-10'>
                                <p className='font-bold text-[#010c4f]'>Al enviar el voucher incluir lo siguiente:</p>
                                <ul>
                                    <li>Número de DNI del participante:</li>
                                    <li>N° de celular o fijo para contactarlo(a):</li>
                                    <li>Especificar el nombre del programa:</li>
                                </ul>
                            </div>
                            <div className='relative w-[40%] hidden lg:block xl:block 2xl:block'>
                                <Image src="/img/icons/IconEnviar.webp" alt='Desarrollo Global' width={162} height={241} className='absolute bottom-0 left-[30%]' />
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
                        <div className='flex bg-[#e5f1ff] rounded-lg justify-around relative mt-5'>
                            <div className='p-5'>
                                <p className='font-bold text-[#010c4f]'>Solicita tu acceso a la plataforma virtual y <br /> lleva tu programa. </p>

                            </div>
                            <div className='relative w-[40%] hidden lg:block'>
                                <Image src="/img/icons/IconLapto.webp" alt='Desarrollo Global' width={162} height={155} className='absolute bottom-0 left-[30%] h-[135px] w-[174px]' />
                            </div>
                        </div>
                    </div>
                </div>

            </article>
        </section>
    )
}
