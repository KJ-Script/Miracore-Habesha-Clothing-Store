import React, { useState, useEffect } from "react";
import axios from 'axios'
import ShoppingNavBar from "../components/ShoppingNavBar";
import MenShoes from "../components/MenShoes";
import MenTop from "../components/MenTop";
import MenPants from "../components/MenPants";
import MenHats from "../components/MenHats";
import MenAdditional from "../components/MenAdditional";

function Men() {
  const [header, setHeader] = useState("top");
  const [data, setData] = useState([])
  const firstTitle = 'TOPS & COATS'
  const secondTitle = 'PANTS & BOTTOMS'
  const thirdTitle = 'FOOTWEAR'
  const fourthTitle = 'HATS'

  useEffect(() => {
    axios
      .get("http://localhost:8080/getmen")
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const footwear = data.filter((item) => item.category == 'footwear')
  const hats = data.filter((item) => item.category == 'hats')
  const top = data.filter((item) => item.category == 'top')
  const bottom = data.filter((item) => item.category == 'bottom')
  const additional = data.filter((item) => item.category == 'additional')
  
  return (
    <div className="w-full">
      <ShoppingNavBar header={header} setHeader={setHeader} firstTitle={firstTitle} secondTitle={secondTitle} thirdTitle={thirdTitle} fourthTitle={fourthTitle}/>
      <div className="">

        {header == "shoes" ? (
          <div className="w-full flex justify-center">
            <MenShoes footwear={footwear}/>
          </div>
        ) : (
          <div></div>
        )}

        {header == "top" ? (
          <div className="w-full flex justify-center">
            <MenTop top={top}/>
          </div>
        ) : (
          <div></div>
        )}

        {header == "pants" ? (
          <div className="w-full flex justify-center">
            <MenPants bottom={bottom}/>
          </div>
        ) : (
          <div></div>
        )}

        {header == "hats" ? (
          <div className="w-full flex justify-center">
            <MenHats hats={hats}/>
          </div>
        ) : (
          <div></div>
        )}

        {header == "additionals" ? (
          <div className="w-full flex justify-center">
            <MenAdditional additional={additional}/>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Men;
