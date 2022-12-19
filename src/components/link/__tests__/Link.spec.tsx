import React from 'react';
import { render } from '@testing-library/react';
import Link from '../';

describe('Component - Link', () => {
  it('renders', async () => {
    const { asFragment } = render(<Link href="https://foobar.com">Foobar</Link>);
    expect(asFragment()).toMatchSnapshot();
  });
});
