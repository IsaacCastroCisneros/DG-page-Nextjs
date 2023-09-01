import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import cursos from '@/interfaces/cursos'

interface props
{
  img:string,
  title:string,
  date:string,
  type:string,
  onClick?:()=>void,
  mob?:boolean,
  icon?:string,
  tag?:string
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
    mob=false,
    tag,
    icon
  }=props
  
  return (
    <div className="flex gap-[.5rem] items-center">
      <Image src={type==="cursos"? icon||'':img} width={50} height={50} alt="DG-icon-programa" className='h-[50px] w-[50px] rounded-[100%] border-[1px] border-myGrey' />
      <p className="flex flex-col">
        {!mob && (
          <Menu.Item>
            {() => (
              <Link href={`/${type.toLowerCase()}/${tag}`} onClick={onClick}>
                <strong className="nav-menu-option hover:opacity-[1] opacity-[.8] transition-all duration-[200ms] line-clamp-2">
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

