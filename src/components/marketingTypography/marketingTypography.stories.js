import React from 'react';
import { addStoryInGroup, MARKETING } from '../../../.storybook/utils';
import MarketingHeading1 from './MarketingHeading1';

export default {
  component: MarketingHeading1,
  title: addStoryInGroup(MARKETING, 'Typography'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6nbw3mXc6VpIOYrbmUxn8C/Marketing-components?node-id=84%3A0',
    },
  },
};

export const heading1 = (args) => <MarketingHeading1 {...args} />;

heading1.args = {
  children: "I'm a heading 1 for marketing purposes only",
};
