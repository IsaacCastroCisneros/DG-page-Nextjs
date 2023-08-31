import React from 'react'
import boxes from './helpers/boxes'
import { Box } from '.'
import { MyBlock } from '@/components/MyBlock/MyBlock';

export const BeneficiosDeNuestrosProgramas = () => 
{
  return (
    <MyBlock styles={{ container: "bg-primary" }}>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] beneficios:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-[1rem] beneficios1:gap-[2rem] text-left">
        <MyFirstBox />
        {boxes.map((box, pos) => (
          <Box key={pos} {...box} />
        ))}
      </div>
    </MyBlock>
  );
}

function MyFirstBox()
{
  return (
    <div className='pr-[15rem] beneficios:pr-[0] beneficios:text-center'>
      <h2 className='text-[2rem] text-[#fff] leading-[2.2rem]'>Beneficios de nuestros programas</h2>
      <span className='w-[8rem] h-[.3rem] bottom-0 left-0 bg-[#8ea5e5] block mt-[3rem] beneficios1:!w-[80%] beneficios1:mt-[2rem] beneficios1:mx-auto beneficios1:my-0'></span>
    </div>
  );
}