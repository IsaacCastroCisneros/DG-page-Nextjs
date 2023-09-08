"use client"
import React,{useContext} from 'react'
import { chatContenxt } from '../../Chat';
import Pariticipar from './components/Pariticipar';
import LoginSigIn from './components/LoginSigIn';

export default function ChatBox() 
{
   const{participar}=useContext(chatContenxt)

  return (
    <div className='w-[100%] flex items-end'>
      {
        participar&&<LoginSigIn/>
      }
      {!participar && (
        <Pariticipar/>
      )}
    </div>
  );
}
