import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import StatusLabel, { StatusLabelProps } from './StatusLabel';

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

export const Basic = (args: StatusLabelProps) => <StatusLabel {...args}>Status label</StatusLabel>;

export const Small = () => (
  <StatusLabel size="small" color="gold">
    Status label small
  </StatusLabel>
);
