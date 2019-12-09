import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { LoadingMolecule } from '../../index';

const sizes = ['small', 'large'];

export default {
  title: 'Loading molecules',
};

export const color = () => (
  <div style={{ height: '300px', position: 'relative' }}>
    <LoadingMolecule basePath="" startColor="#00ACA9" stopColor="#1F7F79" type={select('Type', sizes, 'large')} />
  </div>
);

export const grayscale = () => (
  <div style={{ height: '300px', position: 'relative' }}>
    <LoadingMolecule basePath="" startColor="#BABABA" stopColor="#DADADA" type={select('Type', sizes, 'large')} />
  </div>
);
