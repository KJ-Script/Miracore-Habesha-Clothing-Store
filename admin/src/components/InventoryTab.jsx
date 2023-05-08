import React from "react";

function InventoryTab({selected, setSelected}) {
  return (
    <div className="w-[15%] h-screen bg-gray-800 border border-white flex flex-col text-white">
      <button
        className={
          selected == "men"
            ? `h-[6%] bg-white text-black border border-gray-800`
            : `h-[6%] border border-white`
        }
        onClick={() => {
          setSelected("men");
        }}
      >
        Men
      </button>
      <button
        className={
          selected == "women"
            ? `h-[6%] bg-white text-black border border-gray-800`
            : `h-[6%] border border-white`
        }
        onClick={() => {
          setSelected("women");
        }}
      >
        Women
      </button>
      <button
        className={
          selected == "kids"
            ? `h-[6%] bg-white text-black border border-gray-800`
            : `h-[6%] border border-white`
        }
        onClick={() => {
          setSelected("kids");
        }}
      >
        Kids
      </button>
      <button
        className={
          selected == "miscellaneous"
            ? `h-[6%] bg-white text-black border border-gray-800`
            : `h-[6%] border border-white`
        }
        onClick={() => {
          setSelected("miscellaneous");
        }}
      >
        Miscellaneous
      </button>
    </div>
  );
}

export default InventoryTab;
