import { useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import Input from './components/Input'
import {useWeather} from './context/Weather'
function App() {
  const weather=useWeather();

  useEffect(()=>{
    weather.fetchCurrentUserLocationData();
  }, []);
  return (
    <>
    <div className='App'>
      <h1> Weather Forecast</h1>
      <Input /> 
      <Button onClick={weather.fetch}   value="Search"/>
      <Card />
      <Button value="Refresh"/>
    </div>
    </>
  )
}

export default App
