import React from "react";
import forher from "../assets/images/LandingPage/For-Her.png";
import forhim from "../assets/images/LandingPage/For-Him.png";
import sides from "../assets/images/LandingPage/sides.png";

function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-full">
        <div className="text-center vertically centered text text-2xl text-gray-600">
          With an outstanding style,only for you
        </div>
        <div
          className="text-center top-[10px] font-bold"
          style={{
            backgroundImage: `url(${sides})`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            width: 50,
            height: 500,
          }}
        >
          <h1>Exclusively Designed for you</h1>
        </div>
        <div
          style={{
            backgroundImage: `url(${forher})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: 500,
            height: 500,
          }}
        >
          <button className=" mx-3 py-3 px-8 border-white border-[2px] bg-slate-800 text-black text-xl">
            For Her
          </button>
        </div>
        <div
          style={{
            backgroundImage: `url(${forhim})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: 500,
            height: 500,
          }}
        >
          <button className=" mx-3 py-3 px-8 border-white border-[2px] bg-slate-800 text-black text-xl">
            For Him
          </button>
        </div>
      </div>
    </div>
  );
}
