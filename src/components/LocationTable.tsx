import React, {FC} from "react";
import {WeatherLocation} from "../api/Weather";

interface LocationTableProps {
  locations: WeatherLocation[];
  current: WeatherLocation | null;
  onSelect: (location: WeatherLocation) => void;
}

export const LocationTable: FC<LocationTableProps> = ({locations, onSelect, current}) =>
  <div>
    {/* <h2>City</h2> */}
    <p></p>
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Current Weather by City</th>
      </tr>
      </thead>
      <tbody>
      {locations.map(location =>
        <tr key={location.id}
            className={current?.id === location.id ? 'table-primary' : ''}
            onClick={() => onSelect(location)}>
          <td>{location.name}</td>
        </tr>
      )}
      </tbody>
    </table>
  </div>;