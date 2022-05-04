import React, {FC} from "react";
import {WeatherLocation} from "../api/Weather";

import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { ButtonGroup } from "@mui/material";

interface LocationTableProps {
  locations: WeatherLocation[];
  current: WeatherLocation | null;
  onSelect: (location: WeatherLocation) => void;
}

export const LocationTable: FC<LocationTableProps> = ({locations, onSelect, current}) =>
  <div>
    {/* <h2>City</h2>
    <p></p>
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Current Weather by City</th>
      </tr>
      </thead>
      <tbody>
        <ButtonGroup variant="outlined" size="small" aria-label="small button group" >
          {locations.map(location =>
          <tr key={location.id}
              className={current?.id === location.id ? 'table-primary' : ''}
              onClick={() => onSelect(location)}>
            <td>{location.name}</td>
          </tr> 
          )}
        </ButtonGroup>
  
      </tbody>
    </table> */}
    <br></br>
    {/* <div>City</div> */}
    <ButtonGroup variant="outlined" size="small" aria-label="small button group" >
          {locations.map(location =>
          <tr key={location.id}
              className={current?.id === location.id ? 'table-primary' : ''}
              onClick={() => onSelect(location)}>
            <td><Button>{location.name}</Button></td>
          </tr> 
          )}
        </ButtonGroup>
  </div>;