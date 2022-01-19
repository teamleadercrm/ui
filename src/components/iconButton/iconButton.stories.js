import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { IconAddMediumOutline, IconAddSmallOutline } from '@teamleader/ui-icons';
import IconButton from './IconButton';

export default {
  component: IconButton,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'IconButton'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=3943%3A2406',
    },
  },
};

export const basic = ({ size, ...args }) => (
  <IconButton {...args} icon={size === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />} />
);

export const withCustomElement = () => <IconButton icon={<IconAddMediumOutline />} element="a" />;

withCustomElement.storyName = 'With custom element';
