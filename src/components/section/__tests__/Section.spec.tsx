import React from 'react';
import { render } from '@testing-library/react';
import Section from '../Section';

describe('Component - Section', () => {
  it('renders', async () => {
    const { asFragment } = render(<Section>This is a Section</Section>);
    expect(asFragment()).toMatchSnapshot();
  });
});
