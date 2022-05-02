import React, {FC, useState, useEffect} from "react";
import {Weather, WeatherLocation} from "../api/Weather";
import {getIconUrl, readWeather} from "../api/WeatherService";
import {convertUnixTimeToDate} from "../api/Utilities";


interface WeatherEntryProps {
    weather: Weather;
}

interface WeatherSummaryProps {
    location: WeatherLocation | null;
}

export const WeatherEntry: FC<WeatherEntryProps> = ({weather}) =>
    <div style={{
        border:1,
        borderColor:"black",
    }}>
        <div>{convertUnixTimeToDate(weather.dt).toLocaleTimeString().replace(/(.*)\D\d+/, '$1')}</div>
        {weather.weather.map(condition =>
            <div key={condition.id}>
                <h1>{Math.round(weather.main.temp)}°C</h1>
                <img src={getIconUrl(condition.icon)} alt={condition.main}/> {condition.main}
            </div>)
        }
        <br></br>
    </div>


export const WeatherSummary: FC<WeatherSummaryProps> = ({location}) => {
    const [weather, setWeather] = useState<Weather | null>(null);

    useEffect(() => {
        if (location) {
            readWeather(location.id).then(weather => setWeather(weather));
        }
    }, [location]);

    if (!location || !weather) return null;

    return (
        <div>
            <hr/>
            <WeatherEntry weather={weather}/>
            <h2>{location.name}</h2>
        </div>
    );
};