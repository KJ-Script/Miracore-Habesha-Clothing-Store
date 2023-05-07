import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

function ShoppingDetails() {
    const location =  useLocation()
    const [selected, setSelected] = useState('md')
    const item = location.state?.item

  return (
    <div>
      <div className="flex my-12 w-full justify-center">
        <div className="w-[70%] justify-between">
        <div className='flex justify-center'>        <div className="hover:p-12 hover:duration-500 mx-2">
          <img alt={'itempicture2'} src={item.img} className='w-[600px] h-[500px] border border-black p-6'/>
        </div>
        <div className="">
          <img alt={'itempicture2'} src={item.img1} className='w-[300px] h-[250px] border border-black p-6 my-2 hover:p-2 hover:duration-500'/>
          <img alt={'itempicture2'} src={item.img2} className='w-[300px] h-[250px] border border-black p-6 hover:p-2 hover:duration-500'/>
        </div>
        </div>
        </div>

        <div>
          <div>Here is some arbitrary Information about the Item</div>
          <div className="flex justify-between w-full">
          <div className={selected == 'xs' ? `bg-black text-white border border-black p-2` : `border border-black p-2`} onClick={() => {
            setSelected('xs')
          }}>Xs</div>
          <div className={selected == 'sm' ? `bg-black text-white border border-black p-2` : `border border-black p-2`} onClick={() => {
            setSelected('sm')
          }}>Sm</div>
          <div className={selected == 'md' ? `bg-black text-white border border-black p-2` : `border border-black p-2`} onClick={() => {
            setSelected('md')
          }}>Md</div>
          <div className={selected == 'lg' ? `bg-black text-white border border-black p-2` : `border border-black p-2`} onClick={() => {
            setSelected('lg')
          }}>Lg</div>
          <div className={selected == 'xl' ? `bg-black text-white border border-black p-2` : `border border-black p-2`} onClick={() => {
            setSelected('xl')
          }}>Xl</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ShoppingDetails