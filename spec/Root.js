import React from 'react';
import Button from './components/button';
import Menu from './components/menu';
import LoadingMolecule from './components/loadingMolecule';
import Card from './components/card';

const Root = () => (
  <div>
    <h1>Teamleader UI v{__VERSION__}</h1>
    {__DEV__}
    <Button />
    <Menu />
    <LoadingMolecule />
    <Card />
  </div>
);

export default Root;
