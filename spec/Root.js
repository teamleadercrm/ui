import React from 'react';
import Button from './components/button';
import Menu from './components/menu';
import Dialog from './components/dialog';
import Popover from './components/popover';
import LoadingMolecule from './components/loadingMolecule';

const Root = () => (
  <div>
    <h1>Teamleader UI v{__VERSION__}</h1>
    {__DEV__}
    <Button />
    <Popover />
    <Menu />
    <Dialog />
    <LoadingMolecule />
  </div>
);

export default Root;
