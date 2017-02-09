import React from 'react';
import Button from './components/button';
import Menu from './components/menu';

const Root = () => (
  <div>
    <h1>Teamleader UI v{__VERSION__}</h1>
    {__DEV__}
    <Button />
    <Menu />
  </div>
);

export default Root;
