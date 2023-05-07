import React from 'react'
import ShoppingBox from '../utils/ShoppingBox'
import menPants from '../api/menpants'

function MenPants() {
  return (
    <div className="w-[70%] md:grid md:grid-cols-3">
    {
      menPants.map((item, index) => {
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

export default MenPants