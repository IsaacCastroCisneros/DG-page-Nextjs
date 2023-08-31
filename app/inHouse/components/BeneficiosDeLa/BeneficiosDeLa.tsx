import { MyBlock } from '@/components/MyBlock/MyBlock'
import React from 'react'
import { BeneficiosDeLaBox } from './components/BeneficiosDeLaBox'
import beneficiosDeLaBoxes from './helpers/beneficiosDeLaBoxes'

export const BeneficiosDeLa = () => {
  return (
    <MyBlock header={{h:"BENEFICIOS DE LA MODALIDAD IN HOUSE"}} styles={{container:"bg-myDarkPurple",h:"text-[#fff]"}} >
      <div className='grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] grid gap-[.5rem] just-stuff w-[75rem] grid-rows-[repeat(2,225px)] !mt-[2.5rem]'>
        {
          beneficiosDeLaBoxes.map((ben,pos)=>
          (
            <BeneficiosDeLaBox {...ben} key={pos} />
          ))
        }
      </div>
    </MyBlock>
  )
}


