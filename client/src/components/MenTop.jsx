import React from 'react'
import ShoppingBox from '../utils/ShoppingBox'
import menTops from '../api/mentop'


function MenTop() {
  return (
    <div className="w-[70%] grid grid-cols-3">
    {
      menTops.map((item, index) => {
        return (
          <div className='px-2 py-2'>
            <ShoppingBox item={item}/>
          </div>
        )
      })
    }
  </div>
)
}

export default MenTop