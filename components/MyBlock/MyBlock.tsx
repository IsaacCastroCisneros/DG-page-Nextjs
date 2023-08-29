import React, { ReactNode } from 'react'

interface props
{
    styles?:{container?:string,h?:string,p?:string,section?:string},
    children?:ReactNode,
    header?:{h:string,p?:string}
}
3.

export const MyBlock = ({styles,children,header}:props) => {
  return (
    <div className={styles?.container||''}>
      <section className={`py-[3rem] px-[1.8rem] mob:px-[.8rem] just-stuff w-[1500px] flex flex-col items-center text-center ${styles?.section||''}`}>
        {
          header&&<h2 className={`text-[32px] font-extrabold block mb-[.8rem] text-center mob-first:text-[28px] ${styles?.h||''}`}>{header.h}</h2>
        }
        {
          header?.p&&<p className={`text-center ${styles?.p||''}`}>{header.p}</p>
        }
        {children}
      </section>
    </div>
  );
}
