import { ComponentStory } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Flex, Box, TextBody } from '../../index';

export default {
  component: Flex,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Flex'),

  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
  },
};

const PreppedBox = () => (
  <Box
    backgroundColor="mint"
    backgroundTint="lightest"
    borderColor="mint"
    borderTint="light"
    borderWidth={1}
    padding={2}
    borderRadius="rounded"
  >
    <TextBody>Box Content</TextBody>
  </Box>
);
export const basic: ComponentStory<typeof Flex> = (args) => (
  <Box borderColor="neutral" borderWidth={1} borderRadius="rounded">
    <Flex style={{ minHeight: '100px' }} {...args}>
      <PreppedBox />
      <PreppedBox />
    </Flex>
  </Box>
);

basic.args = {
  direction: 'row',
  gap: 0,
};
