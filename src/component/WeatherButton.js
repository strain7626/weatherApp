import { Button } from 'react-bootstrap'
import React from 'react'

const WeatherButton = ({cities, setCity, handleCityChange}) => {
  return (
    <div>
        <Button variant="success" onClick={()=>handleCityChange("current")}>현재 위치</Button>{' '}
        {
          cities.map((item)=>(
            <Button key={item} variant="success" onClick={()=>setCity(item)}>{item}</Button>
          ))
        }
    </div>
  )
}

export default WeatherButton