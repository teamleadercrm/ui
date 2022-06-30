import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import StatusLabel from './StatusLabel';

export default {
  component: StatusLabel,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Status Label'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=246%3A1041',
    },
  },
};

export const Basic = (args) => <StatusLabel {...args}>Status label</StatusLabel>;
