import React from 'react';
import { render } from '@testing-library/react';
import Textarea from '../Textarea';

describe('Component - Textarea', () => {
  it('renders', async () => {
    const { asFragment } = render(<Textarea value="foobar" placeholder="This is a placeholder" onChange={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
