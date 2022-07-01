import React from 'react';
import { addStoryInGroup, MARKETING } from '../../../.storybook/utils';
import Box from '../box';
import PoweredByButton from './PoweredByButton';

export default {
  component: PoweredByButton,
  title: addStoryInGroup(MARKETING, 'PoweredByButton'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=14997%3A11428',
    },
  },
};

export const Basic = ({ ...args }) => (
  <Box backgroundColor="neutral" backgroundTint="dark" padding={3}>
    <PoweredByButton {...args} />
  </Box>
);

Basic.args = {};
