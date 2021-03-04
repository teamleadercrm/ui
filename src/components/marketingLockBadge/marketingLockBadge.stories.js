import React from 'react';
import { addStoryInGroup, MARKETING } from '../../../.storybook/utils';
import MarketingLockBadge from './MarketingLockBadge';

export default {
  component: MarketingLockBadge,
  title: addStoryInGroup(MARKETING, 'MarketingLockBadge'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6nbw3mXc6VpIOYrbmUxn8C/Marketing-components?node-id=165%3A3907',
    },
  },
};

export const Basic = (args) => <MarketingLockBadge {...args} />;
