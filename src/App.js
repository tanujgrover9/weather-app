
import './App.css';
import Home from './Component/Home/Home';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Weather from './Component/Weather/Weather';
import { useState } from 'react';

function App() {
  const [WeatherData, SetWeatherData] = useState({})
  console.log(WeatherData);
  return (
    <Router>
    <div className="container">
      <Routes>
        <Route path='/' element={<Home SetWeatherData={SetWeatherData}/>}/>
        <Route path='/weather' element={<Weather data={WeatherData}/>}/> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
