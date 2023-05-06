import React from 'react'
import { useLocation } from 'react-router-dom'

function ShoppingDetails() {
    const location =  useLocation()

    const item = location.state?.item
    console.log("item Data: ", item)
  return (
    <div>ShoppingDetails</div>
  )
}

export default ShoppingDetails