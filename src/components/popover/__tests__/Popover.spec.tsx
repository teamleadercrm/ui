import React from 'react';
import { render } from '@testing-library/react';
import Popover from '../Popover';

describe('Component - Popover', () => {
  it('renders', async () => {
    const screen = render(<Popover active>This is a Popover</Popover>);
    expect(screen.baseElement).toMatchSnapshot();
  });
});
