import React from 'react'

const HeroComponent = () => {
  return (
    <div className="max-h-[500px] w-full overflow-hidden flex items-center justify-center bg-[url(https://narutodb.xyz/_next/image?url=%2Fbanner.jpg&w=1920&q=75)]">
      <div className='py-[200px] flex items-center flex-col text-white'>
        <h1 className='font-bold text-center text-5xl sm:text-8xl'>NARUTO UNIVERSE</h1>
        <p className='text-center sm:text-3xl mt-4'>Welcome to my personal Naruto Web Site</p>
        <button className='px-6 py-3 bg-[#f97316] rounded-full font-semibold mt-4'>Get Started</button>
      </div>
      {
        /*  
          <img 
            src="https://narutodb.xyz/_next/image?url=%2Fbanner.jpg&w=1920&q=75" 
            alt="Naruto Banner" 
            className="w-full h-full object-cover brightness-50"
          /> 
        */
      }
  </div>
  )
}

export default HeroComponent
