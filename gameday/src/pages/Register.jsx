import React,{useState} from 'react'
import NavBar from "../components/NavBar.jsx";
import BentoBox from "../components/BentoBox.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faEye, faLock, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {

    }

  return (
    <div className="min-h-screen bg-green-950 text-white px-4 md:px-6">
      <NavBar/>
      <div className="flex justify-center items-center p-5">
          <BentoBox className="bg-white/10 p-10 rounded-xl flex flex-col items-center gap-4 w-full max-w-lg">
              <h1 className="text-lime-400 text-3xl font-bold uppercase">Welcome to GameDay</h1>
              <p className="text-gray-400">Register to start booking your slots</p>
              <div className="relative w-full mt-5">
                  <FontAwesomeIcon
                      icon={faUser}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                  />
                  <input
                      type="text"
                      placeholder="Enter a Username"
                      className="w-full p-3 pl-12 rounded-xl bg-white text-black placeholder:text-gray-400"/>
              </div>
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
                      icon={faPhone}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                  />
                  <input
                      type="tel"
                      placeholder="Enter your Phone Number"
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
              <div className="relative w-full mt-5">
                  <FontAwesomeIcon
                      icon={faLock}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                  />

                  <input
                      type="password"
                      placeholder="Re Enter your Password"
                      className="w-full p-3 pl-12 rounded-xl bg-white text-black placeholder:text-gray-400"
                  />
                  <FontAwesomeIcon
                      icon={faEye}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
                  />
              </div>
          </BentoBox>
      </div>
    </div>
  )
}

export default Register