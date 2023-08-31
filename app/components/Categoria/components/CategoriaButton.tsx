import program from "@/types/program";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

interface props
{
    label:program,
    program?:program,
    setMyProgram?:Dispatch<SetStateAction<program>>
    href?:string,
    blank?:boolean,
    bigger?:boolean
}


export const CategoriaButton=(props:props)=>
{
   const 
   {
     label,
     program,
     setMyProgram=()=>null,
     href=undefined,
     blank=false,
     bigger=false
   }=props
    
   const isActive = label===program

   const optionStyle = `py-[.6rem] px-[.8rem] text-center rounded-[15rem] ${
    isActive ? "bg-[#fff] text-primary" : "bg-transparent text-[#fff]"
  } ${bigger? "program-selector:flex-3":"program-selector:flex-1"}`

   return (
     <>
       {!href && (
         <button className={optionStyle} onClick={() => setMyProgram(label)}>
           <MyLabel label={label} />
         </button>
       )}
       {href && (
         <>
           <Link className={optionStyle} href={href} target={blank ? "_blank":""}>
             <MyLabel label={label} />
           </Link>
         </>
       )}
     </>
   );
}

function MyLabel({label}:{label:string})
{
  return <strong className='capitalize transition-all duration-[200ms]'>{label}</strong>
}