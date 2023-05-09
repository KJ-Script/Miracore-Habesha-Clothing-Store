import React, { useState } from "react";
import InventoryTab from "../components/InventoryTab";
import Men from "../components/Men";
import Women from "../components/Women";
import Kids from "../components/Kids";
import Miscellaneous from "../components/Miscellaneous";

function Inventory() {
  const [selected, setSelected] = useState("men");
  return (
    <div className="w-full h-screen flex">
      <InventoryTab selected={selected} setSelected={setSelected} />
      <div className="w-[80%] h-screen flex justify-center my-[5%]">
        <div className="flex flex-col space-y-3 w-[40%]">
          <p className="w-full text-center text-2xl">{selected}</p>
          {selected == "men" ? <Men /> : <></>}
          {selected == "women" ? <Women /> : <></>}
          {selected == "kids" ? <Kids /> : <></>}
          {selected == "miscellaneous" ? <Miscellaneous /> : <></>}{" "}
        </div>
      </div>
    </div>
  );
}

export default Inventory;
