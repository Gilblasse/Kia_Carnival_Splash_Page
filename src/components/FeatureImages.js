import React from 'react'

export default function FeatureImages({srcImg}) {
  console.log({ srcImg })
  return (
   <div className='img_container'>
        <img src={srcImg} alt="feature image"/>
   </div>
  )
}