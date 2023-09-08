import { Video } from '@/components/Video/Video'
import seminarios from '@/interfaces/seminarios'
import React from 'react'

export default function VideoSemi(props:seminarios) 
{
  const{id_video}=props

  return (
    <div className='flex-1 bg-[#000a48]'>
        <Video src={`http://player.vimeo.com/video/${id_video}`} />
    </div>
  )
}
