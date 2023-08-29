"use client"

import { MyPopUp } from '@/components/MyPopUp/MyPopUp'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { NavbarForm } from './NavbarForm'
import MyType from '../types/MyType'

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

export const Login = () => 
{
  const[show,setShow]=useState<boolean>(false)
  const[type,setType]=useState<MyType>('login')

  function settingShow(bool:boolean)
  {
    setShow(bool)
    setType('login')
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
        className="font-bold py-[8px] bg-[#c2c8f9] px-[24px] text-primary rounded-[.5rem]"
        onClick={() => setShow(true)}
      >
        Ingreso al Aula Virtual
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
