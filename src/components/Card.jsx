import React from 'react'
import { useWeather } from '../context/Weather'

export default function Card() {
    const weather=useWeather();
    
  return (
    <div className='card'>
    <img src={weather.data?.current?.condition?.icon}></img>
    <h2>{weather.data?.current?.temp_c}</h2>
    <h5>{weather.data?.location?.name},
        {weather.data?.location?.region},
        {weather.data?.location?.country}</h5>
    </div>
  )
}
