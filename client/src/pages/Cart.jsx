import React, { useState } from "react";
import Delivery from "../components/Delivery";
import Payment from "../components/Payment";
import OrderComplete from "../components/OrderComplete";
import Bag from "../components/Bag";

function Cart() {
  const [selected, setSelected] = useState("bag");
  return (
    <div>
      <div className="w-full flex justify-center space-x-20">
        <div
          className={selected == "bag" ? `font-bold underline` : ``}
          onClick={() => {
            setSelected("bag");
          }}
        >
          BAG
        </div>
        <div
          className={selected == "delivery" ? `font-bold underline` : ``}
          onClick={() => {
            setSelected("delivery");
          }}
        >
          DELIVERY
        </div>
        <div
          className={selected == "payment" ? `font-bold underline` : ``}
          onClick={() => {
            setSelected("payment");
          }}
        >
          PAYMENT
        </div>
        <div
          className={selected == "order" ? `font-bold underline` : ``}
          onClick={() => {
            setSelected("order");
          }}
        >
          ORDER-COMPLETE
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="border w-[50%]"></div>
      </div>

      {selected == "bag" ? <Bag /> : <></>}

      {selected == "payment" ? <Payment /> : <></>}

      {selected == "delivery" ? <Delivery /> : <></>}

      {selected == "order" ? <OrderComplete /> : <></>}
    </div>
  );
}

export default Cart;
