"use client"
import React,{useContext} from 'react'
import { chatContenxt } from '../../Chat';
import Pariticipar from './components/Pariticipar';
import LoginSigIn from './components/LoginSigIn';
import TheChat from './components/TheChat';

export default function ChatBox() 
{
   const{participar}=useContext(chatContenxt)

  return (
    <div className='w-[100%] flex items-end'>
      {
        participar&&<TheChat/>
      }
      {!participar && (
        <Pariticipar/>
      )}
    </div>
  );
}
