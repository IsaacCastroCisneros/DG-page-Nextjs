'use client'
import { globalContext } from '@/context/GlobalContext';
import cartItem from '@/interfaces/cartItem';
import React,{useContext} from 'react'

export default function useCart() 
{
   const{setCart,setShowMsg}=useContext(globalContext)
  
   function updatingCart(item:cartItem)
   {
    const{imagen,titulo,precio,id,tipo,total_sesiones}=item

       setCart((prev) => {
           const isIn = prev.find((item) => item.id === id);
           if (isIn)
           {
            setShowMsg({ show: true,type:"alert",content:"Ya se encuentra agregado!" });          
             return prev;
           }
       
           setShowMsg({ show: true,content:"Producto agregado!" });
           return [
             ...prev,
             {
               imagen,
               titulo,
               precio,
               id,
               tipo,
               total_sesiones
             },
           ];
         });
   }


  return {
    updatingCart
  }
}
