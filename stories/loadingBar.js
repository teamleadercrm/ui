import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
import { LoadingBar } from '../src';

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal'];
const sizes = ['small', 'medium', 'large'];
const tints = ['lightest', 'light', 'normal', 'dark', 'darkest'];

storiesOf('LoadingBar', module).add('Basic', () => (
  <LoadingBar
    color={select('Color', colors, 'mint')}
    size={select('Size', sizes, 'small')}
    tint={select('Tint', tints, 'normal')}
  />
));
