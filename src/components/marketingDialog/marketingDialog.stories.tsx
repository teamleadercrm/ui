import React from 'react';
import { addStoryInGroup, MARKETING } from '../../../.storybook/utils';

import MarketingDialog from './MarketingDialog';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: MarketingDialog,
  title: addStoryInGroup(MARKETING, 'MarketingDialog'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6nbw3mXc6VpIOYrbmUxn8C/Teamleader-Marketing-components?node-id=926%3A5336',
    },
  },
} as ComponentMeta<typeof MarketingDialog>;

export const Basic: ComponentStory<typeof MarketingDialog> = (props) => <MarketingDialog {...props} />;

Basic.args = {};
