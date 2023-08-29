import React, { Dispatch, SetStateAction } from 'react'
import { DropDownItem } from '.';
import { VerMasLink } from './VerMasLink';

interface props
{
  label:string
  setShow:Dispatch<SetStateAction<boolean>>
}

export const MobSubMenu=({label,setShow}:props)=> 
{
  return (
    <>
      <div className="flex flex-col gap-[.5rem] max-h-[15rem] overflow-y-auto">
        <DropDownItem
          img="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/01/ICONOS_osce_DG.png"
          title=" PREPARACIÓN PARA EL EXAMEN DE CERTIFICACIÓN ANTE OSCE"
          date="10 de Mayo"
          onClick={()=>setShow(false)}
          mob={true}
          type={label}
        />
        <DropDownItem
          img="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/01/ICONOS_osce_DG.png"
          title=" PREPARACIÓN PARA EL EXAMEN DE CERTIFICACIÓN ANTE OSCE"
          date="10 de Mayo"
          onClick={()=>setShow(false)}
          mob={true}
          type={label}
        />
        <DropDownItem
          img="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/01/ICONOS_osce_DG.png"
          title=" PREPARACIÓN PARA EL EXAMEN DE CERTIFICACIÓN ANTE OSCE"
          date="10 de Mayo"
          onClick={()=>setShow(false)}
          mob={true}
          type={label}
        />
        <DropDownItem
          img="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/01/ICONOS_osce_DG.png"
          title=" PREPARACIÓN PARA EL EXAMEN DE CERTIFICACIÓN ANTE OSCE"
          date="10 de Mayo"
          onClick={()=>setShow(false)}
          mob={true}
          type={label}
        />
        <DropDownItem
          img="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/01/ICONOS_osce_DG.png"
          title=" PREPARACIÓN PARA EL EXAMEN DE CERTIFICACIÓN ANTE OSCE"
          date="10 de Mayo"
          onClick={()=>setShow(false)}
          mob={true}
          type={label}
        />
      </div>

      <VerMasLink
        label={label}
        styles="!mt-[.5rem] !px-[0] !w-[100%] text-center"
        onClick={()=>setShow(false)}
      />
    </>
  );
}
