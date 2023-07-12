import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconBuildingSmallOutline } from '@teamleader/ui-icons';
import Badge from './Badge';

export default {
  component: Badge,
  title: 'Low level blocks / Badge',

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=3943%3A715',
    },
  },
} as ComponentMeta<typeof Badge>;

export const basic: ComponentStory<typeof Badge> = (args) => <Badge {...args}>I'm a badge</Badge>;

export const withIcon: ComponentStory<typeof Badge> = (args) => <Badge {...args}>I'm a badge</Badge>;

withIcon.args = {
  icon: <IconBuildingSmallOutline />,
};

withIcon.storyName = 'With icon';

export const withCustomElement: ComponentStory<typeof Badge> = (args) => <Badge {...args}>I'm a badge</Badge>;

withCustomElement.args = {
  element: 'a',
  href: 'https://teamleader.eu',
};

withCustomElement.storyName = 'With custom element';
