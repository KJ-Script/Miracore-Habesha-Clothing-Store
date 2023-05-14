import React from 'react'

function KidsHats({hats}) {
  return (
    <div className="w-[70%] md:grid md:grid-cols-3">
    {
      hats.map((item, index) => {
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

export default KidsHats