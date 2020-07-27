import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, select } from '@storybook/addon-knobs';
import { IconAddMediumOutline, IconAddSmallOutline } from '@teamleader/ui-icons';
import IconButton from './IconButton';

const colors = ['white', 'neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'];
const tints = ['lightest', 'light', 'normal', 'dark', 'darkest'];
const elements = ['a', 'button'];
const sizes = ['small', 'medium', 'large'];

export default {
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'IconButton'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=3943%3A2406',
    },
  },
};

export const basic = () => (
  <IconButton
    icon={select('Size', sizes, 'medium') === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
    color={select('Color', colors, 'neutral')}
    tint={select('Tint', tints, 'darkest')}
    size={select('Size', sizes, 'medium')}
    disabled={boolean('Disabled', false)}
    selected={boolean('Selected', false)}
  />
);

export const withCustomElement = () => (
  <IconButton
    icon={select('Size', sizes, 'medium') === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
    color={select('Color', colors, 'neutral')}
    tint={select('Tint', tints, 'darkest')}
    element={select('Element', elements, 'a')}
    size={select('Size', sizes, 'medium')}
    disabled={boolean('Disabled', false)}
    selected={boolean('Selected', false)}
  />
);

withCustomElement.story = {
  name: 'With custom element',
};
