import React, { useState, useEffect } from "react";
import './App.css';
import Features from './components/Features';
import featureDiscrip from './copy/feature';
import FeatureImages from './components/FeatureImages';
import FeatImag from './constants/images';


function App() {
  const [activeKey,setActivekey] = useState('feature1')
  const [activeFeatureImage, setActiveFeatureImage] = useState({feature1: FeatImag.feature1})
  const [currentActiveKey,setCurrentActiveKey] = useState(1)
  const [time, setTime] = useState(0)


// SETTING ACTIVE FEATURE

  function toggleActive(num){
    const newKey = `feature${num}`
    setActivekey(newKey)
    setActiveFeatureImage({[newKey]: FeatImag[newKey]})
    setCurrentActiveKey(num)
  }

  const upFeature = () => {
    const newActiveKey = currentActiveKey === 1 ? 5 : currentActiveKey - 1 
    toggleActive(newActiveKey)
  }

  const downFeature = () => {
    const newActiveKey = currentActiveKey === 5 ? 1 : currentActiveKey + 1 
    toggleActive(newActiveKey)
  }

  // SETTING TIMER FOR THE BAR
  useEffect(() => {
    if(activeFeatureImage){
      setInterval(() => {
         setTime((prvtime) => prvtime + 1);
       }, 1000)
    }
  },[activeFeatureImage])

  useEffect(()=>{
    console.log({time})
    if(time === 100 || !activeFeatureImage){
      stopTime()
    }
  }, [time])

  const stopTime = () => {
    const newActiveKey = currentActiveKey + 1
    clearInterval(time)
    setTime(0)
    toggleActive(newActiveKey)
  }


 return(
  <div className='main-container'>
    <div className='leftSide'>
      <h1 className='leftSideHeader'>Connectivity at every turn.</h1>
      <div className='vehicleFeaturesList'>
        <Features title="Remote Start w/ Climate Control"  discription={featureDiscrip.feature1} active={activeFeatureImage?.feature1} time={time} onClick={() => toggleActive(1)}/> 
        <Features title="Find My Car"  discription={featureDiscrip.feature2} active={activeFeatureImage?.feature2} time={time} onClick={() => toggleActive(2)}/>
        <Features title="Voice Assistants"  discription={featureDiscrip.feature3}  active={activeFeatureImage?.feature3} time={time} onClick={() => toggleActive(3)}/>
        <Features title="Connected Routing"  discription={featureDiscrip.feature4}  active={activeFeatureImage?.feature4} time={time} onClick={() => toggleActive(4)}/>
        <Features title="Wi-Fi Hotspot"  discription={featureDiscrip.feature5}  active={activeFeatureImage?.feature5} time={time} onClick={() => toggleActive(5)}/>
      </div>

      <div className='navigation_bar'>
        <div className='up_down'>
          <button className='button' onClick={upFeature}>
            <img src="images/up-arrow.png" alt="up icon" className='up_arrow'/>
          </button>

          <button className='button' onClick={downFeature}>
            <img src="images/down-arrow.png" alt="up icon" className='arrows'/>
          </button>
        </div>

        <div className='progress_container'>
            {currentActiveKey}/5
        </div>

      </div>

    </div>
    <div className='rightSide'>
      <FeatureImages srcImg={activeFeatureImage[activeKey]}/>
    </div>
  </div>
 )
}

export default App;



// has 'time' has reached 100px
// if yes toggleactive(num+1)