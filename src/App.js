import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import Features from './components/Features';

function App() {
 return(
  <div className='main-container'>
    <div className='leftSide'>
      <h1 className='leftSideHeader'>Connectivity at every turn.</h1>
      <div className='vehicleFeaturesList'>
        {/* <Features /> */}
      </div>
      <button className='button'>up</button>
      <button className='button'>Down</button>
    </div>
    <div className='rightSide'></div>
  </div>
 )
}

export default App;
