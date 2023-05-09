import React, { useContext } from "react";
import { LoginContext } from "../App";

function Dashboard() {
  const [isLoggedIn, setLoggedIn] = useContext(LoginContext);
  return (
    <div>
      {isLoggedIn ? (
        <div className="w-full h-screen flex justify-center my-[15%]">
          <div className="bg-gray-800 p-20 h-[5%] text-white">
            Dashboard is still in development
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Dashboard;
