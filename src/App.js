import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import Features from './components/Features';
import featureDiscrip from './copy/feature';

function App() {
 return(
  <div className='main-container'>
    <div className='leftSide'>
      <h1 className='leftSideHeader'>Connectivity at every turn.</h1>
      <div className='vehicleFeaturesList'>
        <Features title="Remote Start w/ Climate Control"  discription={featureDiscrip.feature1}/>
        <Features title="Find My Car"  discription={featureDiscrip.feature2}/>
        <Features title="Voice Assistants"  discription={featureDiscrip.feature3}/>
        <Features title="Connected Routing"  discription={featureDiscrip.feature4}/>
        <Features title="Wi-Fi Hotspot"  discription={featureDiscrip.feature5}/>
      </div>
      <button className='button'>up</button>
      <button className='button'>Down</button>
    </div>
    <div className='rightSide'></div>
  </div>
 )
}

export default App;
