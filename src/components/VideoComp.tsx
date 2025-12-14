"use client"
import { Video } from '@imagekit/next';
import { IKVideo } from 'imagekitio-next';
import React from 'react'

type videoCompProps = {
    path: string;
    className?: string;
}

const VideoComp = ({path, className}: videoCompProps) => {
  console.log({path});
  return (
    <IKVideo
      urlEndpoint="https://ik.imagekit.io/17ghrxw0i/"
      path={path}
      className={className}
      transformation={[
        { width: "1920", height: "1080", quality: 90 },
        { raw: "l-text,i-Tanishk,fs-100,co-white,l-end" },
      ]}
      controls
    />
  )
}

export default VideoComp
