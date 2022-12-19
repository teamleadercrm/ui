import React from 'react';
import { render } from '@testing-library/react';
import Container from '../Container';

describe('Component - Container', () => {
  it('renders', async () => {
    const { asFragment } = render(<Container>Foobar</Container>);
    expect(asFragment()).toMatchSnapshot();
  });
});
