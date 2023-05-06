import React from 'react'
import menAdditional from '../api/menadditional'
import ShoppingBox from '../utils/ShoppingBox'

function MenAdditional() {
  return (
    <div className="w-[70%] grid grid-cols-3">
    {
      menAdditional.map((item, index) => {
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

export default MenAdditional