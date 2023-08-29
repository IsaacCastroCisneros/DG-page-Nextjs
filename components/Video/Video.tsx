"use client"

import React, { VideoHTMLAttributes, useEffect, useRef } from 'react'

interface videoProps extends VideoHTMLAttributes<HTMLVideoElement> 
{
    loading: "eager" | "lazy";
}

interface props
{
  style?:React.CSSProperties,
  res?:number,
  styles?:string
  src?:string
}

export const Video = (props:props) => 
{
   /*  const videoRef = useRef<HTMLVideoElement>(null);
    const {
      style,
      res = 720,
      src = "http://player.vimeo.com/video/728721225",
      styles,
    } = props;

    useEffect(() => {
      if (videoRef.current) {
        const player = new Plyr(videoRef.current);
        player.source = {
            type: 'video',
            sources: [
                {
                    src,
                    provider: 'vimeo',
                    size: res
                },
            ],
        };
      }
    }, []);

    const myVideoProps: videoProps = {
      loading: "lazy",
      style,
    }; */

    return null /* (
      <div className={`w-[calc(648px_+_2rem)] max-w-[100%] ${styles}`} >
        <video {...myVideoProps} ref={videoRef} ></video>
      </div>
    ); */
}
