import React, { useEffect, useState } from 'react';
import ApiWeatherInfo from './ApiWeatherInfo'
const ApiWeather = () => {
    const [searchTerm, setSearchTerm] = useState("Granada");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () =>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=ef3a06a8024d7447a4d35c82b1382963&lang=ES`;
        
            let respuesta = await fetch(url);
            let data = await respuesta.json();
            
            const { temp, humidity, pressure } = data?.main;   
            const { description } = data?.weather[0];
            const { name } = data;
            const { speed } = data?.wind;
            const { country, sunset } = data?.sys;

            const miInfo ={temp, humidity, pressure, description, name, speed, country, sunset};
            setTempInfo(miInfo);
            
            console.log(miInfo);
        }catch(error){
            console.log(error);
        }    
    }

    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
    <div>
        <h1>App de Consulta del clima</h1>
        <div>
            <input 
                type="search" 
                placeholder="Nombre de ciudad o país" 
                id="search"
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button onClick={getWeatherInfo}>Buscar</button>
        </div>

        {/* cargar un componente con los datos recogidos de la api */}
    
        <ApiWeatherInfo {...tempInfo}/>


        

    </div>);
};

export default ApiWeather;
