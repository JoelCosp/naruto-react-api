import React from 'react'

import CardComponent from './CardComponent'

const CardListComponent = (props) => {
  return (
    <section>
      <div className='max-w-[1440px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 py-[70px]'>
        {props.data.map((obj) => (
            <CardComponent key={obj.id} data={obj}/>
        ))}
      </div>
    </section>
  )
}

export default CardListComponent
