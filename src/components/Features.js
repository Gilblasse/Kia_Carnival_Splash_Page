import React from 'react'

export default function Features({title, discription}) {
  return (
    <div>
      <h2>{title}</h2>
      <div className='item_discription'>{discription}</div>
    </div>
  )
}

// each needs a title and discription
