import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { IconAddMediumOutline, IconAddSmallOutline } from '@teamleader/ui-icons';
import { Button } from '../components';

const elements = ['a', 'button'];
const iconPositions = ['left', 'right'];
const levels = ['primary', 'secondary', 'outline', 'destructive'];
const sizes = ['small', 'medium', 'large'];

storiesOf('Buttons', module)
  .add('with text', () => (
    <Button
      label="Button"
      level={select('Level', levels, 'secondary')}
      disabled={boolean('Disabled', false)}
      fullWidth={boolean('Full width', false)}
      processing={boolean('Processing', false)}
      size={select('Size', sizes, 'medium')}
    />
  ))
  .add('with icon', () => (
    <Button
      icon={select('Size', sizes, 'medium') === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
      level={select('Level', levels, 'secondary')}
      disabled={boolean('Disabled', false)}
      fullWidth={boolean('Full width', false)}
      processing={boolean('Processing', false)}
      size={select('Size', sizes, 'medium')}
    />
  ))
  .add('with text and icon', () => (
    <Button
      icon={select('Size', sizes, 'medium') === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
      iconPlacement={select('Icon placement', iconPositions, 'left')}
      label="Button"
      level={select('Level', levels, 'secondary')}
      disabled={boolean('Disabled', false)}
      fullWidth={boolean('Full width', false)}
      processing={boolean('Processing', false)}
      size={select('Size', sizes, 'medium')}
    />
  ))
  .add('with custom element', () => (
    <Button
      element={select('Element', elements, 'a')}
      label="Button"
      level={select('Level', levels, 'secondary')}
      disabled={boolean('Disabled', false)}
      fullWidth={boolean('Full width', false)}
      processing={boolean('Processing', false)}
      size={select('Size', sizes, 'medium')}
    />
  ));
