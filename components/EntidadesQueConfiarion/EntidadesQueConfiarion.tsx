'use client'

import sliderOptions from '@/helpers/sliderOptions';
import React from 'react'
import Slider from 'react-slick';
import { Entidad } from './components/Entidad';
import entidades from './helpers/entidades';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

export const EntidadesQueConfiarion = () => {
  return (
    <>
      <h2 className="text-[1.5rem] text-slate-900 text-center">
          Entidades que confiaron en nosotros
      </h2>
      <p className="text-neutral-700 mb-[2rem] text-center">
        Mas de 50 000 servidores público capacitados
      </p>
      <div className="w-[962px] max-w-[100%] px-[1rem]">
        <Slider
          {...sliderOptions}
          slidesToShow={4}
          slidesToScroll={4}
          responsive={[
            {
              breakpoint: 830,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ]}
        >
          {entidades.map((ent, pos) => (
            <Entidad key={pos} {...ent} />
          ))}
        </Slider>
      </div>
    </>
  );
}
