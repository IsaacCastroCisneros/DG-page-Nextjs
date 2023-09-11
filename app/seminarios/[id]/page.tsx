import getRequest from '@/helpers/getRequest'
import React from 'react'
import VideoSemi from './components/VideoSemi'
import Chat from './components/Chat/Chat'
import SeminarioContext from './context/SeminarioContext'



export default async function page({params}:any) 
{
  const {res:seminarios,err}=await getRequest('seminarios',params.id)


  if(err)return <div className='text-center text-red-500 w-[100%]'>an error was occurred</div>

  return (
    <SeminarioContext seminarios={seminarios}>
      <div className="px-[1rem] bg-[#000a48]">
        <div className="flex w-[1920px] mx-auto max-w-[100%] gap-[2rem] 1500px:flex-col">
          <VideoSemi {...seminarios} />
          <Chat />
        </div>
      </div>
    </SeminarioContext>
  );
}
