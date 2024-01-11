import React, { useState } from 'react'
import './Home.css'
import {WEATHER_API_URL, WEATHER_API_KEY} from '../Api'
import { useNavigate } from 'react-router-dom';

const Home = ({SetWeatherData}) => {
  const [city, setcity] = useState("");
  const [LatLon , SetLatLon] = useState({});
  const navigate = useNavigate();

  const handlesubmit= async (e)=>{
    e.preventDefault();
    
    try {
      const data = await fetch(
        `${WEATHER_API_URL}&q=${city}&appid=${WEATHER_API_KEY}`
      );
      const result = await data.json();
      SetWeatherData(result);
      if (result.cod === 200) {
      navigate("/weather");
      }
      else if(result.cod == 404)
      alert("Error City Not Found")
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data:", error.message);
    } 
  }

  const GetLocation =async ()=>{

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      SetLatLon({ latitude, longitude });
    });
    if (Object.keys(LatLon).length > 0) {
      try {
        const data = await fetch(
          `${WEATHER_API_URL}&lat=${LatLon.latitude}&lon=${LatLon.longitude}&appid=${WEATHER_API_KEY}`
        );
        const result = await data.json();
        SetWeatherData(result);
        if (result.cod === 200) {
        navigate("/weather");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Error fetching weather data:", error);
      } 
    } else {
      alert("Allow device location and try again!");
    }

  }


  return (
    <div className='Input-card'>
      <h4 className='title'>Weather App</h4>
      <hr/>
      <form className='input my-3' onSubmit={handlesubmit}>
        <input type='text' placeholder='Please Enter City Name' value={city} onChange={(e)=> setcity(e.target.value)}/>
      </form>
      <div className="or">
          <hr className="hrLine" />
          <p style={{ padding: "0 10px", margin: "0.5em 0" }}>or</p>
          <hr className="hrLine" />
        </div>
      <button className='btn btn-primary' onClick={GetLocation}>Get Device Location</button>
    </div>
  )
}

export default Home