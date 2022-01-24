import React from 'react';

const ApiWeatherInfo = ({ temp, humidity, pressure, description, name, speed, country, sunset }) => {
    console.log(sunset);
    let puestaSol = Math.floor(sunset/(1000*60*60*24)) + " : " + Math.floor((sunset%(1000*60*60*24))/(60*1000)) + " : " + Math.floor(((sunset%(1000*60*60*24))%(60*1000))/1000)
    return (
        <div>
            <h2>Tiempo en {name}, {country}</h2>
            <ul>
                <li>{temp}ºC</li>
                <li>{humidity}% de humedad</li>
                <li>{pressure}</li>
                <li>Cielo: {description}</li>
                <li>{speed}km/h</li>
                <li>Puesta de sol a las {puestaSol}</li>
            </ul>
        </div>
    );
};

export default ApiWeatherInfo;
