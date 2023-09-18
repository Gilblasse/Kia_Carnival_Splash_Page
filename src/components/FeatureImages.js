import React from 'react'
import images from '../constants/images'

export default function FeatureImages({x}) {
  return (
   <div className='img_container'>
        <img src={images[x]} alt=""/>
   </div>
  )
}