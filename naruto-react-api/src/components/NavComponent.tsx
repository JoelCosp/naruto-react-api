import React from 'react'
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavComponent = () => {
  return (
    <nav className='bg-[#111111] py-4'>
        <div className="flex justify-between max-w-[1440px] mx-auto text-white px-5 hidden sm:flex items-center">
            <Link to="/">
              <img className='max-w-[100px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/2560px-Naruto_logo.svg.png" alt="" />
            </Link>
            <ul className='flex'>
                <li className='px-2 font-semibold'>ABOUT ME</li>
            </ul>
        </div>
        <div className="flex justify-between max-w-[1440px] mx-auto text-white px-5 sm:hidden items-center">
            <Link to="/">
              <img className='max-w-[100px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/2560px-Naruto_logo.svg.png" alt="" />
            </Link>
            <Menu size={30} />
        </div>
    </nav>
  )
}

export default NavComponent
