"use client"

import { MyPopUp } from '@/components/MyPopUp/MyPopUp'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { NavbarForm } from './components/NavbarForm'
import MyType from '../Navbar/types/MyType'
import { twMerge } from 'tailwind-merge'
import {useEffect} from 'react'

export const loginContext = React.createContext<values>({
  show: false,
  settingShow: () => null,
  type: "login",
  setType: () => null,
});


interface values {
  show: boolean;
  type: MyType;
  settingShow:(bool:boolean)=>void;
  setType: Dispatch<SetStateAction<MyType>>;
}

interface props
{
  styles?:string
  label?:string
  initialType?:'login'|'signup'
}

const LoginSignup = ({styles,label,initialType}:props) => 
{
  const[show,setShow]=useState<boolean>(false)
  const[type,setType]=useState<MyType>('login')

  useEffect(()=>
  {
    if(initialType)
    {
      setType(initialType)
    }

  },[initialType])

  function settingShow(bool:boolean)
  {
    setShow(bool)
    setType(initialType||'login')
  }

  const values =
  {
    show,
    settingShow,
    setType,
    type
  }

  return (
    <loginContext.Provider value={values}>
      <button
        className={twMerge("font-bold py-[8px] bg-[#c2c8f9] px-[24px] text-primary rounded-[.5rem]",styles)} 
        onClick={() => setShow(true)}
      >
        {
          label||'Ingreso al Aula Virtual'
        }
      </button>
      <MyPopUp
        setIsOpen={settingShow}
        isOpen={show}
        popUp={
          <NavbarForm type={type} />
        }
      />
    </loginContext.Provider>
  );
}

export default LoginSignup
