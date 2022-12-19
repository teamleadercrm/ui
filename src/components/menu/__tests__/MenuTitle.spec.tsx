import React from 'react';
import { render } from '@testing-library/react';
import { MenuTitle } from '..';

describe('Component - MenuTitle', () => {
  it('renders', async () => {
    const { asFragment } = render(<MenuTitle>Assitants</MenuTitle>);
    expect(asFragment()).toMatchSnapshot();
  });
});
