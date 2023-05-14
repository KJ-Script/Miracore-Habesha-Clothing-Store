import React from "react";
import { useNavigate } from "react-router-dom";

function ShoppingBox({item}) {
    const navigate = useNavigate()
    console.log(item.img)

  return (
    <div className="border border-black p-3 hover:p-12 hover:duration-500 rounded-sm" onClick={() => {
        navigate(`/shopping/details`, {state: {item}})
    }}>
      <div className="flex justify-center">
        <img alt="item" src={`http://localhost:8080/uploads/${item.img}`} className="w-[250px] h-[300px]" />
      </div> 
      <div className="w-full border"></div>
      <div className="">
        <p>$550</p>
        <p>{item.category}</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default ShoppingBox;
