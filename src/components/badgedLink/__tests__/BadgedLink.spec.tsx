import React from 'react';
import { render } from '@testing-library/react';
import BadgedLink from '../BadgedLink';

describe('Component - BadgedLink', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <BadgedLink href="https://foobar.com" target="_blank">
        Foobar
      </BadgedLink>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
