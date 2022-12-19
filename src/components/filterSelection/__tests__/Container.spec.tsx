import React from 'react';
import { render } from '@testing-library/react';
import FilterSelection from '..';

describe('Component - FilterSelection', () => {
  it('renders', async () => {
    const { asFragment } = render(<FilterSelection status="default" label="user" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
