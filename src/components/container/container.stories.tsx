import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Container from '.';
import Box from '../box';

export default {
  component: Container,
  title: 'Low level blocks / Container',
} as ComponentMeta<typeof Container>;

export const Basic: ComponentStory<typeof Container> = (args) => (
  <Box backgroundColor="gold" backgroundTint="lightest">
    <Container {...args} backgroundColor="violet" backgroundTint="light">
      <Box backgroundColor="aqua" backgroundTint="light" style={{ height: 400 }} />
    </Container>
  </Box>
);
