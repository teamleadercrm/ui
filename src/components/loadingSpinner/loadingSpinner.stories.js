import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { select } from '@storybook/addon-knobs';
import { LoadingSpinner } from '../../index';

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal'];
const sizes = ['small', 'medium'];
const tints = ['lightest', 'light', 'normal', 'dark', 'darkest'];

export default {
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Loading spinner'),
};

export const basic = () => (
  <LoadingSpinner
    color={select('Color', colors, 'teal')}
    size={select('Size', sizes, 'medium')}
    tint={select('Tint', tints, 'darkest')}
  />
);
