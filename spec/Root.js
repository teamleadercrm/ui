import React from 'react';
import Button from './components/button';

const Root = () => (
  <div>
    <h1>Teamleader UI v{__VERSION__}</h1>
    {__DEV__}
    <Button />
  </div>
);

export default Root;
