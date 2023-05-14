import React, { useEffect, useState } from "react";
import ShoppingNavBar from "../components/ShoppingNavBar";
import Gabi from "../components/Gabi";
import Netela from "../components/Netela";
import Crowns from "../components/Crowns";
import Artifacts from "../components/Artifacts";
import Additionals from "../components/Additionals";
import axios from 'axios'

function Miscellaneous() {
  const [data, setData] = useState([])
  const [header, setHeader] = useState("top");
  const firstTitle = 'GABI'
  const secondTitle = 'NETELA'
  const thirdTitle = 'CROWNS'
  const fourthTitle = 'ARTIFACTS' 

  useEffect(() => {
    axios
      .get("http://localhost:8080/getmiscellaneous")
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const gabi = data.filter((item) => item.category == 'gabi')
  const netela = data.filter((item) => item.category == 'netela')
  const crowns = data.filter((item) => item.category == 'crowns')
  const artifacts = data.filter((item) => item.category == 'artifcats')
  const additional = data.filter((item) => item.category == 'additional')


  return (
    <div className="w-full">
      <ShoppingNavBar header={header} setHeader={setHeader} firstTitle={firstTitle} secondTitle={secondTitle} thirdTitle={thirdTitle} fourthTitle={fourthTitle}/>
      <div className="">
        {header == "shoes" ? (
          <div className="w-full flex justify-center">
            <Gabi gabi={gabi}/>
          </div>
        ) : (
          <div></div>
        )}

        {header == "top" ? (
          <div className="w-full flex justify-center">
            <Netela netela={netela}/>
          </div>
        ) : (
          <div></div>
        )}

        {header == "pants" ? (
          <div className="w-full flex justify-center">
            <Artifacts artifacts={artifacts}/>
            
          </div>
        ) : (
          <div></div>
        )}

        {header == "hats" ? (
          <div className="w-full flex justify-center">
            <Crowns crowns={crowns}/>
          </div>
        ) : (
          <div></div>
        )}

        {header == "additional" ? (
          <div className="w-full flex justify-center">
            <Additionals additional={additional}/>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  ) 
}

export default Miscellaneous