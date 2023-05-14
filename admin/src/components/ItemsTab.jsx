import React from 'react'

function ItemsTab({setSelected}) {
  return (
    <div className="h-[5%] w-full flex justify-center space-x-4 bg-slate-800 text-white my-4 items-center">
    <button className="mx-2" onClick={() => {setSelected('men')}}>Men</button>
    <button onClick={() => {setSelected('women')}}>Women</button>
    <button onClick={() => {setSelected('kids')}}>Kids</button>
    <button className="mx-2" onClick={() => {setSelected('miscellaneous')}}>Miscellaneous</button>
  </div>
  )
}

export default ItemsTab