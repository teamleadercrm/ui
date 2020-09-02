import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import LoadingMolecule from './LoadingMolecule';

export default {
  component: LoadingMolecule,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Loading molecule'),
};

export const Color = (args) => (
  <div style={{ height: '300px', position: 'relative' }}>
    <LoadingMolecule {...args} />
  </div>
);

Color.args = {
  basePath: '',
  startColor: '#00ACA9',
  stopColor: '#1F7F79',
};

export const Grayscale = (args) => (
  <div style={{ height: '300px', position: 'relative' }}>
    <LoadingMolecule {...args} />
  </div>
);

Grayscale.args = {
  basePath: '',
  startColor: '#BABABA',
  stopColor: '#DADADA',
};
