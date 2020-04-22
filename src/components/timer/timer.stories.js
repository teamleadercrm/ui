import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean } from '@storybook/addon-knobs/react';
import Timer from './Timer';

export default {
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Timer'),
};

export const basic = () => (
  <Timer loading={boolean('Loading', false)} running={boolean('Running', false)}>
    01:26
  </Timer>
);
