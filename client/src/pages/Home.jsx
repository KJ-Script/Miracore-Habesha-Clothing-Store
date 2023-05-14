import React from "react";
import forher from "../assets/images/LandingPage/For-Her.png";
import forhim from "../assets/images/LandingPage/For-Him.png";
import sides from "../assets/images/LandingPage/sides.png";

function Home() {
  return (
    <div className="min-h-screen w-full items-center justify-center">
      <div className="w-full h-full">
        <div className="w-full h-screen">
          <div className="w-full md:flex justify-between">
            <img src={sides} className="hidden md:flex"/>
            <div>
              <div className="w-full bg-red-600 md:flex">
                <div
                  style={{
                    backgroundImage: `url(${forher})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: 850,
                    height: 1000,
                  }}
                  className="md:flex items-center justify-center hidden"
                >
                  <button className=" mx-3 py-3 px-8 border-white border-[2px] bg-slate-800 text-gray-200 text-xl hover:bg-gray-200 hover:text-slate-800">
                    For Her
                  </button>
                </div>
                <div
                  style={{
                    backgroundImage: `url(${forhim})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: 850,
                    height: 1000,
                  }}
                  className="hidden md:flex items-center justify-center"
                >
                  <button className=" mx-3 py-3 px-8 border-white border-[2px] bg-slate-800 text-white text-xl hover:bg-white hover:text-slate-800">
                    For Him
                  </button>
                </div>
              </div>
            </div>
            <img src={sides} className="hidden md:flex"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
