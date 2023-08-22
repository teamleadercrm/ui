import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Grid, Box } from '../../index';
import { Heading3 } from '../typography';

export default {
  component: Grid,
  title: 'Low level blocks / Grid',
};

export const basic: ComponentStory<typeof Grid> = (args) => (
  <Box>
    <Heading3>Grid Box</Heading3>
    <Box borderColor="neutral" borderWidth={1} borderRadius="rounded" backgroundColor="neutral" backgroundTint="light">
      <Grid {...args}>
        <Grid.Item area="header">
          <Box
            backgroundColor="mint"
            backgroundTint="lightest"
            borderColor="mint"
            borderTint="light"
            borderWidth={1}
            borderRadius="rounded"
            style={{
              height: '100%',
            }}
          />
        </Grid.Item>
        <Grid.Item area="sidebar">
          <Box
            backgroundColor="teal"
            backgroundTint="lightest"
            borderColor="teal"
            borderTint="light"
            borderWidth={1}
            borderRadius="rounded"
            style={{
              height: '200px',
            }}
          />
        </Grid.Item>
        <Grid.Item area="content">
          <Box
            backgroundColor="gold"
            backgroundTint="lightest"
            borderColor="gold"
            borderTint="light"
            borderWidth={1}
            borderRadius="rounded"
            style={{
              height: '100%',
            }}
          />
        </Grid.Item>
        <Grid.Item area="footer">
          <Box
            backgroundColor="ruby"
            backgroundTint="lightest"
            borderColor="ruby"
            borderTint="light"
            borderWidth={1}
            borderRadius="rounded"
            style={{
              height: '100%',
            }}
          />
        </Grid.Item>
      </Grid>
    </Box>
  </Box>
);

basic.args = {
  areas: ['header header', 'sidebar content', 'footer footer'],
  rows: ['100px', '1fr', '50px'],
  columns: ['20%', '1fr'],
  gap: 0,
  columnGap: 0,
  rowGap: 0,
};
