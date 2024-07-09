"use client";
import { Boxes } from "./Background";

import { Header } from "./Header.jsx";

import React from "react";
import Hero from "./Hero";

const Boxes1 = () => {
  return (
    <div>
      
      <Header />
      <div className="h-[80vh] relative w-full pt-5 overflow-hidden bg-black flex flex-col items-center justify-start rounded-lg">
        <div className="absolute inset-0 w-full  h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        
        <Boxes />
        <Hero />
      </div>
    </div>
  );
};

export default Boxes1;
