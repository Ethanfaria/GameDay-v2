import React from 'react'
import Navbar from '../components/Navbar'
import BentoBox from "../components/BentoBox.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserShield,
    faEnvelope,
    faLock,
    faEye
} from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  return (
    <div className="min-h-screen bg-green-950 text-white px-4 md:px-6">
      <Navbar />
      <div className="flex justify-center items-center p-5">
        <BentoBox className="bg-white/10 p-10 rounded-xl flex flex-col items-center gap-4 w-full max-w-lg">
          <FontAwesomeIcon className="text-lime-400 text-7xl " icon={faUserShield} />
          <h1 className="text-lime-400 text-3xl font-bold uppercase" >Welcome Back</h1>
          <p className="text-gray-400">Login to your account</p>
          <div className="relative w-full mt-5">
            <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
            />

            <input
                type="email"
                placeholder="Enter your Email"
                className="w-full p-3 pl-12 rounded-xl bg-white text-black placeholder:text-gray-400"
            />
          </div>

          <div className="relative w-full mt-5">
            <FontAwesomeIcon
                icon={faLock}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
            />

            <input
                type="password"
                placeholder="Enter your Password"
                className="w-full p-3 pl-12 rounded-xl bg-white text-black placeholder:text-gray-400"
            />
            <FontAwesomeIcon
                icon={faEye}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
            />
          </div>
          <button className="mt-5 w-full py-3 bg-lime-400 text-green-900 rounded-xl font-bold hover:scale-105 transition">Login to GameDay</button>
          <p className="mt-5 text-center text-gray-400 ">Don't have an account? <a href="/register" className="text-lime-400 hover:underline">Register here</a></p>
        </BentoBox>
      </div>
    </div>
  )
}

export default Login