import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
import { LoadingSpinner } from '../components';

const colors = ['teal', 'white'];
const sizes = ['small', 'medium'];

storiesOf('Loading spinners', module).add('Basic', () => (
  <LoadingSpinner color={select('Color', colors, 'teal')} size={select('Size', sizes, 'medium')} />
));
