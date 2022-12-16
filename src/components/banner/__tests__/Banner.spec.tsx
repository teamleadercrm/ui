import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../Banner';

describe('Component - Banner', () => {
  it('renders', async () => {
    const { asFragment } = render(<Banner>Foobar</Banner>);
    expect(asFragment()).toMatchSnapshot();
  });
});
