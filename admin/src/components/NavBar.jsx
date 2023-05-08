import React, { useContext } from "react";
import { LoginContext } from "../App";

function NavBar() {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  return (
    <div className="w-full bg-gray-800 h-[75px] flex justify-between text-white">
      <div className="flex mx-20 space-x-7">
        <button>Dashboard</button>
        <button>Inventory</button>
        <button>Purchases/Orders</button>
      </div>

      <div className="flex mx-20 space-x-7">
        <button>Profile</button>
        {loggedIn ? <button onClick={() => {setLoggedIn(false)}}>Logout</button> : <button onClick={() => {setLoggedIn(true)}}>Login</button>}
      </div>
    </div>
  );
}

export default NavBar;
