import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import BrowseFacilities from "./pages/BrowseFacilities.jsx";
import Placeholder from "./pages/Placeholder.jsx";
import FacilityDetails from "./pages/FacilityDetails.jsx";
import Checkout from "./pages/Checkout.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/facilities" element={<BrowseFacilities/>} />
          <Route path="/academy" element={<BrowseAcademies />} />
          <Route path="/tournament" element={<Placeholder title="Tournament" />} />
          <Route path="/about" element={<Placeholder title="About" />} />
          <Route path="/faq" element={<Placeholder title="FAQ" />} />
          <Route path="/facilities/:id" element={<FacilityDetails/>}/>
          <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App