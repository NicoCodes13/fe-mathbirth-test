import * as React from 'react';

function Birth({ value }) {
  let mathbirth = value.add(3, 'day').format('LL');
  return (
    <div>
      <p>Your next math birthday is</p>
      <p>{mathbirth.toString()}</p>
    </div>
  );
}

export default Birth;
