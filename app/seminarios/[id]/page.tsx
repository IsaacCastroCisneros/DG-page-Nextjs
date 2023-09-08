import getRequest from '@/helpers/getRequest'
import React from 'react'
import VideoSemi from './components/VideoSemi'
import Chat from './components/Chat/Chat'

export default async function page({params}:any) 
{
  const {res}=await getRequest('seminarios','formulacion-y-evalucion-de-proyectos-11141')

  return (
    <div className='px-[1rem] bg-[#000a48]'>
      <div className="flex w-[1920px] mx-auto max-w-[100%] gap-[2rem]">
        <VideoSemi {...res} />
        <Chat />
      </div>
    </div>
  );
}
