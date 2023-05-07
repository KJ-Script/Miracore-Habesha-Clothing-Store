import React from 'react'

function Delivery() {
  return (
    <div className="w-full flex justify-center my-20">
    <div className="text-center w-full">
      <p className="text-2xl p-2 bg-black text-white mx-[20%]">CONTACT DETAILS</p>
      <p>We'll use these to keep you informed</p>
      <div className="w-full my-4">
          <input type="email" placeholder="E-mail *" required className="p-3 w-[30%] border border-black"/>
      </div>

      <p className="text-2xl p-2 bg-black text-white mx-[20%]">SHIPPING DETAILS</p>
      <p>This is how we find you</p>
      <div className="w-full my-4">
          <div className="w-full space-x-3 my-2">
          <input type="text" placeholder="First Name *" required className="p-3 w-[30%] border border-black"/>
          <input type="text" placeholder="Last Name *" required className="p-3 w-[30%] border border-black"/>
          </div>

          <input type="text" placeholder="Delivery Address *" required className="p-3 w-[61%] border border-black"/>

          <div className="w-full my-2 flex justify-center space-x-1">
          <div className="w-[5%] p-3 border border-black text-center flex items-center">+251</div>
          <input type="number" placeholder="Phone-Number *" required className="p-3 w-[56%] border border-black"/>
          </div>

      </div>

      <p className="text-2xl p-2 bg-black text-white mx-[20%]">DELIVERY OPTIONS?</p>
      <p>how would you like to recieve your packages</p>

      <select className="w-[30%] text-center h-[50px] bg-white border border-black text-xl px-2">
          <option>Standard Delivery</option>
          <option>Collect in Store</option>
      </select>
    <button className="w-[10%] text-white bg-black h-[50px] mx-3">SUBMIT</button>
          
      </div>
    </div>
  )
}

export default Delivery