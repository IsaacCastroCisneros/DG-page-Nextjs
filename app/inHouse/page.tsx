import { MyBannerContainer } from '@/components/MyBannerContainer/MyBannerContainer'
import { MostrarCards, Stripe } from '@/components/Servicios'
import React from 'react'
import { AcercaDeNosotros, BeneficiosDeLa, InHouseBanner, InHouseCard,ListaDeProgramas, MyButtons } from '.'
import { LastBlock } from './components/LastBlock/LastBlock';
import getRequest from '@/helpers/getRequest';
import { InHouseContext } from './context/InHouseContext';
import inHouse from '@/interfaces/inHouse';

export default async function page() 
{
  const {res:inHouses,err} = await getRequest('inHouse')
  const myInHouses= inHouses as  Array<inHouse>

  return (
    <InHouseContext
      inHouse={err ? []:inHouses}
      >
      <MyBannerContainer styles="bg-[#2000d1]">
        <InHouseBanner />
      </MyBannerContainer>
      <Stripe />
      <MostrarCards
        program="inHouse"
        header={{
          h2: "Elige el programa que deseas llevar",
          p: "Tenemos mas de 90 programas disponibles para ser dictados en tu Entidad / Empresa",
        }}
        footer={<MyButtons />}
      >
        {
          myInHouses.map((item)=>
            (
              <InHouseCard key={item.id} {...item} />
            ))
        }
      </MostrarCards>
      <ListaDeProgramas />
      <AcercaDeNosotros />
      <BeneficiosDeLa />
      <LastBlock />
    </InHouseContext>
  );
}

