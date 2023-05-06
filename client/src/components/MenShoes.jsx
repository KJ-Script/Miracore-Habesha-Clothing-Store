import React from 'react'
import menShoes from '../api/menshoes'
import ShoppingBox from '../utils/ShoppingBox'

function MenShoes() {

  return (
    <div className="w-[70%] grid grid-cols-3">
      {
        menShoes.map((item, index) => {
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

export default MenShoes