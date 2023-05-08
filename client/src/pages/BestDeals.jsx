import React from "react";
import bestdealImage1 from "../assets/images/LandingPage/bestdeal1.png";
import bestdealImage2 from "../assets/images/LandingPage/bestdeal2.png";
import bestdealImage3 from "../assets/images/LandingPage/bestdeal3.png";
import bestdealImage4 from "../assets/images/LandingPage/bestdeal4.png";

function BestDeals() {
  return (
    <div className="bg-slate-800 h-screen flex items-center w-full">
      <div
        className="md:hidden flex items-center justify-center space-x-4"
        style={{
          backgroundImage: `url(${bestdealImage1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: 1000,
          height: 1000,
        }}
      >
        <button
          className="py-2 px-8 bg-gray-200 border-black border-[2px] hover:px-6 hover:py-4 hover:duration-500"
          onClick={() => {
            navigate("/shopping", {
              state: {
                tabNumber: 1,
              },
            });
          }}
        >
          For Her
        </button>
        <button
          className="py-2 px-8 bg-gray-200 border-black border-[2px] hover:px-6 hover:py-4 hover:duration-500"
          onClick={() => {
            navigate("/shopping", {
              state: {
                tabNumber: 2,
              },
            });
          }}
        >
          For Him
        </button>
        <button
          className="py-2 px-8 bg-gray-200 border-black border-[2px] hover:px-6 hover:py-4 hover:duration-500"
          onClick={() => {
            navigate("/shopping", {
              state: {
                tabNumber: 3,
              },
            });
          }}
        >
          For Kids
        </button>
      </div>
      <div className="hidden md:flex justify-center w-full">
        <div
          className=""
          style={{
            backgroundImage: `url(${bestdealImage2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: 600,
            height: 800,
          }}
        >
          <div className="h-full w-full flex items-center justify-center">
            <button
              className="py-2 px-8 bg-gray-200 border-black border-[2px] hover:px-6 hover:py-4 hover:duration-500"
              onClick={() => {
                navigate("/shopping", {
                  state: {
                    tabNumber: 1,
                  },
                });
              }}
            >
              For Her
            </button>
          </div>
        </div>
        <div
          className=""
          style={{
            backgroundImage: `url(${bestdealImage3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: 600,
          }}
        >
          <div className="h-full w-full flex items-center justify-center">
            <button
              className="py-2 px-8 bg-gray-200 border-black border-[2px] hover:px-6 hover:py-4 hover:duration-500"
              onClick={() => {
                navigate("/shopping", {
                  state: {
                    tabNumber: 2,
                  },
                });
              }}
            >
              For Him
            </button>
          </div>
        </div>
        <div
          className="mx-3"
          style={{
            backgroundImage: `url(${bestdealImage4})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: 600,
          }}
        >
          <div
            className="h-full w-full flex items-center justify-center"
            onClick={() => {
              navigate("/shopping", {
                state: {
                  tabNumber: 3,
                },
              });
            }}
          >
            <button className="py-2 px-8 bg-gray-200 border-black border-[2px] hover:px-6 hover:py-4 hover:duration-500">
              For the little ones
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestDeals;
