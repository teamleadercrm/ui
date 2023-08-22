import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import MarketingTab from './MarketingTab';

const handleClick = (event: React.MouseEvent) => {
  event.preventDefault();
};

export default {
  component: MarketingTab,
  title: 'Marketing / MarketingTab',

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6nbw3mXc6VpIOYrbmUxn8C/Marketing-components?node-id=57%3A0',
    },
  },
} as ComponentMeta<typeof MarketingTab>;

export const Basic: ComponentStory<typeof MarketingTab> = (args) => (
  <MarketingTab
    {...args}
    onClick={(event) => {
      handleClick(event);
    }}
  />
);

Basic.args = {
  active: false,
  children: 'Marketing tab',
  href: 'https://www.teamleader.eu',
  element: 'a',
};
