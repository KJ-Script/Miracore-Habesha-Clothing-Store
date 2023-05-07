import React from 'react'

function Payment({setSelected}) {
  return (
    <div className="w-full flex justify-center my-20">
    <div className="text-center w-full">
      <p className="text-2xl p-2 bg-black text-white mx-[20%]">PAYMENT DETAILS</p>
      <div className="w-full my-4 md:space-x-2 grid md:flex md:justify-center">
          <input type="email" placeholder="E-mail *" required className="p-3 w-[90%] mx-2  md:w-[20%] border border-black"/>
          <input type="text" placeholder="First Name *" required className="p-3 w-[90%] mx-2 md:w-[20%] border border-black"/>
          <input type="text" placeholder="Last Name *" required className="p-3 w-[90%] mx-2 md:w-[20%] border border-black"/>
      </div>

      <div className="w-full my-4">

          <input type="text" placeholder="Card No *" required className="p-3 md:w-[61%] border border-black"/>

      </div>

      <select className="w-[30%] text-center h-[50px] bg-white border border-black text-xl px-2">
          <option>Visa Card</option>
          <option>Master Card</option>
          <option>CBE</option>
          <option>Amole</option>
          <option>Chapa</option>
          <option>Tele Birr</option>
      </select>
    <button className="md:w-[10%] text-white bg-black h-[50px] mx-3" onClick={() => {
      setSelected('order')
    }}>CHECKOUT</button>
          
      </div>
    </div>
  )
}

export default Payment