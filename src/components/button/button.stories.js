import React from 'react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { IconAddMediumOutline, IconAddSmallOutline } from '@teamleader/ui-icons';
import { Button } from '../../index';

const elements = ['a', 'button'];
const iconPositions = ['left', 'right'];
const levels = ['primary', 'secondary', 'outline', 'destructive', 'link', 'timer'];
const sizes = ['small', 'medium', 'large'];

export default {
  title: 'Buttons',
};

export const withText = () => (
  <Button
    active={boolean('Active', false)}
    label="Button"
    level={select('Level', levels, 'secondary')}
    disabled={boolean('Disabled', false)}
    fullWidth={boolean('Full width', false)}
    processing={boolean('Processing', false)}
    inverse={boolean('Inverse', false)}
    size={select('Size', sizes, 'medium')}
  />
);

withText.story = {
  name: 'With text',
};

export const withIcon = () => (
  <Button
    active={boolean('Active', false)}
    icon={select('Size', sizes, 'medium') === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
    level={select('Level', levels, 'secondary')}
    disabled={boolean('Disabled', false)}
    fullWidth={boolean('Full width', false)}
    processing={boolean('Processing', false)}
    inverse={boolean('Inverse', false)}
    size={select('Size', sizes, 'medium')}
  />
);

withIcon.story = {
  name: 'With icon',
};

export const withTextAndIcon = () => (
  <Button
    active={boolean('Active', false)}
    icon={select('Size', sizes, 'medium') === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
    iconPlacement={select('Icon placement', iconPositions, 'left')}
    label="Button"
    level={select('Level', levels, 'secondary')}
    disabled={boolean('Disabled', false)}
    fullWidth={boolean('Full width', false)}
    processing={boolean('Processing', false)}
    inverse={boolean('Inverse', false)}
    size={select('Size', sizes, 'medium')}
  />
);

withTextAndIcon.story = {
  name: 'With text and icon',
};

export const withCustomElement = () => (
  <Button
    active={boolean('Active', false)}
    element={select('Element', elements, 'a')}
    label="Button"
    level={select('Level', levels, 'secondary')}
    disabled={boolean('Disabled', false)}
    fullWidth={boolean('Full width', false)}
    processing={boolean('Processing', false)}
    inverse={boolean('Inverse', false)}
    size={select('Size', sizes, 'medium')}
  />
);

withCustomElement.story = {
  name: 'With custom element',
};
