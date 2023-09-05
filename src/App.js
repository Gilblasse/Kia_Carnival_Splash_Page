import logo from './logo.svg';
import './App.css';

function App() {
 return(
  <div className='main-container'>
    <div className='leftSide'>
      <h1 className='leftSideHeader'>Connectivity at every turn.</h1>
      <div className='vehicleFeaturesList'></div>
      <button className='button'>up</button>
      <button className='button'>Down</button>
    </div>
    <div className='rightSide'></div>
  </div>
 )
}

export default App;
