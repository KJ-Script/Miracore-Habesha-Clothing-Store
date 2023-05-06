import React from 'react'
import ShoppingBox from '../utils/ShoppingBox'
import menHats from '../api/menhats'

function MenHats() {
  return (
    <div className="w-[70%] grid grid-cols-3">
    {
      menHats.map((item, index) => {
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

export default MenHats