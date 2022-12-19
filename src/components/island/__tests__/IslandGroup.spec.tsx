import React from 'react';
import { render } from '@testing-library/react';
import IslandGroup from '../IslandGroup';
import Island from '../Island';

describe('Component - IslandGroup', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <IslandGroup>
        <Island>Michael Scott</Island>
        <Island>Jim Halpert</Island>
        <Island>Dwight Schrute</Island>
      </IslandGroup>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
