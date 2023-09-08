import LoginSignup from '@/components/LoginSignup/LoginSignup';
import React, { useState } from 'react'

export default function LoginSigIn() 
{
  const[show,setShow]=useState<boolean>(false)

  return (
    <>
      <div className="flex flex-col text-white text-center w-[100%] items-stretch border-[#505977] border-[1px] rounded-[.3rem] self-center">
        <section className="flex-1 bg-[#14206b] flex flex-col py-[2rem] px-[1rem]">
          <strong className="mb-[.6rem]">Ingresar para chatear</strong>
          <LoginSignup
            label="Ingresar"
            styles="bg-[#198754] w-[100%] px-[.8rem] py-[.4rem] rounded-[.4rem] font-bold text-white"
          />
        </section>
        <section className="flex-1 bg-[#153172] flex flex-col py-[2rem] px-[1rem]">
          <strong className="mb-[.6rem]">¿Aun no tienes cuenta?</strong>
          <LoginSignup
            label="Registrate"
            initialType="signup"
            styles="bg-[#c2c8f9] text-blue-600 w-[100%] px-[.8rem] py-[.4rem] rounded-[.4rem] font-bold"
          />
        </section>
      </div>
    </>
  );
}
