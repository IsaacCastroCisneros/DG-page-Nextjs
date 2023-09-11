"use client"
import { globalContext } from '@/context/GlobalContext';
import React,{useState,useContext} from 'react'
import CartItems from './components/CartItems/CartItems';
import LoginForm from './components/LoginForm';
import IziForm from './components/IziForm';
import Success from './components/Success';

export default function Detalle() 
{
    const[showSuccess,setShowSuccess]=useState(false);
    const{user,cart}=useContext(globalContext);
  
    const isCart = cart ? cart.length>0 : false
  
    return (
      <div className='px-[1rem]'>
        <h1 className='font-bold text-[1.5rem] mx-auto w-[1166px] max-w-[100%] block mb-[2rem]'>Detalle</h1>
        <div className="flex text-[#000] 1000px:flex-col-reverse shadow-lg mx-auto w-[1166px] max-w-[100%] mb-[5rem] rounded-[.5rem]">
          {isCart && (
            <section className="flex-1 py-[2rem] px-[1.5rem] flex flex-col justify-between">
              <h1 className="font-bold text-[1.2rem] text-blue-500 mb-[1.5rem]">
                Resumen de compra:
              </h1>
              <CartItems/>
            </section>
          )}
          <section className="flex-[2.5] bg-[#fff] px-[4rem] py-[3rem] 1000px:px-[1.5rem] 1000px:py-[2rem] relative">
            {isCart && (
              <>
                {!showSuccess && (
                  <>
                    {!user && <LoginForm/>}
                    {user && <IziForm setShowSuccess={setShowSuccess}/>}
                  </>
                )}
              </>
            )}
            {showSuccess && !isCart && <Success/>}
          </section>
        </div>
      </div>
    );
}


