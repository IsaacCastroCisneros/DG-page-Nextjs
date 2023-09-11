"use client"
import { globalContext } from '@/context/GlobalContext'
import React,{useContext} from 'react'
import LoginSigIn from './LoginSigIn'

export default function TheChat() 
{
  const{user}=useContext(globalContext)

  return (
    <>
    {
       !user&&<LoginSigIn/>
    }
    {
        user&&<></>
    }
    </>
  )
}
