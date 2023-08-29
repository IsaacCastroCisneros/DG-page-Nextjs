'use client'
import Link from 'next/link'
import options from '../interfaces/options'
import { SetStateAction, useEffect, useState } from 'react'
import {MobSubMenu} from "."

interface props
{
  options:options,
  setShow:React.Dispatch<SetStateAction<boolean>>
  show:boolean
}

export const MobMenuOption = (props:props) => 
{
  const{href,label,icon}=props.options
  const{setShow,show}=props
  const[myShow,setMyShow]=useState<boolean>(false)

  useEffect(()=>
  {
    if(!show)
    {
      setMyShow(false)
    }
  },[show])

  return (
    <>
      {href && (
        <Link href={href} className="my-hover" onClick={() => setShow(false)}>
          <Label label={label}></Label>
        </Link>
      )}
      {!href && (
        <button
          className="text-left my-hover flex relative"
          onClick={()=>setMyShow(prev=>!prev)}
        >
          <p className="relative w-fit pr-[2rem]">
            <Label label={label}></Label>
            {icon}
          </p>
        </button>
      )}
      {
        !href&&myShow&&<MobSubMenu label={label} setShow={setShow} />
      }
    </>
  );
}

function Label({label}:{label:string})
{
  return <strong>{label}</strong>
}

