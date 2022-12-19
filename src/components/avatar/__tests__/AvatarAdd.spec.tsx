import React from 'react';
import { render } from '@testing-library/react';
import AvatarAdd from '../AvatarAdd';

describe('Component - AvatarAdd', () => {
  it('renders', async () => {
    const { asFragment } = render(<AvatarAdd size="medium" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
