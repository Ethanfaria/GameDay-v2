import React from 'react'
import NavBar from '../components/NavBar'

const Landing = () => {
  return (
    
    <div className='min-h-screen bg-green-950 text-white px-10'>
        <NavBar/>
        <div className='grid grid-cols-4'>
            <div className='rounded-lg px-5 backdrop-blur-md bg-transparent'>
                <h1>From Click to Kick!</h1>
            </div>
        </div>
    </div>
  )
}

export default Landing