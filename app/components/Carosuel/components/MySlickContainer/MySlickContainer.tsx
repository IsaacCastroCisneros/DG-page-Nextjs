import React, { ReactNode } from 'react'

export const MySlickContainer = ({children}:{children:ReactNode}) => 
{
  return (
    <div className="flex w-[100%] h-[100%] items-end justify-center gap-[2.5rem] px-[4rem] firstBanner1:px-[1.5rem] text-[#fff]">
      {
        children
      }
    </div>
  )
}
