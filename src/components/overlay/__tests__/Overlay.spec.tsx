import React from 'react';
import { render } from '@testing-library/react';
import Overlay from '../Overlay';

describe('Component - Overlay', () => {
  it('renders', async () => {
    const { asFragment } = render(<Overlay>The children</Overlay>);
    expect(asFragment()).toMatchSnapshot();
  });
});
