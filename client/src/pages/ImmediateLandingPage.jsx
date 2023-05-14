import React from "react";
import tilet from '../assets/images/LandingPage/tilet.png'

function ImmediateLandingPage() {
  return (
    <div className="h-screen text-center text-2xl md:flex justify-center w-full">
      <div className="flex justify-between w-full">
        <img src={tilet} className="mx-[5%] h-[85%] hidden md:flex"/>
        <div className="w-full md:w-[90%] flex flex-col justify-center">
        <p className="text-gray-600 md:text-[135%] my-4">
          Exclusively Designed for you
        </p>
        <p className="md:text-[270%] text-[120%]font-bold">Outstanding style, only for you</p>
        <p className="md:text-[370%] text-[170%] font-bold my-[15%] p-4 py-12 md:bg-slate-800 md:text-white">MIRACLE-FASHION</p>
        
        </div>
        <img src={tilet} className="mx-[5%] h-[85%] hidden md:flex"/>
      </div>
    </div>
  );
}

export default ImmediateLandingPage;
