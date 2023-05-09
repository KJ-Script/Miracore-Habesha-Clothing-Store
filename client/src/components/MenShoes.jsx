import React from 'react'
import ShoppingBox from '../utils/ShoppingBox'
import img from '../assets/images/shoes/girlshoes.png'
import img1 from '../assets/images/shoes/menbrownshoes.png'
import img2 from '../assets/images/shoes/menbrownshoes.png'

function MenShoes({footwear}) {
  console.log("mft", footwear)
  return (
    <div className="w-[70%] md:grid md:grid-cols-3">
      {
        footwear.map((item, index) => {
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

export default MenShoes