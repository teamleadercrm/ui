import React from 'react';
import { addStoryInGroup, MARKETING } from '../../../.storybook/utils';
import MarketingStatusLabel from './MarketingStatusLabel';

export default {
  component: MarketingStatusLabel,
  title: addStoryInGroup(MARKETING, 'MarketingStatusLabel'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6nbw3mXc6VpIOYrbmUxn8C/Marketing-components?node-id=150%3A0',
    },
  },
};

export const Basic = (args) => <MarketingStatusLabel {...args} />;

Basic.args = {
  children: (
    <>
      <strong>&lt;PACKAGE&gt;</strong> feature
    </>
  ),
};
