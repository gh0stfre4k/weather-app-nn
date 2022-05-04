import React, {FC, useState, useEffect} from "react";
import {Weather, WeatherLocation} from "../api/Weather";
import {getIconUrl, readWeather} from "../api/WeatherService";
import {convertUnixTimeToDate} from "../api/Utilities";


interface WeatherMainProps {
    location: WeatherLocation | null;
}

export const WeatherMain: FC<WeatherMainProps> = ({location}) => {
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
            {/* <WeatherEntry weather={weather}/> */}
            <h2>{location.name}</h2>
            <div>{convertUnixTimeToDate(weather.dt).toLocaleTimeString().replace(/(.*)\D\d+/, '$1')}</div>
                {weather.weather.map(condition =>
                    <div key={condition.id}>
                        <div>{Math.round(weather.main.temp)}°C</div>
                        <div>{condition.main}</div>
                        {/* <div><img src={getIconUrl(condition.icon)} alt={condition.main}/> {condition.main}</div> */}
                    </div>)
                }   
        </div>
    );
};