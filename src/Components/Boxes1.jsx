"use client";
import { Boxes } from "./Background";

import { Header } from "./Header.jsx";

import React from "react";
import Hero from "./Hero";

const Boxes1 = () => {
  return (
    <div>
      <Header />

      <div className="h-[70vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-start rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <Hero />
      </div>
    </div>
  );
};

export default Boxes1;
