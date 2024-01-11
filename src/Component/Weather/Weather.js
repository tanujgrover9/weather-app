import React from 'react'
import './Weather.css'
import { Link } from 'react-router-dom'

const Weather = ({data}) => {
  return (
    <div className='Weather-Card'>
        <div className="header-title">
            <Link to = '/'>
            <i className="bi bi-arrow-left fa-2x mx-3 "></i>
            </Link>
            <h2 className='mx-4'>Weather-App</h2>
        </div>
        <hr/>
        <img className="weather-icon" alt={`${data?.weather[0]?.main} icon`}
            src={`icons/${data.weather[0].icon}.png`} />
        
            <h2 className='Temp'>{Math.round(data.main.temp)}°C</h2>
        
        <div className='weather'>{data?.weather[0]?.description}</div>
        <div className='location'>
        <i className="bi bi-geo-alt fa-2x mx-2"></i>
        <span>{data?.name}, {data?.sys.country}</span>
        </div>
        <div>
        <hr/>
        </div>
        <div className="details">
        <div className="feels_like">
        <i class="bi bi-thermometer-half fa-2x" style={{color:"#43aefc"}}></i>
            <div>
              <h2 className="tempFeels">
                {Math.trunc(data?.main.feels_like)}&deg;C
              </h2>
              <p className="textFeels"> Feels like</p>
            </div>
          </div>
          <div className="humidity">
          <i class="bi bi-droplet-half fa-2x" style={{color:"#43aefc"}}></i>
            <div>
              <h2 className="tempFeels">
                {Math.trunc(data?.main.humidity)}%
              </h2>
              <p className="textFeels">Humidity</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Weather