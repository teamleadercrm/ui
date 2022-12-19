import React from 'react';
import { render } from '@testing-library/react';
import StatusLabel from '../StatusLabel';

describe('Component - StatusLabel', () => {
  it('renders', async () => {
    const { asFragment } = render(<StatusLabel>Done</StatusLabel>);
    expect(asFragment()).toMatchSnapshot();
  });
});
