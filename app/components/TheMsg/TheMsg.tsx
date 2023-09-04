"use client"

import { globalContext } from '@/context/GlobalContext'
import React, { useContext,useState} from 'react'
import { Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const TheMsg = () => 
{
  const{showMsg,setShowMsg}=useContext(globalContext)  

  if(showMsg.show)
  {
    setTimeout(()=>
    {
      setShowMsg(prev=>{return {...prev,show:false}})
    },1500)
  }
  const type =showMsg.type
  let color =''  

  if(type==="fail")color="bg-red-500"
  if(type==="success")color="bg-green-500"
  if(type==="alert")color="bg-yellow-500"
  if(!type)color="bg-green-500"

  return (
    <div className="fixed right-[2rem] top-0 z-[9999999]">
      <Transition
        show={showMsg.show}
        enter="transition-all duration-200"
        enterFrom="opacity-0 translate-y-[.5rem]"
        enterTo="opacity-1 translate-y-[1.3rem]"
        leave="transition-all duration-200"
        leaveFrom="opacity-1 translate-y-[.5rem]"
        leaveTo="opacity-0 translate-y-[1rem]"
      >
        <div className={`${color} text-[#fff] px-[2rem] py-[.4rem] font-bold flex text-[1.4rem] items-center gap-[.5rem] rounded-[.5rem]`}><FontAwesomeIcon icon={faCheckCircle} />{showMsg.content}</div>
      </Transition>
    </div>
  );
}
