import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
import { TimerPulser } from '../src';

const sizes = ['small', 'medium', 'large'];

storiesOf('TimerPulser', module).add('Basic', () => <TimerPulser size={select('Size', sizes, 'medium')} />);
