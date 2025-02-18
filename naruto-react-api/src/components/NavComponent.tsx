import React from 'react'

const NavComponent = () => {
  return (
    <nav className='bg-[#111111]'>
        <div className="flex justify-between max-w-[1440px] mx-auto text-white px-5 hidden sm:flex items-center">
            <img className='max-w-[100px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/2560px-Naruto_logo.svg.png" alt="" />
            <ul className='flex'>
                <li>OPTION</li>
                <li>OPTION</li>
                <li>OPTION</li>
                <li>OPTION</li>
            </ul>
        </div>
        <div className="flex justify-between max-w-[1440px] mx-auto text-white px-5 sm:hidden items-center">
            <img className='max-w-[100px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/2560px-Naruto_logo.svg.png" alt="" />
            <p>H</p>
        </div>
    </nav>
  )
}

export default NavComponent
