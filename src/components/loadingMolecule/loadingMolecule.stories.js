import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { select } from '@storybook/addon-knobs';
import { LoadingMolecule } from '../../index';

const sizes = ['small', 'large'];

export default {
  component: LoadingMolecule,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Loading molecule'),
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
