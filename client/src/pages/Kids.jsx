import React, { useEffect, useState } from "react";
import ShoppingNavBar from "../components/ShoppingNavBar";
import KidsShoes from "../components/KidsShoes";
import KidsBottom from "../components/KidsBottom";
import KidsTop from "../components/KidsTop";
import KidsHats from "../components/KidsHats";
import KidsAdditional from "../components/KidsAdditional";
import axios from 'axios'

function Women() {
  const [header, setHeader] = useState("top");
  const [data, setData] = useState([])
  const firstTitle = 'TOPS & DRESSES'
  const secondTitle = 'PANTS & BOTTOMS'
  const thirdTitle = 'FOOTWEAR'
  const fourthTitle = 'HATS'

  useEffect(() => {
    axios
      .get("http://localhost:8080/getkids")
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
            <KidsShoes footwear={footwear} />
          </div>
        ) : (
          <div></div>
        )}

        {header == "top" ? (
          <div className="w-full flex justify-center">
            <KidsTop top={top}/>
          </div>
        ) : (
          <div></div>
        )}

        {header == "pants" ? (
          <div className="w-full flex justify-center">
            <KidsBottom bottom={bottom}/>
          </div>
        ) : (
          <div></div>
        )}

        {header == "hats" ? (
          <div className="w-full flex justify-center">
            <KidsHats hats={hats} />
          </div>
        ) : (
          <div></div>
        )}

        {header == "additionals" ? (
          <div className="w-full flex justify-center">
            <KidsAdditional additional={additional} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Women;
