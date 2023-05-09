import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../App'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  
  const [isLoggedIn, setLoggedIn] = useContext(LoginContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    setLoggedIn(false)
  }, [])

  const authentication = () => {
    axios
    .post("http://localhost:8080/login", {
      username: username,
      password: password,
    })
    .then((response) => {
      console.log("Response: ", response.data);
        if (response.data == true) {
          setLoggedIn(true)
          navigate('/dashboard')
        } else {
          alert('try again')
        }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="w-full h-screen flex justify-center my-[15%]">
      <div className='p-3 h-[25%] flex flex-col space-y-4'>
        <input type="text" placeholder="username" className="p-3 border-blue-400 border-[1px] rounded-sm" onChange={(e) => {setUsername(e.target.value)}}/>
        <input type="password" placeholder="password" className="p-3 border-blue-400 border-[1px] rounded-sm" onChange={(e) => {setPassword(e.target.value)}}/>
        <button className='bg-gray-800 p-3 text-white' onClick={() => {
          authentication()
        }}>Login</button>
      </div>
    </div>
  )
}

export default Login