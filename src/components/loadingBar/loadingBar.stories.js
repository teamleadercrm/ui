import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { select } from '@storybook/addon-knobs';
import { LoadingBar } from '../../index';

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal'];
const sizes = ['small', 'medium', 'large'];
const tints = ['lightest', 'light', 'normal', 'dark', 'darkest'];

export default {
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'LoadingBar'),
};

export const basic = () => (
  <LoadingBar
    color={select('Color', colors, 'mint')}
    size={select('Size', sizes, 'small')}
    tint={select('Tint', tints, 'normal')}
  />
);
