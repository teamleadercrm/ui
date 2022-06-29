import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, MARKETING } from '../../../.storybook/utils';
import { TextBody } from '../typography';
import MarketingMarker from './MarketingMarker';

export default {
  component: MarketingMarker,
  title: addStoryInGroup(MARKETING, 'MarketingMarker'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6nbw3mXc6VpIOYrbmUxn8C/Marketing-components?node-id=84%3A0',
    },
  },
} as ComponentMeta<typeof MarketingMarker>;

export const Basic: ComponentStory<typeof MarketingMarker> = (args) => (
  <TextBody>
    We can use our <MarketingMarker {...args} /> to highlight some keywords.
  </TextBody>
);

Basic.args = {
  children: 'Marker component',
};
