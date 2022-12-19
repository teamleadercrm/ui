import React from 'react';
import { render } from '@testing-library/react';
import Input from '../Input';

describe('Component - Input', () => {
  it('renders', async () => {
    const { asFragment } = render(<Input name="name" value="Michael Scott" placeholder="Dwight Schrute" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
