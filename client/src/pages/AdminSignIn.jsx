import React from "react";
import logo from '../assets/miracle-logo.png'

function AdminSignIn() {
  return (
    <div>
      <img src={logo}></img>
      <h2>Welcome Back</h2>
      <label htmlFor="email" id="email">email: </label>
      <input type="email" />
      <label htmlFor="password">password: </label>
      <input type="password" id="password" />
      <button>Sign In</button>
    </div>
  )
}

export default AdminSignIn