import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { TimerPulser } from '../src';

const sizes = ['small', 'medium', 'large'];

export default {
  title: 'TimerPulser',
};

export const basic = () => <TimerPulser size={select('Size', sizes, 'medium')} />;
