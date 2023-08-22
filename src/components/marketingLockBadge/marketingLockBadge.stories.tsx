import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import MarketingLockBadge from './MarketingLockBadge';

export default {
  component: MarketingLockBadge,
  title: 'Marketing / MarketingLockBadge',

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6nbw3mXc6VpIOYrbmUxn8C/Marketing-components?node-id=165%3A3907',
    },
  },
} as ComponentMeta<typeof MarketingLockBadge>;

export const Basic: ComponentStory<typeof MarketingLockBadge> = (args) => <MarketingLockBadge {...args} />;
