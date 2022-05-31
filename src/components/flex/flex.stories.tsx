import { ComponentStory } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Flex, Box, TextBody } from '../../index';
import { Heading3 } from '../typography';

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
    <TextBody>Content</TextBody>
  </Box>
);
export const basic: ComponentStory<typeof Flex> = (args) => (
  <Box>
    <Heading3>Flex Box</Heading3>
    <Box borderColor="neutral" borderWidth={1} borderRadius="rounded" backgroundColor="neutral" backgroundTint="light">
      <Flex style={{ minHeight: '100px' }} {...args}>
        <PreppedBox />
        <PreppedBox />
        <PreppedBox />
      </Flex>
    </Box>
  </Box>
);

basic.args = {
  direction: 'row',
  gap: 0,
};
