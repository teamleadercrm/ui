import { ComponentStory } from '@storybook/react';
import React from 'react';
import StatusLabel from './StatusLabel';

export default {
  component: StatusLabel,
  title: 'Low level blocks / Status Label',

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=246%3A1041',
    },
  },
};

export const Basic: ComponentStory<typeof StatusLabel> = (args) => <StatusLabel {...args}>Status label</StatusLabel>;
