"use client"

import React, { useContext } from 'react'
import Image from 'next/image'
import {NavbarOptionList, UserMenu,NavMobMenu,Login} from '.'
import { options } from './helpers/options';
import Link from 'next/link';
import { DropdownButton } from '../DropdownButton/DropdownButton';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { globalContext } from '@/context/GlobalContext';
import { faBell, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartItems } from '../CartItems/CartItems';
import { NotiItems } from '../NotiItems/NotiItems';


export const Navbar = () => 
{
  const{cart,user}=useContext(globalContext)

  return (
    <nav className="my-container py-[.5rem] px-[.8rem] flex items-center relative">
      <Link href="/">
        <Image
          src={"/DG-Logotipo_Color.webp"}
          width={180}
          height={44}
          alt="logo de desarrollo global"
          className="mr-[2rem]"
        />
      </Link>
      <NavbarOptionList options={options} />
      <div className="ml-auto flex items-center gap-[1rem] relative w-fit">
        <DropdownButton icon={faShoppingCart} arr={cart}>
          <DropdownMenu
            arr={cart}
            type="cart"
            title="Carrito"
            subtitle="programa"
          >
            <CartItems />
          </DropdownMenu>
        </DropdownButton>
        <DropdownButton icon={faBell} arr={[]}>
          <DropdownMenu
           arr={[]}
           type='noti'
           title='Seminarios en Vivo'
           subtitle='seminario'
           >
            <NotiItems/>
          </DropdownMenu>
        </DropdownButton>
        {
          user&&<UserMenu />
        }
        <NavMobMenu />
        {
          !user&&<Login />
        }
      </div>
    </nav>
  );
}

