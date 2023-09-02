"use client"

import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import menuOption from '../interfaces/menuOption';
import menuOptions from '../helpers/menuOptions';
import { faChevronDown, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '@headlessui/react';
import MyTransition from '@/components/MyTransition/MyTransition';
import { globalContext } from '@/context/GlobalContext';
import postRequest from '@/helpers/postRequest';

export const UserMenu = () => 
{
  return (
    <div className="flex relative">
      <Menu>
        <Image
          src={"/img/avatar_25533.webp"}
          className="rounded-[100%] mr-[1rem] nav-bar:hidden"
          alt="avatar de usuario"
          height={50}
          width={50}
        />
        <Menu.Button className="flex gap-[.5rem] items-center">
          <strong className="my-hover nav-bar:hidden">Hola Usuario</strong>
          <Image
            src={"/img/avatar_25533.webp"}
            className="rounded-[100%] h-[45px] w-[45px] hidden nav-bar:block"
            alt="avatar de usuario"
            height={50}
            width={50}
          />
          <FontAwesomeIcon icon={faChevronDown} />
        </Menu.Button>
        <MyTransition>
          <Menu.Items>
            <ul className="absolute bottom-0 translate-y-[100%] z-[9999] bg-[#fff] right-0 overflow-hidden rounded-[1rem] pb-[.7rem] border-[1px] border-borderGrey1">
              <li className="flex p-[.8rem] justify-between">
                <Image
                  src={"/img/avatar_25533.webp"}
                  className="rounded-[100%] nav-bar:h-[45px] w-[45px]"
                  alt="DG-avatar"
                  height={50}
                  width={50}
                />
                <div className="flex-1 pl-[.5rem]">
                  <strong className="block whitespace-nowrap text-ellipsis overflow-hidden max-w-[7.3rem]">
                    Usuario
                  </strong>
                  <p
                    title="prgmddg1@gmail.com"
                    className="max-w-[7.3rem] block whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    prgmddg1@gmail.com
                  </p>
                </div>
              </li>
              {menuOptions.map((opt, pos) => (
                <Item {...opt} key={pos} />
              ))}
              <Item label='Cerrar Sesion' icon={faRightFromBracket} />
            </ul>
          </Menu.Items>
        </MyTransition>
      </Menu>
    </div>
  );
}

function Item({icon,label,href}:menuOption)
{
  const{user,setUser}=useContext(globalContext)

  function Content()
  {
    return (
      <>
        <span className="w-[1.5rem] flex justify-start">
          <FontAwesomeIcon icon={icon} />
        </span>
        <span className="flex-1 whitespace-nowrap">{label}</span>
      </>
    );
  }

  const styles=`flex w-[100%] capitalize items-center px-[.8rem] py-[.1rem] hover:bg-[#e9ecef]`

  return (
    <li>
      {href && (
        <Link
          href={href}
          className={styles}
        >
         <Content/>
        </Link>
      )}
      {
        !href&&user&&
        <button
         className={styles}
         onClick={async()=>
          {
            const form = new FormData();
            form.append("token", user.token);

            if(await postRequest('logout',form))
            {
               localStorage.removeItem('DG-USER')
               setUser(undefined)
            } 
          }}
         >
           <Content/>
        </button>
      }
    </li>
  ); 
}
