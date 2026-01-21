import React from 'react'
import logo from '../assets/gameday.png'

const NavBar = () => {
    const navItems=["Home","Grounds","Academy","Tournament","Referee","About","FAQ"];
  return (
    <nav className='sticky top-0 z-50 flex items-center backdrop-blur-md bg-transparent px-[5%] py-5 mb-8'>
        <div className='flex-1'>
            <img src={logo} className='h-8'></img>
        </div>
        <div className='flex-1 justify-end'>
            {navItems.map((item)=>(
                <a href={``} className='px-3.75 py-2 text-white font-medium rounded-[20px] transition-all duration-300 hover:bg-[rgba(0,100,50,0.3)]'>
                    {item}
                </a>
            ))}
        </div>
        <div className="flex items-center">
            <a href="" className="px-3.75 py-2 text-white font-medium rounded-[20px] transition-all duration-300 hover:bg-[rgba(0,100,50,0.3)]">Login</a>
            <a href="" className="ml-4 px-5 py-2.5 bg-lime-400 text-green-950 font-bold rounded-[30px] transition-all duration-300 hover:scale-105 hover:bg-[#d1ff4d] hover:shadow-[0_5px_15px_rgba(185,255,0,0.3)]">
            Get Started
            </a>
        </div>
    </nav>
  )
}

export default NavBar