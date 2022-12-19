import React from 'react';
import { render } from '@testing-library/react';
import Grid, { GridItem } from '..';

describe('Component - Grid', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <Grid
        areas={['header header', 'sidebar content', 'footer footer']}
        rows={['100px', '1fr', '50px']}
        columns={['20%', '1fr']}
        gap={2}
      >
        <GridItem area="header">Header</GridItem>
        <GridItem area="sidebar">Sidebar</GridItem>
        <GridItem area="content">Content</GridItem>
        <GridItem area="footer">Footer</GridItem>
      </Grid>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
