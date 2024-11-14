import React from 'react'
import { Link } from "react-router-dom";
import Logo from './components/Logo';

function Start() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4"> 
        <Logo /> 
        <div className="text-5xl font-bold text-center">
            <h1> welcome to my-todo! </h1>
        </div>
        <div className="flex space-x-4"> 
            <Link to="/login">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                    Login
                </button>
            </Link>
            <Link to="/signup">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                    Signup
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Start