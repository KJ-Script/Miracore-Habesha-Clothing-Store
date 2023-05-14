import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Items from "./Items";
import axios from 'axios'

function GetWomen() {
  const [data, setData] = useState([]);
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
  return (
    <div>
      {
        data.map((item, index) => {
          return (
            <Items key={index} data={item}/>
          )
        })
      }
    </div>
  )
}

export default GetWomen;