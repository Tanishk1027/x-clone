"use client";

import React from "react";
import { Image } from "@imagekit/next";

type ImageCompProps = {
  src: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
};

const ImageComp = ({ src, w, h, alt, className }: ImageCompProps) => {
  return (
    <Image
      urlEndpoint="https://ik.imagekit.io/17ghrxw0i/"
      src={src}
      transformation={[{ width: w, height: h }]}
      width={w}
      height={h}
      alt={alt}
      className={className}
    />
  );
};

export default ImageComp;
