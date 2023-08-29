import React, { ReactNode } from 'react'
import { Menu } from '@headlessui/react'
import MyTransition from '../MyTransition/MyTransition'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export const DropdownButton = ({children,icon,arr}:{children:ReactNode,icon:IconProp,arr:Array<any>}) => 
{
  return (
    <div className="relative nav-bar:hidden">
      <Menu>
        {({open}) => (
          <>
            <Menu.Button className={`relative text-[1.5rem] px-[.8rem] py-[.3rem] shadow-[0px_0px_.3rem_1px_#a6a5a2] rounded-[.5rem] hover:shadow-[none] hover:bg-primary hover:text-[#fff] transition-all duration-200 ${open ? 'bg-primary text-[#fff]':'text-primary'}`}>
              <FontAwesomeIcon icon={icon} />
              {
               arr.length>0&&<span className='bg-red-500 text-[#fff] absolute top-[-.5rem] right-[-.5rem] w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-[100%] text-[.9rem] font-bold'>{arr.length}</span>
              }
            </Menu.Button>
            <MyTransition>
              <Menu.Items>
                {
                  children
                }
              </Menu.Items>
            </MyTransition>
          </>
        )}
      </Menu>
    </div>
  )
}
