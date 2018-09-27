import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
import { LoadingSpinner } from '../components';

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal'];
const sizes = ['small', 'medium'];
const tints = ['lightest', 'light', 'normal', 'dark', 'darkest'];

storiesOf('Loading spinners', module).add('Basic', () => (
  <LoadingSpinner
    color={select('Color', colors, 'teal')}
    size={select('Size', sizes, 'medium')}
    tint={select('Tint', tints, 'darkest')}
  />
));
