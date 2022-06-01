import { ComponentStory } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Flex, Box } from '../../index';
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

const MintBox = ({ size }: { size: number }) => (
  <Box
    backgroundColor="mint"
    backgroundTint="lightest"
    borderColor="mint"
    borderTint="light"
    borderWidth={1}
    borderRadius="rounded"
    style={{
      minHeight: `${size / 2}px`,
      width: `${size}px`,
    }}
  />
);
export const basic: ComponentStory<typeof Flex> = (args) => (
  <Box>
    <Heading3>Flex Box</Heading3>
    <Box borderColor="neutral" borderWidth={1} borderRadius="rounded" backgroundColor="neutral" backgroundTint="light">
      <Flex {...args}>
        <MintBox size={50} />
        <MintBox size={150} />
        <MintBox size={100} />
      </Flex>
    </Box>
  </Box>
);

basic.args = {
  direction: 'row',
  gap: 0,
};
