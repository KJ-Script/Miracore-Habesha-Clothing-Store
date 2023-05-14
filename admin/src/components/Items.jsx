import React from 'react'

function Items({data}) {
  return (
    <div className="h-full w-full">
    <div className="h-[3%] w-[100%] bg-slate-800 my-4 flex text-white items-center justify-between">
      <p className="mx-2">{data.description}</p>
      <p>{data.category}</p>
      <p>Price</p>
      <p className="mx-2">Keti Yohannes</p>
    </div>
  </div>
  )
}

export default Items