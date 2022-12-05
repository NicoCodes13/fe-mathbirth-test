import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { setConstantValue } from 'typescript';
import { TextField } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import Birth from './birth';

function App() {
  const [value, setValue] = React.useState(dayjs());
  return (
    <React.Fragment>
      <main className='container'>
        <h1>Know your Math birthday</h1>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              openTo='year'
              views={['year', 'month', 'day']}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <Birth value={value}></Birth>
      </main>
    </React.Fragment>
  );
}

export default App;
