import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Counter from './Counter';

export default {
  component: Counter,
  title: 'Low level blocks / Counter',

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=246%3A985',
    },
  },
} as ComponentMeta<typeof Counter>;

export const Basic: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;
Basic.args = { count: 99 };

export const WithMaxCount: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;
WithMaxCount.args = { count: 99, maxCount: 98 };
WithMaxCount.storyName = 'With maxCount';

export const WithExtraText: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;
WithExtraText.args = { children: 'Tasks', count: 99 };
WithExtraText.storyName = 'With extra text';
