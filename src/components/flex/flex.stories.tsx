import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Flex, Box } from '../../index';
import { Heading3 } from '../typography';

export default {
  component: Flex,
  title: 'Low level blocks / Flex',
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

export const nesting: ComponentStory<typeof Flex> = () => (
  <Box borderColor="neutral" borderWidth={1} borderRadius="rounded" backgroundColor="neutral" backgroundTint="light">
    <Flex gap={5} direction="column">
      <Box
        backgroundColor="mint"
        backgroundTint="lightest"
        borderColor="mint"
        borderTint="light"
        borderWidth={1}
        borderRadius="rounded"
        style={{
          minHeight: '50px',
          width: '100%',
        }}
      />
      <Flex gap={5} alignItems="flex-start">
        <Box
          backgroundColor="teal"
          backgroundTint="lightest"
          borderColor="teal"
          borderTint="light"
          borderWidth={1}
          borderRadius="rounded"
          style={{
            minHeight: '100px',
            width: '20%',
          }}
        />
        <Box
          backgroundColor="teal"
          backgroundTint="lightest"
          borderColor="teal"
          borderTint="light"
          borderWidth={1}
          borderRadius="rounded"
          style={{
            minHeight: '150px',
            width: '80%',
          }}
        />
      </Flex>
      <Flex gap={5} justifyContent="center" alignItems="center">
        <Box
          backgroundColor="ruby"
          backgroundTint="lightest"
          borderColor="ruby"
          borderTint="light"
          borderWidth={1}
          borderRadius="rounded"
          style={{
            minHeight: '100px',
            width: '50%',
          }}
        />
        <Box
          backgroundColor="ruby"
          backgroundTint="lightest"
          borderColor="ruby"
          borderTint="light"
          borderWidth={1}
          borderRadius="rounded"
          style={{
            minHeight: '150px',
            width: '30%',
          }}
        />
      </Flex>
    </Flex>
  </Box>
);
