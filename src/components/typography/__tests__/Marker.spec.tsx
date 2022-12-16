import React from 'react';
import { render } from '@testing-library/react';
import { Marker } from '../';

describe('Component - Marker', () => {
  it('renders', async () => {
    const { asFragment } = render(<Marker>This is a Tag</Marker>);
    expect(asFragment()).toMatchSnapshot();
  });
});
