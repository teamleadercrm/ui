import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { LoadingSpinner } from '../src';

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal'];
const sizes = ['small', 'medium'];
const tints = ['lightest', 'light', 'normal', 'dark', 'darkest'];

export default {
  title: 'Loading spinners',
};

export const basic = () => (
  <LoadingSpinner
    color={select('Color', colors, 'teal')}
    size={select('Size', sizes, 'medium')}
    tint={select('Tint', tints, 'darkest')}
  />
);
