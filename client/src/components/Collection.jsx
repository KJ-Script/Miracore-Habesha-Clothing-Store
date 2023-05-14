import React from 'react'
import image from '../assets/images/LandingPage/Image.png'

function Collection() {
  return (
    <div className='min-h-screen w-full md:flex justify-center bg-transparent'>
        <div className='w-[50%] flex flex-col justify-center h-full space-y-4'>
            <p className="text-[300%]">Gentle Formal Looks</p>
            <p className="text-[120%]">For any occasion or event shop at our formal collection</p>
            <button className="w-[25%] py-4 bg-slate-800 text-white text-[150%] font-bold">Explore Collection</button>
        </div>

        <div>
            <img src={image} className='border-[3px] border-black'/>
        </div>
    </div>
  )
}

export default Collection