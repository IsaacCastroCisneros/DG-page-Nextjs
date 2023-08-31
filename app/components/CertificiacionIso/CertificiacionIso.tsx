"use client"

import React from 'react'
import { CertificacionIsoBox } from '@/components/CertificacionIsoBox/CertificacionIso';
import { EntidadesQueConfiarion } from '@/components/EntidadesQueConfiarion/EntidadesQueConfiarion';
import { MyBlock } from '@/components/MyBlock/MyBlock';

export const CertificiacionIso = () => 
{
  return (
    <MyBlock>
      <CertificacionIsoBox styles="items-start mt-[4.9rem] certificacionIso:mt-[0]" />
      <EntidadesQueConfiarion />
    </MyBlock>
  );
}
