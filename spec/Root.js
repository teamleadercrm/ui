import React from 'react';
import Button from './components/button';
import Menu from './components/menu';
import Dialog from './components/dialog';
import PopoverVertical from './components/popoverVertical';
import PopoverHorizontal from './components/popoverHorizontal';
import LoadingMolecule from './components/loadingMolecule';
import Toast from './components/toast';

const Root = () => (
  <div>
    <h1>Teamleader UI v{__VERSION__}</h1>
    {__DEV__}
    <Button />
    <PopoverVertical />
    <PopoverHorizontal />
    <Menu />
    <Dialog />
    <Toast />
    <LoadingMolecule />
  </div>
);

export default Root;
