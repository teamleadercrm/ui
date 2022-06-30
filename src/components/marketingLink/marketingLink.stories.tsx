import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, MARKETING } from '../../../.storybook/utils';
import { TextBody } from '../typography';
import MarketingLink from './MarketingLink';

export default {
  component: MarketingLink,
  title: addStoryInGroup(MARKETING, 'MarketingLink'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6nbw3mXc6VpIOYrbmUxn8C/Marketing-components?node-id=84%3A0',
    },
  },
} as ComponentMeta<typeof MarketingLink>;

export const Basic: ComponentStory<typeof MarketingLink> = (args) => (
  <TextBody>
    I am <MarketingLink {...args} /> only.
  </TextBody>
);

Basic.args = {
  children: 'a link for marketing purposes',
};
