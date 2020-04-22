import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, select } from '@storybook/addon-knobs/react';
import { IconAddMediumOutline, IconAddSmallOutline } from '@teamleader/ui-icons';
import IconButton from './IconButton';

const colors = ['white', 'neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'];
const elements = ['a', 'button'];
const sizes = ['small', 'medium', 'large'];

export default {
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'IconButton'),
};

export const basic = () => (
  <IconButton
    icon={select('Size', sizes, 'medium') === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
    color={select('Color', colors, 'neutral')}
    size={select('Size', sizes, 'medium')}
    disabled={boolean('Disabled', false)}
    selected={boolean('Selected', false)}
  />
);

export const withCustomElement = () => (
  <IconButton
    icon={select('Size', sizes, 'medium') === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
    color={select('Color', colors, 'neutral')}
    element={select('Element', elements, 'a')}
    size={select('Size', sizes, 'medium')}
    disabled={boolean('Disabled', false)}
    selected={boolean('Selected', false)}
  />
);

withCustomElement.story = {
  name: 'With custom element',
};
