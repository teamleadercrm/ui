import React from 'react';
import { render } from '@testing-library/react';
import Label from '../Label';

describe('Component - Label', () => {
  it('renders', async () => {
    const { asFragment } = render(<Label required>Foobar</Label>);
    expect(asFragment()).toMatchSnapshot();
  });
});
