import React, { useEffect, useState } from "react";
import ShoppingNavBar from "../components/ShoppingNavBar";
import WomenTop from "../components/WomenTop";
import WomenShoes from "../components/WomenShoes";
import WomenBottom from "../components/WomenBottom";
import WomenHats from "../components/WomenHats";
import WomenAdditional from "../components/WomenAdditional";
import tilet from "../assets/images/LandingPage/tilet.png";
import axios from "axios";

function Women() {
  const [header, setHeader] = useState("top");
  const [data, setData] = useState([]);
  const firstTitle = "TOPS & DRESSES";
  const secondTitle = "PANTS & BOTTOMS";
  const thirdTitle = "FOOTWEAR";
  const fourthTitle = "HATS";

  useEffect(() => {
    axios
      .get("http://localhost:8080/getwomen")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("data", data);

  const footwear = data.filter((item) => item.category == "footwear");
  const hats = data.filter((item) => item.category == "hats");
  const top = data.filter((item) => item.category == "top");
  const bottom = data.filter((item) => item.category == "bottom");
  const additional = data.filter((item) => item.category == "additional");

  return (
    <div className="flex justify-between">
      <img src={tilet} className="h-screen hidden md:flex" />
      <div className="w-full">
        <ShoppingNavBar
          header={header}
          setHeader={setHeader}
          firstTitle={firstTitle}
          secondTitle={secondTitle}
          thirdTitle={thirdTitle}
          fourthTitle={fourthTitle}
        />
        <div className="max-h-screen overflow-scroll">
          {header == "shoes" ? (
            <div className="w-full flex justify-center">
              <WomenShoes footwear={footwear} />
            </div>
          ) : (
            <div></div>
          )}

          {header == "top" ? (
            <div className="w-full flex justify-center">
              <WomenTop top={top} />
            </div>
          ) : (
            <div></div>
          )}

          {header == "pants" ? (
            <div className="w-full flex justify-center">
              <WomenBottom bottom={bottom} />
            </div>
          ) : (
            <div></div>
          )}

          {header == "hats" ? (
            <div className="w-full flex justify-center">
              <WomenHats hats={hats} />
            </div>
          ) : (
            <div></div>
          )}

          {header == "additionals" ? (
            <div className="w-full flex justify-center">
              <WomenAdditional additional={additional} />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <img src={tilet} className="h-screen hidden md:flex" />
    </div>
  );
}

export default Women;
