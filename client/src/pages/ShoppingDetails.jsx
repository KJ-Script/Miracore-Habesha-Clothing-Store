import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ShoppingDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState("md");
  const item = location.state?.item;
  const img = location.state?.img;
  const img1 = location.state?.img1;
  const img2 = location.state?.img2;

  return (
    <div>
      <div className="w-full border"></div>
      <div className="md:flex my-12 w-full justify-center">
        <div className="w-[70%] mx-12 md:justify-between">
          <div className="md:flex justify-center">
            <div className="hover:p-12 hover:duration-500 mx-2">
              <img
                alt={"itempicture2"}
                src={img}
                className="w-[600px] h-[500px] border border-black p-6"
              />
            </div>
            <div className="">
              <img
                alt={"itempicture2"}
                src={img1}
                className="w-[300px] h-[250px] border border-black p-6 my-2 hover:p-2 hover:duration-500"
              />
              <img
                alt={"itempicture2"}
                src={img2}
                className="w-[300px] h-[250px] border border-black p-6 hover:p-2 hover:duration-500"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold">Miracore</div>
          <div className="text-2xl font-light">{item.category}</div>
          <div className="text-lg">{item.description}</div>
          <div className="text-lg my-4 bg-black p-2 text-white">Sizes</div>
          <div className="flex justify-between w-full space-x-5">
            <div
              className={
                selected == "xs"
                  ? `bg-black text-white border border-black p-2`
                  : `border border-black p-2`
              }
              onClick={() => {
                setSelected("xs");
              }}
            >
              Xs
            </div>
            <div
              className={
                selected == "sm"
                  ? `bg-black text-white border border-black p-2`
                  : `border border-black p-2`
              }
              onClick={() => {
                setSelected("sm");
              }}
            >
              Sm
            </div>
            <div
              className={
                selected == "md"
                  ? `bg-black text-white border border-black p-2`
                  : `border border-black p-2`
              }
              onClick={() => {
                setSelected("md");
              }}
            >
              Md
            </div>
            <div
              className={
                selected == "lg"
                  ? `bg-black text-white border border-black p-2`
                  : `border border-black p-2`
              }
              onClick={() => {
                setSelected("lg");
              }}
            >
              Lg
            </div>
            <div
              className={
                selected == "xl"
                  ? `bg-black text-white border border-black p-2`
                  : `border border-black p-2`
              }
              onClick={() => {
                setSelected("xl");
              }}
            >
              Xl
            </div>
          </div>

          <div>
            <div className="mt-8">Color</div>
            <select className="w-[75%] h-[50px] px-3 my-3 bg-black text-white">
              <option>Red</option>
              <option>Velvet</option>
              <option>Green</option>
            </select>
            <button
              className="w-full h-[50px] border border-black"
              onClick={() => {
                navigate("/shopping/details/cart");
              }}
            >
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[40%] text-center">
          <div className="w-full bg-black text-white h-[50px] flex justify-center items-center">
            <p>REVIEWS</p>
          </div>
        </div>
      </div>

      <div className="md:flex justify-between my-3 mx-4 text-center hidden">
        <div className="w-[300px] h-[100px] border border-black flex items-center">
          <p className="w-full text-center">Review text goes here</p>
        </div>
        <div className="w-[300px] h-[100px] border border-black flex items-center">
          <p className="w-full text-center">Review text goes here</p>
        </div>
        <div className="w-[300px] h-[100px] border border-black  flex items-center">
          <p className="w-full text-center">Review text goes here</p>
        </div>

        <div className="w-[300px] h-[100px] border border-black flex items-center">
          <p className="w-full text-center">Review text goes here</p>
        </div>
        <div className="w-[300px] h-[100px] border border-black  flex items-center">
          <p className="w-full text-center">Review text goes here</p>
        </div>
        <div className="w-[300px] h-[100px] border border-black  flex items-center">
          <p className="w-full text-center">Review text goes here</p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingDetails;
