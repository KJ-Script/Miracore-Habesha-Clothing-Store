import React, { useContext } from "react";
import { LoginContext } from "../App";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  return (
    <div className="w-full">
      {loggedIn ? (
        <div className="w-full bg-gray-800 h-[75px] flex justify-between text-white">
          <div className="flex mx-20 space-x-7">
            <button onClick={() => {navigate('/dashboard')}}>Dashboard</button>
            <button onClick={() => {navigate('/inventory')}}>Inventory</button>
            <button onClick={() => {navigate('/orders')}}>Purchases/Orders</button>
          </div>

          <div className="flex mx-20 space-x-7">
            <button onClick={() => {navigate('/profile')}}>Profile</button>
            <button onClick={() => {navigate('/')}}>Logout</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default NavBar;
