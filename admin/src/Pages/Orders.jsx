import React from "react";
import { useEffect } from "react";
import axios from "axios";
import ItemsTab from "../components/ItemsTab";
import Items from "../components/Items";
import { useState } from "react";
import GetMen from "../components/GetMen";
import GetWomen from "../components/GetWomen";
import GetKids from "../components/GetKids";
import GetMisc from "../components/GetMisc";

function Orders() {
  const [selected, setSelected] = useState("men");
  const [data, setData] = useState([]);

  return (
    <div className="h-screen flex justify-center">
      <div className="h-full w-[80%]">
        <ItemsTab setSelected={setSelected} />
        {
          selected == 'men' ? <GetMen/> : <></>
        }
        {
          selected == 'women' ? <GetWomen/> : <></>
        }
        {
          selected == 'kids' ? <GetKids/> : <></>
        }
        {
          selected == 'miscellaneous' ? <GetMisc/> : <></>
        }
      </div>
    </div>
  );
}

export default Orders;
