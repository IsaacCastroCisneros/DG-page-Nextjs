import getTotal from '@/helpers/getTotal'
import { Menu } from '@headlessui/react'
import Link from 'next/link'
import React, { Dispatch, ReactNode, SetStateAction } from 'react'

interface props
{
  children:ReactNode,
  mob?:boolean,
  title:string,
  subtitle:string,
  type:'noti'|'cart',
  arr:Array<any>,
  setShow?:Dispatch<SetStateAction<boolean>>
}

export const DropdownMenu = (props:props) => 
{
  const { children, mob = false, title, subtitle, type, arr, setShow=()=>null } = props;



  return (
    <section
      className={`rounded-[.5rem] ${
        mob
          ? "max-w-[30rem]"
          : "absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[100%] block min-w-[25rem]"
      } py-[16px] px-[24px] bg-[#fff]`}
    >
      <span className="flex items-center pb-[.8rem] border-b-[1px] border-borderGrey">
        <strong>{title}</strong>
        <strong className="text-red-500 bg-red-100 block ml-[1.8rem] whitespace-nowrap px-[.3rem] py-[.1rem] rounded-[.5rem] capitalize text-[.9rem]">
          {arr.length} {subtitle}
          {arr.length === 1 ? "" : "s"}
        </strong>
      </span>
      {children}
      {type === "cart" && (
        <p className="flex justify-between pt-[.5rem] items-center">
          <strong className="capitalize text-[20px]">
            Total:
            <span className="text-red-500">S/.{getTotal(arr).toFixed(2)}</span>
          </strong>
          {!mob && (
            <Menu.Item>
              <Link
                href="/pasarela/pagos"
                className="px-[1rem] py-[.4rem] bg-green-500 capitalize text-[#fff] rounded-[.3rem] font-bold"
              >
                comprar
              </Link>
            </Menu.Item>
          )}
          {mob && (
            <Link
              href="/pasarela/pagos"
              className="px-[1rem] py-[.4rem] bg-green-500 capitalize text-[#fff] rounded-[.3rem] font-bold"
              onClick={()=>setShow(false)}
            >
              comprar
            </Link>
          )}
        </p>
      )}
    </section>
  );
}

