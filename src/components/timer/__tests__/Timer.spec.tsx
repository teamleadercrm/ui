import React from 'react';
import { render } from '@testing-library/react';
import Timer from '../Timer';

describe('Component - Timer', () => {
  it('renders', async () => {
    const { asFragment } = render(<Timer>13:37</Timer>);
    expect(asFragment()).toMatchSnapshot();
  });
});
