import React from 'react'
import { useNavigate } from 'react-router-dom'

function ShoppingNavBar({header ,setHeader, firstTitle, secondTitle, thirdTitle, fourthTitle}) {
    const navigate = useNavigate()

  return (
    <div className="">
    <div className="flex justify-center">
        <div className="border w-[96%] my-2"></div>
    </div>
    <div className="w-full flex justify-center py-2">
        <div className="w-[60%] flex justify-between">
            <div className={header == 'top' ? `py-3 px-9 border-[2px] border-black bg-black text-white` :`py-3 px-9 border-[2px] border-black hover:bg-black hover:text-white`} onClick={() => {
                setHeader('top')
            }}>{firstTitle}</div>
            <div className={header == 'pants' ? `py-3 px-9 border-[2px] border-black bg-black text-white` :`py-3 px-9 border-[2px] border-black hover:bg-black hover:text-white`} onClick={() => {
                setHeader('pants')
            }}>{secondTitle}</div>
            <div className={header == 'shoes' ? `py-3 px-9 border-[2px] border-black bg-black text-white` :`py-3 px-9 border-[2px] border-black hover:bg-black hover:text-white`} onClick={() => {
                setHeader('shoes')
            }}>{thirdTitle}</div>
            <div className={header == 'hats' ? `py-3 px-9 border-[2px] border-black bg-black text-white` :`py-3 px-9 border-[2px] border-black hover:bg-black hover:text-white`} onClick={() => {
                setHeader('hats')
            }}>{fourthTitle}</div>
            <div className={header == 'additionals' ? `py-3 px-9 border-[2px] border-black bg-black text-white` :`py-3 px-9 border-[2px] border-black hover:bg-black hover:text-white`} onClick={() => {
                setHeader('additionals')
            }}>ADDITIONALS</div>
        </div>
</div>
<div className="flex justify-center">
    <div className="my-2 shadow-md w-[96%] border"></div>
</div>
</div>
  )
}

export default ShoppingNavBar