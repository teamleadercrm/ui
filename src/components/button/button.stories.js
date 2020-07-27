import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, select, text } from '@storybook/addon-knobs';
import { IconAddMediumOutline, IconAddSmallOutline } from '@teamleader/ui-icons';
import { Button } from '../../index';

const colors = ['teal', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white'];
const elements = ['a', 'button'];
const iconPositions = ['left', 'right'];
const levels = ['primary', 'secondary', 'outline', 'destructive', 'link', 'timer'];
const sizes = ['small', 'medium', 'large'];

export default {
  component: Button,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Button'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=225%3A2',
    },
  },
};

export const withText = () => (
  <Button
    active={boolean('Active', false)}
    color={select('Color', colors, 'teal')}
    label={text('Label', 'Button with label')}
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
    color={select('Color', colors, 'teal')}
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
    color={select('Color', colors, 'teal')}
    icon={select('Size', sizes, 'medium') === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
    iconPlacement={select('Icon placement', iconPositions, 'left')}
    label={text('Label', 'Button with icon and label')}
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
    color={select('Color', colors, 'teal')}
    element={select('Element', elements, 'a')}
    label={text('Label', 'Button with custom element')}
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
