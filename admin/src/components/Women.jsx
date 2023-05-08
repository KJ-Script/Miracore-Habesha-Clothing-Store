import React from 'react'

function Women() {
  return (
    <div className="flex flex-col space-y-3 w-full">
          <input type="text" placeholder="description" className="p-3 border-gray-800 border"/>
          <input type="text" placeholder="category" className="p-3 border-gray-800 border"/>
          <p>Enter image URL Below</p>
          <input type="text" placeholder="image 1" className="p-3 border-gray-800 border"/>
          <input type="text" placeholder="image 2" className="p-3 border-gray-800 border"/>
          <input type="text" placeholder="image 3" className="p-3 border-gray-800 border"/>

          <button className="bg-gray-800 p-3 text-white">Submit</button>


        </div>
  )
}

export default Women