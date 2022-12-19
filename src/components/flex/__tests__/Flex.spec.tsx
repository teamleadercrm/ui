import React from 'react';
import { render } from '@testing-library/react';
import Flex from '..';

describe('Component - Flex', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <Flex direction="row" gap={2} alignItems="flex-end" justifyContent="center">
        <div>Foo</div>
        <div>bar</div>
      </Flex>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
