import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { select } from '@storybook/addon-knobs';
import { TimerPulser } from '../../index';

const sizes = ['small', 'medium', 'large'];

export default {
  component: TimerPulser,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'TimerPulser'),
};

export const basic = () => <TimerPulser size={select('Size', sizes, 'medium')} />;
