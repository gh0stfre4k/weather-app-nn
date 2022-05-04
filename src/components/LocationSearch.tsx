import { Button, TextField } from "@mui/material";
import React, {FC, useState} from "react";

interface LocationSearchProps {
  onSearch: (search: string) => void;
}

export const LocationSearch: FC<LocationSearchProps> = ({onSearch}) => {
  const [locationSearch, setLocationSearch] = useState('');
  const disableSearch = locationSearch.trim() === '';

  const addLocation = () => {
    onSearch(locationSearch);
    setLocationSearch('');
  };

  return (
    <div>
      {/* <label>
        <input type="text" value={locationSearch}
               onChange={e => setLocationSearch(e.target.value)}/>
      </label> */}
      <TextField id="outlined-basic" label="Város" variant="outlined" value={locationSearch}
               onChange={e => setLocationSearch(e.target.value)} ></TextField>
      <Button onClick={addLocation} variant="contained" disabled={disableSearch} >Keres</Button>
    </div>
  );
}