import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { IconBuildingSmallOutline } from '@teamleader/ui-icons';
import Badge from './Badge';

export default {
  component: Badge,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Badge'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=3943%3A715',
    },
  },
};

export const basic = (args) => <Badge {...args}>I'm a badge</Badge>;

export const withIcon = (args) => <Badge {...args}>I'm a badge</Badge>;

withIcon.args = {
  icon: <IconBuildingSmallOutline />,
};

withIcon.story = {
  name: 'With icon',
};

export const withCustomElement = (args) => <Badge {...args}>I'm a badge</Badge>;

withCustomElement.args = {
  element: 'a',
  href: 'https://teamleader.eu',
};

withCustomElement.story = {
  name: 'With custom element',
};
