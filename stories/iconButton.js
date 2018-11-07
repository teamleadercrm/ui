import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { IconAddMediumOutline, IconAddSmallOutline } from '@teamleader/ui-icons';
import { IconButton } from '../src';

const colors = ['white', 'neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'];
const elements = ['a', 'button'];
const sizes = ['small', 'medium', 'large'];

storiesOf('IconButtons', module)
  .add('Basic', () => (
    <IconButton
      icon={select('Size', sizes, 'medium') === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
      color={select('Color', colors, 'neutral')}
      size={select('Size', sizes, 'medium')}
      disabled={boolean('Disabled', false)}
    />
  ))
  .add('With custom element', () => (
    <IconButton
      icon={select('Size', sizes, 'medium') === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
      color={select('Color', colors, 'neutral')}
      element={select('Element', elements, 'a')}
      size={select('Size', sizes, 'medium')}
      disabled={boolean('Disabled', false)}
    />
  ));
