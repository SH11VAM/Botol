"use client";

import React, { useState } from "react";
import Image from "next/image";

import MovingBox from "@/app/components/ui/MovingBox";

const Section2 = () => {
  const [blur, setblur]= useState(false);
  function startAnimation(){
    setblur(true);

  }


  return (
    <div className="h-[30%] w-full relative cursor-pointer " onClick={startAnimation}>
    <div className="w-full h-full  relative  overflow-hidden">
      <Image
        src="/roadmapfinal.png"
        alt="section2"
        layout="intrisic"
        width={1280}
        height={600}
        objectFit="cover"
        className={` transition-all duration-500 ${blur ? "opacity-15": "opacity-100"}`}
      />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <MovingBox blur={blur} />
    </div>
  </div>
  );
};

export default Section2;
