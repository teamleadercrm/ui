import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import Counter from './Counter';

export default {
  component: Counter,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Counter'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=246%3A985',
    },
  },
};

export const Basic = (args) => <Counter {...args} />;
Basic.args = { count: 99 };

export const WithMaxCount = (args) => <Counter {...args} />;
WithMaxCount.args = { count: 99, maxCount: 98 };
WithMaxCount.story = {
  name: 'With maxCount',
};

export const WithExtraText = (args) => <Counter {...args} />;
WithExtraText.args = { children: 'Tasks', count: 99 };

WithExtraText.story = {
  name: 'With extra text',
};
