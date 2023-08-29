import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from '@headlessui/react'

interface props
{
  img:string,
  title:string,
  date:string,
  type:string,
  onClick?:()=>void,
  mob?:boolean
}

export const DropDownItem=(props:props)=> 
{
  const
  {
    img,
    title,
    date,
    type,
    onClick=()=>null,
    mob=false
  }=props
  
  return (
    <div className="flex gap-[.5rem] items-center">
      <Image src={img} width={50} height={50} alt="DG-icon-programa" />
      <p className="flex flex-col">
        {!mob && (
          <Menu.Item>
            {() => (
              <Link href={`/${type.toLowerCase()}/`} onClick={onClick}>
                <strong className="nav-menu-option hover:opacity-[1] opacity-[.8] transition-all duration-[200ms]">
                  {title}
                </strong>
              </Link>
            )}
          </Menu.Item>
        )}
        {mob && (
          <Link href={`/${type.toLowerCase()}/`} onClick={onClick}>
            <strong className="nav-menu-option hover:opacity-[1] opacity-[.8] transition-all duration-[200ms]">
              {title}
            </strong>
          </Link>
        )}
        <span>inicia:{date}</span>
      </p>
    </div>
  );
}

