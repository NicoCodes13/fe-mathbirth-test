import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import Birth from './birth';

import './assets/styles/App.scss';

function App() {
  const [value, setValue] = React.useState(dayjs());
  return (
    <React.Fragment>
      <main className='container'>
        <div className='title'>
          <h1>Know your Math birthday</h1>
        </div>
        <div className='datePicker'>
          <p>I was born on &nbsp;</p>
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
        <div className='info'>
          <Birth value={value}></Birth>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
