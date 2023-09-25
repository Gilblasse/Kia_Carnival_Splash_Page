import React from 'react'

export default function Features({title, discription, active, onClick}) {
  const inactiveStyle = {
    opacity: 0.6
  }

  const style = active ? {
    fontWeight: 'bold'
  } : inactiveStyle

  return (
    <div onClick={onClick}>
      <h2 style={style}>{title}</h2>
      <div style={style} className='item_discription'>{discription}</div>
    </div>
  )
}

// each needs a title and discription
