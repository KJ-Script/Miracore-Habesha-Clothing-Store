import React from 'react'
import ShoppingBox from '../utils/ShoppingBox'
import img from '../assets/images/hats/hats.png'
import img1 from '../assets/images/hats/hats1.png'
import img2 from '../assets/images/hats/hats2.png'


function MenHats({hats}) {
  return (
    <div className="w-[70%] md:grid md:grid-cols-3">
    {
      hats.map((item, index) => {
        return (
          <div className='px-2 py-2'>
            <ShoppingBox key={index} item={item} img={img} img1={img1} img2={img2}/>
          </div>
        )
      })
    }
  </div>
  )
}

export default MenHats