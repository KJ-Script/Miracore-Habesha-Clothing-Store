import React from "react";
import tilet from '../assets/images/LandingPage/tilet.png'

function ImmediateLandingPage() {
  return (
    <div className="h-screen text-center text-2xl flex justify-center w-full">
      <div className="flex justify-between w-full">
        <img src={tilet} className="mx-[5%] h-[85%]"/>
        <div className="w-[90%] flex flex-col justify-center">
        <p className="text-gray-600 text-[135%] my-4">
          Exclusively Designed for you
        </p>
        <p className="text-[270%] font-bold">Outstanding style, only for you</p>
        <p className="text-[370%] font-bold my-[15%] p-4 py-12 bg-slate-800 text-white">MIRACLE-FASHION</p>
        
        </div>
        <img src={tilet} className="mx-[5%] h-[85%]"/>
      </div>
    </div>
  );
}

export default ImmediateLandingPage;
