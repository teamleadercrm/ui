import React from 'react';
import { render } from '@testing-library/react';
import Counter from '../Counter';

describe('Component - Counter', () => {
  it('renders', async () => {
    const { asFragment } = render(<Counter count={4} maxCount={9} size="medium" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
