import React,{createContext, useContext,useState} from 'react'
import { getWeatherDataForCity,getWeatherDataForLocation } from '../api/index';

const WeatherContext =createContext(null);
export const useWeather=()=>{
    return useContext(WeatherContext);
}
export default function WeatherProvider(props) {
    const [data,setData]=useState(null);
    const [searchCity,setSearchCity]=useState(null);
    const fetch= async()=>{
        const respone =await getWeatherDataForCity(searchCity);
        setData(respone);
        console.log(respone);
    }
    const fetchCurrentUserLocationData=()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            getWeatherDataForLocation(
            position.coords.latitude,
            position.coords.longitude
        ).then((data)=> setData(data));        
    });
};
  return (
    <div>
        <WeatherContext.Provider value={{searchCity,data,setSearchCity,fetch,fetchCurrentUserLocationData}}>
            {props.children}
        </WeatherContext.Provider>
    </div>
  )
}
