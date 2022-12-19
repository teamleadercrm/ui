import React from 'react';
import { render } from '@testing-library/react';
import RadioButton from '../RadioButton';

describe('Component - RadioButton', () => {
  it('renders', async () => {
    const { asFragment } = render(<RadioButton value="foobar" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
