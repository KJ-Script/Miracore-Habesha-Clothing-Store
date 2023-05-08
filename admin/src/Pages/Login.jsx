import React, { useContext, useEffect } from 'react'
import { LoginContext } from '../App'
import { useNavigate } from 'react-router-dom'

function Login() {
  
  const [isLoggedIn, setLoggedIn] = useContext(LoginContext)
  const navigate = useNavigate()

  useEffect(() => {
    setLoggedIn(false)
  }, [])

  return (
    <div className="w-full h-screen flex justify-center my-[15%]">
      <div className='p-3 h-[25%] flex flex-col space-y-4'>
        <input type="text" placeholder="username" className="p-3 border-blue-400 border-[1px] rounded-sm"/>
        <input type="password" placeholder="password" className="p-3 border-blue-400 border-[1px] rounded-sm"/>
        <button className='bg-gray-800 p-3 text-white' onClick={() => {
          navigate('/dashboard')
          setLoggedIn(true)
        }}>Login</button>
      </div>
    </div>
  )
}

export default Login