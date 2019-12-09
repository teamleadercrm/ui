import React from 'react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Toggle } from '../../index';

const sizes = ['small', 'medium', 'large'];

export default {
  title: 'Form elements/Toggle',
};

export const basic = () => (
  <Toggle
    checked={boolean('Checked', false)}
    disabled={boolean('Disabled', false)}
    size={select('Size', sizes, 'medium')}
  />
);

export const withLabels = () => (
  <Toggle
    checked={boolean('Checked', false)}
    disabled={boolean('Disabled', false)}
    label={`I'm a toggle`}
    size={select('Size', sizes, 'medium')}
  />
);

withLabels.story = {
  name: 'With labels',
};
