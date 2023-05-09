import React from 'react'
import ShoppingBox from '../utils/ShoppingBox'
import img from '../assets/images/top/mentop1.png'
import img1 from '../assets/images/top/mentop2.png'
import img2 from '../assets/images/top/mentop3.png'


function MenTop({top}) {
  return (
    <div className="w-[70%] md:grid md:grid-cols-3">
    {
      top.map((item, index) => {
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

export default MenTop