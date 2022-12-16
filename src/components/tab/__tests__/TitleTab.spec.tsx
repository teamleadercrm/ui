import React from 'react';
import { render } from '@testing-library/react';
import TitleTab from '../TitleTab';

describe('Component - TitleTab', () => {
  it('renders', async () => {
    const { asFragment } = render(<TitleTab>Overview</TitleTab>);
    expect(asFragment()).toMatchSnapshot();
  });
});
