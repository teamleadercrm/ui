import { ComponentStory } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Flex, Box, TextBody } from '../../index';

export default {
  component: Flex,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Flex'),
};

const COLORS = ['teal', 'mint', 'ruby'];

export const basic: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    {COLORS.map((color, index) => (
      <Box backgroundColor={color} backgroundTint="lightest" borderColor={color} borderTint="light" borderWidth={1}>
        <TextBody>Box {index}</TextBody>
      </Box>
    ))}
  </Flex>
);

basic.args = {};
