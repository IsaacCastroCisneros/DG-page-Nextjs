'use client'

import Link from 'next/link'
import {DropDown} from '.'
import { Menu } from '@headlessui/react'
import options from '../interfaces/options'

export const NavBarOption=({href,label,icon}:options)=> 
{
  return (
    <Menu>
      {() => (
        <>
          <li className="relative z-[99]">
            {href && (
              <Link href={href}>
                <Label>{label}</Label>
              </Link>
            )}
            {!href && (
              <Menu.Button
                className={`flex relative gap-[.3rem] items-center`}
              >
                <Label>{label}</Label>
                {icon && <>{icon}</>}
              </Menu.Button>
            )}
            <DropDown label={label} />
          </li>
        </>
      )}
    </Menu>
  );
}

function Label({children}:{children:React.ReactNode})
{
    return(
        <strong className='capitalize opacity-[.8] hover:opacity-[1] transition-all duration-[100ms]'>{children}</strong>
    )
}
