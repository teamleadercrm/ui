import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import Container from '.';
import Box from '../box';

export default {
  component: Container,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Container'),
} as ComponentMeta<typeof Container>;

export const Basic: ComponentStory<typeof Container> = (args) => (
  <Box backgroundColor="gold" backgroundTint="lightest">
    <Container {...args} backgroundColor="violet" backgroundTint="light">
      <Box backgroundColor="aqua" backgroundTint="light" style={{ height: 400 }} />
    </Container>
  </Box>
);
