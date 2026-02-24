import React,{useState} from 'react'
import NavBar from "../components/NavBar.jsx";
import BentoBox from "../components/BentoBox.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faEye, faLock, faPhone, faUser, faUserShield} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        if(formData.password != formData.confirmPassword){
            return setError("Passwords do not match");
        }
        try {
            setLoading(true);
            await axios.post("http://localhost:8080/register",{
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                password: formData.password
            });
            alert("Registration Successful");
            navigate("/login");
        }catch(err){
            setError(err.response?.data||"Registration Failed");
        }finally{
            setLoading(false);
        }
    }

  return (
    <div className="min-h-screen bg-green-950 text-white px-4 md:px-6">
      <NavBar/>
      <div className="flex justify-center items-center p-5">
          <BentoBox className="bg-white/10 p-7 rounded-xl  w-full max-w-lg">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
                  <FontAwesomeIcon className="text-lime-400 text-7xl " icon={faUserShield} />
                  <h1 className="text-lime-400 text-3xl font-bold uppercase text-center">Welcome to GameDay</h1>
                  <p className="text-gray-400">Register to start booking your slots</p>
                  <div className="relative w-full mt-5">
                      <FontAwesomeIcon
                          icon={faUser}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                      />
                      <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter a Username"
                          className="w-full p-3 pl-12 rounded-xl bg-white text-black"
                      />
                  </div>
                  <div className="relative w-full mt-5">
                      <FontAwesomeIcon
                          icon={faEnvelope}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                      />
                      <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your Email"
                          className="w-full p-3 pl-12 rounded-xl bg-white text-black"
                      />
                  </div>
                  <div className="relative w-full mt-5">
                      <FontAwesomeIcon
                          icon={faPhone}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                      />
                      <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your Phone Number"
                          className="w-full p-3 pl-12 rounded-xl bg-white text-black"
                      />
                  </div>
                  <div className="relative w-full mt-5">
                      <FontAwesomeIcon
                          icon={faLock}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                      />
                      <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Enter your Password"
                          className="w-full p-3 pl-12 rounded-xl bg-white text-black"
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
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Re Enter your Password"
                          className="w-full p-3 pl-12 rounded-xl bg-white text-black"
                      />
                      <FontAwesomeIcon
                          icon={faEye}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
                      />
                  </div>
                  <button
                      type="submit"
                      disabled={loading}
                      className="mt-5 w-full py-3 bg-lime-400 text-green-900 rounded-xl font-bold hover:scale-105 transition">{loading ? "Creating an Account..." : "Sign up to GameDay"}</button>
              </form>
          </BentoBox>
      </div>
    </div>
  )
}

export default Register