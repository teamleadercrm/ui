import React from 'react';
import { render } from '@testing-library/react';
import Toast from '../Toast';

describe('Component - Toast', () => {
  it('renders', async () => {
    const { asFragment } = render(<Toast>This is a Toast</Toast>);
    expect(asFragment()).toMatchSnapshot();
  });
});
