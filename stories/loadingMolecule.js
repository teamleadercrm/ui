import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
import { LoadingMolecule } from '../src';

const sizes = ['small', 'large'];

storiesOf('Loading molecules', module)
  .add('Color', () => (
    <div style={{ height: '300px', position: 'relative' }}>
      <LoadingMolecule basePath="" startColor="#00ACA9" stopColor="#1F7F79" type={select('Type', sizes, 'large')} />
    </div>
  ))
  .add('Grayscale', () => (
    <div style={{ height: '300px', position: 'relative' }}>
      <LoadingMolecule basePath="" startColor="#BABABA" stopColor="#DADADA" type={select('Type', sizes, 'large')} />
    </div>
  ));
