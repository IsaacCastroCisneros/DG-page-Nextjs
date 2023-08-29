'use client'

import { globalContext } from '@/context/GlobalContext';
import postRequest from '@/helpers/postRequest';
import user from '@/interfaces/user';
import React, { ReactNode, useContext} from 'react'

interface props 
{
  styles: string;
  label: string;
  children: ReactNode;
  isOk:boolean,
  setIsOpen:(value:boolean)=>void,
  container?:string,
  submit?:()=>any,
  user?:boolean,
  autoLogin?:boolean
}

export const MyForm = (props:props) => 
{
  const {
    styles,
    label,
    children,
    isOk,
    setIsOpen,
    container,
    submit = () => Promise<any>,
    user,
    autoLogin
  } = props;

  const{setUser}=useContext(globalContext)

  return (
    <form
      className="flex-1 flex justify-between flex-col"
      onSubmit={async(e) => 
      {
        if(!isOk)return
        e.preventDefault();

        const {res,values,err}=await submit()
        if(err)return

        if(res)
        {
          if(user)
          {
            if(autoLogin)
            {
              const form = new FormData()
              form.append('correo',values.get('correo'))
              form.append('clave',values.get('clave'))
              const {res}= await postRequest('login',form)
              storing(res)
              setUser(res)
              setIsOpen(false)
              return
            }

            storing(res)
            setUser(res)
          }
          setIsOpen(false)
          return 
        }
      }}
    >
      <div className={container}>{children}</div>
      <button
        className={`px-[16px] py-[12px] transition-all duration-200 w-[100%] text-[#fff] rounded-[.5rem] font-bold capitalize ${styles} ${
          isOk ? "" : "brightness-[70%] pointer-events-none"
        }`}
      >
        {label}
      </button>
    </form>
  );
}

function storing(user:user)
{
  localStorage.setItem('DG-USER',JSON.stringify(user))
  document.cookie = `token=${user.token};domain=.desarrolloglobal.pe`;
}