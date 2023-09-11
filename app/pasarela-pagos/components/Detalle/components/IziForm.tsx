"use client"

import React,{useState,Dispatch,SetStateAction} from 'react'
import KRGlue from '@lyracom/embedded-form-glue'
import { useEffect } from 'react'
import { useContext } from 'react'
import axios from 'axios'
import Izi from './Izi'
import PayTypes from './PayTypes'
import DepositoForm from './DepositoForm'
import LoadFormMsg from './LoadFormMsg'
import Spinner from '@/components/Spinner/Spinner'
import { globalContext } from '@/context/GlobalContext'

export default function IziForm({setShowSuccess}:{setShowSuccess:any}) 
{
  const{cart,user,setCart}=useContext(globalContext)
  const[load,setLoad]=useState(false)
  const[payType,setPayType]=useState('card')

  useEffect(()=>
  {
    setLoad(true)
    setTimeout(()=>
    {
       setLoad(false)
    },5000)
  },[cart])

  useEffect(()=>
  {
    izi()
  },[cart])


  function izi()
  {
    const formData = new FormData()
  
    const productsArr = cart.map(pro=>{return {id:pro.id,tipo:pro.tipo}})
    const prices = cart.map(pro=>{return pro.precio.final})
    const amount = prices.reduce((sum,current)=>
    {
      return sum + current
    },0)

    formData.append("amount",`${amount}`)
    formData.append("idUser",`${user?.id}`)
    formData.append("productsArr", JSON.stringify(productsArr));

    console.log(formData.get("amount"),formData.get("idUser"),formData.get("productsArr"))

    /* 97649007:publickey_7BLQcvuVTHjNDjzzSmiyJM8VnfXpfQX9Li995qHar6NyA */
    /* 97649007:testpublickey_UTZAMW5mLnK026AEknrEn6L7WODbX2AllfyAycTISdiUX */

    const endpoint = 'https://api.micuentaweb.pe'
    const publicKey = '97649007:publickey_7BLQcvuVTHjNDjzzSmiyJM8VnfXpfQX9Li995qHar6NyA'
    let formToken = ''

      axios
        .post(
          "https://aula.desarrolloglobal.pe/v03/api/pasarela/generar-token",
          formData
        )
        .then((resp) => {
          formToken = resp.data.token;
          console.log(resp)
          return KRGlue.loadLibrary(
            endpoint,
            publicKey
          ); 
        })
        .then(({ KR }) =>
          KR.setFormConfig({
            formToken: formToken,
            "kr-language": "en-US" 
          })
        )
        .then(({ KR }) =>
          KR.onSubmit((paymentData:any) => {

            paymentData.pago= {idUser:user?.id,productsArr}

            axios
              .post("https://aula.desarrolloglobal.pe/v03/api/pasarela/pago", paymentData)
              .then((response) => {
                if (response.status)
                {
                  setShowSuccess('success')
                  setCart([])
                  localStorage.removeItem('DG-CART')
                }
              });
            return false; 
          })
        ) // Custom payment callback
        .then(({ KR }) =>
          KR.attachForm('#myPaymentForm')
        ) /* add a payment form  to myPaymentForm div*/
        .then(({ KR, result }) =>
          KR.showForm(result.formId)
        ) /* show the payment form */
        .catch((error) =>console.log(error));
  }

  return (
    <>
      <PayTypes setPayType={setPayType} payType={payType} />
      <div className="flex justify-between items-center 1000px:flex-col 1000px:items-start">
        <span className="block mt-[1rem] text-[12.5px]">
          Recuerda activar tu tarjeta para compras por internet
        </span>
        <LoadFormMsg />
      </div>
      {load && (
        <div className="w-[100%] top-[15rem] absolute flex justify-center left-0 1000px:top-[20rem]">
          <Spinner />
        </div>
      )}
      {<Izi payType={payType} load={load} />}
      {payType === "deposito" && <DepositoForm cart={cart} />}
    </>
  );
}
