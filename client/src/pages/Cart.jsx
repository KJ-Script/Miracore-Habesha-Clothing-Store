import React, { useState } from "react";
import ShoppingNavBar from "../components/ShoppingNavBar";
import menTops from "../api/mentop";
import ShoppingBox from "../utils/ShoppingBox";

function Cart() {
  return (
    <div className="w-full flex">
      <div className="">
        <h2>Items in Bag (reserved for 60 minutes)</h2>
        <div className="w-full flex justify-center">
          {menTops.map((item, index) => {
            return (
              <div className="px-2 py-2" key={index}>
                <ShoppingBox item={item} />
              </div>
            );
          })}
        </div>
        <div>
          Subtotal: 1250$
        </div>
      </div>
      <div className="checkout_form mx-32">
        <h3>Total</h3>
        <div className="">
          <h4>Subtotal</h4>
          <p>1250$</p>
        </div>
        <button>GO TO CHECKOUT</button>
      </div>
    </div>
  );
}

export default Cart;
