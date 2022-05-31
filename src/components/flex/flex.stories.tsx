import { ComponentStory } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Flex, Box, TextBody } from '../../index';

export default {
  component: Flex,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Flex'),
};

const PreppedBox = () => (
  <Box
    backgroundColor={'mint'}
    backgroundTint="lightest"
    borderColor={'mint'}
    borderTint="light"
    borderWidth={1}
    padding={2}
  >
    <TextBody>Box Content</TextBody>
  </Box>
);
export const basic: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    <PreppedBox />
    <PreppedBox />
  </Flex>
);

basic.args = {
  direction: 'row',
  gap: 0,
};
