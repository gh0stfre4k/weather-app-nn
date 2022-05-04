import React, {FC, useState} from 'react';
import './App.css';
import {LocationSearch} from "./components/LocationSearch";
import {LocationTable} from "./components/LocationTable";
import {WeatherLocation} from "./api/Weather";
import {searchLocation} from "./api/WeatherService";
import {ErrorAlert, WarningAlert} from "./components/Alerts";
import {WeatherMain} from "./components/CurrentWeather";
import DemoUI from "./components/DemoMaterialUI"
//import { Demo } from './Demo';

const App: FC = () => {
  const [locations, setLocations] = useState<WeatherLocation[]>([]);
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');
  const [currentLocation, setCurrentLocation] = useState<WeatherLocation | null>(null);

  const resetAlerts = () => {
    setError('');
    setWarning('');
  }

  let addLocation = async (term: string) => {
    resetAlerts();
    const location = await searchLocation(term);

    if (!location) {
      setError(`No location found called '${term}'`);
    } else if (locations.find(item => item.id === location.id)) {
      setWarning(`Location '${term}' is already in the list.`);
    } else {
      setLocations([location, ...locations]);
    }
  };

  return (
    <div className="container">

      <LocationSearch onSearch={addLocation}/>
      <ErrorAlert message={error}/>
      <WarningAlert message={warning}/>
      <LocationTable locations={locations}
                     current={currentLocation}
                     onSelect={location => setCurrentLocation(location)}/>
      <WeatherMain location={currentLocation}/>
      {/* <DemoUI></DemoUI> */}
    </div>
      //  <div>
      //    <Demo></Demo>
      //  </div>
  );
};

export default App;