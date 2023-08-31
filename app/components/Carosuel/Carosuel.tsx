"use client"

import React from 'react'
import Slider from "react-slick";
import {CustomArrow, FirstBanner,MySlickContainer,SecondBanner,Slick } from '.';
import sliderOptions from '@/helpers/sliderOptions';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

export const Carosuel = () => 
{
    
  return (
    <div
      className="w-[1920px] max-w-[100%] mx-auto my-0 pb-[10rem] block relative"
      style={{ padding: "0" }}
    >
      <Slider {...sliderOptions}
       prevArrow={<CustomArrow direction={'left'} big inside/>}
       nextArrow={<CustomArrow direction={'rite'} big inside/>}
       dotsClass="slick-my-dots"
       customPaging={()=>
        {
           return(
             <button className='w-[2.5rem] h-[1.5rem]'>
               <span className='h-[2px] bg-slate-400 block'></span>
             </button>
           )
        }}
       >
        <Slick bg="/img/carosuel-bg-1.webp">
          <MySlickContainer>
            <FirstBanner />
          </MySlickContainer>
        </Slick>
        <Slick bg="/img/carosuel-bg-2.webp">
          <MySlickContainer>
            <SecondBanner />
          </MySlickContainer>
        </Slick>
      </Slider>
    </div>
  );
}




