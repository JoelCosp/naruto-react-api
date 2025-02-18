import React from 'react'

const FooterComponent = () => {
  return (
    <footer className='bg-[#111111]'>
        <div className='max-w-[1440px] mx-auto flex flex-col justify-center items-center py-[40px] px-5'>
            <img className='max-w-[80px]' src="https://madrid.narutosymphonicexperience.com/assets/img/_hero_icon-anime.b94daa1a.png" alt="" />
            <p className='text-white mt-8 text-center'>&lt; Made with <span className='font-semibold'>ReactJS</span> and <span className='font-semibold'>Tailwind CSS</span> <br className='sm:hidden'/> by Joel Cosp &gt;</p>
        </div>
    </footer>
  )
}

export default FooterComponent
