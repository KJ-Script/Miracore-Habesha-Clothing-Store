import React from 'react'
import bestdealImage1 from "../assets/images/LandingPage/bestdeal1.png";

function ImageContainer({image, description, original, newPrice}) {
  return (
    <div className="w-[90%]">
        <img src={image} className="w-full border my-[2%]"/>
        <p className="font-bold">{description}</p>
        <div className="flex space-x-3">
        <p className="line-through text-gray-600 font-light">{original}</p>
        <p className="text-red-600 font-bold">{newPrice}</p>
        </div>
    </div>
  )
}

export default ImageContainer