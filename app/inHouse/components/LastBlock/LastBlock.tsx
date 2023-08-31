import { MyBlock } from '@/components/MyBlock/MyBlock'
import React from 'react'
import { MyButtons } from '../MyButtons/MyButtons'
import { EntidadesQueConfiarion } from '@/components/EntidadesQueConfiarion/EntidadesQueConfiarion'

export const LastBlock = () => 
{
  return (
    <MyBlock>
      <MyButtons styles='!mt-0 mb-[2rem]' />
      <EntidadesQueConfiarion/>
    </MyBlock>
  )
}
