import React from 'react';
import { addStoryInGroup, MARKETING } from '../../../.storybook/utils';
import MarketingTab from './MarketingTab';

const handleClick = (event) => {
  event.preventDefault();
};

export default {
  component: MarketingTab,
  title: addStoryInGroup(MARKETING, 'MarketingTab'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6nbw3mXc6VpIOYrbmUxn8C/Marketing-components?node-id=57%3A0',
    },
  },
};

export const Basic = (args) => (
  <MarketingTab
    {...args}
    onClick={(event) => {
      handleClick(event, 'Marketing tab');
    }}
  />
);

Basic.args = {
  active: false,
  children: 'Marketing tab',
  href: 'https://www.teamleader.eu',
};
