import React from 'react';
import { render } from '@testing-library/react';
import Box from '../Box';

describe('Component - Box', () => {
  it('renders', async () => {
    const { asFragment } = render(<Box>Foobar</Box>);
    expect(asFragment()).toMatchSnapshot();
  });
});
