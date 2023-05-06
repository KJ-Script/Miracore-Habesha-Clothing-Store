import React, { useState } from "react";
import ShoppingNavBar from "../components/ShoppingNavBar";
import MenShoes from "../components/MenShoes";
import MenTop from "../components/MenTop";
import MenPants from "../components/MenPants";
import MenHats from "../components/MenHats";
import MenAdditional from "../components/MenAdditional";

function Men() {
  const [header, setHeader] = useState("top");
  return (
    <div className="w-full">
      <ShoppingNavBar header={header} setHeader={setHeader} />
      <div className="">
        {header == "shoes" ? (
          <div className="w-full flex justify-center">
            <MenShoes />
          </div>
        ) : (
          <div></div>
        )}

        {header == "top" ? (
          <div>
            <MenTop />
          </div>
        ) : (
          <div></div>
        )}

        {header == "pants" ? (
          <div>
            <MenPants />
          </div>
        ) : (
          <div></div>
        )}

        {header == "hats" ? (
          <div>
            <MenHats />
          </div>
        ) : (
          <div></div>
        )}

        {header == "additionals" ? (
          <div>
            <MenAdditional />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Men;
