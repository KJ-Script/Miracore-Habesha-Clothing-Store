import React, { useState } from "react";
import ShoppingNavBar from "../components/ShoppingNavBar";
import MenShoes from "../components/MenShoes";
import MenTop from "../components/MenTop";
import MenPants from "../components/MenPants";
import MenHats from "../components/MenHats";
import MenAdditional from "../components/MenAdditional";

function Miscellaneous() {
  const [header, setHeader] = useState("top");
  const firstTitle = 'GABI'
  const secondTitle = 'NETELA'
  const thirdTitle = 'CROWNS'
  const fourthTitle = 'ARTIFACTS'
  return (
    <div className="w-full">
      <ShoppingNavBar header={header} setHeader={setHeader} firstTitle={firstTitle} secondTitle={secondTitle} thirdTitle={thirdTitle} fourthTitle={fourthTitle}/>
      <div className="">
        {header == "shoes" ? (
          <div className="w-full flex justify-center">
            <MenShoes />
          </div>
        ) : (
          <div></div>
        )}

        {header == "top" ? (
          <div className="w-full flex justify-center">
            <MenTop />
          </div>
        ) : (
          <div></div>
        )}

        {header == "pants" ? (
          <div className="w-full flex justify-center">
            <MenPants />
          </div>
        ) : (
          <div></div>
        )}

        {header == "hats" ? (
          <div className="w-full flex justify-center">
            <MenHats />
          </div>
        ) : (
          <div></div>
        )}

        {header == "additionals" ? (
          <div className="w-full flex justify-center">
            <MenAdditional />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  ) 
}

export default Miscellaneous