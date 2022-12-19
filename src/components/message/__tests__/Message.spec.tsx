import React from 'react';
import { render } from '@testing-library/react';
import Message from '../Message';

describe('Component - Message', () => {
  it('renders', async () => {
    const { asFragment } = render(<Message>This is a message</Message>);
    expect(asFragment()).toMatchSnapshot();
  });
});
