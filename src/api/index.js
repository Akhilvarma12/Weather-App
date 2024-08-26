const baseURL =
"https://api.weatherapi.com/v1/current.json?key=b59275a67fdd4c6f93693324242608"


export const getWeatherDataForCity= async (city) =>{
    const respone= await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await respone.json();
}
export const getWeatherDataForLocation= async (lat,lon) =>{
    const respone= await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await respone.json();
}