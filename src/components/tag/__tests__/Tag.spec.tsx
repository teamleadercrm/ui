import React from 'react';
import { render } from '@testing-library/react';
import Tag from '../Tag';

describe('Component - Tag', () => {
  it('renders', async () => {
    const { asFragment } = render(<Tag>This is a Tag</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });
});
