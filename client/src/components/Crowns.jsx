import React from 'react'
import ShoppingBox from '../utils/ShoppingBox'

function Crowns({crowns}) {
  return (
    <div className="w-[70%] md:grid md:grid-cols-3">
    {
      crowns.map((item, index) => {
        return (
          <div className='px-2 py-2'>
            <ShoppingBox key={index} item={item}/>
          </div>
        )
      })
    }
  </div>
  )
}

export default Crowns