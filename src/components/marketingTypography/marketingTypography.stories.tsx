import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, MARKETING } from '../../../.storybook/utils';
import MarketingHeading1 from './MarketingHeading1';
import MarketingHeading2 from './MarketingHeading2';

export default {
  component: MarketingHeading1,
  title: addStoryInGroup(MARKETING, 'Typography'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6nbw3mXc6VpIOYrbmUxn8C/Marketing-components?node-id=84%3A0',
    },
  },
} as ComponentMeta<typeof MarketingHeading1>;

export const heading1: ComponentStory<typeof MarketingHeading1> = (args) => <MarketingHeading1 {...args} />;

heading1.args = {
  children: "I'm a heading 1 for marketing purposes only",
};

export const heading2: ComponentStory<typeof MarketingHeading2> = (args) => <MarketingHeading2 {...args} />;

heading2.args = {
  children: "I'm a heading 2 for marketing purposes only",
};
