import React from 'react'

const WeatherBox = ({weather}) => {
  const tempF = (Math.round((weather?.main.temp)*1.8+32))
  return (
    <div className='weather-box'>
        <div>{weather?.name}</div>
        <h2>{Math.round(weather?.main.temp)} C / {tempF} F</h2>
        <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox