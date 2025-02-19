import React from 'react'

const CardComponent = (props) => {
  return (
    <div className='bg-[#f97316] rounded-md flex flex-col justify-between hover:cursor-pointer hover:bg-[#c75b10]'>
        <div className='overflow-hidden'>
            {props.data?.images?.[0] ? <img className='object-cover w-full h-48 rounded-t-md' src={props.data.images[0]} alt={props.data.name} /> : <img className='object-cover w-full h-48 rounded-t-md' src="https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-blank-avatar-modern-vector-png-image_40962406.jpg" alt={props.data.name} />}
        </div>
        <p className='text-white px-5 py-5 font-semibold'>{props.data.name} <span>&#8594;</span></p>
    </div>
  )
}

export default CardComponent
