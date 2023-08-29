import React, { useContext } from 'react'
import Image from 'next/image';
import { globalContext } from '@/context/GlobalContext';
import cartItem from '@/interfaces/cartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

export const CartItems = () => 
{
  const{cart}=useContext(globalContext)

  return (
    <ul className="py-[.5rem] border-b-[1px] border-borderGrey block max-h-[30rem] overflow-y-auto">
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      {
        cart.length===0&&
        <strong className='text-[1.1rem] block text-center py-[2rem]'>
          ¡Agrega Programas al Carrito!
        </strong>
      }
    </ul>
  );
}

function CartItem(props:cartItem)
{
  const{setCart}=useContext(globalContext)

  const{id,name,img,price}=props 

  return (
    <li className="flex items-center gap-[1rem] relative nav-bar:text-[.7rem] p-[.5rem]">
      <Image
        src={img}
        width={100}
        height={67}
        alt="DG-cartImage"
        className="rounded-[.4rem]"
      />
      <section className="flex-1 flex flex-col">
        <strong className="line-clamp-3 text-ellipsis overflow-hidden">
          {name}
        </strong>
        <strong className="capitalize">diploma</strong>
        <span className="flex items-center justify-between gap-[.1rem] flex-wrap">
          <strong className="text-[20px] text-red-500 nav-bar:text-[15px]">
            S/{Number(price.discount).toFixed(2)}
          </strong>
          <span className="line-through">
            S/. {Number(price.normal).toFixed(2)}
          </span>
        </span>
      </section>
      <button
        className="absolute right-0 top-[-.5rem]"
        onClick={() =>
          setCart((prev) => {
            return prev.filter((prev) => prev.id !== id);
          })
        }
      >
        <FontAwesomeIcon size="xl" icon={faXmarkCircle} />
      </button>
    </li>
  );
}