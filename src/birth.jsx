import dayjs from 'dayjs';
import * as React from 'react';
import { act } from 'react-dom/test-utils';

function Birth({ value }) {
  const actualDay = dayjs();
  const days = actualDay.diff(value, 'days');
  let n = 1;
  while (Math.pow(10, n) < days) {
    n++;
  }
  let daysTo = Math.pow(10, n) - days;

  let mathbirth = dayjs().add(daysTo, 'day').format('LL');
  return (
    <div>
      <p>Your close to your {n} math birthday</p>
      <p>only {daysTo} days left</p>
      <p>Your next math birthday is</p>
      <p>{mathbirth}</p>
    </div>
  );
}

export default Birth;
