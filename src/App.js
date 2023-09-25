import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import Features from './components/Features';
import featureDiscrip from './copy/feature';
import FeatureImages from './components/FeatureImages';
import FeatImag from './constants/images';


function App() {
  const [featState, changeState]=useState({
    activeOject: null,
    objects: [{a:1},{b:2},{c:3}]
    
  })

  const [activeKey,setActivekey] = useState('feature1')
  const [activeFeatureImage, setActiveFeatureImage] = useState({feature1: FeatImag.feature1})

  function toggleActive(num){
    const newKey = `feature${num}`
    setActivekey(newKey)
    setActiveFeatureImage({[newKey]: FeatImag[newKey]})
  }
  // onClick={() => {toggleActive()}}
 return(
  <div className='main-container'>
    <div className='leftSide'>
      <h1 className='leftSideHeader'>Connectivity at every turn.</h1>
      <div className='vehicleFeaturesList'>
        <Features title="Remote Start w/ Climate Control"  discription={featureDiscrip.feature1} active={activeFeatureImage?.feature1} onClick={() => toggleActive(1)} /> 
        <Features title="Find My Car"  discription={featureDiscrip.feature2} active={activeFeatureImage?.feature2}  onClick={() => toggleActive(2)}/>
        <Features title="Voice Assistants"  discription={featureDiscrip.feature3}  active={activeFeatureImage?.feature3}  onClick={() => toggleActive(3)}/>
        <Features title="Connected Routing"  discription={featureDiscrip.feature4}  active={activeFeatureImage?.feature4}  onClick={() => toggleActive(4)}/>
        <Features title="Wi-Fi Hotspot"  discription={featureDiscrip.feature5}  active={activeFeatureImage?.feature5}  onClick={() => toggleActive(5)}/>
      </div>

      <button className='button'>
        <i class="bi bi-arrow-up-circle-fill"></i>
      </button>

       <button className='button'>
      </button>

    </div>
    <div className='rightSide'>
      <FeatureImages srcImg={activeFeatureImage[activeKey]}/>
    </div>
  </div>
 )
}

export default App;



// active state for features
// - opacity should be 1 
// - inActive opacity 0.6
// - picture should correspond with feature discription
