import React from 'react'
import footerBox from '../interfaces/footerBox'


export const FooterBox = ({header,content}:footerBox) => 
{
  return (
    <section className='flex-1 p-[1rem] min-w-[197px]'>
       <strong className='text-[1.5rem] mb-[.6rem] block'>
         {header}
       </strong>
       {
        content
       }
    </section>
  )
}
