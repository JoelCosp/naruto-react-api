import React from 'react'
import { Menu } from 'lucide-react';


const NavComponent = () => {
  return (
    <nav className='bg-[#111111] py-4'>
        <div className="flex justify-between max-w-[1440px] mx-auto text-white px-5 hidden sm:flex items-center">
            <img className='max-w-[100px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/2560px-Naruto_logo.svg.png" alt="" />
            <ul className='flex'>
                <li className='px-2'>HOME</li>
                <li className='px-2'>INTEREST</li>
                <li className='px-2'>ABOUT ME</li>
            </ul>
        </div>
        <div className="flex justify-between max-w-[1440px] mx-auto text-white px-5 sm:hidden items-center">
            <img className='max-w-[100px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/2560px-Naruto_logo.svg.png" alt="" />
            <Menu size={30} />
        </div>
    </nav>
  )
}

export default NavComponent
